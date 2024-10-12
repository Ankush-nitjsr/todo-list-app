import { Task } from "../../types/Task";
import { useUpdateTask } from "../../hooks/useUpdateTask";
import { CheckCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

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
    <div className="flex items-center">
      {isEditing ? (
        <button onClick={() => updateTaskText(task, task.task)}>
          <CheckCircleIcon className="h-5 w-5" />
        </button>
      ) : (
        <button onClick={toggleEditMode}>
          <PencilSquareIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
