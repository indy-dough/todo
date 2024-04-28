import { ListChecks } from '@phosphor-icons/react';

export default function EmptyList() {
  return (
    <div className="py-10 flex items-center justify-center gap-2">
      <ListChecks size={20} />
      No tasks
    </div>
  );
}
