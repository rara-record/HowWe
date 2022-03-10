import { Link } from 'react-router-dom';
import { ICamp } from 'types/type';

const CampCard = ({ camp }: { camp: ICamp }) => {
  return (
    <>
      <article
        className="camp-card"
        style={{
          backgroundImage: `url(${camp.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
        }}
      >
        <Link to={`/camp/${camp.id}`}>
          <div>{camp.status}</div>
          <div>{camp.name}</div>
          <div>{camp.startDate}</div>
        </Link>
      </article>
    </>
  );
};

export default CampCard;
