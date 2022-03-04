import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <h1 className="footer-logo">
          <Link to="/">LOGO</Link>
        </h1>
        <ul className="info">
          <li>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호{' '}
          </li>
          <li>Copyright by (주)하우위. All right reserved.</li>
          <li>이용약관 개인정보처리방침</li>
        </ul>
        <ul className="sns">
          <li>
            <a href="#">sns아이콘</a>
          </li>
          <li>
            <a href="#">sns아이콘</a>
          </li>
          <li>
            <a href="#">sns아이콘</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
