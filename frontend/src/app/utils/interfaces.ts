export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: object;
}

export interface ISaved {
  _id: string;
  product: IProduct;
  user: object;
}
