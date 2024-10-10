import { createContext, ReactNode, useContext } from "react";
import { Task } from "../types/Task";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface TaskContextProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  filterTasks: (filter: string) => Task[];
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = (filter: string) => {
    if (filter === "completed")
      return tasks.filter((task: Task) => task.completed);
    if (filter === "incomplete")
      return tasks.filter((task: Task) => !task.completed);
    return tasks;
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
        toggleComplete,
        filterTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
