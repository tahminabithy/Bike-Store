"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = exports.bikeModel = void 0;
const mongoose_1 = require("mongoose");
const bike_schema_1 = require("./bike.schema");
exports.bikeModel = (0, mongoose_1.model)('Bike', bike_schema_1.bikeSchema);
exports.orderModel = (0, mongoose_1.model)('Order', bike_schema_1.orderSchema);
