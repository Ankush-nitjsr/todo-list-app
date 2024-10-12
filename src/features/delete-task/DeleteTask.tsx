import { TrashIcon } from "@heroicons/react/24/outline";
import { Task } from "../../types/Task";
import { useDeleteTask } from "./useDeleteTask";

interface DeleteTaskProps {
  task: Task;
}

export const DeleteTask = ({ task }: DeleteTaskProps) => {
  const { handleDeleteTask } = useDeleteTask();
  return (
    <button onClick={() => handleDeleteTask(task.id)}>
      <TrashIcon className="h-5 w-5 text-red-600" />
    </button>
  );
};
