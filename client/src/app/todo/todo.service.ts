import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { TodoModel } from './todo.model';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    private todoUrl = 'http://localhost:3000/api/todos';

    constructor(private http: Http) {}

    //TODOS: TodoModel[] = [];
    //todos: Observable<TodoModel[]>;

    addTodo(todo: TodoModel) {
        //console.log(this.TODOS);
        //this.TODOS.push(todo);
    };

    getTodos() : Observable<TodoModel[]> {
        //return this.TODOS;
      return this.http.get(this.todoUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };

    deleteTodo(id: string) {
        //for( var i = 0; i < this.TODOS.length; i++) {
        //    if(this.TODOS[i].id === id) {
        //        this.TODOS.splice(i, 1);
        //        break;
        //    }
        //}
    };

    updateTodo(todo: TodoModel) {}

    private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
