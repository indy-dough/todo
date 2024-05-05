import { create } from 'zustand';
import { v4 as uuid } from 'uuid';

import { Task } from '../../types/task';
import { Filter } from '../../types/filter';

type TasksStore = {
  filter: Filter;
  tasks: Task[];
  updateFilter: (filter: Filter) => void;
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  removeAllTasks: () => void;
  completeTask: (id: string) => void;
  completeAllTasks: () => void;
  moveTask: (sourceTask: Task, destinationTask: Task) => void;
  moveTaskToTop: (task: Task) => void;
  moveTaskToBottom: (task: Task) => void;
};

let tasks: Task[] = [
  { id: '1', title: 'task 1', completed: false },
  { id: '2', title: 'task 2', completed: false },
  { id: '3', title: 'task 3', completed: true },
];

function filterTasks(tasks: Task[], filter: Filter) {
  if (filter.completed === 'active') {
    return tasks.filter(({ completed }) => !completed);
  }
  if (filter.completed === 'completed') {
    return tasks.filter(({ completed }) => completed);
  }

  return tasks;
}

export const useTasksStore = create<TasksStore>((set, get) => ({
  tasks,
  filter: { completed: 'all' },
  updateFilter: (filter) => {
    set(() => {
      return { filter, tasks: filterTasks(tasks, filter) };
    });
  },
  addTask: (title) => {
    tasks = [...tasks, { id: uuid(), title, completed: false }];
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  updateTask: (id, title) => {
    tasks = tasks.map((item) => (item.id === id ? { ...item, title } : item));
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  removeTask: (id: string) => {
    tasks = tasks.filter((task) => task.id !== id);
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  removeAllTasks: () => {
    tasks = [];
    set({ tasks: [] });
  },
  completeTask: (id) => {
    tasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  completeAllTasks: () => {
    tasks = tasks.map((item) =>
      !item.completed ? { ...item, completed: true } : item,
    );
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  moveTask: (sourceTask, destinationTask) => {
    const originalSourceIndex = tasks.findIndex(
      (task) => task.id === sourceTask.id,
    );
    const originalDestinationIndex = tasks.findIndex(
      (task) => task.id === destinationTask.id,
    );

    tasks.splice(originalSourceIndex, 1);
    tasks.splice(originalDestinationIndex, 0, sourceTask);

    set({ tasks: filterTasks(tasks, get().filter) });
  },
  moveTaskToTop: (task) => {
    tasks = [task, ...tasks.filter(({ id }) => id !== task.id)];
    set({ tasks: filterTasks(tasks, get().filter) });
  },
  moveTaskToBottom: (task) => {
    tasks = [...tasks.filter(({ id }) => id !== task.id), task];
    set({ tasks: filterTasks(tasks, get().filter) });
  },
}));
