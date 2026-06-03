export type Signal = {
  signal_id: string;
  title: string;
  category: string;
  score: number;
  band: string;
  contradiction?: string;
  narrative?: string;
  ideology?: string;
  opportunity?: string;
};

export type DashboardMetric = {
  label: string;
  value: string | number;
  helper?: string;
};

export type PipelineStep = {
  label: string;
  value: string;
};
