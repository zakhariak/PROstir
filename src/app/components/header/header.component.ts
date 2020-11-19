import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  width: number;
  height: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // this.height = (event.url === '/home');
        if (event.url === '/home') {
          document.getElementById('header').style.height = '100vh';
          this.height = true;
        } else {
          document.getElementById('header').style.height = 'auto';
          this.height = false;
        }
      }
    })
  }

  ngOnInit(): void {
    this.width = window.innerWidth
  }

}
