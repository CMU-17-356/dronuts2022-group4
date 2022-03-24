
//pages for the employee
describe('Employee Store Notification Tests', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/empnotsys')
    })

    it('Navigates to employee notification system correctly', () => {
        cy.contains("Pending Orders")
        cy.contains("Completed Orders")

    })

})



//pages for the employee
describe('Drone Status Tests', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('[id=uname]').type('cypresstester')
        cy.get('[id=pass]').type('testing101')
        cy.get('form').submit()
        cy.visit('http://localhost:3000/drones')
    })


    it('Navigates to employee notification system correctly', () => {
        cy.contains("Drone Status")
        cy.contains("Drone 1")
        cy.contains("Drone 2")
        cy.contains("Drone 3")
        cy.contains("Drone 4")
        cy.contains("50% battery")
        cy.contains("11% battery")
        cy.contains("Delivering")
        cy.contains("Returning")
        cy.contains("Idle")
        cy.contains("Charging")

    })
})