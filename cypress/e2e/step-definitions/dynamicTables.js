
const {  Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../pages/TGDynamicTable')

const dynamicTables = new TGDynamicTables()


Then(/^the user should see the “Inventory” heading$/, () => {
	dynamicTables.getPageHeading().should('be.visible')
})


Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const headers = dataTable.rawTable[0]

	dynamicTables.getTableHeaders().each((el,index) => {
		cy.wrap(el).should('contain', headers[index])
	})
})


Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const rows = dataTable.rawTable

	rows.forEach(row => {
	cy.get('#product_table tbody').contains('td', row[0])
      .next().should('contain', row[1])
      .next().should('contain', row[2])
      .next().should('contain', row[3])
	})
})


Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
	dynamicTables.getAddProductBtn().should('be.enabled')
})



Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	dynamicTables.getTotal().should('contain', total)
})

