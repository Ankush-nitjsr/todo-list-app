import { useTasks } from "../../context/TaskContext";

export const useCompleteTask = () => {
  const { toggleComplete } = useTasks();

  const handleToggleCompleteTask = (id: string) => {
    toggleComplete(id);
  };

  return { handleToggleCompleteTask };
};
