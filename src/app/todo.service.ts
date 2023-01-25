import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn Vue',
      completed: true,
    },
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
