import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Link } from "react-router-dom";
import { User } from "./components/User";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* basic routing*/}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not found</h1>} /> */}

        {/* dynamic routing  */}
        {/* <Route path="/user/:id" element={<User />} /> */}

        {/* Navigate in routing  */}
        {/* <Route path="/aboutpage" element={<Navigate to={"/about"} />} /> */}

        {/* nested routing - 01  */}
        {/* <Route path="/anything/*" element={<h1>Anything</h1>} /> */}

        {/* nested routing - 02 */}
        {/* when using index then we can not use path  */}
        {/* <Route path="/dashboard" >
          <Route index element={<h1> element - 1 </h1>} />
          <Route path="2" element={<h1> element - 1 </h1>} />
          <Route path="3" element={<h1> element - 1 </h1>} />
        </Route> */}

        {/* nested routing (layout) */}
        {/* <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Navigate to={"/dashboard/home"} />} />
          <Route path="home" element={<Home />}>
            <Route path="home1" element={<h1>Home - 1</h1>} />
            <Route path="home2" element={<h1>Home - 2</h1>} />
            <Route path="home3" element={<h1>Home - 3</h1>} />
          </Route>
          <Route path="about" element={<About />} />
        </Route> */}

        {/* layout route */}
        {/* Routes without a path create new nesting for their children, but they don't add any segments to the URL. */}
        {/* <Route element={<h1> MarketingLayout <Outlet /> </h1>}>
          <Route index element={<h3>Marketing Home</h3>} />
          <Route path="contact" element={<h3>Marketing contact</h3>} />
        </Route> */}

        {/* layout route - 2 */}
        {/* <Route path="projects">
          <Route index element={<h4>Project Home</h4>} />
          <Route
            element={
              <div>
                {" "}
                Project Layout <Outlet />
              </div>
            }
          >
            <Route path=":pid" element={<h3>Pid</h3>} />
            <Route path=":pid/edit" element={<h3>Edit PID</h3>} />
          </Route>
        </Route> */}

        {/* protected route  */}
        {/* <Route element={!user? <Outlet/> : <Navigate to='home' /> }  >
          <Route path='login' element={<h3>Login page</h3>}  />
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;

const UserIDInputComp = () => {
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();
  const handle_input_change = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target?.value;
    console.log("value", value);
    setId(value);
  };
  const handle_click = () => {
    console.log("/user/" + id);
    navigate(`/user/${id}`);
  };
  return (
    <>
      <input type="text" value={id} onChange={(e) => handle_input_change(e)} />{" "}
      <button onClick={handle_click}>go</button>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      {/* Link vs Navlink ==> class='active'*/}
      <div style={{ display: "flex", textDecoration: "none", gap: "10px" }}>
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/contact"}>Contact </Link>

        <NavLink to={"/"}>
          {({ isActive }) => (isActive ? "🔥 Home" : "Home")}
        </NavLink>
        <NavLink to={"/about"}>
          {({ isActive }) => (isActive ? "🔥 About" : "about")}
        </NavLink>
        <UserIDInputComp />
      </div>
    </>
  );
};
