import { useTasks } from "../../context/TaskContext";
import { Task } from "../../types/Task";

export const useFilterTasks = () => {
  const { tasks, filter } = useTasks();

  // Filter tasks based on the filter value
  const newFilteredTasks = tasks.filter((task: Task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // Show all if filter is "all"
  });

  return { newFilteredTasks };
};
