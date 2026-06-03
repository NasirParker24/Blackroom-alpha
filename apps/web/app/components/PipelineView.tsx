type PipelineStage = {
  label: string;
  value: string;
};

export function PipelineView({ stages }: { stages: PipelineStage[] }) {
  return (
    <section style={{ border: '1px solid #27272a', borderRadius: '18px', padding: '1.25rem', background: '#09090b' }}>
      <h2 style={{ marginBottom: '1rem' }}>Intelligence Pipeline</h2>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {stages.map((stage, index) => (
          <div key={stage.label}>
            <div style={{ border: '1px solid #3