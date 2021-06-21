import { Component, OnInit } from '@angular/core';
import { Business } from 'src/models/business';
import { BusinessesService } from 'src/app/businesses/businesses.service';

@Component({
  selector: 'businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
})
export class BusinessesComponent implements OnInit {
  // TODO: pretvoriti u property
  public businesses: Business[];

  public selectedBusinessId?: number;

  // dependency injection
  constructor(service: BusinessesService) {
    this.businesses = service.getBusinesses();
  }

  businessSelectedHandler(businessId: number){
    this.selectedBusinessId = businessId;
  }

  ngOnInit(): void {}
}
