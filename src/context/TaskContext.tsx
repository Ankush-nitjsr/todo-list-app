import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../types/Task";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface TaskContextProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addTask: (task: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        addTask,
        deleteTask,
        toggleComplete,
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
