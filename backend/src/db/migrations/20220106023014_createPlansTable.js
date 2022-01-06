exports.up = function (knex) {
	return knex.schema.createTable("plans", (table) => {
		table.increments("plan_id").primary().notNullable();
		table.integer("owner_id").unsigned();
		table
			.foreign("owner_id")
			.references("user_id")
			.inTable("users")
			.onDelete("cascade");
		table.timestamps(true, true);
		table.json("supplies_needed");
		table.integer("estimated_minutes");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("plans");
};
