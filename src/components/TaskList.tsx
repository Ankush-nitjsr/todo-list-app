import { useFilterAndSearchTasks } from "../hooks/useFilterAndSearchTasks";
import { TaskItem } from "../features/task-item/TaskItem";
import { Task } from "../types/Task";

export const TaskList = () => {
  const { filteredTasks } = useFilterAndSearchTasks();

  return (
    <div className="tasks-list space-y-4 flex flex-col justify-center items-center w-full">
      {filteredTasks === null ? (
        <p>No tasks available</p>
      ) : (
        filteredTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};
