import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

instance.interceptors.request.use(
  async (request) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const _accessToken = localStorage.getItem("accessToken");
    const _refreshToken = localStorage.getItem("refreshToken");

    if (error.response.status == 401) {
      if (_accessToken && _refreshToken) {
        try {
          const { accessToken, refreshToken } = (
            await instance.post("auth/refresh_token", {
              refreshToken: _refreshToken,
            })
          ).data;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          return await instance.request(error.config);
        } catch {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");

          userStore.reset();
        }
      }
    }

    return Promise.reject(error.config);
  }
);

export default instance;