export interface TodoItem {
  _id: string;
  userId?: string | undefined;
  title: string;
  completed: boolean;
  createdAt?: Date | undefined;
}
