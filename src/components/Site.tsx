'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Youtube, Facebook, Sprout } from 'lucide-react';

const nav = [
  ['Our story','/about'], ['Our philosophy','/philosophy'], ['Retreats','/retreats'], ['Experiences','/experiences'], ['Explore','/explore'], ['Gallery','/gallery'], ['Contact','/contact']
];

export function Logo({ light = false }: { light?: boolean }) {
  return <Link className={`logo ${light ? 'logo-light' : ''}`} href="/" aria-label="Yoglala home"><img src={light ? "/yoglala-logo-light.svg" : "/yoglala-logo.svg"} alt="Yoglala — A place to belong" /></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap"><Logo/><nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/retreats">Find your retreat <ArrowUpRight size={15}/></Link></nav><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><Logo light/><p>A place to pause, connect, explore, and experience life together.</p><p className="footer-note">Come as you are. Find your people.</p></div><div className="footer-col"><h3>Explore</h3><Link href="/about">Our story</Link><Link href="/philosophy">Our philosophy</Link><Link href="/team">Our people</Link><Link href="/gallery">Gallery</Link></div><div className="footer-col"><h3>Take a pause</h3><Link href="/retreats">Retreats</Link><Link href="/experiences">Experiences</Link><Link href="/explore">Free resources</Link><Link href="/faq">FAQs</Link><Link href="/contact">Get in touch</Link></div><div className="footer-col"><h3>The small print</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/wellness-disclaimer">Wellness disclaimer</Link><div className="socials"><a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={18}/></a><a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={18}/></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Yoglala. Made with care.</span><span>Rooted in Nepal · Open to everyone</span></div></footer>;
}

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/></>; }

export function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span>; }
export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) { return <div className={`section-heading ${center ? 'center' : ''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

export function RetreatCard({ retreat, index = 0 }: { retreat: { slug:string; title:string; category:string; dates:string; location:string; duration:string; price:string; image:string; excerpt:string }; index?: number }) {
  return <article className={`retreat-card ${index % 2 ? 'card-offset' : ''}`}><Link href={`/retreats/${retreat.slug}`} className="retreat-image-wrap"><img src={retreat.image} alt="" className="retreat-image"/><span className="image-arrow"><ArrowUpRight size={19}/></span></Link><div className="retreat-card-body"><span className="eyebrow">{retreat.category}</span><h3><Link href={`/retreats/${retreat.slug}`}>{retreat.title}</Link></h3><p>{retreat.excerpt}</p><div className="card-meta"><span>{retreat.duration}</span><span>{retreat.location}</span></div><Link className="text-link" href={`/retreats/${retreat.slug}`}>Get to know this retreat <ArrowUpRight size={16}/></Link></div></article>;
}

export function ContactForm({ type = 'contact', retreatTitle = '' }: { type?: 'contact'|'booking'; retreatTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name:'', email:'', phone:'', participants:'1', message:'', consent:false });
  function update(field: string, value: string | boolean) { setForm(current => ({ ...current, [field]: value })); }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError('');
    if (!form.consent) { setError('Please confirm that you have read the privacy note before sending.'); return; }
    if (type === 'booking' && (!form.name.trim() || !form.email.trim())) { setError('Please add your name and email so we can reply.'); return; }
    const item = { ...form, type, retreatTitle, submittedAt: new Date().toISOString(), demo: true };
    try {
      const key = 'yoglala-demo-enquiries';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      localStorage.setItem(key, JSON.stringify([...existing, item]));
    } catch { /* The success experience still works if browser storage is unavailable. */ }
    setSubmitted(true);
  }
  if (submitted) return <div className="form-success"><span className="success-icon"><Sprout size={24}/></span><h3>Thanks for reaching out.</h3><p>Your form has been completed in this local website preview. It has <strong>not</strong> been sent to the Yoglala team yet. When we connect the production backend, this step will create a real enquiry and send a receipt.</p><button className="button button-outline" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', participants:'1', message:'', consent:false }); }}>Send another</button></div>;
  return <form className="contact-form" onSubmit={submit}>
    {type === 'booking' && <div className="form-context"><span className="eyebrow">YOUR NEXT STEP</span><strong>{retreatTitle}</strong><p>This is a request, not a confirmed booking. Our team would review availability and contact you to discuss next steps and payment separately.</p></div>}
    <div className="form-grid"><label>Your name *<input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder="What should we call you?" autoComplete="name"/></label><label>Email address *<input required type="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="you@example.com" autoComplete="email"/></label><label>Phone (optional)<input type="tel" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="Include country code" autoComplete="tel"/></label>{type === 'booking' && <label>Number of guests<select value={form.participants} onChange={e=>update('participants',e.target.value)}>{[1,2,3,4,5,6].map(n=><option key={n} value={n}>{n} {n===1?'guest':'guests'}</option>)}</select></label>}</div>
    <label>{type === 'booking' ? 'Anything you would like us to know? (optional)' : 'What’s on your mind?'}<textarea rows={5} value={form.message} onChange={e=>update('message',e.target.value)} placeholder={type === 'booking' ? 'Questions, practical needs, or what you are curious about…' : 'Tell us a little about what brings you here…'}/></label>
    <label className="consent"><input type="checkbox" checked={form.consent} onChange={e=>update('consent',e.target.checked)}/><span>I have read the <Link href="/privacy">privacy note</Link> and agree that Yoglala may use these details to respond to my enquiry. *</span></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-primary" type="submit">{type === 'booking' ? 'Send booking request' : 'Send your message'} <ArrowUpRight size={17}/></button>
    <p className="form-footnote">* Required fields. This preview does not transmit personal data to a server.</p>
  </form>;
}
