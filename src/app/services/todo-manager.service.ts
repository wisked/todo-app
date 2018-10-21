import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  private todoListData: Todo[] = new Array<Todo>();
  todoList: Subject<Todo[]> = new Subject<Todo[]>();
  todoList$ = this.todoList.asObservable();
  constructor() { }

  createTodo(todo: Todo) {
    this.todoListData = [
      todo,
      ...this.todoListData
    ];
    this.todoList.next(this.todoListData);
  }
  deleteTodo(index: number) {
    this.todoListData.splice(index, 1);
    this.todoList.next(this.todoListData);
  }
  renameTodo(index: number, title: string) {
    this.todoListData[index].title = title;
    this.todoList.next(this.todoListData);
  }
  changeTodoStatus(index: number, checked: boolean) {
    this.todoListData[index].checked = checked;
    this.todoList.next(this.todoListData);
  }
  toogleListControls(value) {
    switch (value) {
      case 'all':
        this.todoList.next(this.todoListData);
        break;
      case 'completed':
        this.todoList.next(this.todoListData.filter(todo => todo.checked));
        break;
      case 'active':
        this.todoList.next(this.todoListData.filter(todo => !todo.checked));
        break;
      default:
        break;
    }
  }
}
