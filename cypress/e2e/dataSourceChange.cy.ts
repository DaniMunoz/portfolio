// cypress/integration/app.spec.js

describe("User chooses MongoDB", () => {
  it("should load MongoDB data", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // Find the DatasourceSelector in BackendList component and choose 'MongoDB'
    cy.get('[role="DatasourceSelector"]').click();
    cy.get("span").contains("MongoDB").click();
    // The new page first project card should contain a MongoDB badge "
    cy.get('[role="projectCard"]').contains("MongoDB");
  });
});

describe("User chooses AWS Lambda + DynamoDB", () => {
  it("should load AWS data", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // Find the DatasourceSelector in BackendList component and choose 'MongoDB'
    cy.get('[role="DatasourceSelector"]').click();
    cy.get("span").contains("AWS Lambda + DynamoDB").click();
    // The new page first project card should contain a MongoDB badge "
    cy.get('[role="projectCard"]').contains("AWS_Lambda");
  });
});

describe("User chooses Google Firebase", () => {
  it("should load Google Firebase data", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // Find the DatasourceSelector in BackendList component and choose 'MongoDB'
    cy.get('[role="DatasourceSelector"]').click();
    cy.get("span").contains("Google Firebase").click();
    // The new page first project card should contain a MongoDB badge "
    cy.get('[role="projectCard"]').contains("Google_Firebase");
  });
});

describe("User chooses Supabase + Prisma + PostgreSQL", () => {
  it("should load Supabase data", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // Find the DatasourceSelector in BackendList component and choose 'MongoDB'
    cy.get('[role="DatasourceSelector"]').click();
    cy.get("span").contains("Supabase + Prisma + PostgreSQL").click();
    // The new page first project card should contain a MongoDB badge "
    cy.get('[role="projectCard"]').contains("Supabase");
  });
});

describe("User chooses NextJS JSON Local files", () => {
  it("should load NextJS JSON Local files data", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // Find the DatasourceSelector in BackendList component and choose 'MongoDB'
    cy.get('[role="DatasourceSelector"]').click();
    cy.get("span").contains("NextJS JSON Local files").click();
    // The new page first project card should contain a MongoDB badge "
    cy.get('[role="projectCard"]').contains("NodeJS");
  });
});

export {};
