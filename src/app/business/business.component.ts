import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Business } from 'src/models/business';  

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
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
