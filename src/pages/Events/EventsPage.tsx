import EventsCalendar from "../../components/EventsCalendar";
// import FutureEventsCard from "../LandingPage/FutureEventsCard";
import styles from "./EventsPage.module.css";
const EventsPage = () => {
	return (
		<>
			<div className="bg-black">
				<div className={styles.eventsHeroImage}></div>
			</div>

			<EventsCalendar />
			{/* <div className={`container-fluid my-5`}>
        <div className="row text-white ">
          <FutureEventsCard />
        </div>
      </div> */}
		</>
	);
};

export default EventsPage;
