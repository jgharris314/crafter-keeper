[
	{
		username: "username",
		email: "bingotti@scotti.com",
		password: "Jacob555",
		first_name: "Morgan",
		last_name: "the Fifth",
		account_type: "free",
		plans: {
			data: [
				{
					plan_id: "id",
					plan_name: string,
					supplies_needed: {
						data: [
							{ supply_name: string, quantity_needed: integer },
							{ supply_name: string, quantity_needed: integer },
							{ supply_name: string, quantity_needed: integer },
						],
					},
					estimatedTime: integer,
				},
				{
					plan_id: "id",
					plan_name: string,
					supplies_needed: {
						data: [
							{ supply_name: string, quantity_needed: integer },
							{ supply_name: string, quantity_needed: integer },
							{ supply_name: string, quantity_needed: integer },
						],
					},
					estimatedTime: integer,
				},
			],
		},
		orders: {
			data: [
				{
					plan_id: "id",
					plan_name: "plan name",
					time_spent: integer,
					status: "string",
				},
				{
					plan_id: "id",
					plan_name: "plan name",
					time_spent: integer,
					status: "string",
				},
			],
		},
		supplies: {
			data: [
				{ supply_name: string, in_stock: integer, unit_type: string },
				{ supply_name: string, in_stock: integer, unit_type: string },
				{ supply_name: string, in_stock: integer, unit_type: string },
			],
		},
	},
];
