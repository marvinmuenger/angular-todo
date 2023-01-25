import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
[x: string]: any;
  todo : Todo = {
    id: this.todoService.getTodos().length + 1,
    title: '',
    completed: false,
  } as Todo;

  constructor(private todoService: TodoService, private router: Router) { }

  saveTodo() {
    this.todoService.addTodo(this.todo);
    this.router.navigate(['/todo-list']);
  }
}
