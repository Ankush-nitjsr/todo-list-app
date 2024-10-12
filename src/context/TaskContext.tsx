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
  history: Task[][];
  future: Task[][];
  undo: () => void;
  redo: () => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [history, setHistory] = useState<Task[][]>([]); // Array of previous task states for undo
  const [future, setFuture] = useState<Task[][]>([]); // Array of future task states for redo

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task: string) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      task,
      completed: false,
    };
    setHistory([...history, tasks]); // Save the current state to history
    setTasks([newTask, ...tasks]); // Add the new task to the top
    setFuture([]); // Clear future states
  };

  const deleteTask = (id: string) => {
    setHistory([...history, tasks]); // Save current state to history
    setTasks(tasks.filter((task: Task) => task.id !== id)); // Remove task
    setFuture([]); // Clear future states
  };

  const toggleComplete = (id: string) => {
    setHistory([...history, tasks]); // Save current state to history
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setFuture([]); // Clear future states
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setFuture([tasks, ...future]); // Save current state to future
      setTasks(previousState); // Restore the previous state
      setHistory(history.slice(0, -1)); // Remove the last state from history
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setHistory([...history, tasks]); // Save current state to history
      setTasks(nextState); // Restore the next state
      setFuture(future.slice(1)); // Remove the first state from future
    }
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
        history,
        future,
        undo,
        redo,
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
