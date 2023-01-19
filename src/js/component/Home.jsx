import React from "react";

import Stoplight from "./Stoplight.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container d-flex flex-column text-center align-items-center">
			<Stoplight />
			<p className="m-5"> 
				Made by{" "}
				<a href="https://github.com/jessicabrinegar">Jessie B</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
