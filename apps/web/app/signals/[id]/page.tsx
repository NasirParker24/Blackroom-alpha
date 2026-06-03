import PipelineView from '../../components/PipelineView';
import ScoreBadge from '../../components/ScoreBadge';

type SignalDetailProps = {
  params: {
    id: string;
  };
};

const signal = {
  signal_id: 'BR-2026-003',
  title: 'AI Job Displacement',
  category: 'Technology',
  score: 52,
  band: 'Major Cultural Force',
  contradiction: 'Technology vs Humanity',
  narrative: 'Reinvention',
  ideology: 'Creator Independence',
  opportunity: 'Independent Operator Tools',
};

export default function SignalDetailPage({ params }: SignalDetailProps) {
  return (
    <main