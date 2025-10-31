# Todo App - React + TypeScript

A simple, clean todo application built with React and TypeScript using Vite as the build tool.

## Features

- ✅ Add new todos
- ✅ Mark todos as completed
- ✅ Delete todos
- ✅ Clean, responsive UI
- ✅ TypeScript for type safety
- ✅ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sharkindicators/front-end-hiring-test.git
cd front-end-hiring-test
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build the app for production:
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
front-end-hiring-test/
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx       # Component for adding new todos
│   │   ├── AddTodo.css
│   │   ├── TodoList.tsx      # Component for displaying todo list
│   │   ├── TodoList.css
│   │   ├── TodoItem.tsx      # Component for individual todo items
│   │   └── TodoItem.css
│   ├── types.ts              # TypeScript type definitions
│   ├── App.tsx               # Main app component
│   ├── App.css
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Project dependencies and scripts
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling

## License

ISC