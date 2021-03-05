import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDoList: Array<User> = [{description:"Go To Work", isComplete: false}, 
  {description:"Watch TV", isComplete: false},
  {description:"Feed the dog", isComplete: false}, 
  {description:"Go To Sleep", isComplete: false}];

  newItem: User = {
    description: "",
    isComplete: false
  };

  addItem() { 
    this.toDoList.push(this.newItem);
  }

  removeItem() {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].isComplete == true) {
        this.toDoList.splice(i, 1);
      }
    }
  }
}
