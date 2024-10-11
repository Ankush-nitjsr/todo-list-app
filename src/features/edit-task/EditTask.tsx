import { Task } from "../../types/Task";
import { useUpdateTask } from "../../hooks/useUpdateTask";

interface EditTaskProps {
  task: Task;
  isEditing: boolean;
  toggleEditMode: () => void;
}

export const EditTask = ({
  task,
  isEditing,
  toggleEditMode,
}: EditTaskProps) => {
  const { updateTaskText } = useUpdateTask(task.id);

  return (
    <div>
      {isEditing ? (
        <button onClick={() => updateTaskText(task, task.task)}>💾</button>
      ) : (
        <button onClick={toggleEditMode}>✏️</button>
      )}
    </div>
  );
};
