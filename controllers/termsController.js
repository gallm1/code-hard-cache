const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Terms.find(req.query)
			.sort({ term: 1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	find: (req, res) => {
		db.Terms.find({
			term: { $regex: req.query, $options: "i" } 
		})
			.sort({ term: 1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).end());
	},
	create: (req, res) => {
		db.Terms.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
