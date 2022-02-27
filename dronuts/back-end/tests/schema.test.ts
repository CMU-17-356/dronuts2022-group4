import * as testDB from './utility';

import { CustomerModel, CustomerInterface, DonutModel, DonutInterface, 
         DroneModel, DroneInterface, OrderModel, OrderInterface, 
         UserInterface, UserModel } from '../src/db/models';

beforeAll(async () => {
  await testDB.connect();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

describe('Customer test', function () {
    it('should take on assigned values', () => {
        const m = new CustomerModel();
        m.id = 6;
        m.first_name = 'Max';
        m.last_name = 'Duna'
        m.phone_number = '123-456-7890'
        m.email = 'testemail@gmail.com'
        expect(m.id).toEqual(6);
        expect(m.first_name).toEqual('Max');
        expect(m.last_name).toEqual('Duna');
        expect(m.phone_number).toEqual('123-456-7890');
        expect(m.email).toEqual('testemail@gmail.com');
    });

    it('can be created correctly', async () => {
        // create new post model instance
        const customer: CustomerInterface = new CustomerModel();
        // set some test properties
        customer.id = 6;
        customer.first_name = 'John';
        customer.last_name = 'Doe';
        customer.phone_number = '1234567890';
        customer.email = 'fakeemail@gmail.com';
        // save test post to in-memory db
        await customer.save();
        // find inserted post by title
        const customerInDb: CustomerInterface | null = await CustomerModel.findOne({
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
    });
});


describe('Donut test', function () {
    it('should take on assigned values', () => {
        const m = new DonutModel();
        m.id = 6;
        m.name = 'Chocolate Frosting Donut';
        m.price = 3.99;
        m.description = 'Donut with chocolate frosting';
        m.img_url = 'fake_image_url.png';
        m.nutrition_info = ['Gluten Free', 'Kosher'];
        expect(m.id).toEqual(6);
        expect(m.name).toEqual('Chocolate Frosting Donut');
        expect(m.price).toEqual(3.99);
        expect(m.description).toEqual('Donut with chocolate frosting');
        expect(m.img_url).toEqual('fake_image_url.png');
        expect(m.nutrition_info).toEqual(['Gluten Free', 'Kosher']);
    });

    it('can be created correctly', async () => {
        // create new post model instance
        const donut: DonutInterface = new DonutModel();
        // set some test properties
        donut.id = 3;
        donut.name = 'Strawberry Frosting Donut';
        donut.price = 2.99
        donut.description = 'Donut with strawbery frosting'
        donut.img_url = 'fake_image_url.png'
        donut.nutrition_info = ['Gluten Free', 'Kosher']
        // save test post to in-memory db
        await donut.save();
        // find inserted post by title
        const donutInDb: DonutInterface | null = await DonutModel.findOne({
            id: 3,
        }).exec();
        console.log('Donut found from memory-db', donutInDb);
        // check that title is expected
        expect(donutInDb).toBeDefined();
        if (donutInDb) {
            expect(donutInDb.id).toEqual(3);
            expect(donutInDb.name).toEqual('Strawberry Frosting Donut');
            expect(donutInDb.price).toEqual(2.99);
            expect(donutInDb.description).toEqual('Donut with strawbery frosting');
            expect(donutInDb.img_url).toEqual('fake_image_url.png');
            expect(donutInDb.nutrition_info).toEqual(['Gluten Free', 'Kosher']);
        }
    });
});


describe('Drone test', function () {
    it('should take on assigned values', () => {
        const m = new DroneModel();
        m.id = 6;
        m.lat = 78.87;
        m.long = -45.12;
        m.battery = 78.16;
        expect(m.id).toEqual(6);
        expect(m.lat).toEqual(78.87);
        expect(m.long).toEqual(-45.12);
        expect(m.battery).toEqual(78.16);
    });

    it('can be created correctly', async () => {
        // create new post model instance
        const drone: DroneInterface = new DroneModel();
        // set some test properties
        drone.id = 6;
        drone.lat = 12.90;
        drone.long = 123.87;
        drone.battery = 34.67;
        // save test post to in-memory db
        await drone.save();
        // find inserted post by title
        const droneInDb: DroneInterface | null = await DroneModel.findOne({
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
    });
});


describe('Order test', function () {
    it('should take on assigned values', () => {
        const m = new OrderModel();
        const customer = new CustomerModel({id:1, first_name:"t", last_name:"a", phone_number:"1234567890", email:"fake@gmail.com"});
        const donut1 = new DonutModel({id:1, name:'Chocolate frosting donut', price:2.99});
        const donut2 = new DonutModel({id:2, name:'Strawberry frosting donut', price:4.99});
        m.id = 6;
        m.customer = customer._id;
        m.address = '5000 Forbes Ave';
        m.status = 'Waiting For Pickup';
        m.purchase_date = new Date('2022-02-14');
        m.items = [donut1.id, donut2.id]
        expect(m.id).toEqual(6);
        expect(m.customer).toEqual(customer._id);
        expect(m.address).toEqual('5000 Forbes Ave');
        expect(m.status).toEqual('Waiting For Pickup');
        expect(m.purchase_date).toEqual(new Date('2022-02-14'));
        expect(m.items).toEqual([donut1.id, donut2.id]);
    });

    it('can be created correctly', async () => {
        // create new post model instance
        const order: OrderInterface = new OrderModel();
        // set some test properties
        const cust = new CustomerModel({id:3, first_name:"t", last_name:"a", phone_number:"1234567890", email:"fake@gmail.com"});
        const d1 = new DonutModel({id:5, name:'Chocolate frosting donut', price:2.99});
        const d2 = new DonutModel({id:9, name:'Strawberry frosting donut', price:4.99});
        order.id = 8;
        order.customer = cust._id;
        order.address = '5001 Forbes Ave';
        order.status = 'Drone Heading Towards Store';
        order.purchase_date = new Date('2022-02-15');
        order.items = [d1.id, d2.id];
        // save test post to in-memory db
        await order.save();
        // find inserted post by title
        const orderInDb: OrderInterface | null = await OrderModel.findOne({
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
            expect(orderInDb.items).toEqual([d1.id, d2.id]);
        }
    });  
});

describe('User test', function () {
    it('should take on assigned values', () => {
        const m = new UserModel();
        m.id = 6;
        m.first_name = 'Max';
        m.last_name = 'Duna'
        m.phone_number = '123-456-7890'
        m.username = 'testusername'
        m.password = 'password'
        m.access_level = 'employee'
        expect(m.id).toEqual(6);
        expect(m.first_name).toEqual('Max');
        expect(m.last_name).toEqual('Duna');
        expect(m.phone_number).toEqual('123-456-7890');
        expect(m.username).toEqual('testusername');
        expect(m.password).toEqual('password');
        expect(m.access_level).toEqual('employee');
    });

    it('can be created correctly', async () => {
        // create new post model instance
        const user: UserInterface = new UserModel();
        // set some test properties
        user.id = 6;
        user.first_name = 'John';
        user.last_name = 'Doe';
        user.phone_number = '1234567890';
        user.username = 'donutlover7';
        user.password = 'ilovedonuts'
        user.access_level = 'customer'
        // save test post to in-memory db
        await user.save();
        // find inserted post by title
        const userInDb: UserInterface | null = await UserModel.findOne({
            id: 6,
        }).exec();
        console.log('User found from memory-db', userInDb);
        // check that title is expected
        expect(userInDb).toBeDefined();
        if (userInDb) {
            expect(userInDb.id).toEqual(6);
            expect(userInDb.first_name).toEqual('John');
            expect(userInDb.last_name).toEqual('Doe');
            expect(userInDb.phone_number).toEqual('1234567890');
            expect(userInDb.username).toEqual('donutlover7');
            expect(userInDb.password).toEqual('ilovedonuts');
            expect(userInDb.access_level).toEqual('customer');
        }
    });
});