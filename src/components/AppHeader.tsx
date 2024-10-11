import { FilterTasks } from "../features/filter-tasks/FilterTasks";
import { SearchTasks } from "../features/search-tasks/SearchTasks";

export const AppHeader = () => {
  return (
    <div className="flex justify-between w-full my-8 items-center">
      <div className="title font-extrabold text-3xl">
        <h1>Today</h1>
      </div>
      <div className="search-section flex-grow mx-8">
        <SearchTasks />
      </div>
      <div className="filter-section">
        <FilterTasks />
      </div>
    </div>
  );
};
