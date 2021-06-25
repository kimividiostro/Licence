import { Component, Input } from '@angular/core';
import { Business } from 'src/models/business';  
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  @Input() business!:Business;
  
  constructor(private service: BusinessesService) { 
  }

  onBusinessSelected = () => this.service.selectBussines(this.business.id);
}
