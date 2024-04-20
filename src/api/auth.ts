import axios from "../core/";
import { IRegister, TResponse } from "./interface/auth";

// export const login = async (val: loginFormDto): Promise<loginResponseDto> => {
//   const { data } = await axios.post("/auth/signin", val);

//   return data;
// };

export const registerStudent = async (val: IRegister): Promise<TResponse> => {
  const { data } = await axios.post("/auth/register/student", val);

  return data;
};

// export const getMe = async (): Promise<User> => {
//   const { data } = await axios.get("/user/me");

//   return data;
// };
