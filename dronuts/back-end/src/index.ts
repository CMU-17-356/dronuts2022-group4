import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {
  DonutModel, DonutInterface,
  OrderModel, OrderInterface
} from './db/models';

import fakeData from '../fakeDonuts.json';
import fakeOrders from '../fakeOrders.json';
import fakeUsers from '../fakeUsers.json';


const resetDatabase = false;

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDb().then(async () => {
  if (resetDatabase) {
    await Promise.all([
      DonutModel.deleteMany({}),
      OrderModel.deleteMany({}),
    ]);
  }
  app.listen(port, () => {
      console.log(`Dronuts backend listening on localhost:${port}`);
  });
}).catch(err => console.log(err));

async function connectDb() {
  await mongoose.connect('mongodb://localhost/dronutsdb');
}

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello 17-356 People!');
});

app.get('/donuts', (req: Request, res: Response) => {
    DonutModel.find().lean().exec(function (err, donuts) {
      if (err) {
        // Retrieving donuts failed
        res.status(400).send(false);
      }
      else {
        // Retrieving donuts succeeded
        res.status(200).send(JSON.stringify(donuts));
      }
    });
});

app.post('/set-donuts', (req: Request<{}, {}, Array<DonutInterface>>, res: Response) => {
  let donuts = req.body;
  const bulkDonuts = donuts.map(donut => (
    {
      replaceOne: {
        upsert: true,
        filter: { id: donut.id },
        replacement: donut
      }
    }
  ));
  DonutModel.bulkWrite(bulkDonuts).then(() => {
    // Insert/update successful
    res.status(200).send(true);
  }).catch(() => {
    // Insert/update failed
    res.status(400).send(false);
  });
});

app.get('/orders', (req: Request, res: Response) => {
    OrderModel.find().lean().exec(function (err, donuts) {
      if (err) {
        // Retrieving donuts failed
        res.status(400).send(false);
      }
      else {
        // Retrieving donuts succeeded
        res.status(200).send(JSON.stringify(donuts));
      }
    });
});

app.post('/set-orders', (req:  Request<{}, {}, Array<OrderInterface>>, res: Response) => {
  let orders = req.body;
  const bulkOrders = orders.map(order => (
    {
      replaceOne: {
        upsert: true,
        filter: { id: order.id },
        replacement: order
      }
    }
  ));
  OrderModel.bulkWrite(bulkOrders).then(() => {
    // Insert/update successful
    res.status(200).send(true);
  }).catch(() => {
    // Insert/update failed
    res.status(400).send(false);
  });
});

app.get('/users', (req, res) => {
    res.status(200).send(fakeUsers);
});
