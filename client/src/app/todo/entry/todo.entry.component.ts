import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { EmitterService } from './../../emitter.service';

import { TodoModel} from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-entry',
  templateUrl: 'todo.entry.component.html',
  styleUrls: ['todo.entry.component.scss']
})
export class TodoEntryComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  @Input()
  todo: TodoModel;

  @Input()
  listId: string;

  @Input()
  editId: string;

  ngOnInit() {
    // debugger;
    console.log(this.todo);
  }

  /*
   passing the this.editId to get method of EmitterService will return an
   event, (if exists, existing one else it will create a new) and it will
   notify other components, saying this.todoModel is being edited.
   */
  editTodo() {
    EmitterService.get(this.editId).emit(this.todo);
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

}
