import { useState } from "react";

export function useAutoCollapse() {
  const [expanded, setExpanded] = useState(true);

  function changeExpanded(_event: any, isExpanded: boolean) {
    setExpanded(isExpanded);
  }

  function autoCollapse() {
    setExpanded(false);
  }

  return { expanded, changeExpanded, autoCollapse };
}
