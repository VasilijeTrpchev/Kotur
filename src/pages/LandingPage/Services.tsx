import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const Services = () => {
  return (
    <div className="bg-black py-4">
      <div className="container-fluid">
        <h3 style={{ color: "#C0C6BA" }} className="fw-bold text-center py-3">
          Услуги
        </h3>
        <div className="row m-0">
          <div className="col-md-3 h-100">
            <div className="d-flex flex-column">
              <div className={styles.serviceImgWrapper}>
                <img
                  src="/images/landingPageImages/cocktailImg.png"
                  alt="cocktail"
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectPosition: "center bottom" }}
                />
              </div>

              <div
                style={{ color: "#C0C6BA" }}
                className="p-2 d-flex flex-column"
              >
                <h5>Мени</h5>
                <p>
                  Adipiscing tempus ullamcorper lobortis odio tellus arcu
                  volutpat. Risus placerat morbi volutpat habitasse interdum mi
                  aliquam In sed odio nec aliquet.
                </p>
                <Link to="/menu" className="text-decoration-none">
                  <button
                    className="btn fw-bold px-4 mb-3"
                    style={{ backgroundColor: "#C0C6BA" }}
                  >
                    Дознај повеќе
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 h-100">
            <div className="d-flex flex-column">
              <div className={styles.serviceImgWrapper}>
                <img
                  src="/images/landingPageImages/sala.png"
                  alt="room"
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div
                style={{ color: "#C0C6BA" }}
                className="p-2 d-flex flex-column"
              >
                <h5>Изнајми простор</h5>
                <p>
                  Adipiscing tempus ullamcorper lobortis odio tellus arcu
                  volutpat. Risus placerat morbi volutpat habitasse interdum mi
                  aliquam In sed odio nec aliquet.
                </p>
                <Link to="/about-us" className="text-decoration-none">
                  <button
                    className="btn fw-bold px-4 mb-3"
                    style={{ backgroundColor: "#C0C6BA" }}
                  >
                    Дознај повеќе
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 h-100">
            <div>
              <div className={styles.serviceImgWrapper}>
                <img
                  src="/images/landingPageImages/drinks-img.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div
                style={{ color: "#C0C6BA" }}
                className="p-2 d-flex flex-column"
              >
                <h5>Коктел кетеринг</h5>
                <p>
                  Adipiscing tempus ullamcorper lobortis odio tellus arcu
                  volutpat. Risus placerat morbi volutpat habitasse interdum mi
                  aliquam In sed odio nec aliquet.
                </p>
                <Link to="/about-us" className="text-decoration-none">
                  <button
                    className="btn fw-bold px-4 mb-3"
                    style={{ backgroundColor: "#C0C6BA" }}
                  >
                    Дознај повеќе
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 h-100">
            <div>
              <div className={styles.serviceImgWrapper}>
                <img
                  src="/images/landingPageImages/kotursosebe.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div
                style={{ color: "#C0C6BA" }}
                className="p-2 d-flex flex-column"
              >
                <h5>Котур понеси го со себе</h5>
                <p>
                  Adipiscing tempus ullamcorper lobortis odio tellus arcu
                  volutpat. Risus placerat morbi volutpat habitasse interdum mi
                  aliquam In sed odio.
                </p>
                <Link to="/about-us" className="text-decoration-none">
                  <button
                    className="btn fw-bold px-4 mb-3"
                    style={{ backgroundColor: "#C0C6BA" }}
                  >
                    Дознај повеќе
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
