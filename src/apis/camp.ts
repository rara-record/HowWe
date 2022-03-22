import axios from 'axios';
import { CampType } from 'types/type';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const getCampsByType = async (type: CampType) => {
  await httpClient.get(`/camps?type=${type}`).then(response => {
    console.log(response);
  });
};
