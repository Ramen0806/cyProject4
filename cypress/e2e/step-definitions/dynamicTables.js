
const {  Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../pages/TGDynamicTable')


const dynamicTables = new TGDynamicTables()


Then(/^the user should see the “Inventory” heading$/, () => {
	dynamicTables.getPageHeading().should('be.visible')
})


Then(/^the user should see the table with the "([^"]*)" below$/, (datatable) => {

    const headers = datatable.rawTable.flat()

    dynamicTables.getTableHeader().each((el,index) => {
        cy.wrap(el).should('include',headers[index])
    })
})




