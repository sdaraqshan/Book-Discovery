import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitHomePage() {
    this.accessUrl(String(Cypress.env("url")));
  }
}

export class RobotEyes extends BaseEyes {
  getElementWithDataTestId(dataTestId: string) {
    return cy.get(`[data-testid=${dataTestId}]`);
  }
  seesElement(id: string) {
    this.seesDomVisibleWithCustomMatcher("data-testid", id);
  }
  seesElementWithId(id: string, text: string) {
    this.seesTextInElement("data-testid", id, text);
  }

  seesBookVisible(book: Cypress.Chainable<JQuery<HTMLElement>>) {
    return this.seesElementVisible(book);
  }

  getStopReadingTrackerCount() {
    const trackers = this.getElementWithDataTestId("tracker-count");
    return trackers.eq(2);
  }

  getStartReadingTrackerCount() {
    const trackers = this.getElementWithDataTestId("tracker-count");
    return trackers.eq(0);
  }

  getBookmarkedTrackerCount() {
    const trackers = this.getElementWithDataTestId("tracker-count");
    return trackers.eq(1);
  }

  getUnBookmarkedTrackerCount() {
    const trackers = this.getElementWithDataTestId("tracker-count");
    return trackers.eq(1);
  }
}

export class RobotHands extends BaseHands {
  typeTextinSearchBar() {
    this.typeTextonDom(
      "placeholder",
      "Search here by book title, author or ISBN",
      "chemistry"
    );
  }

  clickElement(id: string) {
    this.clickOnIdWithMatcher("data-testid", id);
  }

  clickPropElement(id: string, name: string) {
    this.clickOnIdWithProps("data-testid", id, name);
  }

  clickOnHomeButton() {
    this.clickOnIdWithProps("data-testid", "button", "Home");
  }

  clickOnExploreButton() {
    this.clickOnIdWithProps("data-testid", "button", "Explore");
  }

  clickOnLibraryButton() {
    this.clickOnIdWithProps("data-testid", "button", "My library");
  }

  clickOnStartReadingButton() {
    this.clickOnIdWithProps("data-testid", "button", "Start Reading");
  }

  clickOnStopReadingButton() {
    this.clickOnIdWithProps("data-testid", "button", "Stop Reading");
  }

  scrollToCenter() {
    return cy.scrollTo(0, 700, { ensureScrollable: false });
  }

  scrollToView(id: string) {
    // this.clickOnIdWithMatcher("data-testid", id).scrollIntoView();
    return cy.get(`[data-testid=${id}]`).scrollIntoView();
  }

  scrollToTop() {
    return cy.scrollTo("top", { ensureScrollable: false });
  }
}




















 // doesNotseesIdWithProps(id: string){
  //   this.doesNotseesIdVisibleWithProps("data-testid", id);
  // }