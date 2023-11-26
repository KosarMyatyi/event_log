export interface EventLogProps {
  id?: string;
  date?: string;
  importance?: string;
  equipment?: string;
  message?: string;
  responsible?: string;
  sex?: string;
  isRead?: boolean;
}

export interface PageChangeParams {
  first: number;
  rows: number;
}

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}