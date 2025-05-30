const Footer = () => {
	return (
		<div
			className="text-white text-center py-5"
			style={{ backgroundColor: "#040404" }}
		>
			<div className="footer row m-0" style={{ backgroundColor: "#040404" }}>
				<div className="col-12 col-md-4 order-md-2">
					<h4 style={{ color: "#C0C6BA", fontSize: "32px" }} className="mb-4">
						Котур
					</h4>
					<p>
						"The best way to find yourself is to lose yourself in the service of
						others.”
					</p>
					<img src="./images/footer/spoon.png" alt="Spoon" className="mb-3" />
					<div>
						<a
							href="https://www.facebook.com/KoturKafeiFilm/?locale=mk_MK"
							target="_blank"
							className="text-white mx-2"
						>
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							className="text-white mx-2"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://www.instagram.com/koturkafeifilm/?__d=1%3F%2F"
							target="_blank"
							className="text-white mx-2"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>
				<div className="col-12 col-md-4 order-md-1 mt-2">
					<p style={{ color: "#F5EFDB" }} className="fs-3">
						Работно Време
					</p>
					<p className="mb-0">Понеделник-Петок:</p>
					<p>08:00 am - 01:00 am</p>
					<p className="mb-0">Сабота-Недела:</p>
					<p>07:00am - 11:00 pm</p>
				</div>
				<div className="color-lightgray col-12 col-md-4 order-md-3 mt-2">
					<p style={{ color: "#F5EFDB" }} className="fs-4">
						Контакт
					</p>
					<p className="color-lightgray">Никола Вапцаров 7, Скопје 1000</p>
					<a
						href="https://www.google.com/search?client=opera-gx&q=%D0%BA%D0%BE%D1%82%D1%83%D1%80&sourceid=opera&ie=UTF-8&oe=UTF-8"
						className="color-lightgray text-decoration-underline"
						target="_blank"
					>
						078 357 896
					</a>
				</div>
			</div>
			<p className="color-lightgray mt-3 mb-0">
				{" "}
				{new Date().getFullYear()} Котур. All Rights reserved.
			</p>
		</div>
	);
};

export default Footer;
