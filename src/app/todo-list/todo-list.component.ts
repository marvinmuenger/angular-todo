import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(private todoService: TodoService, private router: Router) {}

  todos = this.todoService.getTodos();

  addTodo() {
    this.router.navigate(['/add-todo']);
  }
}
