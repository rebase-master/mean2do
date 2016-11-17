import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';
import { EmitterService } from '../../emitter.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo.list.component.html',
    styleUrls: ['todo.list.component.scss']
})

export class TodoListComponent {

  constructor(
    private todoservice: TodoService
  ) {}

    todos: TodoModel[];

    @Input()
    listId: string;

    @Input()
    editId: string;

    ngOnInit() {
        this.loadTodos();
    }

    loadTodos() {
        this.todoservice.getTodos()
        .subscribe(
          todos => this.todos = todos, //bind to view
          error => {
            //this.err = error
            console.log(error);
          }
        );
    }

    ngOnChanges(changes:any) {
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload
      EmitterService.get(this.listId).subscribe((todos:TodoModel[]) => {this.todos = todos});
    }
}
