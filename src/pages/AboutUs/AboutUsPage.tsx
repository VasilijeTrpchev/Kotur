import RoomReservationForm from "../../components/RoomReservationForm";
import TableReservationForm from "../../components/TableReservationForm";
import Testimonials from "../../components/Testimonials";
import WorkApplicationForm from "../../components/WorkApplicationForm";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
	return (
		<div>
			<div className={styles.aboutUsHero}>
				<div className={styles.circularText}>
					<img
						src="/images/AboutUsImages/istorija-kotur.png"
						alt="Istorija na Kotur"
						className="w-100"
					/>
				</div>
			</div>
			{/* HISTORY */}
			<div className="container py-5">
				<div className="text-center">
					<img src="/images/landingPageImages/black-spoon.png" alt="spoon" />
				</div>
				<h2 className="mb-4 text-center">
					Услужуваме клиенти повеќе од 10 години
				</h2>

				<div>
					<div className="row">
						<div className="col-md-5">
							<img
								src="/images/AboutUsImages/image00015 1.png"
								alt="Kotur"
								className="w-100"
							/>
							<p>
								„Котур“ во Скопје, во срцето на урбаната џунгла, е место каде
								можеш да најдеш добра уметност, филмови, разговори – омилено
								место на многу локални љубители на уметноста!"
							</p>
						</div>

						<div className="col-md-7">
							<img
								src="/images/AboutUsImages/image00043 1.png"
								alt=""
								className="w-100"
							/>
							<div>
								<h3 className="my-3">Низ годините</h3>
								<div className="d-flex justify-content-between">
									<div className="p-2">
										<p className="mb-0 fw-bold">3000+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Направени коктели</p>
									</div>
									<div className={`${styles.whiteBorder} p-2`}>
										<p className="mb-0 fw-bold">5000+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Направени кафиња</p>
									</div>
									<div className={`${styles.whiteBorder} p-2`}>
										<p className="mb-0 fw-bold">80+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Проекции</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* COCKTAIL CATERING */}
			<div className="row m-0">
				<div className="col-md-6 p-0">
					<img
						src="/images/AboutUsImages/aboutUsCocktail.png"
						alt="Cocktail catering"
						className="w-100 h-100"
					/>
				</div>

				<div
					className="col-md-6 text-white p-3 d-flex flex-column justify-content-center"
					style={{ backgroundColor: "#5A5C57" }}
				>
					<div className="p-md-5">
						<h3>Коктел кетеринг</h3>
						<p>
							Коктел кетеринг Lorem ipsum dolor sit amet, consectetur adipiscing
							elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla
							lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac
							consequat, aliquam molestie lectus eu. Congue iaculis integer
							curabitur semper sit nunc.
						</p>
					</div>
				</div>
			</div>

			{/* TABLE RESERVATION FORM */}
			<div className={styles.tableReservationWrapper}>
				<TableReservationForm />
			</div>

			{/* RENTING ROOM */}
			<div
				style={{ backgroundColor: "#595D58" }}
				className={`${styles.rentRoomDiv} text-white text-center py-4`}
			>
				<div className="container">
					<h2>Изнајмување на сала</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						pharetra adipiscing ultrices vulputate posuere tristique. In <br />{" "}
						sed odio nec aliquet eu proin mauris et.
					</p>
				</div>
				<div className={`${styles.rentImgContainer} 50-vh`}>
					<img
						src="/images/AboutUsImages/Video.png"
						alt="Renting room"
						className="w-100"
					/>
				</div>
			</div>
			{/* ROOM RESERVATION FORM */}
			<div className={styles.tableReservationWrapper}>
				<RoomReservationForm />
			</div>
			{/* KOTUR VRABOTUVA */}

			<div className="container py-3">
				<h2 className="text-center mb-5">Стани дел од тимот</h2>
				<div className="row justify-content-evenly">
					<div className="col-md-6">
						<img
							src="/images/AboutUsImages/Kotur vrabotuva 1.png"
							alt="Kotur vrabotuva"
							className="w-100 h-100"
						/>
					</div>
					<div className="col-md-5 py-3 d-flex flex-column justify-content-center">
						<h3 className="py-2">Котур вработува</h3>
						<p className="fst-italic">
							auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
							sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
							molestie lectus eu. Congue iaculis integer curabitur semper sit
							nunc. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
							eget sit. Nulla scelerisque scelerisque congue ac consequat,
							aliquam molestie lectus eu. Congue iaculis integer curabitur
							semper sit nunc.
						</p>
						<a href="#workApplication">
							<button
								className="btn fw-bold px-5"
								style={{ backgroundColor: "#9C9F98" }}
							>
								Аплицирај веднаш
							</button>
						</a>
					</div>
				</div>
			</div>

			{/* WORK APPLICATION FORM */}
			<div className={styles.tableReservationWrapper}>
				<WorkApplicationForm />
			</div>
			<Testimonials />
		</div>
	);
};

export default AboutUsPage;
