"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3001;
// import fake data
const fakeDonuts_json_1 = __importDefault(require("../fakeDonuts.json"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.status(200).send('Hello 17-356 People!');
});
app.get('/donuts', (req, res) => {
    // console.log(fakeData);
    res.status(200).send(fakeDonuts_json_1.default);
});
app.listen(port, () => {
    console.log(`Todo-App listening on localhost:${port}`);
});
