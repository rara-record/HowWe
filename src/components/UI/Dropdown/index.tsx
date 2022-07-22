import styled from 'styled-components';
import UserStore from 'stores/UserStore';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DROPDWON_LINK } from 'properties/DropdownLink';

const Dropdown = ({ logoutHandler }) => {
  const userStore = useContext(UserStore);
  console.log(userStore.user && userStore.user);

  return (
    <Container>
      <DropdownHeader>
        <h3>{userStore.user && userStore.user.displayName} 님</h3>
        <p>{userStore.user && userStore.user.email}</p>
      </DropdownHeader>

      <DropdownWrapper>
        <nav>
          <ul>
            {DROPDWON_LINK.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <LogOutContainer>
          <Link to="/">
            <button className="logOut-btn" onClick={logoutHandler}>
              로그아웃
            </button>
          </Link>
        </LogOutContainer>
      </DropdownWrapper>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: -10px;
  width: 240px;
  font-weight: 600;
  background-color: white;
  border-radius: 0.5rem;
  z-index: 50;
  border: 1px solid #ddd;
`;

const DropdownHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  padding: 2rem 1.5rem;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: rgba(115, 115, 115, 0.8);
  }
`;

const DropdownWrapper = styled.main`
  font-size: 0.875rem;
  color: #444;

  nav {
    border-bottom: 1px solid #ccc;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  li {
    padding: 1rem;
  }

  a {
    padding: 0.5rem 0;
  }
`;

const LogOutContainer = styled.section`
  padding: 1.25rem;

  .logOut-btn {
    font-size: 0.75rem;
    font-weight: 600;
    color: #666;
    border-bottom: 1px solid #666;
  }
`;
