const knex = require("../db/connection");

function authorization(username, password) {
	return knex("users")
		.select("*")
		.where({ username: username, password: password })
		.then((res) => res);
}
async function create(account) {
	const res = await knex("users").insert(account, "*");
	return res[0];
}
async function update(account_id, newAccountData) {
	const res = await knex("users")
		.select("*")
		.where({ account_id })
		.update(newAccountData, "*");
	return res[0];
}
function listAccountById(id) {
	return knex("users")
		.select("username", "first_name", "last_name")
		.where({ user_id: id })
		.then((res) => res[0]);
}
function listAccountByUsername(username) {
	return knex("users")
		.select("user_id")
		.where({ username: username })
		.then((res) => res[0]);
}

function list() {
	return knex("users").select("*");
}

function listAccountByEmail(email) {
	return knex("users")
		.select("email")
		.where({ email: email })
		.then((res) => res[0]);
}

module.exports = {
	authorization,
	create,
	update,
	list,
	listAccountById,
	listAccountByUsername,
	listAccountByEmail,
};
