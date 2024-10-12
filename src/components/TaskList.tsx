import { useFilterAndSearchTasks } from "../hooks/useFilterAndSearchTasks";
import { TaskItem } from "../features/task-item/TaskItem";
import { Task } from "../types/Task";

export const TaskList = () => {
  const { filteredTasks } = useFilterAndSearchTasks();

  return (
    <div className="tasks-list min-h-[330px] space-y-4 flex flex-col w-full">
      {filteredTasks === null || filteredTasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        // Reverse the task list to display the latest task at the top
        filteredTasks
          .slice()
          .reverse()
          .map((task: Task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};
