import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import HomeSceen from "../Pages/HomeSceen";
import Card from "../Pages/Home/Card";
import ViewContact from "../Pages/Home/ViewContact";
import Book from "../Pages/Home/Book";
// import Book from "../Pages/Home/book";


export const  mainRoutes = createBrowserRouter([{
    path:"",
    element:<LayOut/>,
    children:[{
path: "",
element:<HomeSceen/>,
    },
{
    path:"/card",
    element: <Card/>,
    index: true,
},
{
    path:"/viewcontact",
    element: <ViewContact/>,
    index: true,
},
{
    path:"/book",
    element: <Book/>,
    index: true,
},
]
}])