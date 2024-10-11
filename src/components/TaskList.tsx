import { useTasks } from "../context/TaskContext";
import { TaskItem } from "../features/task-item/TaskItem";
import { Task } from "../types/Task";

export const TaskList = () => {
  const { filteredTasks } = useTasks();
  console.log("filtered tasks", filteredTasks);

  return (
    <div className="tasks-list space-y-4 flex flex-col justify-center items-center w-full">
      {filteredTasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        filteredTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};
