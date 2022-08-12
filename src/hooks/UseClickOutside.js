import { useEffect, useRef } from "react";

export function useClickOutside(handler) {
  const domNode = useRef();

  useEffect(() => {
    let checkHandler = (e) => {

      if (!domNode.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", checkHandler)

    return () => document.removeEventListener("mousedown", checkHandler);
  }, []);

  return domNode;
}
