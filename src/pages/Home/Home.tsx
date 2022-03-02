import { Navbar, Footer } from 'components';
import { Visual, Camp, Community, HomeBanner } from './components';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Visual />
        <Camp />
        <HomeBanner />
        <Community />
      </main>
      <Footer />
    </>
  );
};

export default Home;
