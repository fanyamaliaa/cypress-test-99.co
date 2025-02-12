describe('Web Suite 2 - Popular Projects Links', () => {
  beforeEach(() => {
    cy.visit('https://www.99.co/singapore');
  });

  it('should check that links under "Popular Projects" work as expected', () => {
    cy.contains('h2', 'Popular Projects')
      .parent()
      .find('a')
      .each(($link) => {
        const href = $link.attr('href');
        if (href) {
          cy.request(href).its('status').should('eq', 200);
        }
      });
  });
});
