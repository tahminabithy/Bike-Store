import { model } from 'mongoose';
import { tBike, tOrder } from './bike.interface';
import { bikeSchema, orderSchema } from './bike.schema';

export const bikeModel = model<tBike>('Bike', bikeSchema);
export const orderModel = model<tOrder>('Order', orderSchema);
