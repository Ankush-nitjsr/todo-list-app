import { useTasks } from "../context/TaskContext";
import { Task } from "../types/Task";

export const useUpdateTask = (id: string) => {
  const { tasks, setTasks } = useTasks();

  const taskToUpdate = tasks.filter((task) => task.id === id);

  // Update task text
  const updateTaskText = (taskToUpdate: Task, updatedText: string) => {
    const updatedTask = { ...taskToUpdate, task: updatedText };
    handleUpdateTasks(updatedTask);
  };

  const handleUpdateTasks = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return { taskToUpdate, updateTaskText, handleUpdateTasks };
};
