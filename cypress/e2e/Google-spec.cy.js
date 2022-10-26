describe('empty spec', () => {
  it('Google search', () => {
    let isResultFind = false;
    const searchValue = 'Cypress Demo Test';
    let SearchvalSplit = searchValue.split(' ');
    cy.visit('https://www.google.com/');

    cy
      .get('img[alt="Google"]')
      .should('be.visible');

    
    cy
      .get('input[name="q"]')
      .type(`${searchValue}{enter}`);

    cy.get('#search .g h3').each(($ele) => {
      if($ele.text().includes(SearchvalSplit)){
        cy.log('PASS:' + $ele.text())
        isResultFind = true
      }
    })

    isResultFind && expect(isResultFind).to.be(true)
  });
})
