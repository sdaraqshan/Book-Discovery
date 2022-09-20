import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/system";
import { theme } from "../src/themes/theme";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/organisms/header/index";
import Body from "./components/templates/body/body";
import { SearchContext } from "./contexts/searchContext";
import { PageStateContext } from "./contexts/pageStateContext";
import { PageNavigationContext } from "./contexts/pageNavigationContext";
import Constants from "./data/constants";

const App = () => {
  const [search_value, setSearchValue] = useState<string>("");
  const [page_state, setPageState] = useState<string>(
    Constants.header_state.HOME
  );
  const [is_navigated, setPageNavigation] = useState<boolean>(false);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <SearchContext.Provider value={{ search_value, setSearchValue }}>
        <PageStateContext.Provider value={{ page_state, setPageState }}>
          <PageNavigationContext.Provider
            value={{ is_navigated, setPageNavigation }}
          >
            <Header />
            <div
              style={{
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <Body />
            </div>
          </PageNavigationContext.Provider>
        </PageStateContext.Provider>
      </SearchContext.Provider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
