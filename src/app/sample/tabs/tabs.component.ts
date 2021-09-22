import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  link_list = ['button', 'slider'];
  active_link = this.link_list[0];


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navClick( link : string ) : void {
    this.active_link = link;
    this.router.navigateByUrl(this.active_link);

  }


}
