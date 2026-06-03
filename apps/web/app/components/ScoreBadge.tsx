type ScoreBadgeProps = {
  score: number;
  band: string;
};

export function ScoreBadge({ score, band }: ScoreBadgeProps) {
  return (
    <div style={{border:'1px solid #2dd4bf', borderRadius:'999px', padding:'0.4rem 0.8rem', display:'inline-flex', gap:'0.5rem', alignItems:'center'}}>
      <strong>{score}</strong>
      <span>{band}</span>
    </div>
  );
}
