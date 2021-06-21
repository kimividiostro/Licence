import { LicenceType, LicenceStatus } from './licence-enums';

export interface Licence {
  // numbers are used as ids for simplicity
  id: number;
  type: LicenceType;
  numberOfCustomersAllowed?: number;
  numberOfCustomersSpent: number;
  activationDate: Date;
  expirationDate: Date;
  totalAmount: number;
  status: LicenceStatus;
  businessID: number;
}
