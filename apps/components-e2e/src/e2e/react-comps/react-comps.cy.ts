describe('components: ReactComps component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactcomps--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactComps!');
    });
});
