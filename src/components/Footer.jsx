import React from "react";

const Footer = () => {
	let thisYear = new Date().getFullYear();
	return <footer>Copyright Moa Hamner {thisYear}</footer>;
};

export default Footer;
