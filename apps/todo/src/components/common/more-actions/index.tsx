import { useCallback, useMemo, useRef, useState } from 'react';

import { MoreActionsItem, isSeparator } from '../../../types/more-acions';

import useOutsideClose from '../../../hooks/use-outside-close';

import { DotsThree } from '@phosphor-icons/react';

type MoreActionsProps = {
  className?: string;
  items: MoreActionsItem[];
  active?: boolean;
  onChange?: (active: boolean) => void;
};

export default function MoreActions({
  className,
  items,
  active,
  onChange,
}: MoreActionsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const isActive = useMemo(() => active || show, [show, active]);

  const onToggle = useCallback(() => {
    if (active === undefined || onChange === undefined) {
      setShow((show) => !show);
    } else {
      onChange(!active);
    }
  }, [active, onChange]);

  useOutsideClose(ref, onToggle, { disabled: !isActive });

  return (
    <div
      ref={ref}
      className={`relative ${isActive ? 'z-10' : 'z-0'} ${className || ''}`}
    >
      <DotsThree weight="bold" className="cursor-pointer" onClick={onToggle} />

      {isActive && (
        <div className="absolute top-full right-0 bg-white border border-zinc-200 py-1 whitespace-nowrap text-sm rounded-md">
          <ul>
            {items.map((item, index) =>
              isSeparator(item) ? (
                <li key={index}>
                  <hr className="border-zinc-200 my-1" />
                </li>
              ) : (
                <li key={index}>
                  <button
                    className={`py-2 px-4 hover:bg-zinc-100 w-full text-left flex items-center gap-2 ${
                      item.destructive ? 'text-red-500' : ''
                    }`}
                    onClick={() => {
                      onToggle();
                      item.onClick();
                    }}
                  >
                    <item.icon />
                    {item.text}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
