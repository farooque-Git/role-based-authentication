import { AuthProvider } from "./context/authContext";
import { Navigate, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateBlogPost from "./components/CreateBlogPost";
import { child } from "firebase/database";
import Profile from "./components/Profile";
import BlogList from "./components/BlogList";

function App() {
  const routesArray = [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/createblogpost",
      element: <CreateBlogPost />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/blog",
      element: <BlogList />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;

// export const ProtectedForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem("admin"));
//   if (admin?.user?.email === "faroque.reactjs@gmail.com") {
//     return children;
//   } else {
//     return <Navigate to={"/login"} />;
//   }
// };
