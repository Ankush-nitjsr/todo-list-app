import { useState } from "react";
import { useAddTask } from "./useAddTask";
import { PlusIcon } from "@heroicons/react/24/outline";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const { handleAddTask } = useAddTask();

  const handleSubmit = (e: React.FormEvent) => {
    // prevent form submit
    e.preventDefault();

    // Check if the task input is empty
    if (task.trim() === "") {
      setError("Task cannot be empty"); // Set error message
      return;
    }

    // Add the task
    handleAddTask(task);

    // Clear the input field
    setTask("");

    // Clear error if task is added successfully
    setError("");
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
        className={`add-task-input border p-2 rounded-lg ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
      {/* Display error message */}
      {error && <p className="text-red-500">{error}</p>}{" "}
      <button
        type="submit"
        className="w-[40%] mx-auto add-task-button bg-green-700 text-white p-2 rounded-lg hover:bg-green-500 flex items-center justify-center space-x-2"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default AddTask;
