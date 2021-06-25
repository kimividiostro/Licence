import { Component, OnInit } from '@angular/core';
import { Business } from 'src/models/business';
import { BusinessesService } from 'src/app/businesses/businesses.service';

@Component({
  selector: 'businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
})
export class BusinessesComponent {
  businesses: Business[];

  constructor(private service: BusinessesService) {
    this.businesses = service.businesses;
  }
}
