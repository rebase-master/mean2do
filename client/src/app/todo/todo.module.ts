import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {TodoComponent} from "./todo.component";
import {TodoService} from "./todo.service";
import {TodoEntryComponent} from "./entry/todo.entry.component";
import {TodoListComponent} from "./list/todo.list.component";
import {TodoInputComponent} from "./input/todo.input.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    TodoComponent,
    TodoEntryComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  providers: [
      TodoService
  ],
  exports: [
    TodoComponent,
    TodoEntryComponent,
    TodoListComponent,
    TodoInputComponent
  ]
})

export class TodoModule {

}