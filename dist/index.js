// src/index.ts
import * as React from "react";
function useEscClose(value, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (value && event.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value, callback]);
}
export {
  useEscClose
};
