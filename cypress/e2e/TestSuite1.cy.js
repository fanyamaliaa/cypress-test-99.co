describe('Login keDMP IRIB', () => {
  it('Berhasil login dengan kredensial yang benar', () => {
    cy.visit('https://www.99.co/singapore');
    const titles = [
      'Featured Projects',
      'Popular Projects',
      'Find your property value instantly',
      'Listings with videos',
      'View these via video call',
      'Popular listings',
      'Featured stories',
      'Listings found only on 99',
      'Latest New Launches',
      'Explore 99.co'
    ];
  
    titles.forEach(title => {
      it(`should contain H2 title: "${title}"`, () => {
        cy.contains(title).should('be.visible');
      });
    });
  

  });

  });
