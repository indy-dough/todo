import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

import Button from '../common/button';
import Input from '../common/input';

import { useTasksStore } from '../../stores/tasks';

type AddTaskProps = {
  className?: string;
};

export default function AddTask({ className }: AddTaskProps) {
  const [title, setTitle] = useState('');
  const addTask = useTasksStore((state) => state.addTask);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const onAddClick = () => {
    if (!title.trim()) {
      return;
    }

    addTask(title);
    setTitle('');
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onAddClick();
    }
  };

  return (
    <div className={`flex gap-2 ${className || ''}`}>
      <Input
        value={title}
        placeholder="Task title..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button onClick={onAddClick}>add</Button>
    </div>
  );
}
