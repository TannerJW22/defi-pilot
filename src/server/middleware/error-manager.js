class ErrorMgr extends Error {
	constructor(message, statusCode) {
		super(message);

		this.message = message;
		this.statusCode = statusCode;
		this.forClient = true; // flags error as a manually generated error intended to be client-facing.

		Error.captureStackTrace(this, this.constructor);
	}

	// ::: {.catch()} Wrapper for async functions that passes errors to {next()} (aka {.globalHandler()})
	static catchAsync(func) {
		return (req, res, next) => {
			func(req, res, next).catch(err => next(err));
		};
	}

	static sendDevError(err, res) {
		res.status(err.statusCode).json({
			status: err.status,
			stack: err.stack,
			error: err,
		});
	}

	static sendDefaultProdError(err, res) {
		if (err.ForClient) {
			res.status(err.statusCode).json({
				status: err.status,
				message: err.message,
			});
		}

		console.error("Internal Programming Error", err);

		res.status(500).json({
			status: "error",
			message: "Unspecified Internal Error",
		});
	}

	static globalHandler(err, req, res, next) {
		err.statusCode = err.statusCode || 500;
		err.status = err.status || "error";
		// process.env.NODE_ENV = "production"; // <<--| For testing prod-only error pipeline

		if (process.env.NODE_ENV !== "production") ErrorMgr.sendDevError(err, res);

		// ::: If {NODE_ENV === "production"} curate the correct error response
		const error = { ...err };

		// <<--| Insert Case-Specific Re-routing of Production Errors
		// (Case 1)
		// (Case 2)
		// ....

		ErrorMgr.sendDefaultProdError(error, res);
	}
}

export default ErrorMgr; // <<--(
