import { useTasks } from "../../context/TaskContext";
import { Task } from "../../types/Task";

export const useSearchTasks = (searchTerm: string) => {
  const { tasks } = useTasks();

  if (!searchTerm) return { newFilteredTasks: tasks };

  const newFilteredTasks = tasks.filter((task: Task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { newFilteredTasks };
};
