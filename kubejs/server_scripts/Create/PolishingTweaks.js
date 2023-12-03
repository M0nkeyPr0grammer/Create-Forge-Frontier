ServerEvents.recipes(event => {

    // Cinnabar Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_cinnabar' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:cinnabar', count: 1 },
            { item: 'spelunkery:cinnabar', chance: .50 }
		]
	}).id('kubejs:polishing/cinnabar');

    // Amethyst Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'minecraft:amethyst_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'createutilities:polished_amethyst', count: 1 },
            { item: 'createutilities:polished_amethyst', chance: .50 }
		]
	}).id('kubejs:polishing/amethyst');

    // Cinnabar Block Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_cinnabar_block' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:cinnabar_block', count: 1 },
            { item: 'spelunkery:cinnabar_block', chance: .15 }
		]
	}).id('kubejs:polishing/cinnabar_block');

    // Diamond Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_diamond' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:diamond', count: 1 },
            { item: 'minecraft:diamond', chance: .50 }
		]
	}).id('kubejs:polishing/diamond');

    // Cinnabar Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_cinnabar_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:cinnabar_shard', count: 1 },
            { item: 'spelunkery:cinnabar_shard', chance: .50 }
		]
	}).id('kubejs:polishing/cinnabar_shard');

    // Lazurite Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_lazurite' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 1 },
            { item: 'minecraft:lapis_lazuli', chance: .50 }
		]
	}).id('kubejs:polishing/lazurite');

    // Emerald Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_emerald' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:emerald', count: 1 },
            { item: 'minecraft:emerald', chance: .50 }
		]
	}).id('kubejs:polishing/emerald');

    // Diamond Block Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_diamond_block' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:diamond_block', count: 1 },
            { item: 'minecraft:diamond_block', chance: .15 }
		]
	}).id('kubejs:polishing/diamond_block');

    // Lazurite Shard Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_lazurite_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:lapis_lazuli_shard', count: 1 },
            { item: 'spelunkery:lapis_lazuli_shard', chance: .50 }
		]
	}).id('kubejs:polishing/lazurite_shard');

    // Lazurite Block Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_lazurite_block' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:lapis_block', count: 1 },
            { item: 'minecraft:lapis_block', chance: .15 }
		]
	}).id('kubejs:polishing/lazurite_block');

    // Emerald Shard Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_emerald_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:emerald_shard', count: 1 },
            { item: 'spelunkery:emerald_shard', chance: .50 }
		]
	}).id('kubejs:polishing/emerald_shard');

    // Diamond Shard Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_diamond_shard' }
		],
		processingTime: 200,
		results: [
			{ item: 'spelunkery:diamond_shard', count: 1 },
            { item: 'spelunkery:diamond_shard', chance: .50 }
		]
	}).id('kubejs:polishing/diamond_shard');

    // Emerald Block Polishing Recipe
    event.custom({
		type: "create_so:polishing",
		ingredients: [
			{ item: 'spelunkery:rough_emerald_block' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:emerald_block', count: 1 },
            { item: 'minecraft:emerald_block', chance: .15 }
		]
	}).id('kubejs:polishing/emerald_block');

})