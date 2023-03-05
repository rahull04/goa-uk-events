export interface Event {
  id: number;
  name: string;
  type: string;
}

export interface EventState {
  events: Event[];
  error: string | null;
  pending: boolean;
}
