export interface Project {
  id: string;
  systemId: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    color: 'primary' | 'secondary';
  }[];
  icon: string;
}

export interface Skill {
  name: string;
  value: number;
  label: string;
  color: 'primary' | 'secondary';
}
