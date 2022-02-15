"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testDB = __importStar(require("./utility"));
const models_1 = require("../src/db/models");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.connect();
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.clearDatabase();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.closeDatabase();
}));
describe('Customer test', function () {
    it('should take on assigned values', () => {
        const m = new models_1.CustomerModel();
        m.id = 6;
        m.first_name = 'Max';
        m.last_name = 'Duna';
        m.phone_number = '123-456-7890';
        m.email = 'testemail@gmail.com';
        expect(m.id).toEqual(6);
        expect(m.first_name).toEqual('Max');
        expect(m.last_name).toEqual('Duna');
        expect(m.phone_number).toEqual('123-456-7890');
        expect(m.email).toEqual('testemail@gmail.com');
    });
    it('can be created correctly', () => __awaiter(this, void 0, void 0, function* () {
        // create new post model instance
        const customer = new models_1.CustomerModel();
        // set some test properties
        customer.id = 6;
        customer.first_name = 'John';
        customer.last_name = 'Doe';
        customer.phone_number = '1234567890';
        customer.email = 'fakeemail@gmail.com';
        // save test post to in-memory db
        yield customer.save();
        // find inserted post by title
        const customerInDb = yield models_1.CustomerModel.findOne({
            id: 6,
        }).exec();
        console.log('Customer found from memory-db', customerInDb);
        // check that title is expected
        expect(customerInDb).toBeDefined();
        if (customerInDb) {
            expect(customerInDb.id).toEqual(6);
            expect(customerInDb.first_name).toEqual('John');
            expect(customerInDb.last_name).toEqual('Doe');
            expect(customerInDb.phone_number).toEqual('1234567890');
            expect(customerInDb.email).toEqual('fakeemail@gmail.com');
        }
    }));
});
describe('Donut test', function () {
    it('should take on assigned values', () => {
        const m = new models_1.DonutModel();
        m.id = 6;
        m.name = 'Chocolate Frosting Donut';
        m.price = 3.99;
        m.desc = 'Donut with chocolate frosting';
        m.img_url = 'fake_image_url.png';
        m.nutrition_info = ['Gluten Free', 'Kosher'];
        expect(m.id).toEqual(6);
        expect(m.name).toEqual('Chocolate Frosting Donut');
        expect(m.price).toEqual(3.99);
        expect(m.desc).toEqual('Donut with chocolate frosting');
        expect(m.img_url).toEqual('fake_image_url.png');
        expect(m.nutrition_info).toEqual(['Gluten Free', 'Kosher']);
    });
    it('can be created correctly', () => __awaiter(this, void 0, void 0, function* () {
        // create new post model instance
        const donut = new models_1.DonutModel();
        // set some test properties
        donut.id = 3;
        donut.name = 'Strawberry Frosting Donut';
        donut.price = 2.99;
        donut.desc = 'Donut with strawbery frosting';
        donut.img_url = 'fake_image_url.png';
        donut.nutrition_info = ['Gluten Free', 'Kosher'];
        // save test post to in-memory db
        yield donut.save();
        // find inserted post by title
        const donutInDb = yield models_1.DonutModel.findOne({
            id: 3,
        }).exec();
        console.log('Donut found from memory-db', donutInDb);
        // check that title is expected
        expect(donutInDb).toBeDefined();
        if (donutInDb) {
            expect(donutInDb.id).toEqual(3);
            expect(donutInDb.name).toEqual('Strawberry Frosting Donut');
            expect(donutInDb.price).toEqual(2.99);
            expect(donutInDb.desc).toEqual('Donut with strawbery frosting');
            expect(donutInDb.img_url).toEqual('fake_image_url.png');
            expect(donutInDb.nutrition_info).toEqual(['Gluten Free', 'Kosher']);
        }
    }));
});
describe('Drone test', function () {
    it('should take on assigned values', () => {
        const m = new models_1.DroneModel();
        m.id = 6;
        m.lat = 78.87;
        m.long = -45.12;
        m.battery = 78.16;
        expect(m.id).toEqual(6);
        expect(m.lat).toEqual(78.87);
        expect(m.long).toEqual(-45.12);
        expect(m.battery).toEqual(78.16);
    });
    it('can be created correctly', () => __awaiter(this, void 0, void 0, function* () {
        // create new post model instance
        const drone = new models_1.DroneModel();
        // set some test properties
        drone.id = 6;
        drone.lat = 12.90;
        drone.long = 123.87;
        drone.battery = 34.67;
        // save test post to in-memory db
        yield drone.save();
        // find inserted post by title
        const droneInDb = yield models_1.DroneModel.findOne({
            id: 6,
        }).exec();
        console.log('Drone found from memory-db', droneInDb);
        // check that title is expected
        expect(droneInDb).toBeDefined();
        if (droneInDb) {
            expect(droneInDb.id).toEqual(6);
            expect(droneInDb.lat).toEqual(12.90);
            expect(droneInDb.long).toEqual(123.87);
            expect(droneInDb.battery).toEqual(34.67);
        }
    }));
});
describe('Order test', function () {
    it('should take on assigned values', () => {
        const m = new models_1.OrderModel();
        const customer = new models_1.CustomerModel({ id: 1, first_name: "t", last_name: "a", phone_number: "1234567890", email: "fake@gmail.com" });
        const donut1 = new models_1.DonutModel({ id: 1, name: 'Chocolate frosting donut', price: 2.99 });
        const donut2 = new models_1.DonutModel({ id: 2, name: 'Strawberry frosting donut', price: 4.99 });
        m.id = 6;
        m.customer = customer._id;
        m.address = '5000 Forbes Ave';
        m.status = 'Waiting For Pickup';
        m.purchase_date = new Date('2022-02-14');
        m.items = [donut1._id, donut2._id];
        expect(m.id).toEqual(6);
        expect(m.customer).toEqual(customer._id);
        expect(m.address).toEqual('5000 Forbes Ave');
        expect(m.status).toEqual('Waiting For Pickup');
        expect(m.purchase_date).toEqual(new Date('2022-02-14'));
        expect(m.items).toEqual([donut1._id, donut2._id]);
    });
    it('can be created correctly', () => __awaiter(this, void 0, void 0, function* () {
        // create new post model instance
        const order = new models_1.OrderModel();
        // set some test properties
        const cust = new models_1.CustomerModel({ id: 3, first_name: "t", last_name: "a", phone_number: "1234567890", email: "fake@gmail.com" });
        const d1 = new models_1.DonutModel({ id: 5, name: 'Chocolate frosting donut', price: 2.99 });
        const d2 = new models_1.DonutModel({ id: 9, name: 'Strawberry frosting donut', price: 4.99 });
        order.id = 8;
        order.customer = cust._id;
        order.address = '5001 Forbes Ave';
        order.status = 'Drone Heading Towards Store';
        order.purchase_date = new Date('2022-02-15');
        order.items = [d1._id, d2._id];
        // save test post to in-memory db
        yield order.save();
        // find inserted post by title
        const orderInDb = yield models_1.OrderModel.findOne({
            id: 8,
        }).exec();
        console.log('Order found from memory-db', orderInDb);
        // check that title is expected
        expect(orderInDb).toBeDefined();
        if (orderInDb) {
            expect(orderInDb.id).toEqual(8);
            expect(orderInDb.customer).toEqual(cust._id);
            expect(orderInDb.address).toEqual('5001 Forbes Ave');
            expect(orderInDb.status).toEqual('Drone Heading Towards Store');
            expect(orderInDb.purchase_date).toEqual(new Date('2022-02-15'));
            expect(orderInDb.items).toEqual([d1._id, d2._id]);
        }
    }));
});
