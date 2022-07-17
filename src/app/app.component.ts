import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

declare const saveDocument: any;
declare const loadDocument: any;
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };
  allComplete: boolean = false;


  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }  
  constructor(private renderer2: Renderer2){

  }
  @ViewChild('astxt') txtComponent :any;
  @ViewChild('btt') btta :ElementRef;
  title = 'tesis';
  onClickSave() {
    saveDocument();
}

  onClickLoad() {
    loadDocument();
  }
  changeD(){
    let algo = this.txtComponent.containerDiv.nativeElement
    console.log(this.txtComponent)
    console.log(algo)
/*     this.renderer2.data(algo) */
  }
}
