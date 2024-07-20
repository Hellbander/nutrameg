import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from './components/error-page/error-page';
import AppWrapper from './components/app-wrapper/app-wrapper';
import Questionnaire from './components/questionnaire/questionnaire';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/questionnaire",
    element: <Questionnaire />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}/>
    </>
  </React.StrictMode>
);
