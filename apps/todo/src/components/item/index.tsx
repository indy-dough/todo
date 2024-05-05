import { memo, useMemo, useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

import { Task } from '../../types/task';
import { MoreActionsItem } from '../../types/more-acions';

import Checkbox from '../common/checkbox';
import MoreActions from '../common/more-actions';

import { useTasksStore } from '../../stores/tasks';

import {
  DotsSixVertical,
  ArrowUp,
  ArrowDown,
  Trash,
} from '@phosphor-icons/react';

type ItemProps = {
  task: Task;
  active: boolean;
  provided: DraggableProvided;
};

export default memo(function Item({ task, provided, active }: ItemProps) {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);
  const isActive = useMemo(
    () => active || show || focus,
    [active, show, focus]
  );

  const completeTask = useTasksStore((state) => state.completeTask);
  const updateTask = useTasksStore((state) => state.updateTask);
  const removeTask = useTasksStore((state) => state.removeTask);
  const moveTaskToTop = useTasksStore((state) => state.moveTaskToTop);
  const moveTaskToBottom = useTasksStore((state) => state.moveTaskToBottom);

  const items: MoreActionsItem[] = [
    {
      icon: ArrowUp,
      text: 'Move to the top',
      onClick: () => moveTaskToTop(task),
    },
    {
      icon: ArrowDown,
      text: 'Move to the bottom',
      onClick: () => moveTaskToBottom(task),
    },
    { separator: true },
    {
      icon: Trash,
      text: 'Delete',
      destructive: true,
      onClick: () => removeTask(task.id),
    },
  ];

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      style={provided.draggableProps.style}
      className={`group flex items-center gap-2 p-2 border bg-white ${
        isActive ? 'border-zinc-200' : 'border-transparent'
      } hover:border-zinc-200 rounded-md`}
    >
      <div
        className={isActive ? 'visible' : 'invisible group-hover:visible'}
        {...provided.dragHandleProps}
      >
        <DotsSixVertical weight="bold" className="cursor-grab" />
      </div>
      <Checkbox
        checked={task.completed}
        onChange={() => completeTask(task.id)}
      />
      <div className="grow">
        <input
          value={task.title}
          className="w-full focus:bg-zinc-100 outline-none py-1 px-2 rounded-sm"
          onChange={(e) => updateTask(task.id, e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      <MoreActions
        className={isActive ? 'visible' : 'invisible group-hover:visible'}
        items={items}
        active={show}
        onChange={setShow}
      />
    </div>
  );
});
