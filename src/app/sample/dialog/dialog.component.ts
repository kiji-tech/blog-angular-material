import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPageComponent } from './dialog-page/dialog-page.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialog : MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() : void {
    const ref = this.dialog.open(DialogPageComponent, { data : 'test'});

    ref.afterOpened().subscribe( () => {
      console.log(`modal opened`);
    });
    
    ref.afterClosed().subscribe( result => {
      console.log(`modal closed result => ${result}`);
    });
  }

}
