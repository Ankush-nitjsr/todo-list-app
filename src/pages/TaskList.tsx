import { useTasks } from "../context/TaskContext";
import { TaskItem } from "../features/task-item/TaskItem";
import { Task } from "../types/Task";

export const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task: Task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};
