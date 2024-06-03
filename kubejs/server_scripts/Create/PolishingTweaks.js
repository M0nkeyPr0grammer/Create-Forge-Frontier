ServerEvents.recipes(event => {

    // Amethyst Crushing Recipe
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'minecraft:amethyst_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'createutilities:polished_amethyst', count: 1 },
            { item: 'createutilities:polished_amethyst', chance: .50 }
		]
	}).id('forge_frontier:crushing/amethyst');

})