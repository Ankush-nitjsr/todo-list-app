import { useTasks } from "../../context/TaskContext";

export const FilterTasks = () => {
  // Get filter and setFilter state from context
  const { filter, setFilter } = useTasks();

  const getButtonClass = (filterType: string) => {
    return filter === filterType
      ? "bg-green-500 text-white px-4 py-1 rounded-md" // Active button style
      : "bg-gray-500 hover:bg-green-400 text-white px-4 py-1 rounded-md"; // Default button style
  };

  return (
    <div className="space-x-2">
      <button
        onClick={() => setFilter("all")}
        className={getButtonClass("all")}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={getButtonClass("completed")}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className={getButtonClass("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};
