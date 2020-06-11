import { SuperType } from "./super-type.enum";

export interface Card {
  id: string;
  name: string;
  amount?: number;
  imageUrl: string;
  supertype: SuperType;
  types: string[];
}
