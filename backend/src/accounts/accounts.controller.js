const service = require("./accounts.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const hasProperties = require("../errors/hasProperties")(
	"username",
	"email",
	"password"
);

async function authorize(req, res, next) {
	const username = req.body.data.username;
	const password = req.body.data.password;
	if (username && password) {
		service
			.authorization(username, password)
			.then((results) => {
				if (results.length > 0) {
					req.session.loggedin = true;
					req.session.username = username;
					req.session.account_type = results[0].account_type;
					req.session.plans = results[0].plans;
					req.session.orders = results[0].orders;
					req.session.supplies = results[0].supplies;
					req.session.user_id = results[0].user_id;
					req.session.first_name = results[0].first_name;
					res.locals.session = req.session;

					res.json({ data: res.locals.session });
				} else {
					return next({
						status: 400,
						message: "Invalid Username or Password",
					});
				}
				res.end();
			})
			.catch(next);
	} else {
		return next({
			status: 400,
			message: "Invalid Username or Password",
		});
	}
}

async function create(req, res, next) {
	const accountExists = await service.listAccountByUsername(
		req.body.data.username
	);

	if (accountExists) {
		return next({
			status: 400,
			message: `Username ${req.body.data.username} is already in use`,
		});
	}

	const emailExists = await service.listAccountByEmail(req.body.data.email);

	if (emailExists) {
		return next({
			status: 400,
			message: `Email ${req.body.data.email} is already in use`,
		});
	}
	service
		.create(req.body.data)
		.then((data) => res.status(201).json({ data }))
		.catch(next);
}

async function list(req, res, next) {
	let accounts = await service.list();
	res.json({ data: accounts });
}

async function listAccountById(req, res, next) {
	let id = req.params.user_id;

	const accountById = await service.listAccountById(id);
	accountById
		? res.json({ data: accountById })
		: next({
				status: 404,
				message: `Account Id: ${id} Not Found`,
		  });
}

async function listAccountByUsername(req, res, next) {
	let username = req.params.username;

	const accountByUsername = await service.listAccountByUsername(username);
	accountByUsername
		? res.json({ data: accountByUsername })
		: next({
				status: 404,
				message: `Username: ${username} Not Found`,
		  });
}

async function accountExists(req, res, next) {
	const { user_id } = req.params;
	console.log(user_id);
	const account = await service.listAccountById(Number(user_id));

	if (account) {
		res.locals.account = account;
		return next();
	}
	return next({
		status: 404,
		message: `Account ID ${user_id} cannot be found`,
	});
}

async function updateAccount(req, res, next) {
	const updateData = req.body.data;
	const { user_id } = req.params;

	const data = await service.update(Number(user_id), updateData);

	res.json({ data });
}

module.exports = {
	authorize: [asyncErrorBoundary(authorize)],
	create: [hasProperties, asyncErrorBoundary(create)],
	list,
	listAccountById,
	listAccountByUsername: [asyncErrorBoundary(listAccountByUsername)],
	update: [
		asyncErrorBoundary(accountExists),
		asyncErrorBoundary(updateAccount),
	],
};
