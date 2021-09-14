import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void  {
  }

  click(str : string) : void {
    console.log(`click - ${str}`);
  }

  focus(str : string) : void {
    console.log(`focus - ${str}`);
  }

}
