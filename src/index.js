import React, { Children , lazy , Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouteProvider} from 'react-router-dom';
import Body from './components/Body';
import { RouterProvider } from 'react-router-dom/dist';
import Cart from './components/Cart';
import About from './components/About';
import Shimmer from './components/Shimmer';
import ProductDetail from './components/ProductDetail';
/** 
 * Lazy Loading
 * Code splitting
 * chunking
 * on demand loading
 * dynmic import
 */

// const Cartlazy = React.lazy(() => import("./components/Cart"));
// const Aboutlazy = React.lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter  =  createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Body/>
        },
        {
          path:"/cart",
          // element:<Suspense fallback={<h1>This components gets loading</h1>}>
          //      <Cartlazy/>
          // </Suspense> 
          element:<Cart/>  
        },
        {
          path:"/about",
          // element:<Suspense fallback={Shimmer}>
          //   <About/>
          // </Suspense>
          element:<About/>
        },
        {
          path:"/product/:id",
          element:<ProductDetail/>
        }
      ]
    }
  ]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
