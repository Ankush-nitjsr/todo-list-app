# Todo List App

A simple and intuitive Todo List application built with React and TypeScript. This app allows users to add, edit, and delete tasks with undo & redo functionalities, providing a clean interface for managing daily activities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit and delete tasks.
- Undo and redo functions.
- Mark tasks as completed.
- Filter tasks by status (all, completed, incomplete).
- Search functionality to find tasks quickly.
- Responsive design for mobile and desktop views.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A fast build tool that provides a smooth development experience.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Heroicons**: Beautifully designed SVG icons for React.
- **React Hook Form**: A library for managing form state and validation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, and you can view the app in your browser at http://localhost:3000.

## File Structure

Here’s an overview of the project’s file structure:

```
todo-list-app
├── public
│   ├── index.html               # Main HTML file for the app
│   └── favicon.ico              # Favicon for the app
├── src
|   ├── assets                   # Contain images of social media app logo
|   |
|   ├── component                # Contain common components across the app fetures
|   |
│   ├── context
│   │   └── TaskContext.tsx       # Context for global task state management
|   |
│   ├── features
│   │   ├── add-task
│   │   │   ├── AddTask.tsx       # Component for adding tasks
│   │   │   └── useAddTask.ts     # Hook for adding tasks
│   │   │
│   │   ├── complete-task
│   │   │   ├── CompleteTask.tsx  # Component for completing tasks
│   │   │   └── useCompleteTask.ts # Hook for toggling task completion
│   │   │
│   │   ├── delete-task
│   │   │   ├── DeleteTask.tsx    # Component for deleting tasks
│   │   │   └── useDeleteTask.ts  # Hook for deleting tasks
|   |   |
│   │   ├── edit-task
│   │   │   └──EditTask.tsx  # Component for editing tasks
│   │   │
│   │   ├── filter-tasks
│   │   │   ├── FilterTasks.tsx   # Component for filtering tasks
│   │   │   └── useFilterTasks.ts # Hook for filtering tasks
│   │   │
│   │   ├── search-tasks
|   |   |   ├── SearchBar.tsx     # Component for input search task
│   │   │   ├── SearchTasks.tsx   # Component for searching tasks
│   │   │   └── useSearchTasks.ts # Hook for searching tasks
│   │   │
│   │   └── task-item             # component for a task item
│   │       ├── TaskItem.tsx      # component for diplaying a task item
│   │       └── TIInerText.tsx    # component for displaying task text
|   |
│   ├── hooks                     # Contains custom hooks for app level use
|   |
│   ├── types                     # Contains TypeScript interfaces and types.
│   │
│   ├── App.tsx                   # Main app component
|   |
│   ├── index.css                 # Contains styling for app and tailwind CSS rules
|   |
└── ├── main.tsx                 # React app entry point
```

- This structure follows a clear separation of concerns.
- Public folder contains static assets like HTML and favicon.
- src folder holds the application code.
- App.tsx is the main entry point for the React application.
- Components common to more than one feature are organized under a components folder.
- context folder houses the global state management using Context API.
- types folder contains TypeScript interfaces and types.
