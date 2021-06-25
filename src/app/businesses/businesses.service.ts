import {EventEmitter} from '@angular/core'
import * as moment from 'moment';
import { Business } from 'src/models/business';
import { Licence } from 'src/models/licence';
import { LicenceType, LicenceStatus } from 'src/models/licence-enums';

export class BusinessesService {
  businesses!: Business[];
  selectedBusiness!: Business;
  selectedBusinessId?: number;
  private regularPrice = 1;
  private penaltyPrice = 2;

  private maxLicenceId = 4; // Ponovo, demonstracije radi, zamisljamo da frontend radi posao backend-a. Pri "vracanju iz baze" najveci id licence je 4

  businessSelected!: EventEmitter<number>;

  constructor(){
    this.businessSelected = new EventEmitter();
    this.getBusinesses();
  }

  public addCustomersToLicence(customersToAdd: number){
    const licence = this.selectedBusiness.licence;
    if(licence.status === LicenceStatus.Inactive){
      this.addCustomerToInactiveLicence(customersToAdd, licence);
      return;
    }
    licence!.type === LicenceType.NumberBased ? this.addCustomersToNumberBasedLicence(customersToAdd, licence) : this.addCustomersToTimeBasedLicence(customersToAdd,licence);
  }
  private addCustomerToInactiveLicence(customersToAdd: number, licence: Licence){
    licence.type === LicenceType.NumberBased ? this.addCustomerToInactiveNumberBasedLicence(customersToAdd, licence) : this.addCustomerToInactiveTimeBasedLicence(customersToAdd, licence);
  }
  private addCustomerToInactiveTimeBasedLicence(customersToAdd: number, licence: Licence){
    licence.status = LicenceStatus.Active;
    const today = moment();
    licence.activationDate = new Date(today.year(), today.month(), today.date());
    licence.expirationDate = new Date((today.year()+1), today.month(), today.date());
    this.addCustomersToTimeBasedLicence(customersToAdd, licence);
  }
  private addCustomerToInactiveNumberBasedLicence(customersToAdd: number, licence: Licence){
    licence.status = LicenceStatus.Active;
    this.addCustomersToNumberBasedLicence(customersToAdd, licence);
  }
  private addCustomersToTimeBasedLicence(customersToAdd: number, licence: Licence) {
      const pricePerNewCustomer = (licence.status === LicenceStatus.Expired) ? this.penaltyPrice : this.regularPrice;

      licence.totalAmount += pricePerNewCustomer * customersToAdd;
      licence.numberOfCustomersSpent! += customersToAdd;
  }
  private addCustomersToNumberBasedLicence(customersToAdd: number, licence: Licence) {
    if(licence.status === LicenceStatus.Overdraft || (licence.numberOfCustomersAllowed! === licence.numberOfCustomersSpent)){
      // Vec je prekoracen dozvoljeni broj pretplatnika ili je tacno popunjen kapacitet tako da ce svi biti naplaceni skuplje
      licence.totalAmount += this.penaltyPrice * customersToAdd;
      licence.numberOfCustomersSpent! += customersToAdd;
      licence.status = LicenceStatus.Overdraft;
      return;
    }
    if((licence.numberOfCustomersSpent! + customersToAdd) > licence.numberOfCustomersAllowed!){ // Doci ce do prekoracenja dozvoljenog broja pretplatnika
      const numberOfPenatlies = (licence.numberOfCustomersSpent! + customersToAdd) - licence.numberOfCustomersAllowed!;
      const numberOfRegularCustomers = customersToAdd - numberOfPenatlies;
      licence.totalAmount += (numberOfPenatlies * this.penaltyPrice + numberOfRegularCustomers * this.regularPrice);
      licence.numberOfCustomersSpent! += customersToAdd;
      licence.status = LicenceStatus.Overdraft;
      return;
    }
    licence.totalAmount += this.regularPrice * customersToAdd;
    licence.numberOfCustomersSpent! += customersToAdd;
  }

  renewSelectedLicence(){
    const licence = this.selectedBusiness.licence;
    licence.type === LicenceType.NumberBased ? this.renewNumberBasedLicence(licence) : this.renewTimeBasedLicence(licence);
  }

  private renewNumberBasedLicence(licence: Licence){
    licence.id = ++this.maxLicenceId;
    licence.numberOfCustomersSpent = 0;
    licence.totalAmount = 0;
    licence.status = LicenceStatus.Inactive;
  }
  private renewTimeBasedLicence(licence: Licence){
    licence.id = ++this.maxLicenceId;
    licence.numberOfCustomersSpent = 0;
    delete licence.activationDate;
    delete licence.expirationDate;
    licence.totalAmount = 0;
    licence.status = LicenceStatus.Inactive;
  }


  private updateLicenceStatus(){
    for(let business of this.businesses){
      business.licence.type === LicenceType.TimeBased ? this.updateTimeBasedLicence(business.licence) : this.updateNumberBasedLicence(business.licence)
    }
  }

  private updateTimeBasedLicence(licence: Licence){
    const m1 = moment(); // Danasnji datum
    const m2 = moment(licence.expirationDate);
    licence.status = m1.diff(m2, 'days') >= 0 ? LicenceStatus.Expired : LicenceStatus.Active;
  }
  private updateNumberBasedLicence(licence: Licence){
    licence.status =  licence.numberOfCustomersSpent! > licence.numberOfCustomersAllowed! ? LicenceStatus.Overdraft :  LicenceStatus.Active;  
  }

  public selectBussines(id:number):void{
    this.selectedBusinessId = id;
    this.selectedBusiness = this.businesses.find(business => business.id === id)!;
    this.businessSelected.emit();
  }

  // Simulira citanje iz baze
  private getBusinesses(): void {
    let licence1: Licence = {
      id: 1,
      type: LicenceType.NumberBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 3,
      totalAmount: 3,
      status: LicenceStatus.Inactive,
      businessID: 1,
    };
    let licence2: Licence = {
      id: 2,
      type: LicenceType.TimeBased,
      numberOfCustomersSpent: 6,
      activationDate: new Date(2021,0,1),
      expirationDate: new Date(2022,0,1),
      totalAmount: 6,
      status: LicenceStatus.Inactive,
      businessID: 2,
    };
    let licence3: Licence = {
      id: 3,
      type: LicenceType.NumberBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 11,
      totalAmount: 12,
      status: LicenceStatus.Inactive,
      businessID: 3,
    };
    let licence4: Licence = {
      id: 4,
      type: LicenceType.TimeBased,
      numberOfCustomersSpent: 4,
      activationDate: new Date(2020,0,1),
      expirationDate: new Date(2021,0,1),
      totalAmount: 4,
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

    // Demonstracije radi, sa backend-a stizu licence sa statusom INACTIVE pa frontend proverava
    this.updateLicenceStatus();
  }

}
