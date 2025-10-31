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

## Deployment (FREE!)

This app can be deployed for **free** using several platforms. The easiest options are:

### Option 1: Netlify (Recommended - Easiest)

1. **Via GitHub (Automatic)**:
   - Go to [netlify.com](https://netlify.com) and sign up (free)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select this repository
   - Netlify will auto-detect the settings (already configured in `netlify.toml`)
   - Click "Deploy" - Done! 🎉

2. **Via Netlify CLI** (Alternative):
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Build the app
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

### Option 2: Vercel

1. **Via GitHub**:
   - Go to [vercel.com](https://vercel.com) and sign up (free)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy" - Done! 🎉

2. **Via Vercel CLI** (Alternative):
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy (run from project root)
   vercel
   ```

### Option 3: GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Update `vite.config.ts` with your repo name:
   ```typescript
   base: '/front-end-hiring-test/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Other Free Options

- **Cloudflare Pages**: Similar to Netlify/Vercel
- **Railway**: Also offers free tier
- **Render**: Free static site hosting

**Recommended**: Use **Netlify** - it's the easiest with zero configuration needed!

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