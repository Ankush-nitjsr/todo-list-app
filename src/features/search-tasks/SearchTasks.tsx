import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useTasks } from "../../context/TaskContext";
import { useSearchTasks } from "./useSearchTasks";

export const SearchTasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const { filteredTasks, setFilteredTasks } = useTasks();
  const { newFilteredTasks } = useSearchTasks(debouncedTerm);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  // Debounce logic: update debouncedTerm after 300ms of user inactivity
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    // Cleanup the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Update filtered tasks only if they are different (deep comparison)
  useEffect(() => {
    if (
      newFilteredTasks &&
      JSON.stringify(newFilteredTasks) !== JSON.stringify(filteredTasks)
    ) {
      setFilteredTasks(newFilteredTasks);
    }
  }, [newFilteredTasks, filteredTasks, setFilteredTasks]);

  return (
    <div>
      <SearchBar value={searchTerm} onChange={handleChange} />
    </div>
  );
};
