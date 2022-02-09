import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello 17-356 People!');
});

app.listen(port, () => {
    console.log(`Todo-App listening on localhost:${port}`);
});