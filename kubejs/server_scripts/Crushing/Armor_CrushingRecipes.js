// Armor and Tools Create Crushing Recipes

ServerEvents.recipes(event => {

	// Diamond Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/diamond_helmet');

	// Diamond Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 4
			}
		]
	}).id('forge_frontier:crushing/diamond_chestplate');

	// Diamond Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/diamond_leggings');

	// Diamond Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond' ,
				count: 2
			}
		]
	}).id('forge_frontier:crushing/diamond_boots');


	// Gold Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/golden_helmet');

	// Gold Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 4
			}
		]
	}).id('forge_frontier:crushing/golden_chestplate');

	// Gold Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/golden_leggings');

	// Gold Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot' ,
				count: 2
			}
		]
	}).id('forge_frontier:crushing/golden_boots');


	// Netherite Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_helmet');

	// Netherite Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 3
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_chestplate');

	// Netherite Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 3
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 3
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_leggings');

	// Netherite Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_scrap',
				count: 2
			},
			{
				item: 'minecraft:diamond',
				chance: 0.50,
				count: 2
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_boots');


	// Leather Cap
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:leather',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/leather_helmet');

	// Leather Tunic
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:leather',
				count: 6
			}
		]
	}).id('forge_frontier:crushing/leather_chestplate');

	// Leather Pants
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:leather',
				count: 5
			}
		]
	}).id('forge_frontier:crushing/leather_leggings');

	// Leather Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:leather_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:leather',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/leather_boots');


	// Chainmail Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/chainmail_helmet');

	// Chainmail Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 6
			}
		]
	}).id('forge_frontier:crushing/chainmail_chestplate');

	// Chainmail Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_nugget' ,
				count: 5
			}
		]
	}).id('forge_frontier:crushing/chainmail_leggings');

	// Chainmail Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:chainmail_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/chainmail_boots');


	// Iron Helmet
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_helmet').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/iron_helmet');

	// Iron Chestplate
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_chestplate').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 6
			}
		]
	}).id('forge_frontier:crushing/iron_chestplate');

	// Iron Leggings
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_leggings').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 5
			}
		]
	}).id('forge_frontier:crushing/iron_leggings');

	// Iron Boots
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_boots').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 3
			}
		]
	}).id('forge_frontier:crushing/iron_boots');

	// Chainmail Armor Recipe
	// Chainmail Helmet
	event.shaped(
		Item.of('minecraft:chainmail_helmet', 1),
		[
			'AAA',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	).id('forge_frontier:shaped/chainmail_helmet')

	// Chainmail Chestplate
	event.shaped(
		Item.of('minecraft:chainmail_chestplate', 1),
		[
			'A A',
			'AAA',
			'AAA'
		],
		{
			A: 'minecraft:chain'
		}
	).id('forge_frontier:shaped/chainmail_chestplate')

	// Chainmail Leggings
	event.shaped(
		Item.of('minecraft:chainmail_leggings', 1),
		[
			'AAA',
			'A A',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	).id('forge_frontier:shaped/chainmail_leggings')

	// Chainmail Boots
	event.shaped(
		Item.of('minecraft:chainmail_boots', 1),
		[
			'A A',
			'A A'
		],
		{
			A: 'minecraft:chain'
		}
	).id('forge_frontier:shaped/chainmail_boots')

	// Advanced Netherite
		// Netherite Iron Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_iron_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_iron_ingot',
					count: 1
				},
				{
					item: 'minecraft:netherite_helmet',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_iron_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_iron_helmet');

		// Netherite Iron Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_iron_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_iron_ingot',
					count: 1
				},
				{
					item: 'minecraft:netherite_chestplate',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_iron_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_iron_chestplate');

		// Netherite Iron Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_iron_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_iron_ingot',
					count: 1
				},
				{
					item: 'minecraft:netherite_leggings',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_iron_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_iron_leggings');

		// Netherite Iron Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_iron_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_iron_ingot',
					count: 1
				},
				{
					item: 'minecraft:netherite_boots',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_iron_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_iron_boots');

		// Netherite Gold Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_gold_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_gold_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_iron_helmet',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_gold_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_gold_helmet');

		// Netherite Gold Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_gold_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_gold_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_iron_chestplate',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_gold_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_gold_chestplate');

		// Netherite Gold Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_gold_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_gold_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_iron_leggings',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_gold_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_gold_leggings');

		// Netherite Gold Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_gold_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_gold_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_iron_boots',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_gold_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_gold_boots');

		// Netherite Emerald Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_emerald_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_emerald_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_gold_helmet',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_emerald_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_emerald_helmet');

		// Netherite Emerald Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_emerald_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_emerald_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_gold_chestplate',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_emerald_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_emerald_chestplate');

		// Netherite Emerald Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_emerald_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_emerald_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_gold_leggings',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_emerald_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_emerald_leggings');

		// Netherite Emerald Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_emerald_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_emerald_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_gold_boots',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_emerald_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_emerald_boots');

		// Netherite Diamond Helmet
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_diamond_helmet').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_diamond_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_emerald_helmet',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_diamond_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_diamond_helmet');

		// Netherite Diamond Chestplate
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_diamond_chestplate').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_diamond_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_emerald_chestplate',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_diamond_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_diamond_chestplate');

		// Netherite Diamond Leggings
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_diamond_leggings').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_diamond_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_emerald_leggings',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_diamond_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_diamond_leggings');

		// Netherite Diamond Boots
		event.custom({
			type: "create:crushing",
			ingredients: [
				Ingredient.of('advancednetherite:netherite_diamond_boots').toJson()
			],
			processingTime: 200,
			results: [
				{
					item: 'advancednetherite:netherite_diamond_ingot',
					count: 1
				},
				{
					item: 'advancednetherite:netherite_emerald_boots',
					count: 1
				},
				{
					item: 'forge_frontier:netherite_diamond_upgrade',
					count: 1,
					chance: 0.1
				}
			]
		}).id('forge_frontier:crushing/netherite_diamond_boots');

})