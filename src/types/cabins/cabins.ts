export type Cabin = {
  id: string | number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export type CabinType = {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};
