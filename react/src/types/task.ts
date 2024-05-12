export default interface Task {
  id: number;
  user_id: number;
  name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
