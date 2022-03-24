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