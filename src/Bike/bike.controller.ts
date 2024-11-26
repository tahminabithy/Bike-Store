import { Request, Response } from 'express';
import { bikeServices } from './bike.services';

const createbike = async (req: Request, res: Response) => {
  try {
    const bikeInfo = req.body.bike;
    // bikeInfo.createdAt = new Date();
    // bikeInfo.updatedAt = new Date();
    const result = await bikeServices.createBikeInDb(bikeInfo);
    res.status(201).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: 'bike creation failed',
      success: false,
      data: error,
    });
  }
};
const getAllBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeServices.getBikefromDb();
    res.status(201).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: 'Bike retrieval failed',
      success: false,
      data: error,
    });
  }
};
const getSignleBike = async (req: Request, res: Response) => {
  try {
    const query = req.params.productId;
    const result = await bikeServices.getSingleBikeFromDb(query);
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.send({
      message: 'Bike retrieval failed',
      success: false,
      error: error.message,
    });
  }
};
const updateBike = async (req: Request, res: Response) => {
  try {
    const query = req.params.productId;
    const bikeInfo = req.body.bike;
    bikeInfo.updatedAt = new Date();
    const result = await bikeServices.updateBikeInDb(query, bikeInfo);
    res.status(201).json({
      message: 'Bike updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: 'Bike update failed',
      success: false,
      data: error,
    });
  }
};
const deleteBike = async (req: Request, res: Response) => {
  try {
    const query = req.params.productId;
    const result = await bikeServices.deleteBikeFromDb(query);
    console.log(result);
    res.status(201).json({
      message: 'Bike deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: 'Bike delete failed!',
      success: false,
      data: error,
    });
  }
};
//order

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await bikeServices.createOrderInDb(orderData);

    // Respond with success message
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.send({
      message: 'Order failed!',
      success: false,
      data: error.message,
    });
  }
};

const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await bikeServices.CalculateRevenueFromOrders();
    res.status(201).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: 'calculation failed!',
      success: false,
      data: error,
    });
  }
};
export const bikeController = {
  createbike,
  getAllBike,
  getSignleBike,
  updateBike,
  deleteBike,
  createOrder,
  totalRevenue,
};
