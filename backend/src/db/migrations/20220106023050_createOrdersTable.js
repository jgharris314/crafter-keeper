exports.up = function (knex) {
	return knex.schema.createTable("orders", (table) => {
		table.increments("order_id").primary().notNullable();
		table.integer("owner_id").unsigned();
		table
			.foreign("owner_id")
			.references("user_id")
			.inTable("users")
			.onDelete("cascade");
		table.timestamps(true, true);
		table.integer("plan_id").unsigned();
		table
			.foreign("plan_id")
			.references("plan_id")
			.inTable("plans")
			.onDelete("cascade");
		table.string("order_name");
		table.integer("minutes_spent");
		table.string("status").defaultTo("placed");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("orders");
};
