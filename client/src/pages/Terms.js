import React, { useEffect, useState } from "react";
import API from "../utils/API";
import TermCard from "../components/TermCard";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TERM, UPDATE_SEARCH, UPDATE_TERMS } from "../utils/actions";

function Terms({ query }) {
	const [terms, setTerms] = useState([]);
	const [state, dispath] = useStoreContext();

	useEffect(() => {
		console.log(query);
		API.getTerms(query)
			.then((res) => {
				setTerms(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, [query]);

	useEffect(() => {
		loadTerms();
	}, []);

	function loadTerms() {
		API.getTerms()
			.then((terms) => {
				setTerms(terms);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			{terms &&
				Array.isArray(terms) &&
				terms.map((term) => {
					return <TermCard term={term} />;
				})}
		</div>
	);
}

export default Terms;
