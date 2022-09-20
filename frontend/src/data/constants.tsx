const Constants = {
  banner: {
    heading: "Discover Books",
    description:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology",
  },
  myLibrary: {
    heading: "Personalized Learning Journeys",
    description:
      "Learning journeys mapped and recommended based on your grade, learning need and speed.",
  },
  author: {
    heading: "About Author",
    name: "By J D Lee",
    followers: "2000 followers",
    description:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
  },
  reading_book_details: {
    title: "Inorganic Chemistry",
    author: "VK Ahulwalia",
    subtopic: " Chemistry",
    pages: 250,
    reviews: 830,
    rating: 4.5,
  },
  batchmate_book_details: {
    title: "Inorganic Chemistry",
    subtopic: " Chemistry",
    reviews: 830,
    rating: 4.5,
  },
  header_state: {
    HOME: "Home",
    EXPLORE: "Explore",
    LIBRARY: "Library",
    SEARCH: "Search Results",
  },
  extendedNav_subtopics: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6],
  ],
  topic_details: {
    id: 0,
    name: "",
    image: "",
    subtopics: [
      {
        id: 0,
        name: "",
      },
    ],
  },
  tracker_details: {
    currently_reading: 0,
    books_to_read: 0,
    books_read: 0,
    target_per_year: 0,
  },
  tracker_constants: {
    CURRENTLY_READING: "CURRENTLY READING",
    BOOKS_TO_READ: "BOOKS TO READ",
    BOOKS_READ: "BOOKS READ",
    TARGET_PER_YEAR: "TARGET PER YEAR",
  },
  book_details: {
    id: 1,
    title: "Inorganic Chemistry",
    authorDTO: {
      id: 1,
      name: "J D Lee",
      description:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      image: "/assets/images/topics/avatar_large_1.png",
    },
    categoryDTO: {
      id: 10,
      name: "Chemistry",
    },
    releaseDate: "12th September 1998",
    language: "English",
    description:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
    pages: 0,
    image: "/assets/images/books/book_large_1.png",
  },
  home_topic_details: {
    id: 9,
    image: "/assets/images/topics/topic_large_1.png",
    name: "GEOGRAPHY",
  },

  review_details: {
    id: 0,
    title: "",
    image: "",
    designation: "",
    rating: 0,
    comment: "",
  },
  following_Reviews: [
    {
      id: 1,
      title: "Anvitha Sharma",
      image: "/assets/images/avatars/avatar_medium_1.png",
      designation: "Student",
      rating: 4.5,
      comment:
        "JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack ",
    },
    {
      id: 2,
      title: "Hannah",
      image: "/assets/images/avatars/avatar_medium_2.png",
      designation: "Student",
      rating: 4.5,
      comment:
        "JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack ",
    },
    {
      id: 3,
      title: "Riya",
      image: "assets/images/avatars/avatar_medium_3.png",
      designation: "Student",
      rating: 4.5,
      comment:
        "JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack ",
    },
  ],
  reviews: [
    {
      id: 1,
      title: "Radha",
      image: ".././assets/images/avatars/avatar_medium_4.png",
      designation: "Professor at Harvard  University",
      rating: 4.5,
      comment:
        "Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    },
    {
      id: 2,
      title: "Mira",
      image: "/assets/images/avatars/avatar_medium_5.png",
      designation: "Professor at Harvard  University",
      rating: 4.5,
      comment:
        "Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    },
    {
      id: 3,
      title: "Mike",
      image: "/assets/images/avatars/avatar_medium_6.png",
      designation: "Professor at Harvard  University",
      rating: 4.5,
      comment:
        "Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    },
    {
      id: 4,
      title: "harsha",
      image: "/assets/images/avatars/avatar_medium_7.png",
      designation: "Professor at Harvard  University",
      rating: 4.5,
      comment:
        "Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the ",
    },
  ],
  user_book_details: {
    bookId: 0,
    user: null,
    bookState: {
      stateId: 0,
      stateName: "",
    },
    pagesLeft: 0,
    rating: 0.0,
    reviewComment: null,
    status: {
      read: false,
      reading: false,
      bookmarked: false,
    },
  },
};

export default Constants;

export const landingPageConstants = {
  title: "Personalized Learning Journeys",
  subTitle:
    "Learning journeys mapped and recommended based on your grade, learning need and speed.",
  buttonContent: "Start your Journey",
};
