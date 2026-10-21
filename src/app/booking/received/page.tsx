import Link from 'next/link';
import { ArrowUpRight, Sprout } from 'lucide-react';
import { PageShell, Eyebrow } from '@/components/Site';
export default function BookingReceived(){return <PageShell><section className="not-found"><div className="success-icon"><Sprout/></div><Eyebrow>THANK YOU</Eyebrow><h1>Your next step starts here.</h1><p>This page is ready for the production booking flow. In this local preview, form submissions are demonstrations only and are not sent to the Yoglala team.</p><Link className="button button-primary" href="/retreats">Back to retreats <ArrowUpRight size={16}/></Link></section></PageShell>}
