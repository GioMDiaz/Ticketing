export interface Event {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  place?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface EventInfo {
  event: Event;
  sessions: Session[];
  error404?: boolean;
}

export interface Session {
  date: string;
  availability: number;
}