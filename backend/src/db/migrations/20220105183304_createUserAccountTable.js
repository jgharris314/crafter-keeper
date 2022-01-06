exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("user_id").primary().notNullable();
		table.string("username").unique().notNullable();
		table.string("email").unique().notNullable();
		table.string("password").notNullable();
		table.timestamps(true, true);
		table.specificType("plans", "INT[]");
		table.specificType("orders", "INT[]");
		table.string("first_name");
		table.string("last_name");
		table.string("account_type").defaultTo("free");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
