import styled from 'styled-components';
import fonts from 'styles/fonts';

import { useContext } from 'react';
import AuthStore from 'stores/AuthStore';

import ProfileForm from './components/ProfileForm';

const ProfilePage = () => {
  const authStore = useContext(AuthStore);

  return (
    <Container>
      <ProfileHeader>
        <h1> {authStore.user && authStore.user.displayName}님 안녕하세요!</h1>
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
