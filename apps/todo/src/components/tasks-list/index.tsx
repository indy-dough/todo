import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';

import Item from '../item';
import EmptyList from '../empty-list';

import { useTasksStore } from '../../stores/tasks';

export default function TasksList() {
  const [enabled, setEnabled] = useState(false);

  const tasks = useTasksStore((state) => state.tasks);
  const moveTask = useTasksStore((state) => state.moveTask);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragEnd: OnDragEndResponder = (data) => {
    if (
      data.destination?.index === undefined ||
      data.destination?.index === null ||
      data.source.index === data.destination.index
    ) {
      return;
    }

    moveTask(tasks[data.source.index], tasks[data.destination.index]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {tasks.length === 0 && <EmptyList />}
      {enabled && tasks.length > 0 && (
        <Droppable
          droppableId="list"
          type="list"
          ignoreContainerClipping={false}
          isCombineEnabled={false}
        >
          {(dropProvided, dropSnapshot) => (
            <div
              ref={dropProvided.innerRef}
              className={`-ml-8 ${
                dropSnapshot.isDraggingOver ? 'pointer-events-none' : ''
              }`}
              {...dropProvided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(dragProvided, dragSnapshot) => (
                    <Item
                      provided={dragProvided}
                      active={dragSnapshot.isDragging}
                      task={task}
                    />
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
}
