/* eslint-disable import/first */
/////////////////////////////////////////////////////////////////
console.log("\n\n\n=-=-=-=-=-=- :: CONSOLE LOG :: -=-=-=-=-=-=-=-=\n"); // <<--*
/////////////////////////////////////////////////////////////////

// {1} Import Modules
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

// {2} Configure Environment
dotenv.config({ path: "./config.env" });

// ::: "uncaughtException" Handler for errors external to Express
process.on("uncaughtException", err => {
	console.log(":: server.js | ERROR: Unhandled Exception\n", err.name, err.message); // <<--*
	process.exit(1);
});

// // {3} Connect to MongoDB
// let authUrl = process.env.MDB_DATABASE;
// authUrl = authUrl.replace("<MDB_USERNAME>", process.env.MDB_USERNAME);
// authUrl = authUrl.replace("<MDB_PASSWORD>", process.env.MDB_PASSWORD);
// authUrl = authUrl.replace("<MDB_CLIENT_DOMAIN>", process.env.MDB_CLIENT_DOMAIN);

// mongoose
// 	.connect(authUrl, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	}) // standard values to bypass some deprecation warnings.
// 	.then(() => {
// 		console.log(`:: server.js | MongoDB Connection Established`);
// 	}); // <<--*

// {4} Launch Local Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log(`:: server.js | :${port} Live {NODE_ENV '${process.env.NODE_ENV}'}`); // <<--*
});

// ::: "unhandledRejection" Handler for errors external to Express
process.on("unhandledRejection", err => {
	console.log(":: server.js | ERROR: Unhandled Rejection\n", err.name, err.message); // <<--*

	// {server.close()} is used to "gracefully" close the server before crashing Nodejs
	// but technically you could just call {process.exit(1)} naked.
	server.close(() => {
		process.exit(1);
	});
});
