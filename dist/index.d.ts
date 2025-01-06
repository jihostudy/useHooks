/**
 * Hook to close a modal when the 'Escape' key is pressed
 * @template F - The type of the callback function
 * @param value - A boolean indicating whether the modal is open
 * @param callback - A callback function to execute when 'Escape' is pressed
 */
declare const useEscClose: <F extends (...args: any[]) => any>(value: boolean, callback: F) => void;
export default useEscClose;
