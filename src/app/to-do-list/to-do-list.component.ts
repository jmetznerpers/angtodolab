import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  allTasks: ToDo[] = [
    {task: 'Laundry', completed: false},
    {task: 'Dishes', completed: false},
    {task: 'Grocery Shopping', completed: false},
    {task: 'Walk Dog', completed: false},
    {task: 'Bathe Dog', completed: false},
    {task: 'Give Dog Scritches!', completed: false}
  ]

  newTask: string = '';
  newCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.allTasks.push({task: this.newTask, completed: this.newCompleted})
    this.newTask = '';
    this.newCompleted = false;
  }
  completeTask(item :ToDo){
    item.completed = true;
  }

}
