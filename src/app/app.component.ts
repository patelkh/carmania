import { Component, OnInit } from '@angular/core';
import { Nav, NavService } from './libs/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  opened = true; 

  constructor(
    private navService: NavService
  ){}

  ngOnInit(): void {
    this.navService.sidenavStatus.subscribe(data => {
      this.opened = data;
    })    
  }

}
