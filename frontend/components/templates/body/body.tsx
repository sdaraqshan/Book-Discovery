import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExplorePage from "../../pages/explore";
import HomePage from "../../pages/home";
import { TrackerContext } from "../../../contexts/trackerContext";
import LandingPage from "../../pages/landingPage";
import { bookIDContext } from "../../../contexts/bookIdContext";
import BookDescriptionPage from "../../pages/bookDescription/index";
import FindAllPage from "../../pages/FindAllPage";

export default function Body() {
  const [tracker, setTracker] = useState<number>(0);

  useEffect(() => {
    console.log(tracker);
  }, [tracker]);

  const [book_id, setBookId] = useState<number>(1);

  return (
    <TrackerContext.Provider value={{ tracker, setTracker }}>
      <bookIDContext.Provider value={{ book_id, setBookId }}>
        <div>
          <Routes>
            <Route path="/library" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/book-description" element={<BookDescriptionPage />} />
            <Route path="/searchResults" element={<FindAllPage />} />
          </Routes>
        </div>
      </bookIDContext.Provider>
    </TrackerContext.Provider>
  );
}
