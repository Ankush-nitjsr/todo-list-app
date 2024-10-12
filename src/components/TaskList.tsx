import { useFilterAndSearchTasks } from "../hooks/useFilterAndSearchTasks";
import { TaskItem } from "../features/task-item/TaskItem";
import { Task } from "../types/Task";
import { useTasks } from "../context/TaskContext";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

export const TaskList = () => {
  const { filteredTasks } = useFilterAndSearchTasks();

  const { history, future, undo, redo } = useTasks();

  return (
    <div className="tasks-list min-h-[330px] space-y-4 flex flex-col w-full">
      <div className="controls flex space-x-2 sticky top-0 bg-white z-10 py-2">
        <button
          onClick={undo}
          disabled={history.length === 0}
          className="bg-gray-500 hover:bg-green-500 text-white px-2 pt-1 pb-1.5 rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ArrowUturnLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={redo}
          disabled={future.length === 0}
          className="bg-gray-500 hover:bg-green-500 text-white px-2 pt-1 pb-1.5 rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ArrowUturnRightIcon className="w-5 h-5" />
        </button>
      </div>
      {filteredTasks === null || filteredTasks.length === 0 ? (
        <p className="flex flex-grow justify-center items-center text-xl">
          No tasks available
        </p>
      ) : (
        filteredTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};
