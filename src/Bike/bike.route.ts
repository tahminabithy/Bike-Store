import express from 'express';
import { bikeController } from './bike.controller';

export const router = express.Router();
router.post('/api/products', bikeController.createbike);
router.get('/api/products', bikeController.getAllBike);
router.get('/api/products/:productId', bikeController.getSignleBike);
router.put('/api/products/:productId', bikeController.updateBike);
router.delete('/api/products/:productId', bikeController.deleteBike);
router.post('/api/orders', bikeController.createOrder);
router.get('/api/orders/revenue', bikeController.totalRevenue);
