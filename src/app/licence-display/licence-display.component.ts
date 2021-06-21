import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/models/licence';
import { LicenceStatus, LicenceType } from 'src/models/licence-enums';

@Component({
  selector: 'licence-display',
  templateUrl: './licence-display.component.html',
  styleUrls: ['./licence-display.component.css']
})
export class LicenceDisplayComponent implements OnInit {

  public selectedLicence: Licence;

  constructor() {
    this.selectedLicence = {
       id: 0,
       activationDate: new Date(),
       businessID: 0,
       expirationDate: new Date(),
       numberOfCustomersSpent: 0,
       status: LicenceStatus.Inactive,
       totalAmount: 0,
       type: LicenceType.NumberBased,
       numberOfCustomersAllowed:1
    }
   }

  ngOnInit(): void {
  }

}
