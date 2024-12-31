# Learning React with Vite

A comprehensive React learning project built with Vite, designed to understand and implement various modern React concepts. This project serves as a practical guide to learn React fundamentals, state management, routing, and API interactions through hands-on implementation.

## What I've Learned and What You'll Learn

- **Component and Props**: Understanding React components and data flow through props
- **Atomic Design**: Learning component organization using atomic design principles
- **React Router**: Implementing navigation and routing in React applications
- **Conditional Rendering**: Making dynamic UIs with conditional component rendering
- **Nested Components**: Building hierarchical component structures
- **Rendering Lists**: Working with dynamic data using array methods
- **Event Handlers**: Managing user interactions and form events
- **useState**: Understanding React's state management
- **useEffect**: Learning side effects and lifecycle in React
- **useRef**: Manipulating DOM elements directly
- **API Integration**:
  - Fetching data with GET requests to DummyJSON `products` API
  - Handling authentication with POST requests to DummyJSON `auth` API
- **Custom Hooks**: Creating reusable logic with custom hooks
- **Dynamic Routing**: Implementing dynamic routes for different pages
- **Redux**: Learning centralized state management
- **Redux Toolkit**: Using modern Redux with less boilerplate
- **React-Redux**: Connecting Redux with React components
- **useContext**: Managing global state with Context API
- **useReducer**: Handling complex state logic

## Requirements

- Node.js
- npm, pnpm, or yarn

## Installation

Follow these steps to get the project running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### 2. Install Dependencies

You can use npm, pnpm, or yarn to install dependencies. Choose one of the following commands:

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

Using yarn:
```bash
yarn install
```

### 3. Start Development Server

After installing the dependencies, run the development server:

Using npm:
```bash
npm run dev
```

Using pnpm:
```bash
pnpm run dev
```

Using yarn:
```bash
yarn dev
```

Once the server is running, open your browser and navigate to `http://localhost:5173` to see the app in action.

### 4. Running the Node.js Server for CORS Handling

To handle CORS issues when posting data to the DummyJSON API, you need to run a simple Node server. Open another terminal window and run:

```bash
node server.js
```

This will start a proxy server on the backend to handle CORS issues for the API calls. Keep this terminal open while developing.

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS** : A utility-first CSS framework for rapid UI development
- **Vite**: Next-generation, fast build tool for modern web projects
- **React Router**: Declarative routing for React
- **Redux**: A predictable state container for JavaScript apps
- **Redux Toolkit**: A set of tools to simplify Redux logic

## Project Structure

```
src/
├── assets/        # Images, styles, and other static files
├── components/    # React components following atomic design
├── context/      # React Context definitions
├── hooks/        # Custom React hooks
├── pages/        # Page components for routing
├── redux/        # Redux setup and slice files
└── services/     # API service functions
```

## API Endpoints

### Products API
- **GET** `/products`: Fetch products from the DummyJSON API
  - Returns a list of products with details

### Authentication API
- **POST** `/auth`: Post user authentication data to the DummyJSON API
  - Handles user login/registration
  - Requires the proxy server (`server.js`) to be running for CORS handling

## Acknowledgments

- **JavaScript Ecosystem**:
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for the powerful programming language
  - [npm](https://www.npmjs.com/) for package management

- **React Ecosystem**:
  - [React](https://reactjs.org/) for the excellent UI library
  - [React Router](https://reactrouter.com/) for routing capabilities
  - [Redux](https://redux.js.org/) for state management
  - [Redux Toolkit](https://redux-toolkit.js.org/) for simplified Redux development

- **Build Tools**:
  - [Vite](https://vitejs.dev/) for the fast and efficient build tool
  - [Node.js](https://nodejs.org/) for the runtime environment

- **API Services**:
  - [DummyJSON](https://dummyjson.com/) for providing the test API endpoints