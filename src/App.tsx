import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, SubLayout } from 'components';
import { Home, CampDetail, CampApply, Community } from 'pages';
import GlobalStyled from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter basename="caffein">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<SubLayout />}>
            <Route path="camp/:campid" element={<CampDetail />} />
            <Route path="community/:communityid" element={<Community />} />
          </Route>

          <Route path="camp/apply" element={<CampApply />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
