// Crushing Ore Tweaks

ServerEvents.recipes(event => {


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
