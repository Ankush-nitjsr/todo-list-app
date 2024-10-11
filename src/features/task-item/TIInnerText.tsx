import React, { useState, useEffect, useRef } from "react";
import { Task } from "../../types/Task";

interface TIInnerTextProps {
  task: Task;
  isEditing: boolean;
  onUpdateTask: (taskToUpdate: Task, updatedText: string) => void;
}

export const TIInnerText = ({
  task,
  isEditing,
  onUpdateTask,
}: TIInnerTextProps) => {
  const [updatedTaskText, setUpdatedTaskText] = useState(task.task);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on the input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onUpdateTask(task, updatedTaskText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          ref={inputRef} // Set focus to this input when in edit mode
          type="text"
          value={updatedTaskText}
          onChange={(e) => setUpdatedTaskText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="edit-input"
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.task}
        </span>
      )}
    </>
  );
};
