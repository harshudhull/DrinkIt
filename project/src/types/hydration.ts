export interface HydrationLog {
  id: number;
  amount: number;
  timestamp: string;
}

export interface HydrationGoal {
  daily: number;
  current: number;
}