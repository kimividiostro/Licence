import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/models/licence';
import { BusinessesService } from '../businesses/businesses.service';

@Component({
  selector: 'licence-display',
  templateUrl: './licence-display.component.html',
  styleUrls: ['./licence-display.component.css']
})
export class LicenceDisplayComponent implements OnInit {

  public selectedLicence!: Licence;
  public licenceSelected: boolean;
  
  constructor(private service: BusinessesService) {
    this.licenceSelected = false;
   }

  ngOnInit(): void {
    this.service.businessSelected.subscribe((id: number) => {
      this.selectedLicence = (this.service.businesses.find(business => business.id === id)!.licence);
      this.licenceSelected = true});
  }

}