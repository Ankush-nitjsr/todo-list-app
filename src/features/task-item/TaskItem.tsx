import { Task } from "../../types/Task";
import { CompleteTask } from "../complete-task/CompleteTask";
import { DeleteTask } from "../delete-task/DeleteTask";
import { EditTask } from "../edit-task/EditTask";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="flex border border-gray-400 p-2 rounded-lg w-3/4 space-x-2">
      <CompleteTask task={task} />
      <div className="flex space-x-2">
        <EditTask task={task} />
        <DeleteTask task={task} />
      </div>
    </div>
  );
};
