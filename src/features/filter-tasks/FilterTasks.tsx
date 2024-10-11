import { useTasks } from "../../context/TaskContext";

export const FilterTasks = () => {
  const { setFilter } = useTasks();

  return (
    <div className="space-x-2">
      <button
        onClick={() => setFilter("all")}
        className="bg-gray-500 hover:bg-green-400 px-4 py-1 rounded-md"
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="bg-gray-500 hover:bg-green-400 px-4 py-1 rounded-md"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className="bg-gray-500 hover:bg-green-400 px-4 py-1 rounded-md"
      >
        Incomplete
      </button>
    </div>
  );
};
