// cypress/integration/app.spec.js

describe("Language", () => {
    it("should navigate to the main page", () => {
      // Start from the index page
      cy.visit("http://localhost:3000/");
  
      // Find a link with an href attribute containing "about" and click it
      //cy.get('a[href*="about"]').click();
      // The new url should include "/about"
      //cy.url().should("include", "/about");

      // Find the languageSelector component and choose 'English'
      cy.get('[role="languageSelector"]').select(0).should('have.value', 'en');
      // The new page should contain an anchor with "Projects"
      cy.get("a").contains("Projects");
      cy.get("a").contains("Degrees & Certifications");
      cy.get("a").contains("Contact");
      cy.get("a").contains("Projects").click();
      cy.get("h1").contains("Projects");
      cy.get("a").contains("Degrees & Certifications").click();
      cy.get("h1").contains("Degrees & Certifications");

      // Find the languageSelector component and choose 'Español'
      cy.get('[role="languageSelector"]').select(1).should('have.value', 'es');
      // The new page should contain an anchor with "Proyectos"
      cy.get("a").contains("Proyectos");
      cy.get("a").contains("Títulos y Certificaciones");
      cy.get("a").contains("Contacto");
      cy.get("a").contains("Proyectos").click();
      cy.get("h1").contains("Proyectos");
      cy.get("a").contains("Títulos y Certificaciones").click();
      cy.get("h1").contains("Títulos y Certificaciones");
    });
  });

  export {}