
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from './pages/SignUP';
import App from "./App";
import AdminWelcome from "./EditorPages/AdminWelcome";
import IssuePage from "./EditorPages/IssuePage";
import UsersPage from "./EditorPages/UsersPage";
import SettingPage from "./EditorPages/SettingPage";
import SubmissionPage from "./EditorPages/SubmissionPage";
import Demo from "./pages/Demo";
import SubmissinTable from "./EditorPages/SubmissinTable";
import ArticleView from "./EditorPages/ArticleView";
import SendForReview from "./EditorPages/SendForReview ";
import RequestPage from "./ReviewerPages/RequestPage";
import ReviewerWelcome from "./ReviewerPages/ReviewerWelcome"
import Reviewpage from "./ReviewerPages/Reviewpage";
import ReviewTable from "./ReviewerPages/ReviewTable";
import SubmitArticle from "./pages/SubmitArticle  ";



export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "", // Home route
        element: <Home />,
      },
      {
        path: "/SubmitArticle", // Home route
        element: <SubmitArticle />,
      },
      
      {
        path: "/signup", // SignUp route
        element: <SignUp/>,
      },
      
      {
        path: "/login",
        children: [
          {
            path: "", 
            element: <Login />,
          },
          // {
          //   path: "admin", // Admin route
          //   element: <AdminWelcome />,
          // },
         
         
        ],
      },
    ],
  },
  {
    path: "/Reviewer", // Absolute path for Reviewer route
    element: <ReviewerWelcome />, 
    children:[
      
  
      {
        path:"",
        element:<Reviewpage/>,
         children:[
          {
            path:"",
            element:<ReviewTable/>,

          },
         
         
         ]
      },
      {
        path:"RequestPage",
        element:< RequestPage/>
      }
     
     
      
    ]
    },
   
   
  {
    path: "/admin", // Absolute path for admin route
    element: <AdminWelcome />, // Admin route
    children:[
      {
        path:"",
        element: <SubmissionPage/>,
        children:[
          {
            path:"",
            element:<SubmissinTable/>,
          },    
          {
            path: "view/:itemId",
            element: <ArticleView />,
      
          },
          {
            path: "SendForReviewer/:ArticleId",
            element: <SendForReview  />,
          },
        ]
      },
      
      {
        path:"Issue",
        element: <IssuePage/>,
       
      },
      {
        path:"users",
        element: <UsersPage/>,
      },
      {
        path:"settig",
        element: <SettingPage/>,
      },
      {
        path:"demo",
        element: <Demo/>,
      },
     
     
      
     
    ]
  },
  
]);