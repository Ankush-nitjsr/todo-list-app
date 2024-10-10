// src/features/edit-task/EditTask.tsx
import { useState } from "react";
import { Task } from "../../types/Task";
import { useEditTask } from "./useEdittask";
import { TIInnerText } from "../task-item/TIInnerText";

interface EditTaskProps {
  task: Task;
}

export const EditTask = ({ task }: EditTaskProps) => {
  const { handleEditTask } = useEditTask();
  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Update task text
  const updateTaskText = (updatedText: string) => {
    handleEditTask({ ...task, task: updatedText });
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div>
      <TIInnerText
        task={task}
        isEditing={isEditing}
        onUpdateTask={updateTaskText}
      />

      {isEditing ? (
        <button onClick={() => updateTaskText(task.task)}>💾</button>
      ) : (
        <button onClick={toggleEditMode}>✏️</button>
      )}
    </div>
  );
};
