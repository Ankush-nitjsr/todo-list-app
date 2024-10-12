import { FilterTasks } from "../features/filter-tasks/FilterTasks";
import { SearchTasks } from "../features/search-tasks/SearchTasks";

export const AppHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full mb-4 md:mb-8 md:items-center space-y-4 md:space-y-0">
      <div className="title font-extrabold text-3xl">
        <h1>Today</h1>
      </div>
      <div className="search-section flex-grow md:mx-8">
        <SearchTasks />
      </div>
      <div className="filter-section">
        <FilterTasks />
      </div>
    </div>
  );
};
