import { 
Component, 
OnInit, 
ViewChild, 
ElementRef, 
EventEmitter,
Output 
} from '@angular/core';

import { ToDo } from '../../../shared/todo.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {	
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@Output() toDoAdded = new EventEmitter<ToDo>();
	
	constructor() { }

	ngOnInit() {
	}
	
	onAddToDo() {
		const newTodo = new ToDo(this.nameInputRef.nativeElement.value);
		this.toDoAdded.emit(newTodo);
	}
	
	
}
