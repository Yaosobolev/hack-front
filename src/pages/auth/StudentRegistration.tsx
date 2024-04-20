import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { SelectRegistrationBlank } from "../../redux/registrationBlank/selector";
import { changeBlank } from "../../redux/registrationBlank/slice";
import { useAppDispatch } from "../../redux/store";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const StudentRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const onSubmit = () => {
    dispatch(changeBlank(blank));

    navigate("university");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Создайте профиль</h2>

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
          Дальше <FaArrowRight className="mx-2" />
        </button>
      </form>
      <span className="text-lg">
        Уже есть аккаунта?{" "}
        <Link to="/login" className="text-blue-600">
          Войти
        </Link>
      </span>
    </>
  );
};

export default StudentRegistration;
