// ::: Import Modules
import express from "express";
import morgan from "morgan";

// API Security Modules
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

// Project Modules
import getDirname from "./src/server/utils/get-dirname.js";
import ErrorMgr from "./src/server/middleware/error-manager.js"; // <<--|
// import studentsRouter from "./src/server/routers/students-router.ts"; // <<--|
// import contactsRouter from "./src/server/routers/contacts-router.ts"; // <<--|

// ::: Instantiate Key Variables
const app = express();
const __dirname = getDirname();

// ::: Global Security Middleware
// 1 - Sets Security HTTP headers (called first as a best practice)
app.use(helmet());

// 2 - Logs HTTP Requests Data to the Console
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// 3 - Parse {req.body} from JSON into Javascript and enforce a data limit
app.use(express.json({ limit: "10kb" }));

// 4 - Data Sanitization A: Preventing NoSQL query injection
app.use(mongoSanitize());

// 5 - Data Sanitization B: Preventing XSS
app.use(xss());

// 6 - Data Sanitization C: Preventing Parameter Pollution Attacks
app.use(
	hpp({
		whitelist: [
			// <<--| Whitelist specific fields once we have them
		],
	}),
);

// 7 - Limiter for enhanced security (prevents DDOS & brute force attacks)
const limiter = rateLimit({
	max: 100, // request limit per {.windowMs}
	windowMs: 60 * 60 * 1000, // time window in miliseconds (aka 1 hr in ms),
	message: "You have exceeded the request limit - Try again later",
});
app.use("/", limiter);

// ::: Additional Miscellaneous Global Middleware
// 1 - Specifies directory "route" containing static assets
app.use(express.static(`${__dirname}/public`));

// 2 - Generates a timestamp and attaches it to the req object
app.use((req, res, next) => {
	req.requestTime = new Date().toLocaleTimeString();
	next();
});

// ::: Global Router Mounting
// app.use("/api/v1/students", studentsRouter); // <<--|
// app.use("/api/v1/contacts", contactsRouter); // <<--|

// 4 - Throws error for all uncaught URLs
app.all("*", (req, res, next) => {
	next(new ErrorMgr(`The URL ${req.originalUrl} does not exist.`, 404));
});

// 5 - Global Error Handler that manages all application-wide errors.
app.use(ErrorMgr.globalHandler);

export default app; // <<--(
