import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="navbar fixed-top navbar-expand-md shadow">
			<div className="container-fluid">
				<div className="d-flex align-items-center justify-content-between w-100">
					<Link className="navbar-brand" to="/">
						<img
							src="/images/logo.png"
							alt="Kotur Logo"
							width="50"
							height="50"
						/>
					</Link>

					<p className="fs-3 text-white d-md-none mb-0 fw-semibold">Котур</p>

					<div
						className={`menu-icon d-md-none ${menuOpen ? "open" : ""}`}
						onClick={toggleMenu}
						aria-label="Toggle menu"
						style={{ width: "50px" }}
					>
						<div className="line shorter"></div>
						<div className="line longer"></div>
					</div>
				</div>
				<div
					className={`collapse navbar-collapse d-md-flex gap-5 fw-semibold ${
						menuOpen ? "show open" : ""
					}`}
					id="navbarNav"
				>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`nav-link text-white ${isActive ? "custom-underline" : ""}`
						}
						onClick={toggleMenu}
					>
						Котур
					</NavLink>

					<NavLink
						to="/about-us"
						className={({ isActive }) =>
							`nav-link text-white ${isActive ? "custom-underline" : ""}`
						}
						onClick={toggleMenu}
					>
						За нас
					</NavLink>
					<div className="dropdown">
						<NavLink
							to="/events"
							className={({ isActive }) =>
								`events-link nav-link text-white  ${
									isActive ? "custom-underline" : ""
								}`
							}
							onClick={toggleMenu}
						>
							Настани
						</NavLink>
					</div>
					<NavLink
						to="/gallery"
						className={({ isActive }) =>
							`nav-link text-white ${isActive ? "custom-underline" : ""}`
						}
						onClick={toggleMenu}
					>
						Архива
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
