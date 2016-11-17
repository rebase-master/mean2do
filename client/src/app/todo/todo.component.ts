import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html'
})

export class TodoComponent {
  private listId = 'TODO_COMPONENT_LIST';
  private editId = 'TODO_COMPONENT_EDIT';

}
