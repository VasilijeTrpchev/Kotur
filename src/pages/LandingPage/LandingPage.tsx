import Testimonials from "../../components/Testimonials";
import FutureEventsCard from "./FutureEventsCard";
import styles from "./LandingPage.module.css";
import Services from "./Services";
const LandingPage = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div>
          <img
            src="/images/landingPageImages/landing-logo.png"
            alt="Kotur logo"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center   mt-5 mb-5">
          <div className="col-12 col-md-6 bg-dark p-0">
            <div className="row">
              <div className="col-12 col-md-6 text-start">
                <p className={`${styles.bottomSpan} mt-5 ps-4 fs-5 mb-0`}>
                  12 ОКТ
                </p>
                <span className={`${styles.topSpan} fs-1 ps-5 `}>ЅИРНИ</span>
                <div className="ms-md-5 ms-3 fs-1">
                  <p className={`${styles.bottomSpan} text-center  mb-0`}>
                    ФЕСТИ
                  </p>
                  <p className={`${styles.bottomSpan} text-center  mb-0`}>
                    ВАЛ
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 pe-md-4 text-center mt-4 mt-md-0">
                <div>
                  <img
                    className={styles.futureFestivalImg}
                    src="./images/landingPageImages/future-festival-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div>
              <img
                className={styles.futureFestivalImg}
                src="./images/landingPageImages/future-festival.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* futureevents cards */}
      <div className={`container-fluid my-5 `}>
        <div className="row text-white ">
          <FutureEventsCard />
        </div>
      </div>

      {/* SERVICES */}

      <Services />

      {/* RECOMMENDATION SECTION */}
      <div className={styles.recommendation}>
        <div>
          <div className={styles.leftContent}>
            <p style={{ color: "#C0C6BA" }} className="text-uppercase">
              Оcвежете го вашиот ден со нашиот коктел на денот!
            </p>
          </div>
          <div className={styles.rightContent}>
            <p style={{ color: "#C0C6BA" }} className="text-uppercase">
              Дневно уживање во секоја чаша – пробајте го денешниот коктел!
            </p>
          </div>
          <div></div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <Testimonials />
    </div>
  );
};

export default LandingPage;
