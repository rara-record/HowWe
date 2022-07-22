import styled from 'styled-components';
import fonts from 'styles/fonts';

import { useContext } from 'react';
import UserStore from 'stores/UserStore';

import ProfileForm from './components/ProfileForm';

const ProfilePage = () => {
  const userStore = useContext(UserStore);

  return (
    <Container>
      <ProfileHeader>
        <h1> {userStore.user && userStore.user.displayName}님 안녕하세요!</h1>
      </ProfileHeader>
      <ProfileForm />
    </Container>
  );
};

export default ProfilePage;

const Container = styled.section`
  h1 {
    text-align: center;
    ${fonts.H1}
  }
`;

const ProfileHeader = styled.div``;
