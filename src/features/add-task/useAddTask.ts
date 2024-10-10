import { useTasks } from "../../context/TaskContext";

export const useAddTask = () => {
  const { addTask } = useTasks();

  const handleAddTask = (task: string) => {
    if (task.trim() === "") return;
    addTask(task);
  };

  return { handleAddTask };
};
