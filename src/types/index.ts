export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: string;
  source: string;
  images: string[];
  upvotes: number;
  downvotes: number;
  userVote?: 'up' | 'down' | null;
}

export type SortOrder = 'newest' | 'oldest';
export type SeverityFilter = 'All' | 'Low' | 'Medium' | 'High';