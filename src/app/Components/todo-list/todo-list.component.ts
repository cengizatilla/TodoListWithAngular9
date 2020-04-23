import {Component, OnInit} from '@angular/core';
import {todoListDB} from "../../Database/todos";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class TodoListComponent implements OnInit {

  todoListDb = todoListDB;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkTodo(todo) {
    let answer = confirm("Did you complete this job ?");
    if (answer) {
      let todoIndex = this.todoListDb.findIndex(item => item.todoItem == todo.todoItem);
      this.todoListDb[todoIndex].todoStatus = true;
    }

  }

}
