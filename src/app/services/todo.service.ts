import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

private  tasks:Array<ITodo> = [{
    title:"משימה ראשונה",
    description:"המשימה הראשונה שלי",
    isComplited:true,
    isArchived:false,
    andDate:"17/05/2022"
  },
  {
    title:"משימה שניה",
    description:"המשימה השניה שלי",
    isComplited:false,
    isArchived:false,
    andDate:"17/08/2022"
  }
  ];

  constructor() { }

  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.tasks)

  getTosoes():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

}

