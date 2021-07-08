import { useState } from "react";

export function useAutoCollapse(initialExpanded: boolean = true) {
  const [expanded, setExpanded] = useState(initialExpanded);

  function changeExpanded(_event: any, isExpanded: boolean) {
    setExpanded(isExpanded);
  }

  function autoCollapse() {
    setExpanded(false);
  }

  return { expanded, changeExpanded, autoCollapse };
}
