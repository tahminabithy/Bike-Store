import { Schema } from 'mongoose';
import { tOrder, tBike } from './bike.interface';

export const bikeSchema = new Schema<tBike>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name must not exceed 100 characters'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be greater than or equal to 0'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: 'Category must be one of Mountain, Road, Hybrid, or Electric',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [500, 'Description must not exceed 500 characters'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be greater than or equal to 0'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'InStock status is required'],
    },
  },
  { timestamps: true },
);

//order schema
export const orderSchema = new Schema<tOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'], // Regex for basic email validation
    },
    product: {
      type: String,
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be greater than or equal to 0'],
    },
  },
  { timestamps: true },
);


