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
function useOutsideClick(ref, func, hasBackdrop) {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const isOutside = ref.current && ref.current.contains && !ref.current.contains(target);
      if (isOutside) {
        func();
        if (hasBackdrop === false) {
          event.preventDefault();
        }
      }
    };
    if (hasBackdrop || hasBackdrop === void 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("touchend", handleClickOutside);
    }
    return () => {
      if (hasBackdrop || hasBackdrop === void 0) {
        document.removeEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("touchend", handleClickOutside);
      }
    };
  }, []);
}
export {
  useEscClose,
  useOutsideClick
};
