# My Portfolio - Backend Engineer

A React-based portfolio website showcasing backend engineering experience and projects.

## Quick Start Guide

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - If it doesn't open automatically, manually navigate to that URL in your browser
   - The page will automatically reload when you make changes to the code

4. **Stop the server:**
   - Press `Ctrl + C` in your terminal

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Builds the app for production (creates optimized files in the `build` folder).
Useful for deploying to hosting services like GitHub Pages, Netlify, or Vercel.

### `npm test`
Runs the test suite (if you have tests set up).

## Project Structure

- `src/` - Source code
  - `About.jsx` - About page with experience and skills
  - `Projects.jsx` - Projects showcase with URL input fields
  - `Home.jsx` - Home page
  - `Header.jsx` - Navigation header
  - `App.jsx` - Main app component with routing

## Notes for Backend Developers

- This is a **React** application (a JavaScript framework for building UIs)
- No database or backend server needed - this is a static frontend app
- Changes to `.jsx` files will automatically refresh in the browser
- The app uses React Router for navigation between pages
- All styling is in `src/App.css`

## Troubleshooting

**Port 3000 already in use?**
- Stop the other application using port 3000, or
- React will automatically try the next available port (3001, 3002, etc.)

**npm install fails?**
- Make sure you have Node.js installed: `node --version`
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

**App not loading in browser?**
- Check the terminal for error messages
- Make sure you're in the project directory when running `npm start`
