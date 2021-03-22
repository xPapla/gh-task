/// <reference types="cypress" />

const searchBox = `input[data-cy=search-box]`;
const searchButton = `button[data-cy=search-button]`;

let id = new Date().valueOf();

const generateRepo = stars => {
  id++;
  return {
    id,
    name: `Repo-${id}`,
    stargazers_count: stars,
    html_url: `http://repo.test/${id}`,
  };
};

describe("Github search", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("should load welcome page", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");
    cy.get("[data-cy=hello]").should("be.visible");
  });

  it("should render search box and search button", () => {
    cy.get(searchBox).should("be.visible");
    cy.get(searchButton).should("be.visible").should("contain.text", "Search");
  });

  it("should handle non-existing user", () => {
    const name = `some-name-123`;
    const encodedName = encodeURIComponent(name);

    cy.intercept("GET", `/users/${encodedName}`, {
      statusCode: 404,
      fixture: "user-not-found.json",
    }).as("apiCall");

    cy.get(searchBox).type(name);
    cy.get(searchButton).click();

    cy.wait("@apiCall");

    cy.location("pathname").should("eq", `/${encodedName}`);
    cy.contains("User not found").should("exist").should("be.visible");
    cy.get(searchBox).should("have.value", name);
  });

  it("should handle existing user with over 100 repos", () => {
    const name = `yeti`;
    const encodedName = encodeURIComponent(name);

    cy.intercept("GET", `/users/${encodedName}/repos`, req => {
      const url = new URL(req.url);
      const qp = url.searchParams;
      switch (qp.get("page")) {
        case "1":
          return req.reply({
            statusCode: 200,
            body: [...new Array(100).keys()].map(generateRepo),
          });
        case "2":
          return req.reply({
            statusCode: 200,
            body: [999, 888, 10].map(generateRepo),
          });
        default:
          return req.reply({ statusCode: 200, body: [] });
      }
    }).as("reposCall");

    cy.intercept("GET", `/users/${encodedName}`, {
      statusCode: 200,
      fixture: "user-103-repos.json",
    }).as("userCall");

    cy.get(searchBox).clear().type(name);
    cy.get(searchButton).click();

    cy.wait(["@userCall", "@reposCall"]);

    cy.location("pathname").should("eq", `/${encodedName}`);
    cy.get(searchBox).should("have.value", name);
    cy.get("[data-cy=user-card]")
      .should("exist")
      .should("be.visible")
      .should("contain.text", "Yeti Bear")
      .should("contain.text", "Some random bio info.");

    cy.get("[data-cy=repos-list] > div")
      .should("have.length", 3)
      .as("repos")
      .first()
      .should("contain.text", "999 ⭐")
      .should("be.visible")
      .next()
      .should("contain.text", "888 ⭐")
      .should("be.visible")
      .next()
      .should("contain.text", "99 ⭐")
      .should("be.visible");
  });

  it("should handle existing user with 0 repos", () => {
    const name = `koala`;
    const encodedName = encodeURIComponent(name);

    cy.intercept("GET", `/users/${encodedName}/repos`, req =>
      req.reply({
        statusCode: 200,
        body: [],
      }),
    ).as("reposCall");

    cy.intercept("GET", `/users/${encodedName}`, {
      statusCode: 200,
      fixture: "user-0-repos.json",
    }).as("userCall");

    cy.get(searchBox).clear().type(name);
    cy.get(searchButton).click();

    cy.wait(["@userCall", "@reposCall"]);

    cy.location("pathname").should("eq", `/${encodedName}`);
    cy.get(searchBox).should("have.value", name);
    cy.get("[data-cy=user-card]")
      .should("exist")
      .should("be.visible")
      .should("contain.text", "Koala The Greatest");

    cy.get("[data-cy=repos-list]").should("not.exist");
    cy.get("[data-cy=no-repos]")
      .should("exist")
      .should("be.visible")
      .should("contain.text", "Nothing to show");
  });

  it("should go back to welcome page", () => {
    cy.get(searchBox).clear().type("{enter}");
    cy.location("pathname").should("eq", "/");
    cy.get("[data-cy=hello]").should("be.visible");
  });
});
