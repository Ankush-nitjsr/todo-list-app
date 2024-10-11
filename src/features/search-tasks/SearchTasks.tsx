import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useTasks } from "../../context/TaskContext";

export const SearchTasks = () => {
  const { setSearchTerm } = useTasks();
  const [searchInput, setSearchInput] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchInput);

  const handleChange = (value: string) => {
    setSearchInput(value);
  };

  // Debounce logic: update `debouncedTerm` after 300ms of user inactivity
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchInput);
    }, 300);

    // Cleanup the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  // Update the context's searchTerm with the debounced value
  useEffect(() => {
    setSearchTerm(debouncedTerm);
  }, [debouncedTerm, setSearchTerm]);

  return (
    <div className="w-full">
      <SearchBar value={searchInput} onChange={handleChange} />
    </div>
  );
};
