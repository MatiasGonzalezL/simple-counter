import React from "react";

//include images into your bundle

//create your first component
const SecondsCounter = (props) => {
	let second = props.seconds;
	let secondTwo = 0;
	let minute = 0;
	let minuteTwo = 0;
	let hour = 0;
	let hourTwo = 0;
	if (props.seconds > 9) {
		secondTwo = Math.trunc(props.seconds / 10);
		second = props.seconds % 10;
		if (secondTwo > 9) {
			minute = Math.trunc(secondTwo / 10);
			secondTwo = secondTwo % 10;
			if (minute > 9) {
				minuteTwo = Math.trunc(minute / 10);
				minute = minute % 10;
				if (minuteTwo > 9) {
					hour = Math.trunc(minuteTwo / 10);
					minuteTwo = minuteTwo % 10;
					if (hour > 9) {
						hourTwo = Math.trunc(hour / 10);
						hour = hour % 10;
					}
				}
			}
		}
	}
	return (
		<div class="bigDiv">
			<div class="calendar">
				<i class="far fa-clock"></i>
			</div>
			<div class="box">{hourTwo}</div>
			<div class="box">{hour}</div>
			<div class="box">{minuteTwo}</div>
			<div class="box">{minute}</div>
			<div class="box">{secondTwo}</div>
			<div class="box">{second}</div>
		</div>
	);
};

export default SecondsCounter;
