export interface IRegister {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordRepeat: string;
  group_id: number;
}

export type TResponse = {
  data: IToken;
};

export interface IToken {
  id: number;
  access_token: string;
  access_token_expired_at: Date;
  refresh_token: string;
  refresh_token_expired_at: Date;
  user_id: number;
}
