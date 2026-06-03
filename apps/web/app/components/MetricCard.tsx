type MetricCardProps = {
  label: string;
  value: string | number;
  detail?: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <section style={{ border: '1px solid #2a2a2a', borderRadius: '16px', padding: '1.25rem', background: '#111' }}>
      <p style={{ color: '#9ca3af', fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.12em' }}>{label}</p>
      <h2 style={{ fontSize: '2rem