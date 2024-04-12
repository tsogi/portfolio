import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Sn124 from './components/Sn124';
import Jptf03 from './components/Jptf03';
import Jp_38_6 from './components/Jp_38_6';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sn124",
    element: <Sn124 />,
  },
  {
    path: "/jptf03",
    element: <Jptf03 />,
  },
  {
    path: "/jp_38_6",
    element: <Jp_38_6 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
