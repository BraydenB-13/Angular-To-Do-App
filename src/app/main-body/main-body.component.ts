import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checked: Boolean = false;
  toDoList: Array<String> = ["Go To Work", "Watch TV", "Feed The Dog", "Go To Sleep"]
}
