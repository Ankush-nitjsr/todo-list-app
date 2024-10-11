import AddTask from "../features/add-task/AddTask";
import { AppHeader } from "./AppHeader";
import { TaskList } from "./TaskList";

export const AppUILayout = () => {
  return (
    <div className="app-layout relative min-h-screen overflow-hidden w-full">
      <AppHeader />
      <main>
        <TaskList />
        <AddTask />
      </main>
      <footer>
        <div>
          <p>Use this todo list app to add your tasks</p>
        </div>
      </footer>
    </div>
  );
};
