/// <reference types="cypress" />

context('Window', () => {
  
    it('Database Interaction', () => {
   
        cy.sqlServer("SELECT * from persons").then(function(result) {

            console.log(result[1][3])
        })


    })

})
