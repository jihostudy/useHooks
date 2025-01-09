import * as React from 'react';
import type { RefObject } from 'react';
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
export declare function useEscClose<F extends (...args: any[]) => any>(value: boolean, callback: F): void;
/** Supported event types. */
export declare function useOutsideClick<F extends (...args: any[]) => any, T extends HTMLElement = HTMLElement>(ref: RefObject<T>, func: F, hasBackdrop?: boolean): React.RefObject<T>;
