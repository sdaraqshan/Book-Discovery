export type TrackerProps = {
  name:
    | "CURRENTLY READING"
    | "BOOKS TO READ"
    | "BOOKS READ"
    | "TARGET PER YEAR";
};

export type SearchResultCardProps = {
  book_id: number;
  author_name: string;
  book_title: string;
  book_description: string;
  book_category: string;
  book_rating: number;
  book_ratings: number;
  book_image?: string;
  onClick: (arg: number) => void;
  bookmarkedUpdate?: React.Dispatch<React.SetStateAction<number>>;
};

export type SearchResultItemProps = {
  image: string;
  title: string;
  author: string;
  category: string;
};

export type BooksReadingProps = {
  book_id: number;
};

export type BookDetailType = {
  title: string;
  author: string;
  subtopic: string;
  pages: number;
  reviews: number;
  rating: number;
};

export type ReviewProps = {
  image: string;
  title: string;
  designation: string;
  rating: number;
  comment: string;
};

export type ReviewDetailsProps = {
  title: string;
  designation: string;
  rating: number;
};

export type BatchmateType = {
  title: string;
  author?: string;
  subtopic: string;
  pages?: number;
  reviews: number;
  rating: number;
};

export type SubtopicProp = {
  id: number;
  name: string;
};

export type TopicType = {
  id: number;
  name: string;
  image: string;
  subtopics: {
    id: number;
    name: string;
  }[];
};

export type SubtopicsListProps = {
  topic_id: number;
};

export type TrackerType = {
  currently_reading: number;
  books_to_read: number;
  books_read: number;
  target_per_year: number;
};

export type BookDescriptionProps = {
  id: number;
  title: string;
  authorDTO: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  categoryDTO: {
    id: number;
    name: string;
  };
  releaseDate: string;
  language: string;
  description: string;
  pages: number;
  image: string;
};

export type ListProps = {
  items: Array<number>;
  margin: string;
  title: string;
  fetch?: React.Dispatch<React.SetStateAction<number>>;
};

export type HomeHeadingProps = {
  title: string;
};

export type HomeTopicType = {
  id: number;
  image: string;
  name: string;
};

export type BooksListProps = {
  items: Array<number>;
  title: string;
};

export type BooksProps = {
  book_id: number;
};

export type UserBookProps = {
  bookId: number;
  user: null;
  bookState: {
    stateId: number;
    stateName: string;
  };
  pagesLeft: number;
  rating: number;
  reviewComment: null;
  status: {
    read: boolean;
    reading: boolean;
    bookmarked: boolean;
  };
};
