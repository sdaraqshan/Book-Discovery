import React, { useEffect, useRef } from "react";
import ExtendedNav from "../../organisms/extendedNav";
import { usePageNavigationContext } from "../../../contexts/pageNavigationContext";
import { useSearchContext } from "../../../contexts/searchContext";

export default function ExplorePage() {
  const { setPageNavigation } = usePageNavigationContext();
  const nav_state = useRef<boolean>(true);
  const { search_value } = useSearchContext();

  useEffect(() => {
    setPageNavigation(nav_state.current);
    nav_state.current = false;
  }, [search_value, setPageNavigation]);

  return <ExtendedNav />;
}
