import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './web/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './web/routes/Home';
import Profile from './web/routes/Profile';
import Discography from './web/routes/Discography';
import Galleryy from './web/routes/Gallery';
import Video from './web/routes/Video';
import Notice from './web/routes/Notice';
import Schedule from './web/routes/Schedule';

// const router = createBrowserRouter(
//   {
//       path: "/",
//       element: <Home />,
//       children: [
//           {
//               path: "/profile",
//               element: <Profile />
//           },
//           {
//               path: "/discography",
//               element: <Discography />
//           },
//           {
//               path: "/gallery",
//               element: <Galleryy/>
//           },
//           {
//               path: "/video",
//               element: <Video />
//           },
//           {
//               path: "/notice",
//               element: <Notice />
//           },
//           {
//               path: '/schedule',
//               element: <Schedule />
//           }
//       ]
//   }
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router}>
      <Home />
    </RouterProvider> */}
  </React.StrictMode>
);
// root.render(
//     <App />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
