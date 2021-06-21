import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/models/licence';
import { LicenceStatus, LicenceType } from 'src/models/licence-enums';

@Component({
  selector: 'licence-display',
  templateUrl: './licence-display.component.html',
  styleUrls: ['./licence-display.component.css']
})
export class LicenceDisplayComponent implements OnInit {

  public selectedLicence!: Licence;
  public licenceSelected?: boolean;

  constructor() {
    this.licenceSelected = false;
   }

  ngOnInit(): void {
  }

}
