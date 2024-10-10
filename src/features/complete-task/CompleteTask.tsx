import { Task } from "../../types/Task";
import { useCompleteTask } from "./useCompleteTask";

interface CompleteTaskProps {
  task: Task;
}

export const CompleteTask = ({ task }: CompleteTaskProps) => {
  const { handleToggleCompleteTask } = useCompleteTask();

  return (
    <div className="complete-task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleCompleteTask(task.id)}
        className="complete-checkbox"
      />
    </div>
  );
};
