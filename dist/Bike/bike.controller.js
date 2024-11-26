"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeController = void 0;
const bike_services_1 = require("./bike.services");
const createbike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeInfo = req.body.bike;
        // bikeInfo.createdAt = new Date();
        // bikeInfo.updatedAt = new Date();
        const result = yield bike_services_1.bikeServices.createBikeInDb(bikeInfo);
        res.status(201).json({
            message: 'Bike created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'bike creation failed',
            success: false,
            error: error,
        });
    }
});
const getAllBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_services_1.bikeServices.getBikefromDb();
        res.status(201).json({
            message: 'Bikes retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'Bike retrieval failed',
            success: false,
            error: error,
        });
    }
});
const getSignleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.params.productId;
        const result = yield bike_services_1.bikeServices.getSingleBikeFromDb(query);
        res.status(200).json({
            message: 'Bikes retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'Bike retrieval failed',
            success: false,
            error: error.message,
        });
    }
});
const updateBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.params.productId;
        const bikeInfo = req.body.bike;
        bikeInfo.updatedAt = new Date();
        const result = yield bike_services_1.bikeServices.updateBikeInDb(query, bikeInfo);
        res.status(201).json({
            message: 'Bike updated successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'Bike update failed',
            success: false,
            error: error.message,
        });
    }
});
const deleteBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.params.productId;
        const result = yield bike_services_1.bikeServices.deleteBikeFromDb(query);
        console.log(result);
        res.status(201).json({
            message: 'Bike deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.send({
            message: 'Bike delete failed !',
            success: false,
            error: error.message,
        });
    }
});
//order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield bike_services_1.bikeServices.createOrderInDb(orderData);
        // Respond with success message
        res.status(201).json({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'Order failed!',
            success: false,
            error: error.message,
        });
    }
});
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_services_1.bikeServices.CalculateRevenueFromOrders();
        res.status(201).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: 'calculation failed!',
            success: false,
            error: error.message,
        });
    }
});
exports.bikeController = {
    createbike,
    getAllBike,
    getSignleBike,
    updateBike,
    deleteBike,
    createOrder,
    totalRevenue,
};
