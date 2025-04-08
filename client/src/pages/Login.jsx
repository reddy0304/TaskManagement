import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store/auth";

const Login = () => {
  const [Data, setData] = useState({ username: "", password: "" });
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      history("/");
    }
  }, [isLoggedIn, history]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!Data.username || !Data.password) {
      return alert("All fields are required");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/log-in",
        Data
      );
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.data.token);
      dispatch(authActions.login());
      setData({ username: "", password: "" });
      history("/");
    } catch (error) {
      alert(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-5/6 md:w-4/6 lg:w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">Log In</div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          value={Data.username}
          onChange={change}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          value={Data.password}
          onChange={change}
        />
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <button
            onClick={submit}
            className="bg-blue-400 font-semibold text-black px-3 py-2 rounded"
          >
            Login
          </button>
          <Link to="/signup" className="text-gray-400 hover:text-gray-200 mt-2 lg:mt-0">
            Not having an account? Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
