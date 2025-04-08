import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { authActions } from "./store/auth";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthPage = ["/signup", "/login", "/verify-email"].includes(location.pathname);
    const isAuthenticated = localStorage.getItem("id") && localStorage.getItem("token");

    if (isAuthenticated) {
      dispatch(authActions.login());
    } else if (!isLoggedIn && !isAuthPage) {
      navigate("/signup");
    }
  }, [dispatch, isLoggedIn, navigate, location.pathname]);

  return (
    <div className="bg-gray-900 text-white md:h-[100%] p-2 relative">
      <Routes>
      <Route exact path="/" element={<Home />}>
          <Route index element={<AllTasks />} />
          <Route path="/importantTasks" element={<ImportantTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/incompletedTasks" element={<IncompletedTasks />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;



