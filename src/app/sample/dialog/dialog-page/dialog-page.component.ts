import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent implements OnInit {

  constructor(
    public ref : MatDialogRef<DialogPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data : string
  ) { }

  ngOnInit(): void {
  }

  onNoClick() : void {
    this.ref.close("456");
  }

}
