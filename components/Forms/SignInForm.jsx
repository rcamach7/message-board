import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { Loading } from "../Loading";

export const SignInForm = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
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
    try {
      const res = await axios.post("/api/login", account);
      if (res.status === 200) {
        Router.push("/board");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      setLoading(false);
      console.error("An unexpected error occurred", error);
    }
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-2 w-80" onSubmit={handleSubmit}>
      <p className="pt-5 font-medium">Sign In Please</p>
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign In
      </button>

      {loading && <Loading />}
    </form>
  );
};
