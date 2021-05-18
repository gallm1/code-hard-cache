import axios from "axios";

export default {
	getTerms: () => {
		return axios.get("/api/terms");
	},
	saveTerm: (termData) => {
		return axios.get("/api/terms", termData);
	},
	getTerm: (id) => {
		return axios.get("/api/terms/" + id);
	},
	deleteTerm: (id) => {
		return axios.delete("/api/terms/" + id);
	},
};
