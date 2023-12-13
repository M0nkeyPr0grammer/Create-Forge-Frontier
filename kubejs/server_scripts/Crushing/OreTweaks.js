// Crushing Ore Tweaks

// Universal Ore Create Mod Compatibility Tweaks

ServerEvents.recipes(event => {

	// Removes Old Recipes
	event.remove({ id: 'create:crushing/gloomslate_coal_ore'})
	event.remove({ id: 'create:crushing/gloomslate_iron_ore'})
	event.remove({ id: 'create:crushing/gloomslate_copper_ore'})
	event.remove({ id: 'create:crushing/gloomslate_gold_ore'})
	event.remove({ id: 'create:crushing/gloomslate_redstone_ore'})
	event.remove({ id: 'create:crushing/gloomslate_emerald_ore'})
	event.remove({ id: 'create:crushing/gloomslate_lapis_ore'})
	event.remove({ id: 'create:crushing/gloomslate_diamond_ore'})

	// Crushing Ore Tweaks for Deeper and Darker 1.20.1

	// Gloomslate Coal Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_coal_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_coal_ore');

	// Gloomslate Copper Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_copper_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_copper_ore');

	// Gloomslate Diamond Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_diamond_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_diamond_ore');

	// Gloomslate Emerald Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_emerald_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_emerald_ore');

	// Gloomslate Gold Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_gold_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_gold_ore');

	// Gloomslate Iron Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_iron_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_iron_ore');

	// Gloomslate Lapis Lazuli Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_lapis_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_lapis_ore');

	// Gloomslate Redstone Ore
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'deeperdarker:gloomslate_redstone_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'deeperdarker:gloomslate', chance: 0.12 }
		]
	}).id('kubejs:crushing/gloomslate_redstone_ore');

	// Creates Raw Redstone Crushing Recipe
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'regions_unexplored:raw_redstone_block' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:redstone', count: 4 },
			{ item: 'minecraft:redstone', chance: 0.10 }
		]
	}).id('kubejs:crushing/raw_redstone');

	// Salt Bucket to Salt
	event.custom({
		type: "create:crushing",
		ingredients: [
			{
				item: "spelunkery:salt_bucket",
				count: 1
			}
		],
		results: [
			{
				item: "spelunkery:salt",
				count: 8
			},
			{
				item: "minecraft:bucket",
				count: 1
			}
		]
	}).id('kubejs:crushing/salt');

})
