import { useState } from "react";
import styles from "../pages/Events/EventsPage.module.css";
import FilterEventCard from "../pages/LandingPage/FilterEventCard";

const getMonthNames = () => {
  const monthNames = [
    "Јан",
    "Фев",
    "Мар",
    "Апр",
    "Маj",
    "Јун",
    "Јул",
    "Авг",
    "Сеп",
    "Окт",
    "Ное",
    "Дек",
  ];

  const currentDate = new Date();
  const months = [];

  for (let i = 0; i < 7; i++) {
    const futureDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + i,
      1
    );
    const month = monthNames[futureDate.getMonth()];
    months.push({
      name: month,
      index: futureDate.getMonth() + 1,
    });
  }

  return months;
};

const EventsCalendar = () => {
  const monthList = getMonthNames();
  const [monthFilter, setMonthFilter] = useState(monthList[0].index);
  const [weekFilter, setWeekFilter] = useState(1);

  const events = [
    {
      name: "MEET PRESPA PRE PARTY",
      description: "",
      date: "Април 02.04",
      month: 4,
      week: 1,
    },
    {
      name: "MEET PRESPA PRE PARTY",
      description: "",
      date: "Април 10 ,2025",
      month: 4,
      week: 1,
    },
    {
      name: "КОНЦЕРТ ПОД СЕНКА",
      description: "",
      date: "Април 3 ,2025",
      month: 4,
      week: 1,
    },
    {
      name: "	КОНЦЕРТ НА СОНЦЕ",
      description: "Описание на настан #2",
      date: "Април 4, 2025",
      month: 4,
      week: 1,
    },
    {
      name: "ФЕСТИВАЛ",
      description: "Описание на настан #2",
      date: "Април 2, 2025",
      month: 4,
      week: 1,
    },
    {
      name: "ФЕСТИВАЛ",
      description: "Описание на настан #2",
      date: "Април 16, 2025",
      month: 4,
      week: 2,
    },
    {
      name: "ФЕСТИВАЛ",
      description: "Описание на настан #2",
      date: "Април 17, 2025",
      month: 4,
      week: 2,
    },
    {
      name: "ФЕСТИВАЛ",
      description: "Описание на настан #2",
      date: "Мај 1, 2025",
      month: 5,
      week: 1,
    },
    {
      name: "КИНО ПРОЕКЦИЈА",
      description: "Описание на настан #2",
      date: "Мај 2, 2025",
      month: 5,
      week: 1,
    },
    {
      name: "КОНЦЕРТ ПОД СЕНКА",
      description: "Описание на настан #2",
      date: "Мај 22, 2025",
      month: 5,
      week: 2,
    },
    {
      name: "Настан #4",
      description: "Описание на настан #4",
      date: "Мај 21, 2025",
      month: 5,
      week: 2,
    },
    {
      name: "Настан #4",
      description: "Описание на настан #4",
      date: "Мај 13, 2025",
      month: 5,
      week: 2,
    },
    {
      name: "Настан #4",
      description: "Описание на настан #4",
      date: "Мај 16, 2025",
      month: 5,
      week: 2,
    },
    {
      name: "Настан #1",
      description: "Описание на настан #1",
      date: "Мај 20, 2025",
      month: 5,
      week: 1,
    },
  ];

  return (
    <div className="">
      <div className={styles.weekCard}>
        <div className="container">
          <h2 style={{ color: "#DFDFDF" }}>Календар Котур Настани</h2>
          <div className={styles.monthNames}>
            {monthList.map((month) => (
              <button
                key={month.index}
                onClick={() => setMonthFilter(month.index)}
                className={`${
                  month.index === monthFilter ? styles.activeButton : ""
                } ${styles.flatButton} btn border-white text-uppercase`}
              >
                {month.name}{" "}
              </button>
            ))}
          </div>

          <div className="text-white">
            {/* <div>
                        <h6 className="mb-0">Сабота</h6>
                        <p className="mb-0 fw-bold" style={{ fontSize: "22px" }}>
                            19.04
                        </p>
                        <p className="mb-0">2025</p>
                    </div> */}

            <div className={`row mt-4 m-0`}>
              <div
                className={`col-md-6 col-lg-3 px-0 gy-2 ${
                  weekFilter === 1 ? styles.greenColor : ""
                }`}
                onClick={() => setWeekFilter(1)}
              >
                <div
                  className="d-flex border-start justify-content-evenly py-3"
                  style={{ backgroundColor: "#303234 " }}
                >
                  <div className="align-self-end">
                    <button className={styles.findMoreBtn}>
                      Дознај повеќе
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">10:30-12:00</p>
                    <p style={{ fontSize: "22px" }}>Недела 1</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                  </div>
                </div>
              </div>

              <div
                className={`col-md-6 col-lg-3 px-0 gy-2 ${
                  weekFilter === 2 ? styles.greenColor : ""
                }`}
                onClick={() => setWeekFilter(2)}
              >
                <div
                  className="d-flex border-start justify-content-evenly py-3"
                  style={{ backgroundColor: "#303234 " }}
                >
                  <div className="align-self-end">
                    <button className={styles.findMoreBtn}>
                      Дознај повеќе
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">10:30-12:00</p>
                    <p style={{ fontSize: "22px" }}>Недела 2</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                  </div>
                </div>
              </div>

              <div
                className={`col-md-6 col-lg-3 px-0 gy-2 ${
                  weekFilter === 3 ? styles.greenColor : ""
                }`}
                onClick={() => setWeekFilter(3)}
              >
                <div
                  className="d-flex border-start justify-content-evenly py-3"
                  style={{ backgroundColor: "#303234 " }}
                >
                  <div className="align-self-end">
                    <button className={styles.findMoreBtn}>
                      Дознај повеќе
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">10:30-12:00</p>
                    <p style={{ fontSize: "22px" }}>Недела 3</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                  </div>
                </div>
              </div>

              <div
                className={`col-md-6 col-lg-3 px-0 gy-2 ${
                  weekFilter === 4 ? styles.greenColor : ""
                }`}
                onClick={() => setWeekFilter(4)}
              >
                <div
                  className="d-flex border-start justify-content-evenly py-3"
                  style={{ backgroundColor: "#303234 " }}
                >
                  <div className="align-self-end">
                    <button className={styles.findMoreBtn}>
                      Дознај повеќе
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">10:30-12:00</p>
                    <p style={{ fontSize: "22px" }}>Недела 4</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                    <p className="text-uppercase mb-0">Subheading</p>
                    <p className="mb-0">Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERED EVENTS */}
      <div className="container col-lg-12 col-12 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
        <div className={`${styles.scrollContainer} h-100 py-5`}>
          {events
            .filter(
              (event) =>
                event.month === monthFilter && event.week === weekFilter
            )
            .map((event, index) => (
              <FilterEventCard
                name={event.name}
                date={event.date}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
