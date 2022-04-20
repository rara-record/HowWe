import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, SubLayout } from 'components';
import { Home, CampDetail, CampApply, Community, AuthPage } from 'pages';
import GlobalStyled from 'styles/global';

const App = () => {
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
            <Route path="/auth" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
