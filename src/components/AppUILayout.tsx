import AddTask from "../features/add-task/AddTask";
import { AppHeader } from "./AppHeader";
import { TaskList } from "./TaskList";
import facebookIcon from "../assets/facebookIcon.png"; // Correct import path
import twitterIcon from "../assets/twitterIcon.png"; // Correct import path
import instagramIcon from "../assets/instagramIcon.png"; // Correct import path

export const AppUILayout = () => {
  return (
    <div className="app-layout relative min-h-screen overflow-hidden w-full p-2 md:p-12">
      <AppHeader />
      <main className="flex-grow overflow-y-auto max-h-[calc(100vh-480px)]">
        <TaskList />
      </main>
      <AddTask />
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="mb-2">Use this todo list app to add your tasks</p>
          <p className="mb-2">
            © {new Date().getFullYear()} Open Source App. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="facebook-icon" className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="twitter-icon" className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="instagram-icon"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
