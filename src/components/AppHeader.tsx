import { FilterTasks } from "../features/filter-tasks/FilterTasks";
import { SearchTasks } from "../features/search-tasks/SearchTasks";

export const AppHeader = () => {
  return (
    <div className="flex justify-between w-full my-8">
      <div className="title">
        <h1>Today</h1>
      </div>
      <div className="search-section">
        <SearchTasks />
      </div>
      <div className="filter-section">
        <FilterTasks />
      </div>
    </div>
  );
};
