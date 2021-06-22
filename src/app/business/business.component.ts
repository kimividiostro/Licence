import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Business } from 'src/models/business';  
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() business!:Business;
  @Output() businessSelected: EventEmitter<number>  = new EventEmitter();

  onBusinessSelected(): void {
    this.businessSelected.emit(this.business.id);
    this.service.businessSelected.emit(this.business.id);
  }

  constructor(private service: BusinessesService) { 
  }

  ngOnInit(): void {
  }

}
