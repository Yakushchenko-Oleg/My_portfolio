import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/about',
        element: <AboutMePage/>
      },
      {
        path: '/projects',
        element: <ProjectsPage/>
      },
    ],
  },
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
