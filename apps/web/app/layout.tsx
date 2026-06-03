import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <