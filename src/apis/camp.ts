import axios, { AxiosError } from 'axios';
import { CampType } from 'types/type';

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

export const getCampsByType = async (type: CampType) => {
  return await httpClient
    .get(`/camps?type=${type}`)
    .then(response => response.data.data) // TODO: 콘솔로 데이터가 성공적으로 불러왔는지 보려면, return No ..
    .catch(err => {
      console.log(err);
    });
};
