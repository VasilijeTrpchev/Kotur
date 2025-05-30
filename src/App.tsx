import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import MenuPage from "./pages/Menu/MenuPage";
import EventsPage from "./pages/Events/EventsPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import Layout from "./pages/Layout/Layout";
import { useEffect } from "react";

function App() {
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		const location = useLocation();

		useEffect(() => {
			window.scrollTo({ top: 0, left: 0, behavior: "instant" });
		}, [location.pathname]);

		return <>{children}</>;
	};

	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<LandingPage />} />
						<Route path="/about-us" element={<AboutUsPage />} />
						<Route path="/menu" element={<MenuPage />} />
						<Route path="/events" element={<EventsPage />} />
						<Route path="/gallery" element={<GalleryPage />} />
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
