import { ExoticComponent } from 'react';

export type MoreActionsItem = MoreActionsButton | MoreActionsSeparator;

export type MoreActionsButton = {
  icon: ExoticComponent;
  text: string;
  destructive?: boolean;
  onClick: () => void;
};

export type MoreActionsSeparator = { separator: boolean };

export function isSeparator(
  item: MoreActionsItem,
): item is MoreActionsSeparator {
  return Object.prototype.hasOwnProperty.call(item, 'separator');
}
