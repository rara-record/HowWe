import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CampDetail, CampApply } from 'pages';

const App = () => {
  return (
    <BrowserRouter basename="howwe">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="camp/:id" element={<CampDetail />}></Route>
        <Route path="camp/apply" element={<CampApply />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
