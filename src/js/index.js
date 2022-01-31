//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/home.jsx";

let counter = 0;

setInterval(function () {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.querySelector("#app")
	);
	counter += 1;
}, 1000);
