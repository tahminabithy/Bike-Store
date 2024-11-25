"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
exports.router = express_1.default.Router();
exports.router.post('/api/products', bike_controller_1.bikeController.createbike);
exports.router.get('/api/products', bike_controller_1.bikeController.getAllBike);
exports.router.get('/api/products/:productId', bike_controller_1.bikeController.getSignleBike);
exports.router.put('/api/products/:productId', bike_controller_1.bikeController.updateBike);
exports.router.delete('/api/products/:productId', bike_controller_1.bikeController.deleteBike);
exports.router.post('/api/orders', bike_controller_1.bikeController.createOrder);
exports.router.get('/api/orders/revenue', bike_controller_1.bikeController.totalRevenue);
