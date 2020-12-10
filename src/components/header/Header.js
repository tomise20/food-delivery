import React, { useState, useEffect } from "react";
import "./styles.scss";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header() {
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 768;

	console.log(isMobile);

	return <>{isMobile ? <MobileMenu /> : <Menu />}</>;
}
