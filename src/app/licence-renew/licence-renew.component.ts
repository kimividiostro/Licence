import { Component, OnInit } from '@angular/core';
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'licence-renew',
  templateUrl: './licence-renew.component.html',
  styleUrls: ['./licence-renew.component.css']
})
export class LicenceRenewComponent implements OnInit {

  constructor(private service:BusinessesService) { }

  
  
  ngOnInit(): void {
  }
  
  renewLicence(){
    this.service.renewSelectedLicence();
  }
}
