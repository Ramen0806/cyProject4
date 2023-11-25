class TGDynamicTables {

    getPageHeading(){
        return cy.get( 'div.mb-2 > h1')
    }


     getTableHeader(){
        return cy.get('#product_table > thead > tr >th')
     }

     getTablebody(){
        return cy.get('#product_table > tbody ')
     }

     addNewProductPopUp() {
        return cy.get('.modal')
     }
     getAddProductBtn(){
         return  cy.get('#add_product_btn')
       }
 
     clickAddProductBtnByText(buttonName) {
         this.getAddProductBtn().contains(buttonName).click()
     }
       getClosePopUpButton(){
         return cy.get('.delete')
     }
     clickClosePopUpBtn() {
         this.getClosePopUpButton().click()
     }

     getTotal(){
        return cy.get('.pt-6')
     }

}

module.exports = TGDynamicTables
