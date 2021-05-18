const express = require("express");
const session = require("express-session");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongodb-session")(session);
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codehardcache", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  );
  
  const sess = {
		secret: "PASSWORD",
		cookie: {},
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({
			uri: process.env.MONGODB_URI || "mongodb://localhost/codehardcache",
			collections: "sessions",
		}),
	};

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
  
app.use(session(sess));
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
