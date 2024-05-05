import AddTasks from '../../components/add-task';
import FilterPanel from '../../components/filter-panel';
import TasksList from '../../components/tasks-list';

import styles from './style.module.scss';

export default function RootRoute() {
  return (
    <div className="text-zinc-950">
      <div className="sticky top-0 bg-white py-4 z-20">
        <div className={`${styles.container} mx-auto`}>
          <AddTasks />
          <FilterPanel className="mt-4" />
        </div>
      </div>
      <div className={`${styles.container} mx-auto`}>
        <TasksList />
      </div>
    </div>
  );
}
