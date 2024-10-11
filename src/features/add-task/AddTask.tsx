import { useState } from "react";
import { useAddTask } from "./useAddTask";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { handleAddTask } = useAddTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add-task-form flex flex-col w-full space-y-4 my-4"
    >
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="add-task-input border border-gray-400 p-2 rounded-lg"
      />
      <button
        type="submit"
        className="add-task-button bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
