import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit ,OnDestroy {

  constructor(private todoservice:TodoService) { }

public todoes:Array<ITodo> = [];

private subscription:Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.todoservice.getTosoes().subscribe((data) => {
        this.todoes = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
