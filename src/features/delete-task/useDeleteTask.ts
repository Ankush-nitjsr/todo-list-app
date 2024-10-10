import { useTasks } from "../../context/TaskContext";

export const useDeleteTask = () => {
  const { deleteTask } = useTasks();
  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return { handleDeleteTask };
};
