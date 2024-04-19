import React, { useState } from "react";
import "../../App.css";

import { Link, Navigate } from "react-router-dom";

const Registration = () => {
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
      <h2 className="text-2xl font-semibold mb-4">Создайте профиль</h2>

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
        <div className="mb-4 relative">
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
            Придумайте пароль
          </label>
        </div>
        <div className="mb-4 relative">
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
            Подтвердите пароль
          </label>
        </div>
        <div class="relative mb-4 ">
          <select
            class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
          >
            <option selected="">Выберите роль</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <label
            class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            Роль
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Создать
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

export default Registration;
