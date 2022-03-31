import { getCommunties } from 'apis/community';
import { makeObservable, observable } from 'mobx';
import { createContext } from 'react';
import { ICommunity } from 'types/Community';

class CommunityStore {
  // 변수 설정
  @observable communities: ICommunity[] | null = null;

  // 고정 함수
  constructor() {
    makeObservable(this);
  }

  // 함수들
  fetchCommunites = async () => {
    const data = await getCommunties();
    this.communities = data;
  };
}

export default createContext(new CommunityStore());
