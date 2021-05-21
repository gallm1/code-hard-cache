import React from "react";
import RandomTerm from "../components/RandomTerm";
import Terms from "../pages/Terms";

const randomTerm = (props) => {
	console.log("this is home", props);
	return (
		<div>
			{!props.query?.length ? <RandomTerm /> : <Terms query={props.query} />}
		</div>
	);
};

export default randomTerm;
