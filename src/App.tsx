import GlobalStyled from 'styles/global';
import AuthStore from 'stores/AuthStore';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { MainLayout, SubLayout } from 'components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  CampDetail,
  CampApply,
  Community,
  Login,
  Register,
  Profile,
  NotFound,
} from 'pages';
const App = () => {
  const AuthStroe = useContext(AuthStore);

  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<SubLayout />}>
            <Route path="/camp/:campId" element={<CampDetail />} />
            <Route path="community/:communityId" element={<Community />} />
            <Route path="camp/apply" element={<CampApply />} />
          </Route>

          {!AuthStroe.isLoggedIn && (
            <>
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/register" element={<Register />} />
            </>
          )}

          {AuthStroe.isLoggedIn && (
            <Route path="/profile" element={<Profile />} />
          )}

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default observer(App);
