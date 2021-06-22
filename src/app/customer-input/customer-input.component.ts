import { Component, OnInit } from '@angular/core';
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {

  visible: boolean;
  constructor(private service: BusinessesService) { 
    this.visible = false;
  }

  ngOnInit(): void {
    this.service.businessSelected.subscribe(() =>  this.visible = true)
  }

}
