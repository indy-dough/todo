import { useState } from 'react';

import { Filter } from '../../types/filter';

import Button from '../common/button';
import IconButton from '../common/icon-button';
import ConfirmModal from '../common/confirm-modal';

import { useTasksStore } from '../../stores/tasks';

import { Trash, Checks } from '@phosphor-icons/react';

type FilterPanelProps = {
  className?: string;
};

export default function FilterPanel({ className }: FilterPanelProps) {
  const [remove, setRemove] = useState(false);
  const [complete, setComplete] = useState(false);

  const filter = useTasksStore((state) => state.filter);
  const updateFilter = useTasksStore((state) => state.updateFilter);
  const removeAllTasks = useTasksStore((state) => state.removeAllTasks);
  const completeAllTasks = useTasksStore((state) => state.completeAllTasks);

  const onClick = (completed: Filter['completed']) => () => {
    updateFilter({ ...filter, completed });
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 ${className || ''}`}
    >
      <div className="flex gap-2 items-center">
        <Button pressed={filter.completed === 'all'} onClick={onClick('all')}>
          all
        </Button>
        <Button
          pressed={filter.completed === 'active'}
          onClick={onClick('active')}
        >
          active
        </Button>
        <Button
          pressed={filter.completed === 'completed'}
          onClick={onClick('completed')}
        >
          completed
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <IconButton
          icon={Trash}
          title="Delete all tasks"
          onClick={() => setRemove(true)}
        />
        <IconButton
          icon={Checks}
          title="Complete all tasks"
          onClick={() => setComplete(true)}
        />
      </div>

      {remove && (
        <ConfirmModal
          title="Are you sure you want to delete all tasks?"
          confirmText="Delete"
          onClose={() => setRemove(false)}
          onConfirm={removeAllTasks}
        />
      )}
      {complete && (
        <ConfirmModal
          title="Are you sure you want to complete all tasks?"
          confirmText="Complete"
          onClose={() => setComplete(false)}
          onConfirm={completeAllTasks}
        />
      )}
    </div>
  );
}
