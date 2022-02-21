export interface TodoItem {
  _id: string;
  userId: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}
