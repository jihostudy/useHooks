import * as React from "react";

/**
 * Hook to close Conditional Element when the 'Escape' key is pressed
 *
 *
 * @template F - The type of the callback function
 * @param value - A boolean indicating whether the modal is open
 * @param callback - A callback function to execute when 'Escape' is pressed
 *
 * @example
 * const Modal = () => {
 *  const [isOpen, setIsOpen] = useState<boolean>(false);
 *
 *  const handleOpen = () => {
 *    setIsOpen(true);
 *  }
 *
 *  const handleClose = () => {
 *    setIsOpen(false);
 *  }
 *
 *  useEscClose(isOpen,handleClose); // Activating this component to close on ESC
 * }
 */
export const useEscClose = <F extends (...args: any[]) => any>(
  value: boolean,
  callback: F
): void => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (value && event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value, callback]);
};
