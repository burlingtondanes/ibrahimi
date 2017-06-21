import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../shared/todo.model';

@Component({
  selector: 'app-ouput',
  templateUrl: './ouput.component.html',
  styleUrls: ['./ouput.component.css']
})
export class OuputComponent implements OnInit {
	todos: ToDo[] = [
	    new ToDo('Click On The Input Element.'),
		new ToDo('Type in a ToDo.'),
		
	];

  constructor() { }

  ngOnInit() {
  }
  
  onToDoAdded(todo: ToDo) {
	  this.todos.push(todo);
  }

}
