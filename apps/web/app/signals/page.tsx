import Link from 'next/link';

export default function SignalsPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Signal Feed</p>
      <h1>Foundational Cultural Signals</h1>
      <p className="lede">Signals are raw cultural observations that enter the BLACKROOM pipeline.</p>
      <div className="card-grid">
        <Link href="/signals/BR-2026-003" className="card">
          <p