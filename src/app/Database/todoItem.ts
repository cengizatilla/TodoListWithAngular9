export class TodoItem {
  todoText: string;
  todoStatus: boolean

  constructor(todoText: string) {
    this.todoText = todoText;
    this.todoStatus = false;
  }
}
