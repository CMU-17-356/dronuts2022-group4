import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

// import fake data
import fakeData from '../fakeDonuts.json';
import fakeCart from '../fakeCart.json';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello 17-356 People!');
});

app.get('/donuts', (req, res) => {
    // console.log(fakeData);
    res.status(200).send(fakeData);
});

app.get('/cart', (req, res) => {
  res.status(200).send(fakeCart);
});

app.listen(port, () => {
    console.log(`Dronuts backend listening on localhost:${port}`);
});
