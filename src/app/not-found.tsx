import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageShell, Eyebrow } from '@/components/Site';
export default function NotFound(){return <PageShell><section className="not-found"><Eyebrow>A LITTLE DETOUR</Eyebrow><h1>Nothing here—yet.</h1><p>This page may have moved, or perhaps it hasn't been made yet. Let's find another way.</p><Link className="button button-primary" href="/">Back to Yoglala <ArrowUpRight size={16}/></Link></section></PageShell>}
