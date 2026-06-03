import Link from 'next/link';

const signals = [
  { id: 'BR-2026-003', title: 'AI Job Displacement', score: 52, band: 'Major Cultural Force' },
  { id: 'BR-2026-022', title: 'Black Luxury', score: 49, band: 'Major Cultural Force' },
  { id: 'BR-2026-018', title: 'Dating App Fatigue', score: 44, band: 'Strategic Trend' },
];

export default function SignalsPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Signal Feed</p>
      <h1>Foundational Cultural Signals</h1>
      <p className="lede">Signals are raw cultural observations that enter the BLACKROOM pipeline.</p>
      <div className="card-grid">
        {signals.map((signal) => (
          <Link key={signal.id} href={`/signals/${signal.id}`} className="card">
            <p