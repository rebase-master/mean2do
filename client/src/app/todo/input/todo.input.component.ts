import { Component, Input, OnChanges, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoService }  from '../todo.service';
import { EmitterService } from '../../emitter.service';
import { TodoModel } from '../todo.model';

@Component({
    selector: 'todo-input',
    templateUrl: 'todo.input.component.html',
    styleUrls: ['todo.input.component.scss']
})

export class TodoInputComponent implements OnChanges {
    constructor(
        private todoService: TodoService
    ) {

    }
    private model = new TodoModel(Date.now().toString(), '', false);
    private editing = false;

    @Input()
    editId: string;

    @Input()
    listId: string;

    submitTodo() {

        if(!this.editing) {
            this.todoService.addTodo(this.model);
        } else {
            this.todoService.updateTodo(this.model);
        }

        this.model = new TodoModel(Date.now().toString(), '', false);
        if(this.editing) this.editing = !this.editing;

    }

    ngOnChanges() {
        EmitterService.get(this.editId).subscribe((todo: TodoModel) => {
            this.model = todo,
                this.editing = true
        })
    }
}