import { Component, Input, OnInit } from '@angular/core';
import { Business } from 'src/models/business';

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() businessName:string;
  
  constructor() { 
    this.businessName = "";
  }

  ngOnInit(): void {
  }

}
