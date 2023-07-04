import { useState, useEffect } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userNameError: "",
    passwordError: "",
  });

  const handleDataChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    //* Reset errors
    setErrors({
      userNameError: "",
      passwordError: "",
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const responseData = await response.json();
      if (response.ok) {
        //* Handle successful login
        alert(responseData.message);
      } else {
        //* Handle login error
        if (responseData.error) {
          //* Set the error for the corresponding field
          if (responseData.error.includes("username")) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              userNameError: responseData.error,
            }));
          } else if (responseData.error.includes("password")) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              passwordError: responseData.error,
            }));
          }
        } else {
          console.error(responseData.error); //* Handle other types of errors
        }
      }
    } catch (error) {
      //* Handle network or server errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="flex my-20 flex-col items-center justify-center sm:w-screen lg:py-0">
          <div className="w-3/4 p-4 sm:w-screen bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 ">
            <div className="p-6 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white-900 md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6 mt-6"
                method="POST"
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-md font-medium text-white dark:text-white"
                  >
                    Your Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={loginData.userName}
                    onChange={handleDataChange}
                    className=" mt-3 bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Jayman10"
                    required
                  />
                  {errors.userNameError && (
                    <p className="text-red-500">{errors.userNameError}</p>
                  )}
                </div>
                <div className="mt-10">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={handleDataChange}
                    className="mt-3 dark:text-white bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  {errors.passwordError && (
                    <p className="text-red-500">{errors.passwordError}</p>
                  )}
                </div>
                <div className="flex md:items-center justify-between md:flex-row flex-col">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full hover:bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all duration-300"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
