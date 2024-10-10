import { useTasks } from "../../context/TaskContext";
import { Task } from "../../types/Task";

export const useEditTask = () => {
  const { tasks, setTasks } = useTasks();

  const handleEditTask = (updateTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updateTask.id ? updateTask : task
    );
    setTasks(updatedTasks);
  };

  return { handleEditTask };
};
