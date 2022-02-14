import mongoose, { Document, Model, Types } from 'mongoose'
  const { Schema } = mongoose;

  // Customer
  export interface CustomerInterface extends Document {
    title: string
    first_name: string
    last_name: string
    phone_number: string
    email: string
  }

  const customerSchema = new Schema({
    id: {type: Number, required: true},
    first_name: {type: String, required: true, trim: true},
    last_name: {type: String, required: true, trim: true},
    phone_number: {
        type: String, 
        required: true,
        unique: true,
        minLength: 10,
        maxlength: 12,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Please fill a valid phone number']
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


  // Donut
  export interface DonutInterface extends Document {
    id: number
    name: string
    price: number
    desc: string
    img_url: string
    nutrition_info: [string]
  }

  const donutSchema = new Schema({
    id: {type: Number, required: true}, 
    name: {type: String, required: true, trim: true},
    price: {type: Number, required: true, max: 10.00},
    desc: {type: String, maxlength: 300},
    img_url: {type: String},
    nutrition_info: {type: [String], default: undefined}
  });


  // Drone
  export interface DroneInterface extends Document {
    id: number
    long: number
    lat: number
    battery: number
  }

  const droneSchema = new Schema({
    id: {type: Number, required: true},
    long: {type: Number, required: true, min: -180, max: 180},
    lat: {type: Number, required: true, min: -90, max: 90},
    battery: {type: Number, required: true, min: 0, max: 100}
  });

  // Order
  export interface OrderInterface extends Document {
    id: number,
    customer: Types.ObjectId,
    address: string,
    status: string,
    purchase_date: Date,
    items: [Types.ObjectId]
  }

  const orderSchema = new Schema({
    id: { type: Number, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    address: { type: Number, required: true },
    status: { type: String, 
              required: true, 
              enum: ['Drone Heading Towards Store', 
                     'Drone Heading Towards Destination', 
                     'Waiting For Pickup', 
                     'Waiting For Load',
                     'Completed'] 
            },
    purchase_date: { type: Date, required: true, default:Date.now },
    items: { type: [Schema.Types.ObjectId], ref: 'Donut', required: true } 
  });

  export const Customer : Model<CustomerInterface> = mongoose.model('Customer', customerSchema);
  export const Donut : Model<DonutInterface> = mongoose.model('Donut', donutSchema);
  export const Drone : Model<DroneInterface> = mongoose.model('Drone', droneSchema);
  export const Order : Model<OrderInterface> = mongoose.model('Order', orderSchema);