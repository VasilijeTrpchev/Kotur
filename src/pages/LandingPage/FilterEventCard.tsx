import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const FilterEventCard = ({
  name,
  date,
  index,
}: {
  name: string;
  date: string;
  index: number;
}) => {
  return (
    <div className="col-md-4 col-12 mt-4 h-100 ">
      <div
        className={`${
          index % 2 === 0 ? styles.greenCard : styles.blackCard
        } h-100 text-white`}
      >
        <Link to="/events">
          <img
            src={`https://picsum.photos/400/300?random=${Math.random()}`}
            alt="Gallery Image 1"
            className={styles.image}
          />
          <h6 className="border-bottom py-4 text-center mb-0">{name}</h6>
          <p className="border-bottom py-3 mb-0 text-center ">{date}</p>
          <p className="text-center pt-3 mb-0">21:00ч</p>
        </Link>
      </div>
    </div>
  );
};

export default FilterEventCard;
