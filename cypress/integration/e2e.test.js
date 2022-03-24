describe('Home page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Navigates to Home Page correctly', () => {
        cy.get('Button').contains('Log In')
        cy.contains('a')
    })

    it('Home Page logo click navigates properly', () => {
        cy.get('a')
        cy.get('a').click()
        cy.location('pathname').should('eq', '/store')
    })

    it('Home Page log in navigates properly correctly', () => {
        cy.get('Button').contains('Log In')
        cy.get('Button').click()
        cy.location('pathname').should('eq', '/login')
    })
})


describe('Login page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('Navigates to Login page correctly', () => {
        cy.get('Button').contains('Home')
        cy.get('form').contains('Username')
        cy.get('form').contains('Password')
        cy.get('form').contains('Submit')
        cy.get('a').contains('Sign up?')
    })
    
    it('Sign up navigates to sign up page properly', () => {
        cy.get('a').contains('Sign up?').click()
        cy.location('pathname').should('eq', '/signup')
    })

    it('Entered correct values for sign in', () => {
        cy.get('[id=uname]').type('mdunaevs')
        cy.get('[id=pass]').type('pasword')
        cy.get('form').submit()
        cy.location('pathname').should('eq', '/login')
    })

    it('Entered incorrect values for sign in', () => {
        cy.get('[id=uname]').type('mdunaevs')
        cy.get('[id=pass]').type('WRONGpasword')
        cy.get('form').submit()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Incorrect information entered');
         })
        cy.location('pathname').should('eq', '/login')
    })
})

describe('Sign up page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
    })

    it('Navigates to Sign up page correctly', () => {
        cy.get('Button').contains('Cancel')
        cy.get('form').contains('First name')
        cy.get('form').contains('Last name')
        cy.get('form').contains('Email')
        cy.get('form').contains('Phone Number')
        cy.get('form').contains('Username')
        cy.get('form').contains('Password')
        cy.get('form').contains('User Type')
        cy.get('form').contains('Submit')
    })

    it('Navigates to home page correctly', () => {
        cy.get('Button').contains('Cancel').click()
        cy.location('pathname').should('eq', '/')
    })
    
    it('Entered correct values for sign up', () => {
        cy.get('[id=fname]').type('Cypress')
        cy.get('[id=lname]').type('Tester')
        cy.get('[id=email]').type('cypresstester@gmail.com')
        cy.get('[id=phone]').type('1234567890')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('[id=utypes]').select('Donut Store Customer')
        cy.get('form').submit()
        cy.location('pathname').should('eq', '/signup')
    })

    it('Entered incorrect values for sign up', () => {
        cy.get('[id=fname]').type('Cypress')
        cy.get('[id=lname]').type('Tester')
        cy.get('[id=email]').type('cypresstester@gmail.com')
        cy.get('[id=phone]').type('1234567890')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=utypes]').select('Donut Store Customer')
        cy.get('form').submit()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('All values must be entered');
         })
        cy.location('pathname').should('eq', '/signup')
    })
})

describe('Store page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/store')
    })

    it('Navigates to store page correctly', () => {
        cy.get('Button').contains('Checkout')
        cy.contains('SFD')
        cy.contains('Glazed')
        cy.contains('Chocolate frosting')
    })

    it('Navigates to checkout page correctly', () => {
        cy.get('Button').contains('Checkout').click()
        cy.location('pathname').should('eq', '/checkout')
    })

    it('Adds items to cart correctly', () => {
        cy.contains('SFD').get('Button').contains('+').click()
        cy.contains('SFD').get('Button').contains('+').click()
        cy.get('Button').contains('Checkout').click()
        cy.location('pathname').should('eq', '/checkout')
        cy.contains('SFD ($2) x2');
    })
})


describe('Checkout page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/store')
        cy.contains('SFD').get('Button').contains('+').click()
        cy.contains('SFD').get('Button').contains('+').click()
        cy.get('Button').contains('Checkout').click()
    })

    it('Navigates to checkout page correctly', () => {
        cy.get('Button').contains('Place Order')
        cy.contains('Delivery Details')
        cy.contains('Name')
        cy.contains('Address')
        cy.contains('Credit Card Details')
        cy.contains('Name')
        cy.contains('Number')
        cy.contains('Expiration Date')
        cy.contains('Security Code')
        cy.contains('SFD ($2) x2');
    })

    it('Places order correctly', () => {
        cy.get('[id=ddname]').type('Cypress Tester')
        cy.get('[id=address]').type('5555 Beeler St.')
        cy.get('[id=ccname]').type('Cypress Tester')
        cy.get('[id=cardnum]').type('1234567890')
        cy.get('[id=expdate]').type('05/30')
        cy.get('[id=seccode]').type('999')
        cy.get('Button').contains('Place Order').click()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Order submitted!');
         })
    })

    it('Places order incorrectly', () => {
        cy.get('[id=ddname]').type('Cypress Tester')
        cy.get('[id=address]').type('5555 Beeler St.')
        cy.get('[id=ccname]').type('Cypress Tester')
        cy.get('[id=cardnum]').type('1234567890')
        cy.get('[id=expdate]').type('05/30')
        cy.get('Button').contains('Place Order').click()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Please fill out all information.');
         })
    })
})


describe('Order Status page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/store')
        cy.contains('SFD').get('Button').contains('+').click()
        cy.contains('SFD').get('Button').contains('+').click()
        cy.get('Button').contains('Checkout').click()
        cy.get('[id=ddname]').type('Cypress Tester')
        cy.get('[id=address]').type('5555 Beeler St.')
        cy.get('[id=ccname]').type('Cypress Tester')
        cy.get('[id=cardnum]').type('1234567890')
        cy.get('[id=expdate]').type('05/30')
        cy.get('[id=seccode]').type('999')
        cy.get('Button').contains('Place Order').click()
        cy.visit('http://localhost:3000/orderstatus')
    })

    it('Navigates to order status correctly', () => {
        cy.get('Button').contains('Received Order')
        cy.contains('Estimated Arrival Time')
        cy.contains('Delivery details')
        cy.contains('Meet at Location');
        cy.contains('5555 Beeler St., Pittsburgh, PA 15217')
        cy.contains('Order details')
        cy.contains('SFD x 2');
    })

    it('Recieves order', () => {
        cy.get('Button').contains('Received Order').click()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Order still being completed by store');
         })
    })
})


// Owner E2E tests
describe('Admin store page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('mdunaevs')
        cy.get('[id=pass]').type('password')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/adddonut')
        cy.get('[id=dname]').type('Cypress Donut')
        cy.get('[id=desc]').type('Cypress donut test')
        cy.get('[id=imgurl]').type('https://testdonut')
        cy.get('[id=price]').type('0.70')
        cy.get('[id=nutinfo]').type('Gluten Free')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/adminstore')
        cy.contains('Cypress Donut')
    })

    it('Navigates to admin store correctly', () => {
        cy.contains('SFD')
        cy.contains('Glazed')
        cy.contains('Chocolate frosting')
        cy.contains('Cypress Donut')
        cy.get('Button').contains('Add Donut')
    })

    it('Disable donut', () => {
        cy.visit('http://localhost:3000/store')
        cy.contains('SFD')
        cy.contains('Glazed')
        cy.contains('Chocolate frosting')
        cy.contains('Cypress Donut')
        cy.visit('http://localhost:3000/adminstore')
        cy.contains('Cypress Donut').click()
        cy.visit('http://localhost:3000/store')
        cy.contains('Glazed')
        cy.contains('Chocolate frosting')
        cy.contains('SFD')
        cy.get('Cypress Donut').should('not.exist');
    })

    it('Visit Add donut page correctly', () => {
        cy.get('Button').contains('Add Donut').click()
        cy.location('pathname').should('eq', '/adddonut')
    })
})

describe('Add donut page tests', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('mdunaevs')
        cy.get('[id=pass]').type('password')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/adddonut')
    })

    it('Navigates to add donut page correctly', () => {
        cy.contains('Donut name')
        cy.contains('Description')
        cy.contains('Image URL')
        cy.contains('Price')
        cy.contains('Nutrition Info')
        cy.get('form').contains('Submit')
        cy.get('Button').contains('Cancel')
    })

    it('Cancel add', () => {
        cy.get('Button').contains('Cancel').click()
        cy.location('pathname').should('eq', '/adminstore')
    })

    it('Create a donut correctly', () => {
        cy.get('[id=dname]').type('Cypress Donut')
        cy.get('[id=desc]').type('Cypress donut test')
        cy.get('[id=imgurl]').type('https://testdonut')
        cy.get('[id=price]').type('0.70')
        cy.get('[id=nutinfo]').type('Gluten Free')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/adminstore')
        cy.contains('Cypress Donut')
    })

    it('Create a donut incorrectly', () => {
        cy.get('[id=dname]').type('Cypress Donut')
        cy.get('[id=desc]').type('Cypress donut test')
        cy.get('[id=imgurl]').type('https://testdonut')
        cy.get('[id=nutinfo]').type('Gluten Free')
        cy.get('form').submit()
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Incorrect information entered');
         })
    })
})

describe('Store order history page', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('mdunaevs')
        cy.get('[id=pass]').type('password')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/storeorderhistory')
    })

    it('Navigates to add donut page correctly', () => {
        cy.contains('Purchases')
        cy.contains('John Doe')
        cy.contains('12321321')
        cy.contains('$5.83')
        cy.contains('03-22-2022')
    })
})