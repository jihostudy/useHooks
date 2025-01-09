import * as React from 'react'
import type { RefObject } from 'react'

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
export function useEscClose<F extends (...args: any[]) => any>(value: boolean, callback: F): void {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (value && event.key === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [value, callback])
}

/** Supported event types. */
// type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'focusin' | 'focusout'

export function useOutsideClick<F extends (...args: any[]) => any, T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  func: F,
  hasBackdrop?: boolean,
  // ignoreElement?: IgnoreElementType,
) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      const isOutside = ref.current && ref.current.contains && !ref.current.contains(target)
      if (isOutside) {
        func()
        if (hasBackdrop === false) {
          event.preventDefault()
        }
      }
    }

    if (hasBackdrop || hasBackdrop === undefined) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.addEventListener('touchend', handleClickOutside)
    }
    return () => {
      if (hasBackdrop || hasBackdrop === undefined) {
        document.removeEventListener('mousedown', handleClickOutside)
      } else {
        document.removeEventListener('touchend', handleClickOutside)
      }
    }
  }, [])
}

// type IgnoreElementType =
//   | (Element | string | HTMLElement)[]
//   | string
//   | HTMLCollectionOf<Element>
//   | NodeList
//   | Element
//   | HTMLElement
//   | Node
// function isContain(ignoreElement?: IgnoreElementType, target?: any): boolean {
//   if (!ignoreElement) return false

//   if (Array.isArray(ignoreElement)) {
//     for (const item of ignoreElement) {
//       if (isContain(item, target)) {
//         return true
//       }
//     }
//     return false
//   } else if (typeof ignoreElement === 'string') {
//     const ele = document.querySelector(ignoreElement)
//     return !!ele?.contains(target)
//   } else if (ignoreElement instanceof HTMLCollection || ignoreElement instanceof NodeList) {
//     for (let i = 0; i < ignoreElement.length; i++) {
//       const item = ignoreElement[i]
//       if (isContain(item, target)) {
//         return true
//       }
//     }
//     return false
//   } else if (
//     ignoreElement instanceof HTMLElement ||
//     ignoreElement instanceof Element ||
//     ignoreElement instanceof Node
//   ) {
//     if (ignoreElement instanceof Node) {
//       const element = ignoreElement.parentElement
//       return !!element && element.contains(target)
//     }

//     return (ignoreElement as Element).contains(target)
//   } else {
//     return false
//   }
// }
