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
        expect(m.first_name).toContain('Max');
        expect(m.last_name).toEqual('Duna');
        expect(m.phone_number).toContain('123-456-7890');
        expect(m.email).toEqual('testemail@gmail.com');
    });
    it('can be created correctly', () => __awaiter(this, void 0, void 0, function* () {
        // expect that two assertions will be made
        expect.assertions(3);
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
            expect(customerInDb.first_name).toContain('John');
            expect(customerInDb.last_name).toEqual('Doe');
            expect(customerInDb.phone_number).toContain('1234567890');
            expect(customerInDb.email).toEqual('fakeemail@gmail.com');
        }
    }));
});
