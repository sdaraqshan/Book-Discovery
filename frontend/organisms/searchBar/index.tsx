import { Container, styled } from "@mui/material";
import Search from "../../../../public/assets/images/icons/search.png";
import React from "react";
import theme from "../../../themes/theme";
import { useSearchContext } from "../../../contexts/searchContext";
import SearchResultsDropdown from "../searchResultsDropdown";
import Image from "../../atoms/image/index";
import Close from "../../../../public/assets/images/icons/close.png";

const SearchStyle = styled("div")({
  width: "481px",
  height: "30px",
  borderRadius: "8px",
  padding: "4px 16px 4px 16px",
  display: "flex",
  flexDirection: "row",
  backgroundColor: `${theme.palette.structural.main}`,
  border: `1px solid ${theme.palette.greyColors.main100}`,
  alignItems: "center",
});

const ImageStyled = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: `${theme.palette.greyColors.main300}`,
});

const InputStyled = styled("input")({
  width: "258px",
  height: "30px",
  marginLeft: "4px",
  fontSize: "14px",
  outline: "none",
  border: "none",
  color: `${theme.palette.textColor.mediumEmphasis}`,
  "&:focus": {
    outline: "none",
  },
});

const Searchbar = () => {
  // eslint-disable-next-line prefer-const
  let { search_value, setSearchValue } = useSearchContext();

  return (
    <Container data-testid="searchbar">
      <SearchStyle>
        <ImageStyled>
          <img src={Search} alt="search" width="24px" height="24px" />
        </ImageStyled>
        <InputStyled
          type="text"
          data-testid="text-field"
          placeholder="Search here by book title, author or ISBN"
          onChange={(e) => setSearchValue(e.target.value)}
          value={search_value}
        ></InputStyled>
        {search_value != "" ? (
          <button
            style={{
              width: "24px",
              height: "24px",
              padding: "0px",
              border: "none",
              marginLeft: "167px",
              backgroundColor: `${theme.palette.structural.main}`,
              cursor: "pointer",
            }}
            onClick={closeSearchResults}
          >
            <Image
              src={Close}
              alt="Close"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        ) : (
          <></>
        )}
      </SearchStyle>
      <div>{search_value != "" ? <SearchResultsDropdown /> : <></>}</div>
    </Container>
  );

  function closeSearchResults() {
    setSearchValue("");
  }
};

export default Searchbar;
