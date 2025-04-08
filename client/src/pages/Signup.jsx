import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../components/Home/Loader";

const Signup = () => {
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      history("/");
    }
  }, [isLoggedIn, history]);

  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!Data.username || !Data.email || !Data.password) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/sign-in",
        Data
      );
      setData({ username: "", email: "", password: "" });
      setLoading(false);
      setMessage(response.data.message);
    } catch (error) {
      alert(error?.response?.data?.message || "Signup failed");
      setLoading(false);
    }
  };

  return (
    <>
      {Loading && (
        <div className="flex h-[100%] items-center justify-center">
          <Loader />
        </div>
      )}
      {Message && !Loading && (
        <div className="h-[98vh] flex items-center justify-center">
          <div className="text-yellow-500 text-xl bg-zinc-800 border border-yellow-500 font-semibold rounded px-4 py-3">
            {Message}
          </div>
        </div>
      )}
      {!Message && !Loading && (
        <div className="h-[98vh] flex items-center justify-center">
          <div className="p-4 w-5/6 md:w-4/6 lg:w-2/6 rounded bg-gray-800">
            <div className="text-2xl font-semibold">Signup</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
              value={Data.username}
              onChange={change}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
              value={Data.email}
              onChange={change}
              required
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
                Sign Up
              </button>
              <Link to="/login" className="text-gray-400 hover:text-gray-200 mt-2 lg:mt-0">
                Already have an account? Login here
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;

