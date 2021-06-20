import { Business } from 'src/models/business';
import { Licence } from 'src/models/licence';
import { LicenceType, LicenceStatus } from 'src/models/licence-enums';

export class BusinessesService {
  getBusinesses(): Business[] {
    let licence1: Licence = {
      id: 1,
      type: LicenceType.NumberBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 0,
      activationDate: new Date(),
      expirationDate: new Date(),
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 1,
    };
    let licence2: Licence = {
      id: 2,
      type: LicenceType.TimeBased,
      numberOfCustomersAllowed: 10,
      numberOfCustomersSpent: 0,
      activationDate: new Date(),
      expirationDate: new Date(),
      totalAmount: 0,
      status: LicenceStatus.Inactive,
      businessID: 2,
    };

    let business1: Business = {
      id: 1,
      licence: licence1,
      name: 'Business1',
    };
    let business2: Business = {
      id: 2,
      licence: licence2,
      name: 'Business2',
    };

    return [business1, business2];
  }
}
