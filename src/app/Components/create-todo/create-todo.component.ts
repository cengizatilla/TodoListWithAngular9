import {Component, OnInit} from '@angular/core';
import {todoListDB} from "../../Database/todos";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['../../app.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewRecord(todoText: string,event:Event) {
    todoListDB.push(todoText);
    console.log(todoListDB);
    (<HTMLInputElement>event.target).value = '';
  }

}
