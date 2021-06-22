import {EventEmitter} from '@angular/core'
import * as moment from 'moment';
import { Business } from 'src/models/business';
import { Licence } from 'src/models/licence';
import { LicenceType, LicenceStatus } from 'src/models/licence-enums';

export class BusinessesService {
  businesses!: Business[];
  selectedBusinessId?: number;

  businessSelected!: EventEmitter<number>;

  constructor(){
    this.businessSelected = new EventEmitter();
    this.getBusinesses();
  }

  public addCustomersToLicence(customersToAdd: number){
    let licence = (this.businesses.find((business) => business.id === this.selectedBusinessId))!.licence;
    licence!.type === LicenceType.NumberBased ? this.addCustomersToNumberBasedLicence(customersToAdd, licence) : this.addCustomersToTimeBasedLicence(customersToAdd,licence);
  }
  private addCustomersToTimeBasedLicence(customersToAdd: number, licence: Licence) {
      let pricePerNewCustomer = (licence.status === LicenceStatus.Expired) ? 2 : 1;

      licence.totalAmount += pricePerNewCustomer * customersToAdd;
  }
  private addCustomersToNumberBasedLicence(customersToAdd: number, licence: Licence) {

  }

  private updateLicenceStatus(){
    for(let business of this.businesses){
      let m1 = moment(business.licence.activationDate);
      let m2 = moment(business.licence.expirationDate);
      business.licence.status = m1.diff(m2, 'days') >= 0 ? LicenceStatus.Expired : LicenceStatus.Active;

      // 
      if(business.licence.status === LicenceStatus.Active && business.licence.type === LicenceType.NumberBased){

      }
    }
  }

  public selectBussines(id:number):void{
    this.selectedBusinessId = id;
  }

  // Simulira citanje iz baze
  private getBusinesses(): void {
    let licence1: Licence = {
      id: 1,
      type: LicenceType.NumberBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 3,
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 1,
    };
    let licence2: Licence = {
      id: 2,
      type: LicenceType.TimeBased,
      numberOfCustomersSpent: 6,
      activationDate: new Date(),
      expirationDate: new Date(),
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 2,
    };
    let licence3: Licence = {
      id: 3,
      type: LicenceType.NumberBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 11,
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 3,
    };
    let licence4: Licence = {
      id: 4,
      type: LicenceType.TimeBased,
      numberOfCustomersSpent: 4,
      activationDate: new Date(),
      expirationDate: new Date(),
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 4,
    };
    let business1: Business = {
      id: 1,
      licence: licence1,
      name: 'Regular number based d.o.o.',
    };
    let business2: Business = {
      id: 2,
      licence: licence2,
      name: 'Regular time based Inc.',
    };
    let business3: Business = {
      id: 3,
      licence: licence3,
      name: 'Overdraft & Co.',
    };
    let business4: Business = {
      id: 4,
      licence: licence4,
      name: 'Expired & sons',
    };
    this.businesses = [business1, business2, business3, business4];

    // Recimo da licence stizu sa statusom inactive sa backend-a i da frontend azurira status
    this.updateLicenceStatus();
  }

}
