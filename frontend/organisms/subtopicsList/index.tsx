import { Stack, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import Image from "../../atoms/image/index";
import { useNavigate } from "react-router-dom";
import API from "../../../api/library";
import {
  SubtopicProp,
  TopicType,
  SubtopicsListProps,
  BookDescriptionProps,
} from "../../../types";
import React, { useEffect, useState } from "react";
import Constants from "../../../data/constants";
import { usePageStateContext } from "../../../contexts/pageStateContext";
import Button from "@mui/material/Button";
import { useSearchContext } from "../../../contexts/searchContext";

export default function SubtopicList(props: SubtopicsListProps) {
  const [topic, setTopic] = useState<TopicType>(Constants.topic_details);
  const [books, setBooks] = useState<BookDescriptionProps[]>([
    Constants.book_details,
  ]);
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  let { page_state, setPageState } = usePageStateContext();
  // eslint-disable-next-line prefer-const
  let { search_value, setSearchValue } = useSearchContext();

  const navigateToSearchResultsPage = (category_name: string) => {
    page_state = Constants.header_state.SEARCH;
    setPageState(page_state);
    search_value = category_name;
    setSearchValue(search_value);
    navigate("/searchResults", {
      state: { books: books.filter(checkForSearchValue) },
    });
  };

  const checkForSearchValue = (book: BookDescriptionProps) => {
    return new RegExp("^" + search_value, "i").test(book.categoryDTO.name);
  };

  useEffect(() => {
    const retrieveTopic = async () => {
      try {
        const response = await API.get("categories/topics/" + props.topic_id);
        return response.data;
      } catch {}
    };

    async function getTopic() {
      const fetchedTopic = await retrieveTopic();
      setTopic(fetchedTopic);
    }

    const retrieveBooks = async () => {
      try {
        const response = await API.get("books/");
        return response.data;
      } catch {}
    };
    async function getBooks() {
      const fetched_books = await retrieveBooks();
      setBooks(fetched_books);
    }
    getTopic();
    getBooks();
  }, [props.topic_id]);

  return (
    <Stack
      direction="row"
      data-testid="sub-topics-list"
      spacing={0}
      alignItems="flex-start"
      sx={{ width: "240px", background: `${theme.palette.structural.white}` }}
    >
      <Image
        src={topic.image}
        alt={topic.name}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          marginRight: "16px",
        }}
      />
      <Stack spacing={0}>
        <Typography
          variant="subtitle1"
          data-testid="sub-topics-list-name"
          sx={{
            height: "24px",
            color: `${theme.palette.textColor.highEmphasis}`,
            marginTop: "6px",
            marginBottom: "4px",
          }}
        >
          {topic.name}
        </Typography>
        {topic.subtopics &&
          topic.subtopics.map((subtopic: SubtopicProp) => {
            return (
              <Button
                variant="text"
                key={subtopic.id}
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "flex-start",
                  padding: "0px",
                }}
                onClick={() => navigateToSearchResultsPage(subtopic.name)}
              >
                <Typography
                  variant="body1"
                  data-testid="sub-topics-list-subtopic-name"
                  sx={{
                    height: "22px",
                    color: `${theme.palette.textColor.mediumEmphasis}`,
                    marginTop: "2px",
                    marginBottom: "2px",
                  }}
                >
                  {subtopic.name}
                </Typography>
              </Button>
            );
          })}
      </Stack>
    </Stack>
  );
}
