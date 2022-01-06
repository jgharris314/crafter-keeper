exports.up = function (knex) {
	return knex.schema.createTable("supplies", (table) => {
		table.increments("supply_id").primary().notNullable();
		table.integer("owner_id").unsigned();
		table
			.foreign("owner_id")
			.references("user_id")
			.inTable("users")
			.onDelete("cascade");
		table.timestamps(true, true);
		table.string("supply_name");
		table.integer("amount_in_stock");
		table.string("unit_type").defaultTo("number");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("supplies");
};
