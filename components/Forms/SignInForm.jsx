import { useEffect, useState } from "react";

export const SignInForm = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (account.password !== account.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(account);
  };

  useEffect(() => {
    console.log(account);
  }, [account]);

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
    </form>
  );
};
