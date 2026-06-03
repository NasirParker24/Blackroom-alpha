import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'BLACKROOM Alpha',
  description: 'Cultural intelligence platform',
};

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="topbar">
            <Link href="/" className="brand">BLACKROOM</Link>
            <nav className="nav-links">
              {navItems.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
