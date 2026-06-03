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

const pipeline = [
  { label: 'Signal', value: signal.title