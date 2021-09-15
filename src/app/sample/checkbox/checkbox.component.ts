import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  model : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  all :boolean = false;

  tasks = [
    { 'name' : '掃除', 'checked' : false },
    { 'name' : '選択', 'checked' : false },
    { 'name' : '炊事', 'checked' : false }
  ];

  onChange( str : string ) : void {
    console.log( str );
  }

  setAll(checked : boolean) : void {
    this.all = checked;
    for( let task of this.tasks ) {
      task.checked = checked;
    }
  }

  someComplete() : boolean {
    return this.tasks.filter( task => task.checked ).length > 0 && !this.all;
  }

  onIndeterminateChange( ) : void {
    console.log('indeterminate change' );
  }

  updateAll() : void {
    this.all = this.tasks.every( task => task.checked );
  }

}
