import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageShell, Eyebrow, ContactForm } from '@/components/Site';
import { retreats } from '@/lib';

export function generateStaticParams() {
  return [
    { slug: 'a-gentler-weekend' },
    { slug: 'come-as-you-are' },
    { slug: 'space-to-explore' },
  ];
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const r=retreats.find(x=>x.slug===slug);return {title:r?`Enquire · ${r.title}`:'Booking enquiry'};}
export default async function BookRetreat({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const r=retreats.find(x=>x.slug===slug);if(!r)notFound();return <PageShell><section className="page-hero"><div className="page-hero-grid"><div><Eyebrow>BOOKING ENQUIRY</Eyebrow><h1>Let's start a conversation.</h1><p>Share a few details and the Yoglala team can follow up with the latest dates, availability, pricing, and practical information.</p><Link className="text-link" href={`/retreats/${r.slug}`}><ArrowLeft size={15}/> Back to {r.title}</Link></div><div className="page-hero-image"><img src={r.image} alt=""/></div></div></section><section className="section"><div className="section-inner booking-layout"><aside className="booking-aside"><Eyebrow>YOUR EXPERIENCE</Eyebrow><h2>{r.title}</h2><p>{r.excerpt}</p><img src={r.image} alt=""/><p><strong>Dates:</strong> {r.dates}</p><p><strong>Location:</strong> {r.location}</p><p><strong>Duration:</strong> {r.duration}</p><p>We'll answer questions, confirm the details, and explain next steps before anything is final.</p></aside><div><ContactForm type="booking" retreatTitle={r.title}/></div></div></section></PageShell>}
