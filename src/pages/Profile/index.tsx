import styled from 'styled-components';
import fonts from 'styles/fonts';

import { authService } from 'service/firebase';
import ProfileForm from './components/ProfileForm';
import colors from 'styles/colors';

const ProfilePage = () => {
  const user = authService.currentUser;

  return (
    <Container>
      <ProfileHeader>
        <h1>
          <strong>{user?.displayName} </strong>님 안녕하세요!
        </h1>
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

    strong {
      color: ${colors.primary3};
    }
  }
`;

const ProfileHeader = styled.div``;
