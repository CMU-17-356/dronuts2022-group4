import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import fakeData from '../fakeDonuts.json';
import fakeOrders from '../fakeOrders.json';
import fakeCart from '../fakeCart.json';


const resetDatabase = false;

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDb().then(async () => {
  if (resetDatabase) {
    await Promise.all([
      // models.DonutModel.deleteMany({}),
    ]);
  }
  app.listen(port, () => {
      console.log(`Dronuts backend listening on localhost:${port}`);
  });
}).catch(err => console.log(err));

async function connectDb() {
  await mongoose.connect('mongodb://localhost/dronutsdb');
}

app.get('/', (req, res) => {
    res.status(200).send('Hello 17-356 People!');
});

app.get('/donuts', (req, res) => {
    // console.log(fakeData);
    res.status(200).send(fakeData);
});

app.get('/orders', (req, res) => {
    // console.log(fakeData);
    res.status(200).send(fakeOrders);
});

/*
export const CustomerModel : Model<CustomerInterface> = mongoose.model('Customer', customerSchema);
export const DonutModel : Model<DonutInterface> = mongoose.model('Donut', donutSchema);
export const DroneModel : Model<DroneInterface> = mongoose.model('Drone', droneSchema);
export const OrderModel : Model<OrderInterface> = mongoose.model('Order', orderSchema);
*/
