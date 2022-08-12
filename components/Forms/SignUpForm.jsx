import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { Loading } from "../Loading";

export const SignUpForm = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (account.password !== account.confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const body = {
        username: account.username,
        password: account.password,
      };
      const res = await axios.post("/api/signup", body);
      if (res.status === 200) {
        Router.push("/board");
      } else {
        throw new Error(await res.text());
      }
      setLoading(false);
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-2 w-80" onSubmit={handleSubmit}>
      <p className="pt-5 font-medium">Sign Up To Enter</p>
      <input
        className="pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        name="username"
        required
      />
      <input
        className="pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={handleChange}
      />
      <input
        className="pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        required
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Account
      </button>

      {loading && <Loading />}
    </form>
  );
};
