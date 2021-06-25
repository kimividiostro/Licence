import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/models/licence';
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'licence-display',
  templateUrl: './licence-display.component.html',
  styleUrls: ['./licence-display.component.css']
})
export class LicenceDisplayComponent implements OnInit {

  selectedLicence!: Licence;
  licenceSelected: boolean;
  selectedBusinessName!: string;
  
  constructor(private service: BusinessesService) {
    this.licenceSelected = false;
   }

  ngOnInit(): void {
    this.service.businessSelected.subscribe(() => {
      this.selectedLicence = this.service.selectedBusiness.licence;
      this.licenceSelected = true;
      this.selectedBusinessName = this.service.selectedBusiness.name});
  }

}
