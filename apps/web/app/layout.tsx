import './globals.css';
import Link from 'next/link';

const navItems = [
  ['/', 'Pulse'],
  ['/signals', 'Signals'],
  ['/contradictions', 'Contradictions'],
  ['/narratives', 'Narratives'],
  ['/ideologies', 'Ideologies'],
  ['/opportunities', 'Opportunities'],
  ['/briefings', 'Briefings'],
  ['/clients', 'Clients'],
];

export const metadata = {
  title: 'BLACKROOM Alpha',
  description: 'Cultural intelligence platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell