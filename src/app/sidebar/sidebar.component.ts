import { Component, OnInit } from '@angular/core';
// Router helps us figure out to know which page we are on
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) { 
    router.events.subscribe(
      (_: NavigationEnd) => this.currentUrl = _.url
    );
  }

  ngOnInit() {
  }

}
