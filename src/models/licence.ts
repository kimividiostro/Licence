import { LicenceType, LicenceStatus } from './licence-enums';

export interface Licence {
  // Brojevi se koriste za id radi jednostavnosti
  id: number;
  type: LicenceType;
  numberOfCustomersAllowed?: number;
  numberOfCustomersSpent?: number;
  activationDate?: Date;
  expirationDate?: Date;
  totalAmount: number;
  status: LicenceStatus;
  businessID: number;
}
