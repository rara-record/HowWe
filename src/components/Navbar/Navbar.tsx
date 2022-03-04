import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">LOGO</Link>
      </h1>
      <div>유저아이콘</div>
    </nav>
  );
};

export default Navbar;
