import React, { useEffect, useState } from "react";
import API from "../utils/API";
import TermCard from "../components/TermCard";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TERM, UPDATE_SEARCH, UPDATE_TERMS } from "../utils/actions";

function Terms() {
	const [term, setTerm] = useState({});
	const [terms, setTerms] = useState({});
	const [state, dispath] = useStoreContext();

	useEffect(() => {
		// console.log(state.search);
    API.getTerm(state.search)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  
	}, [state.search]);

	useEffect(() => {
		loadTerms();
	}, []);

	function loadTerms() {
		API.getTerms()
			.then((terms) => {
				setTerms(terms);
				setTerm(terms[0]);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<TermCard />
		</div>
	);
}

export default Terms;
