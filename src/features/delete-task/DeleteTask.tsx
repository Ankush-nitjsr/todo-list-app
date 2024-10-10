import { Task } from "../../types/Task";
import { useDeleteTask } from "./useDeleteTask";

interface DeleteTaskProps {
  task: Task;
}

export const DeleteTask = ({ task }: DeleteTaskProps) => {
  const { handleDeleteTask } = useDeleteTask();
  return <button onClick={() => handleDeleteTask(task.id)}>x</button>;
};
