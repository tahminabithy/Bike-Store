import mongoose from 'mongoose';
import { tBike, tOrder } from './bike.interface';
import { bikeModel, orderModel } from './bike.model';

// car collection in the database
const createBikeInDb = async (car: tBike) => {
  const result = await bikeModel.create(car);
  return result;
};
const getBikefromDb = async () => {
  const result = await bikeModel.find();
  return result;
};
const getSingleBikeFromDb = async (productId: string) => {
  const result = await bikeModel.findOne({ _id: productId });
  if (!result) {
    throw new Error('Product not found'); // if product is null or not found then throw an error
  }
  return result;
};
const updateBikeInDb = async (productId: string, bikeInfo: object) => {
  const result = await bikeModel.findByIdAndUpdate(
    productId,
    { $set: bikeInfo },
    { new: true, runValidators: true },
  ); // new: true returns the updated document and runValidators Ensures that all updated fields are validated based on the schema rules.
  if (!result) {
    throw new Error('product is not found to update'); // make sure product is not null
  }
  return result;
};
const deleteBikeFromDb = async (productId: string) => {
  const result = await bikeModel.deleteOne({ _id: productId });
  if (result.deletedCount === 0) {
    throw new Error('product is not found to delete');
  }
  return result;
};

const createOrderInDb = async (order: tOrder) => {
  // Check if the product exists
  const id = { _id: new mongoose.Types.ObjectId(order.product) };
  const doesExist = await bikeModel.exists(id);
  if (!doesExist) {
    throw new Error('Product not found');
  }
  // Fetch the product
  const product = await bikeModel.findById(id);
  // make sure product is not null
  if (!product) {
    throw new Error('Product not found');
  }

  // Check inventory and update quantity
  if (product.quantity >= order.quantity) {
    product.quantity -= order.quantity;

    if (product.quantity === 0) {
      product.inStock = false;
    }
    await product.save(); // Save updated product to the database
  } else {
    throw new Error('Insufficient stock');
  }

  // Create the order
  const result = await orderModel.create(order);

  return result;
};

const CalculateRevenueFromOrders = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' }, // Group to calculate total revenue
      },
    },
    {
      $project: {
        _id: 0, // Exclude the _id field
        totalRevenue: 1, // Include totalRevenue in the output
      },
    },
  ]);
  return result.length > 0 ? result[0].totalRevenue : 0; // Return totalRevenue or 0 if no orders
};

export const bikeServices = {
  createBikeInDb,
  getBikefromDb,
  getSingleBikeFromDb,
  updateBikeInDb,
  deleteBikeFromDb,
  createOrderInDb,
  CalculateRevenueFromOrders,
};
