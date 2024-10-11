import { useTasks } from "../context/TaskContext";
import { Task } from "../types/Task";

export const useFilterAndSearchTasks = () => {
  const { tasks, filter, searchTerm } = useTasks();

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === "completed" && !task.completed) return false;
    if (filter === "incomplete" && task.completed) return false;
    if (
      searchTerm &&
      !task.task.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return { filteredTasks };
};
