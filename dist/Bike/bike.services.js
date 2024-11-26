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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bike_model_1 = require("./bike.model");
// car collection in the database
const createBikeInDb = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.bikeModel.create(car);
    return result;
});
const getBikefromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.bikeModel.find();
    return result;
});
const getSingleBikeFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.bikeModel.findOne({ _id: productId });
    if (!result) {
        throw new Error('Product not found'); // if product is null or not found then throw an error
    }
    return result;
});
const updateBikeInDb = (productId, bikeInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.bikeModel.findByIdAndUpdate(productId, { $set: bikeInfo }, { new: true, runValidators: true }); // new: true returns the updated document and runValidators Ensures that all updated fields are validated based on the schema rules.
    if (!result) {
        throw new Error('product is not found to update'); // make sure product is not null
    }
    return result;
});
const deleteBikeFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.bikeModel.deleteOne({ _id: productId });
    if (result.deletedCount === 0) {
        throw new Error('product is not found to delete');
    }
    return result;
});
const createOrderInDb = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the product exists
    const id = { _id: new mongoose_1.default.Types.ObjectId(order.product) };
    const doesExist = yield bike_model_1.bikeModel.exists(id);
    if (!doesExist) {
        throw new Error('Product not found');
    }
    // Fetch the product
    const product = yield bike_model_1.bikeModel.findById(id);
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
        yield product.save(); // Save updated product to the database
    }
    else {
        throw new Error('Insufficient stock');
    }
    // Create the order
    const result = yield bike_model_1.orderModel.create(order);
    return result;
});
const CalculateRevenueFromOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.orderModel.aggregate([
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
});
exports.bikeServices = {
    createBikeInDb,
    getBikefromDb,
    getSingleBikeFromDb,
    updateBikeInDb,
    deleteBikeFromDb,
    createOrderInDb,
    CalculateRevenueFromOrders,
};
