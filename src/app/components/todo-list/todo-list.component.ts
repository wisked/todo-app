import { Component, OnInit, Input } from '@angular/core';
import { TodoManagerService } from '../../services/todo-manager.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoTitle = '';
  @Input() todoList: Todo[];
  listControls = [
    {
      title: 'all',
      value: true
    },
    {
      title: 'completed',
      value: false
    },
    {
      title: 'active',
      value: false
    },
  ];
  constructor(
    private todoManagerService: TodoManagerService
  ) { }

  ngOnInit() {

  }
  onKeyDown(e) {
    if (!this.todoTitle.length) return;
    this.todoManagerService.createTodo(new Todo(this.todoTitle));
    this.todoTitle = '';
  }
  toogleListControls(e, index: number) {
    this.listControls.forEach(item => {
      item.value = false;
    });
    this.listControls[index].value = !this.listControls[index].value;
    this.todoManagerService.toogleListControls(e.target.value);
  }
  addTask(e) {
    this.onKeyDown(e);
  }
  deleteTodo(index: number) {
    this.todoManagerService.deleteTodo(index);
  }
  completeTask(index: number) {
    this.todoManagerService.changeTodoStatus(index, !this.todoList[index].checked);
  }
  changeTitle(e, index: number) {
    this.todoManagerService.renameTodo(index, e.target.value);
  }
}
