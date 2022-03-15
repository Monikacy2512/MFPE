import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent {
  constructor() { }
    Property: any = {
      "Id" :1,
      "Name": "Smartphone",
      "Price": 15999
    }
}
