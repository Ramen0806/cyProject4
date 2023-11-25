class TGDynamicTables {

    getPageHeading(){
        return cy.get( 'div.mb-2 > h1')
    }


     getTableHeaders(){
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
      return cy.get('#total_amount')
   }

     getTable(){
        return cy.get('#product_table')
     }

}

module.exports = TGDynamicTables
