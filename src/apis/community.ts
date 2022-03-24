import axios, { AxiosError } from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

httpClient.interceptors.response.use(
  response => {
    // http status가 200인 경우, 응답 성공 직전 호출. then()으로 이어짐
    return response;
  },
  (error: AxiosError) => {
    // http status가 200이 아닌 경우 응답 에러 처리를 작성. catch()로 이어짐
    return Promise.reject(error?.response?.data);
  }
);

export const getCommunties = async () => {
  return await httpClient //
    .get(`/communities`)
    .then(response => response.data.data)
    .catch(err => {
      console.error(err);
    });
};
