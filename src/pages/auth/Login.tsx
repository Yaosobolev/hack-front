import React from "react";
import "../../App.css";
import * as Api from "../../api";

import { Link } from "react-router-dom";

const Login = () => {
  const [blank, setBlank] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { data } = await Api.auth.login(blank);
    
    console.log(blank);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Войдите в аккаунт</h2>

      <form onSubmit={onSubmit}>
        <div className="mb-4 relative">
          <input
            id="email"
            type="email"
            className="mt-1  block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.email}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, email: ev.target.value }))
            }
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Email
          </label>
        </div>
        <div className="mb-2 relative">
          <input
            id="password"
            type="password"
            className="mt-1  block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.password}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, password: ev.target.value }))
            }
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Пароль
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Войти
        </button>
      </form>

      <span>
        У вас нет аккаунта?{" "}
        <Link to="/auth/register/student/" className="text-red-400">
          Зарегистрируйтесь
        </Link>
      </span>
    </>
  );
};

export default Login;
