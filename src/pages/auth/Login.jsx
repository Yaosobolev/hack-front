import React, { useState } from "react";
import "../../App.css";

import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  //   const isAuth = () => {};
  console.log(isAuth);

  return (
    <>
      {isAuth && <Navigate to="/" replace={true} />}
      <h2 className="text-2xl font-semibold mb-4">Войдите в аккаунт</h2>

      <form onSubmit={login}>
        <div className="mb-4 relative">
          <input
            id="username"
            type="text"
            className="mt-1  block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
          />
          <label
            htmlFor="username"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Имя пользователя
          </label>
        </div>
        <div className="mb-2 relative">
          <input
            id="password"
            type="password"
            className="mt-1  block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Пароль
          </label>
        </div>
        <div className="text-right mb-4">
          <Link to="../registration">Восстановить пароль</Link>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Войти
        </button>
      </form>
      <span>
        У вас нету аккаунта?{" "}
        <Link to="../registration" className="text-red-400">
          Зарегистрируйтесь
        </Link>
      </span>
    </>
  );
};

export default Login;
