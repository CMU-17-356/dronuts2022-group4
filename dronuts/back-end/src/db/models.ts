import mongoose, { Document, Model, Types } from 'mongoose';


const { Schema } = mongoose;

// Donut
export interface DonutInterface extends Document {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
  img_url: string;
  nutrition_info: string[];
}

const donutSchema = new Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, max: 10.00 },
  description: { type: String, maxlength: 300 },
  available: { type: Boolean, required: true, default: false },
  img_url: { type: String },
  nutrition_info: { type: [String], default: [] }
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
  id: number;
  // customer: Types.ObjectId;
  customer: number;
  address: string;
  status: string;
  purchase_date: Date;
  // items: Types.ObjectId[];
  items: number[];
}

const orderSchema = new Schema({
  id: { type: Number, unique: true, required: true },
  // customer: { type: Types.ObjectId, ref: 'Customer', required: true },
  customer: { type: Number, required: true },
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
  // items: { type: [Schema.Types.ObjectId], ref: 'Donut', required: true }
  items: { type: [Number], required: true }
});

// User
export interface UserInterface extends Document {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  username: string;
  password: string;
  access_level: string;
}

const userSchema = new Schema({
  id: {type: Number, unique: true, required: true},
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone_number: {
      type: String,
      required: true,
      unique: true,
      minLength: 10,
      maxlength: 12,
      match: [/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please fill a valid phone number']
  },
  username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 50
  },
  password: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  access_level: {
    type: String,
    required: true,
    enum: ['owner', 'employee', 'customer']
  }
});

export const DonutModel : Model<DonutInterface> = mongoose.model('Donut', donutSchema);
export const DroneModel : Model<DroneInterface> = mongoose.model('Drone', droneSchema);
export const OrderModel : Model<OrderInterface> = mongoose.model('Order', orderSchema);
export const UserModel : Model<UserInterface> = mongoose.model('User', userSchema);
