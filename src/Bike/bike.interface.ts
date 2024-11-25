type tBike = {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'; // Enum for bike types
  description: string;
  quantity: number;
  inStock: boolean;
  // isDeleted:boolean;
  // timestamp: Date;
};
type tOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};
export type { tBike, tOrder };
