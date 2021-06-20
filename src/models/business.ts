import { Licence } from './licence';

export interface Business {
  id: number;
  name: string;
  licence: Licence;
}
