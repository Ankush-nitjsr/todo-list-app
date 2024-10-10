import React, { useState, useEffect, useRef } from "react";
import { Task } from "../../types/Task";

interface TIInnerTextProps {
  task: Task;
  isEditing: boolean;
  onUpdateTask: (updatedText: string) => void; // Callback to handle task updates
}

export const TIInnerText = ({
  task,
  isEditing,
  onUpdateTask,
}: TIInnerTextProps) => {
  const [updatedTaskText, setUpdatedTaskText] = useState(task.task);
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the input

  // Focus on the input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onUpdateTask(updatedTaskText); // Call the passed function to update the task
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave(); // Save when pressing Enter
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          ref={inputRef} // Set focus to this input when in edit mode
          type="text"
          value={updatedTaskText}
          onChange={(e) => setUpdatedTaskText(e.target.value)} // Handle text change
          onBlur={handleSave} // Save when input loses focus
          onKeyDown={handleKeyPress} // Handle Enter key to save
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
