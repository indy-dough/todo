import { RefObject, useEffect } from 'react';

export default function useOutsideClose(
  ref: RefObject<HTMLElement>,
  onClose: () => void,
  options?: { disabled?: boolean }
) {
  useEffect(() => {
    if (options?.disabled) {
      return;
    }

    const onMouseDown = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Element &&
        !ref.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [options?.disabled, onClose]);
}
