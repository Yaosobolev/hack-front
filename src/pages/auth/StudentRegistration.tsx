import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { SelectRegistrationBlank } from "../../redux/registrationBlank/selector";
import { changeBlank } from "../../redux/registrationBlank/slice";
import { useAppDispatch } from "../../redux/store";
import * as Api from "../../api";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentTab, setCurrentTab] = React.useState("student");
  const [blank, setBlank] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const registrationBlank = useSelector(SelectRegistrationBlank);

  React.useEffect(() => {
    setBlank(registrationBlank);
    console.log(registrationBlank);
  }, []);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(changeBlank(blank));

    if (currentTab === "student") {
      return navigate("university");
    }

    const { data } = await Api.auth.registerDelegate(blank);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    console.log(data);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 flex flex-row">
        Создайте профиль{" "}
        <h2
          className={`${
            currentTab === "student" ? "_underline" : "_default"
          } ml-4`}
          onClick={() => setCurrentTab("student")}
        >
          Студента
        </h2>
        <i className="mx-2">|</i>
        <h2
          className={currentTab === "delegate" ? "_underline" : "_default"}
          onClick={() => setCurrentTab("delegate")}
        >
          Администратора
        </h2>
      </h2>

      <form onSubmit={onSubmit}>
        <div className="mb-4 relative">
          <input
            id="firstname"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.firstname}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, firstname: ev.target.value }))
            }
          />
          <label
            htmlFor="firstname"
            className="absolute left-2 top-3 text-black transition-all duration-300 pointer-events-none"
          >
            Имя
          </label>
        </div>

        <div className="mb-4 relative">
          <input
            id="lastname"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.lastname}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, lastname: ev.target.value }))
            }
          />
          <label
            htmlFor="lastname"
            className="absolute left-2 top-3 text-black transition-all duration-300 pointer-events-none"
          >
            Фамилия
          </label>
        </div>

        <div className="mb-4 relative">
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.email}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, email: ev.target.value }))
            }
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-3 text-black transition-all duration-300 pointer-events-none"
          >
            Email
          </label>
        </div>

        <div className="mb-4 relative">
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

        <div className="mb-4 relative">
          <input
            id="passwordRepeat"
            type="password"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.passwordRepeat}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, passwordRepeat: ev.target.value }))
            }
          />
          <label
            htmlFor="passwordRepeat"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Подтвердите Пароль
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-3 px-4 text-xl flex flex-row items-center justify-center rounded hover:bg-blue-600"
        >
          {currentTab === "student" ? "Дальше" : "Зарегистрироваться"}
        </button>
      </form>
      <span className="text-lg">
        Уже есть аккаунта?{" "}
        <Link to="/auth/login" className="text-blue-600">
          Войти
        </Link>
      </span>
    </>
  );
};

export default StudentRegistration;
