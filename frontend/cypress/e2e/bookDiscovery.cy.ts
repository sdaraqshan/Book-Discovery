import {
  Dependencies,
  RobotEyes,
  RobotHands,
} from "../robots/RobotPage/home.cy";

context("Book-Discovery App", () => {
  const robotHands = new RobotHands();
  const robotEyes = new RobotEyes();
  const dependencies = new Dependencies();

  Cypress.on("uncaught:exception", () => {
    return false;
  });

  describe("book discovery details", () => {
    it("On Home page", () => {
      dependencies.visitHomePage();
      robotEyes.seesPathNameInUrl("/");
      it("assert books-reading-list"),
        () => {
          robotEyes.seesElementWithId(
            "books-reading-list",
            "Books You are Reading"
          );
        };
    });

    it("Should check for banner heading", () => {
      robotEyes.seesElementWithId("banner-heading", "Discover Books");
    });

    it("Should check for tracker", () => {
      robotEyes.seesElement("tracker-list");
    });
  }),
    describe("Search functionality", () => {
      it("Should search for placeholder as chemistry ", () => {
        robotHands.typeTextinSearchBar();
        robotHands.clickPropElement("button", "See all results");
        robotEyes.seesPathNameInUrl("/searchResults");
        it("assert author name"),
          () => {
            robotEyes.seesElementWithId(
              "search-result-card-author-name",
              "J D Lee"
            );
          };
      });
    }),
    describe("Bookmark functionality", () => {
      it("Should Add a book to bookmarked list", () => {
        robotHands.clickElement("bookmark1");
      });

      it("Should go to description page of the book", () => {
        robotHands.clickElement("search-results1");
        robotEyes.seesPathNameInUrl("/book-description");
        it("assert card-language"),
          () => {
            robotEyes.seesElementWithId(
              "book-description-card-language",
              "English"
            );
          };
      });

      it("Go to home page", () => {
        robotHands.clickOnHomeButton();
        robotEyes.seesPathNameInUrl("/");
        robotEyes.seesElement("tracker-list");
        it("assert books-reading-list"),
          () => {
            robotEyes.seesElementWithId(
              "books-reading-list",
              "Books You are Reading"
            );
          };
         const bookmarkedTrackerValue = robotEyes.getBookmarkedTrackerCount();

         robotEyes.seesElementVisible(bookmarkedTrackerValue);
         robotEyes.seesTextInElementCount(bookmarkedTrackerValue, "4");
      });

      it("Go to see all bookmarked/currently-reading books section- my Library", () => {
        robotHands.clickOnLibraryButton();
        robotEyes.seesPathNameInUrl("/library");
      });
    }),
    describe("Reading functionality", () => {
      it("Should go to description page of the book", () => {
        robotHands.clickElement("image-1");
        robotEyes.seesPathNameInUrl("/book-description");
        it("assert card-language"),
          () => {
            robotEyes.seesElementWithId(
              "book-description-card-language",
              "English"
            );
          };
      });

      it("Should Add book to Reading", () => {
        robotHands.clickOnStartReadingButton();
        robotEyes.seesElementWithId("stop-reading", "Stop Reading");
      });

      it("Go to home page", () => {
        robotHands.clickOnHomeButton();
        robotEyes.seesPathNameInUrl("/");
        robotEyes.seesElement("tracker-list");

        it("assert books-reading-list"),
          () => {
            robotEyes.seesElementWithId(
              "books-reading-list",
              "Books You are Reading"
            );
          };
        const startReadingTrackerValue =
          robotEyes.getStartReadingTrackerCount();

        robotEyes.seesElementVisible(startReadingTrackerValue);
        robotEyes.seesTextInElementCount(startReadingTrackerValue, "6");
      });

      it("Go to see all bookmarked/currently-reading books section- my Library", () => {
        robotHands.clickOnLibraryButton();
        robotEyes.seesPathNameInUrl("/library");
      });

      it("Should go to description page of the book", () => {
        robotHands.clickElement("image-1");
        robotEyes.seesPathNameInUrl("/book-description");
        it("assert card-language"),
          () => {
            robotEyes.seesElementWithId(
              "book-description-card-language",
              "English"
            );
          };
      });

      it("Remove the book from currently Reading", () => {
        robotHands.clickOnStopReadingButton();
        robotEyes.seesElementWithId("start-reading", "Start Reading");
      });

      it("Go to home page", () => {
        robotHands.clickOnHomeButton();
        robotEyes.seesPathNameInUrl("/");
        robotEyes.seesElement("tracker-list");
        it("assert books-reading-list"),
          () => {
            robotEyes.seesElementWithId(
              "books-reading-list",
              "Books You are Reading"
            );
          };
        const stopReadingTrackerValue = robotEyes.getStopReadingTrackerCount();

        robotEyes.seesElementVisible(stopReadingTrackerValue);
        robotEyes.seesTextInElementCount(stopReadingTrackerValue, "3");
      });
    }),
    describe("bookmark functionality", () => {
      it("Should Add a book to bookmarked list", () => {
        robotHands.scrollToView("bookmark-15");
        robotHands.clickElement("bookmark-15");
      });

      it("Check tracker", () => {
        robotHands.scrollToView("tracker-list");
        robotEyes.seesElement("tracker-list");
         const bookmarkedTrackerValue = robotEyes.getBookmarkedTrackerCount();

         robotEyes.seesElementVisible(bookmarkedTrackerValue);
         robotEyes.seesTextInElementCount(bookmarkedTrackerValue, "4");
      });

      it("Should remove the book from bookmarked list", () => {
        robotHands.scrollToView("bookmark-15");
        robotHands.clickElement("bookmark-15");
      });
    }),
    describe("explore functionality", () => {
      it("should navigate to explore tab", () => {
        robotHands.scrollToTop();
        robotEyes.seesElement("tracker-list");
        const unbookmarkedTrackerValue = robotEyes.getUnBookmarkedTrackerCount();
        robotEyes.seesElementVisible(unbookmarkedTrackerValue);
        robotEyes.seesTextInElementCount(unbookmarkedTrackerValue, "3");

        robotHands.clickOnExploreButton();
        robotEyes.seesPathNameInUrl("/explore");
      });

      it("should navigate to subtopics in explore", () => {
        robotHands.clickPropElement(
          "sub-topics-list-subtopic-name",
          "Chemistry"
        );
        robotEyes.seesPathNameInUrl("/searchResults");
        it("assert author name"),
          () => {
            robotEyes.seesElementWithId(
              "search-result-card-author-name",
              "J D Lee"
            );
          };
      });
    }),
    describe("Home page functionality", () => {
      it("Go to home page", () => {
        robotHands.clickOnHomeButton();
        robotEyes.seesPathNameInUrl("/");
        it("assert books-reading-list"),
          () => {
            robotEyes.seesElementWithId(
              "books-reading-list",
              "Books You are Reading"
            );
          };
      });
    });
});








// it("Go to see all bookmarked/currently-reading books section- my Library", () => {
//   robotHands.clickOnLibraryButton();
//   robotEyes.seesPathNameInUrl("/library");
// });
