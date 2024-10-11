import { useState } from "react";
import { Task } from "../../types/Task";
import { CompleteTask } from "../complete-task/CompleteTask";
import { DeleteTask } from "../delete-task/DeleteTask";
import { EditTask } from "../edit-task/EditTask";
import { TIInnerText } from "./TIInnerText";
import { useUpdateTask } from "../../hooks/useUpdateTask";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { updateTaskText } = useUpdateTask(task.id);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing); // Toggle the editing state for this specific task
  };

  const handleUpdateTask = (updatedTask: Task, updatedText: string) => {
    updateTaskText(updatedTask, updatedText);
    setIsEditing(false); // Exit edit mode after updating the task
  };

  return (
    <div className="flex border border-gray-400 p-2 rounded-lg w-full space-x-2">
      <CompleteTask task={task} />
      <TIInnerText
        task={task}
        isEditing={isEditing}
        onUpdateTask={handleUpdateTask} // Call handleUpdateTask to save and exit edit mode
      />
      <div className="flex space-x-2">
        <EditTask
          task={task}
          isEditing={isEditing}
          toggleEditMode={toggleEditMode}
        />
        <DeleteTask task={task} />
      </div>
    </div>
  );
};
