import { getCamp, getCampsByType } from 'api/camp';
import { makeObservable, observable } from 'mobx';
import { createContext } from 'react';
import { ICamp } from 'types/Camp';
import { ICampDetail } from 'types/CampDetail';

class CampsStore {
  // 변수 선언
  @observable campPopular: ICamp[] | null = null;
  @observable campSales: ICamp[] | null = null;
  @observable targetCamp: ICampDetail | null = null;

  // 고정
  constructor() {
    makeObservable(this);
  }

  fetchCampsPopular = async () => {
    const data = await getCampsByType('popular');
    this.campPopular = data;
  };

  fetchCampsSale = async () => {
    const data = await getCampsByType('sale');
    this.campSales = data;
  };

  fetchCampById = async (id: string) => {
    const data = await getCamp(id);
    this.targetCamp = data;
  };
}

export default createContext(new CampsStore());
