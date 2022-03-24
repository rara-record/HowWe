import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CampDetail, CampApply, Community } from 'pages';
import GlobalStyled from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter basename="caffein">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="camp/:id" element={<CampDetail />}></Route>
          <Route path="camp/apply" element={<CampApply />}></Route>
          <Route path="community/:id" element={<Community />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
