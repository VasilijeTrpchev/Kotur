import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
const FutureEventsCard = () => {
	return (
		<>
			<div className="col-lg-12 col-12 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
				<div className={`${styles.scrollContainer} h-100`}>
					<div className="col-md-4 col-12  h-100 ">
						<div className={`${styles.card} h-100`}>
							<Link to="/events">
								<img
									src="/images/gallery-page/img1.jpg"
									alt="Gallery Image 1"
									className={styles.image}
								/>
								<h6 className="border-bottom py-4 text-center mb-0">
									MEET PRESPA PRE PARTY
								</h6>
								<p className="border-bottom py-3 mb-0 text-center ">
									Септември 05 ,2024
								</p>
								<p className="text-center pt-3 mb-0">21:00ч</p>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-12  h-100 ">
						<div
							className={`${styles.card} h-100`}
							style={{ backgroundColor: "#98A190" }}
						>
							<Link to="/events">
								<img
									src="/images/gallery-page/img2.jpg"
									alt="Gallery Image 1"
									className={styles.image}
								/>
								<h6 className="border-bottom py-4 text-center mb-0">
									КОНЦЕРТ ПОД СЕНКА
								</h6>
								<p className="border-bottom py-3 mb-0 text-center ">
									Јуни 15 ,2024
								</p>
								<p className="text-center pt-3 mb-0">12:30ч</p>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-12  h-100 ">
						<div className={`${styles.card} h-100`}>
							<Link to="/events">
								<img
									src="/images/gallery-page/img7.jpg"
									alt="Gallery Image 1"
									className={styles.image}
								/>
								<h6 className="border-bottom py-4 text-center mb-0">
									ДИСКО ПРИНЦИП
								</h6>
								<p className="border-bottom py-3 mb-0 text-center ">
									Септември 20 ,2024
								</p>
								<p className="text-center pt-3 mb-0">21 0:00ч</p>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-12  h-100 ">
						<div
							className={`${styles.card} h-100`}
							style={{ backgroundColor: "#98A190" }}
						>
							<Link to="/events">
								<img
									src="/images/gallery-page/img4.jpg"
									alt="Gallery Image 1"
									className={styles.image}
								/>
								<h6 className="border-bottom py-4 text-center mb-0">
									MEET PRESPA PRE PARTY
								</h6>
								<p className="border-bottom py-3 mb-0 text-center ">
									Септември 05 ,2024
								</p>
								<p className="text-center pt-3 mb-0">21:00ч</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FutureEventsCard;
