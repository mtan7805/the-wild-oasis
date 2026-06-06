export interface Cabin {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
}

export interface CabinType extends Cabin {
  description: string;
  createdAt: string;
  updatedAt: string;
}

