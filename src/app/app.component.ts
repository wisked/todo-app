import { Component, OnInit } from '@angular/core';
import { TodoManagerService } from './services/todo-manager.service';
import { Todo } from './models/Todo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todoList: Todo[];

  constructor(
    private todoManagerService: TodoManagerService
  ) {}
  ngOnInit() {
    this.todoManagerService.todoList$.subscribe(state => {
      this.todoList = state;
    });
  }
}
