// Tool Crushing Recipes
ServerEvents.recipes(event => {

	// Netherite Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_shovel').toJson()
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
				count: 1
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_shovel');

	// Netherite Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_pickaxe').toJson()
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
				count: 2
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_pickaxe');

	// Netherite Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_axe').toJson()
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
				count: 2
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_axe');

	// Netherite Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_hoe').toJson()
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
				count: 1
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_hoe');

	// Netherite Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:netherite_sword').toJson()
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
				count: 1
			},
			{
				item: 'minecraft:netherite_upgrade_smithing_template',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_sword');


	// Golden Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_nugget',
				count: 6
			}
		]
	}).id('forge_frontier:crushing/golden_shovel');

	// Golden Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/golden_pickaxe');

	// Golden Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/golden_axe');

	// Golden Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/golden_hoe');

	// Golden Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:golden_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:gold_ingot',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/golden_sword');


	// Diamond Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/diamond_shovel');

	// Diamond Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/diamond_pickaxe');

	// Diamond Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/diamond_axe');

	// Diamond Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/diamond_hoe');

	// Diamond Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:diamond_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:diamond',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/diamond_sword');


	// Iron Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_nugget',
				count: 6
			}
		]
	}).id('forge_frontier:crushing/iron_shovel');

	// Iron Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/iron_pickaxe');

	// Iron Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/iron_axe');

	// Iron Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/iron_hoe');

	// Iron Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:iron_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:iron_ingot',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/iron_sword');


	// Stone Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/stone_shovel');

	// Stone Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/stone_pickaxe');

	// Stone Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/stone_axe');

	// Stone Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/stone_hoe');

	// Stone Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:stone_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:cobblestone',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/stone_sword');


	// Wooden Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/wooden_shovel');

	// Wooden Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/wooden_pickaxe');

	// Wooden Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 2
			}
		]
	}).id('forge_frontier:crushing/wooden_axe');

	// Wooden Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/wooden_hoe');

	// Wooden Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('minecraft:wooden_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:oak_planks',
				count: 1
			}
		]
	}).id('forge_frontier:crushing/wooden_sword');

// Advanced Netherite
	// Netherite Iron Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_iron_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_ingot',
				count: 1
			},
			{
				item: 'minecraft:netherite_shovel',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_iron_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_iron_shovel');

	// Netherite Iron Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_iron_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_ingot',
				count: 1
			},
			{
				item: 'minecraft:netherite_pickaxe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_iron_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_iron_pickaxe');

	// Netherite Iron Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_iron_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_ingot',
				count: 1
			},
			{
				item: 'minecraft:netherite_axe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_iron_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_iron_axe');

	// Netherite Iron Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_iron_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_ingot',
				count: 1
			},
			{
				item: 'minecraft:netherite_hoe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_iron_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_iron_hoe');

	// Netherite Iron Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_iron_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'minecraft:netherite_ingot',
				count: 1
			},
			{
				item: 'minecraft:netherite_sword',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_iron_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_iron_sword');

	// Netherite Gold Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_gold_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_gold_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_iron_shovel',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_gold_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_gold_shovel');

	// Netherite Gold Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_gold_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_gold_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_iron_pickaxe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_gold_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_gold_pickaxe');

	// Netherite Gold Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_gold_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_gold_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_iron_axe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_gold_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_gold_axe');

	// Netherite Gold Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_gold_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_gold_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_iron_hoe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_gold_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_gold_hoe');

	// Netherite Gold Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_gold_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_gold_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_iron_sword',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_gold_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_gold_sword');

	// Netherite Emerald Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_emerald_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_emerald_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_gold_shovel',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_emerald_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_emerald_shovel');

	// Netherite Emerald Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_emerald_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_emerald_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_gold_pickaxe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_emerald_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_emerald_pickaxe');

	// Netherite Emerald Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_emerald_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_emerald_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_gold_axe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_emerald_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_emerald_axe');

	// Netherite Emerald Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_emerald_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_emerald_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_gold_hoe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_emerald_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_emerald_hoe');

	// Netherite Emerald Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_emerald_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_emerald_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_gold_sword',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_emerald_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_emerald_sword');

	// Netherite Diamond Shovel
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_diamond_shovel').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_diamond_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_emerald_shovel',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_diamond_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_diamond_shovel');

	// Netherite Diamond Pickaxe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_diamond_pickaxe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_diamond_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_emerald_pickaxe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_diamond_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_diamond_pickaxe');

	// Netherite Diamond Axe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_diamond_axe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_diamond_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_emerald_axe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_diamond_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_diamond_axe');

	// Netherite Diamond Hoe
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_diamond_hoe').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_diamond_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_emerald_hoe',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_diamond_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_diamond_hoe');

	// Netherite Diamond Sword
	event.custom({
		type: "create:crushing",
		ingredients: [
			Ingredient.of('advancednetherite:netherite_diamond_sword').toJson()
		],
		processingTime: 200,
		results: [
			{
				item: 'advancednetherite:netherite_diamond_ingot',
				count: 1
			},
			{
				item: 'advancednetherite:netherite_emerald_sword',
				count: 1
			},
			{
				item: 'forge_frontier:netherite_diamond_upgrade',
				count: 1,
				chance: 0.1
			}
		]
	}).id('forge_frontier:crushing/netherite_diamond_sword');

})