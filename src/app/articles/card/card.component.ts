import { Component, Input, input } from '@angular/core';
import { Articles } from '../../libs/request.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() article! : Articles;
  @Input() hasImage = false;
  @Input() truncNumber = 100 
}
