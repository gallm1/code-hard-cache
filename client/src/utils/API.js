import axios from "axios";

export default {
	getTerms: () => {
		return axios.get("/api/terms");
	},
	saveTerm: (termData) => {
		return axios.post("/api/terms", termData);
	},
	getTerm: (query) => {
		return axios.get("/api/terms/", { params: { q: query } });
	},
};
