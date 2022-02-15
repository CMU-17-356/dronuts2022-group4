"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.DroneModel = exports.DonutModel = exports.CustomerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const customerSchema = new Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxlength: 12,
        match: [/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please fill a valid phone number']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});
const donutSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, max: 10.00 },
    desc: { type: String, maxlength: 300 },
    img_url: { type: String },
    nutrition_info: { type: [String], default: undefined }
});
const droneSchema = new Schema({
    id: { type: Number, required: true },
    long: { type: Number, required: true, min: -180, max: 180 },
    lat: { type: Number, required: true, min: -90, max: 90 },
    battery: { type: Number, required: true, min: 0, max: 100 }
});
const orderSchema = new Schema({
    id: { type: Number, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    address: { type: String, required: true },
    status: { type: String,
        required: true,
        enum: ['Drone Heading Towards Store',
            'Drone Heading Towards Destination',
            'Waiting For Pickup',
            'Waiting For Load',
            'Completed']
    },
    purchase_date: { type: Date, required: true, default: Date.now },
    items: { type: [Schema.Types.ObjectId], ref: 'Donut', required: true }
});
exports.CustomerModel = mongoose_1.default.model('Customer', customerSchema);
exports.DonutModel = mongoose_1.default.model('Donut', donutSchema);
exports.DroneModel = mongoose_1.default.model('Drone', droneSchema);
exports.OrderModel = mongoose_1.default.model('Order', orderSchema);
