import { Route, Routes, useRoutes } from "react-router-dom";
import Login from "./Components/Login";
import Forget from "./Components/Forget";
import Signup from "./Components/Signup";
import Reset from "./Components/Reset";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Welcome from "./Components/Welcome";
import Error from "./Components/Error";
import CreateNewPost from "./Components/CreateNewPost";
import PrivateRoutes from "./PrivateRoutes";
import Public from "./Public";
import ProtectedRoutes from "./ProtectedRoutes";

const NavBar = () =>
  useRoutes([
    { path: "/profile", element: <Nav /> },
    // { path: "/", element: <Nav /> },
    { path: "/post", element: <Nav /> },
  ]);

const App = () => {
  // const token = `${JSON.parse(localStorage.getItem("token"))}`;

  return (
    <>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forget" element={<Forget />} />
        <Route exact path="/reset" element={<Reset />} />
        
        <Route exact path="/" element={<Post />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/createnewpost" element={<CreateNewPost />} />
        <Route exact path="*" element={<Error />} />
      </Routes> */}

      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route>
          {/* <Route element={<PrivateRoutes />} > */}
          <Route path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forget" element={<Forget />} />
          <Route exact path="/reset" element={<Reset />} />
          {/* </Route> */}
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/post" element={<Post />} />
          <Route exact path="/createnewpost" element={<CreateNewPost />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
