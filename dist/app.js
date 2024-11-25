"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("./Bike/bike.route");
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// common route
app.use('/v1/bikes', bike_route_1.router);
exports.default = app;
