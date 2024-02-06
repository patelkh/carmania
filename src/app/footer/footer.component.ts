import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from '../libs/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  routes : Nav[] | undefined; 

  constructor(
    private navService:NavService
  ){}

  ngOnInit(): void {
      this.routes = this.navService.routes
  }

}
