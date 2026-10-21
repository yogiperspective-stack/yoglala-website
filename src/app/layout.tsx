import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yoglala.example'),
  title: { default: 'Yoglala — Connection without restriction', template: '%s · Yoglala' },
  description: 'Yoglala is a welcoming retreat and community experience rooted in connection, freedom, nature, creativity, and belonging. Come as you are.',
  openGraph: { title: 'Yoglala — Connection without restriction', description: 'Come as you are. Find your people.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
