import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from '../libs/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  routes: Nav[] | undefined; 

  constructor(private navService: NavService){}

  ngOnInit(): void {
      this.routes = this.navService.routes;
  }

  toggle(){
    this.navService.toogleSidenav();
  }
}
