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
	}).id('forge_frontier:crushing/raw_redstone');

})
