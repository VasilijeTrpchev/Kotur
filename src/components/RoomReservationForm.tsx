import styles from "../pages/AboutUs/AboutUsPage.module.css";

const RoomReservationForm = () => {
	return (
		<div className="bg-black py-5">
			<div className="text-center">
				<p className="text-white mb-0">Резервации</p>
				<img src="/images/footer/spoon.png" alt="spoon" />
				<h2 style={{ color: "#C0C6BA" }}>Резервирај Сала</h2>
			</div>
			<form className="p-2">
				<div className="row m-0 text-white">
					<div className="col-md-4 mb-4">
						<label htmlFor="name" className="mb-1">
							Име и презиме
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Петко Петкоски"
							className={`${styles.customInput} bg-black  border border-white form-control`}
						/>
					</div>
					<div className="col-md-4 mb-4">
						<label htmlFor="date" className="mb-1">
							Датум
						</label>
						<input
							type="date"
							id="date"
							name="date"
							placeholder="Петко Петкоски"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
					<div className="col-md-4 mb-4">
						<label htmlFor="time" className="mb-1">
							Час
						</label>
						<input
							type="time"
							id="time"
							name="time"
							placeholder="Петко Петкоски"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>

					<div className="col-md-4 mb-4">
						<label htmlFor="email" className="mb-1">
							Емаил адреса
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="petko.petkoski@gmail.com"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
					<div className="col-md-4 mb-4">
						<label htmlFor="event" className="mb-1">
							Тип на настан
						</label>
						<input
							type="text"
							id="event"
							name="event"
							placeholder="Lorem ipsum"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
					<div className="col-md-4 mb-4">
						<label htmlFor="message" className="mb-1">
							Порака
						</label>
						<input
							type="text"
							id="message"
							name="message"
							placeholder="Lorem ipsum"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="btn px-5 fw-semibold mt-2"
						style={{ backgroundColor: "#C0C6BA" }}
					>
						Испрати
					</button>
				</div>
			</form>
		</div>
	);
};

export default RoomReservationForm;
