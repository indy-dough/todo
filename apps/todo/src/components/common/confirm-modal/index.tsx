import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@todo/idl';

import useOutsideClose from '../../../hooks/use-outside-close';

type ConfirmModalProps = {
  title: string;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmModal({
  title,
  confirmText,
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClose(ref, onClose);

  const onConfirmClick = () => {
    onConfirm();
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 overflow-auto">
      <div className="flex items-center justify-center flex-col min-h-screen">
        <div
          ref={ref}
          className="bg-white w-[400px] p-6 mx-auto rounded-lg my-8"
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <div className="flex items-center justify-end gap-2 mt-4">
            <Button secondary onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onConfirmClick}>{confirmText}</Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
