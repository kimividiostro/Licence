import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {
  visible: boolean = false;
  displayWarning: boolean = false;
  inputValue!: number;

  constructor(private service: BusinessesService) { 
  }
  
  ngOnInit(): void {
    this.service.businessSelected.subscribe(() =>  this.visible = true)
  }

  onCustomerInput(){
    if(typeof this.inputValue !== "number"){
      this.displayWarning = true;
      setTimeout(() => this.displayWarning = false, 1000)
    }
    else{
      this.service.addCustomersToLicence(this.inputValue);
    }
  }
}
