ServerEvents.recipes(event => {

    // Removes Old Coal Ore Recipes
    event.remove({ id: 'create:crushing/coal_ore'})
    event.remove({ id: 'create:crushing/deepslate_coal_ore'})
    event.remove({ id: 'create:crushing/gloomslate_coal_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_coal_ore'})
    event.remove({ id: 'create:crushing/glacio_coal_ore'})
    event.remove({ id: 'create:crushing/venus_coal_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_coal_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_coal_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_coal_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_coal_ore'})
    event.remove({ id: 'vintageimprovements:crushing/scoria'})
    event.remove({ id: 'vintageimprovements:crushing/scoria_recycling'})
    event.remove({ id: 'create_dd:crushing/scorchia'})
    event.remove({ id: 'create_dd:crushing/scorchia_recycling'})
    event.remove({ id: 'create:crushing/scoria'})

    // Scorchia Crushing
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'create:stone_types/scorchia' },
        ],
        processingTime: 400,
        results: [
            { item: 'create_dd:coal_piece' },
            { item: 'create_dd:coal_piece', chance: 0.50 },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.30 },
            { item: 'create_dd:coal_piece', chance: 0.25 },
            { item: 'create_dd:coal_piece', chance: 0.15 },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.10 },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.05 },
            { item: 'create:cinder_flour', chance: 0.04 },
        ],
    }).id('kubejs:crushing/scorchia');

    // Scoria Crushing
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'create:stone_types/scoria' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:lapis_lazuli' },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.30 },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.10 },
            { item: 'vintageimprovements:sulfur_chunk', chance: 0.05 },
        ],
    }).id('kubejs:crushing/scoria'); 

    // Enlightened End Ores

    // Bismuth Ore

        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:bismuth_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'kubejs:crushed_bismuth' },
                { item: 'kubejs:crushed_bismuth', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:endstone', chance: 0.12 },
            ],
        }).id('kubejs:crushing/bismuth_ore');

        // Smelting/Blasting Recipe
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100, 
            experience: 0.1, 
            ingredient: {
                item: 'kubejs:crushed_bismuth' 
            },
            result: {
                item: 'enlightened_end:bismuth_ingot' 
            }
        }).id('kubejs:blasting/bismuth_ore');
        

    // Malachite Ore

        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:malachite_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'kubejs:crushed_malachite' },
                { item: 'kubejs:crushed_malachite', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:endstone', chance: 0.12 },
            ],
        }).id('kubejs:crushing/malachite_ore');

        // Smelting/Blasting Recipe
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100,
            experience: 0.1,
            ingredient: 
                { item: 'kubejs:crushed_malachite' },
            result: 
                { item: 'enlightened_end:malachite' }
        }).id('kubejs:blasting/malachite_ore');
        

    // Irradium Ore

        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:irradium_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'kubejs:crushed_irradium' },
                { item: 'kubejs:crushed_irradium', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:endstone', chance: 0.12 },
            ],
        }).id('kubejs:crushing/irradium_ore');

        // Smelting/Blasting Recipe
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100,
            experience: 0.1,
            ingredient: 
                { item: 'kubejs:crushed_irradium' },
            result: 
                { item: 'enlightened_end:irradium_bar' }
        }).id('kubejs:blasting/irradium_ore');
        


    // Coal Ore

    // Forge:Ores/Coal 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/coal' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:coal' },
            { item: 'minecraft:coal', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/coal_ore');


    // Alex Caves
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'alexscaves:coprolith_coal_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'alexscaves:coprolith', chance: 0.12 }
		]
	}).id('kubejs:crushing/a_coal_ore');

    // Spelunkery Coal Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:coal_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_coal_ore');

    // Removes Old Iron Ore Recipes
    event.remove({ id: 'create:crushing/iron_ore'})
    event.remove({ id: 'create:crushing/deepslate_iron_ore'})
    event.remove({ id: 'create:crushing/gloomslate_iron_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_iron_ore'})
    event.remove({ id: 'create:crushing/glacio_iron_ore'})
    event.remove({ id: 'create:crushing/mercury_iron_ore'})
    event.remove({ id: 'create:crushing/mars_iron_ore'})
    event.remove({ id: 'create:crushing/moon_iron_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_iron_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_iron_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_iron_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_iron_ore'})

    // Iron Ore

    // Forge:Ores/Iron 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/iron' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_iron' },
            { item: 'create:crushed_raw_iron', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/iron_ore');

    // Spelunkery Iron Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:iron_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_iron_ore');

    // Removes Old Copper Ore Recipes
    event.remove({ id: 'create:crushing/copper_ore'})
    event.remove({ id: 'create:crushing/deepslate_copper_ore'})
    event.remove({ id: 'create:crushing/gloomslate_copper_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_copper_ore'})
    event.remove({ id: 'create:crushing/glacio_copper_ore'})
    event.remove({ id: 'create:crushing/venus_copper_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_copper_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_copper_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_copper_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_copper_ore'})

    // Copper Ore

    // Forge:Ores/Copper 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/copper' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_copper', count: 5 },
            { item: 'create:crushed_raw_copper', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/copper_ore');

    // Spelunkery Copper Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:copper_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_copper_ore');

    // Removes Old Gold Ore Recipes
    event.remove({ id: 'create:crushing/gold_ore'})
    event.remove({ id: 'create:crushing/deepslate_gold_ore'})
    event.remove({ id: 'create:crushing/gloomslate_gold_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_gold_ore'})
    event.remove({ id: 'create:crushing/glacio_gold_ore'})
    event.remove({ id: 'create:crushing/venus_gold_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_gold_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_gold_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_gold_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_gold_ore'})
    event.remove({ id: 'create:crushing/nether_gold_ore'})

    // Gold Ore

    // Forge:Ores/Gold 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/gold' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_gold' },
            { item: 'create:crushed_raw_gold', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/gold_ore');

    // Spelunkery Gold Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:gold_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_gold_ore');

    // Removes Old Redstone Ore Recipes
    event.remove({ id: 'create:crushing/redstone_ore'})
    event.remove({ id: 'create:crushing/deepslate_redstone_ore'})
    event.remove({ id: 'create:crushing/gloomslate_redstone_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_redstone_ore'})
    event.remove({ id: 'create:crushing/glacio_redstone_ore'})
    event.remove({ id: 'create:crushing/venus_redstone_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_redstone_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_redstone_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_redstone_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_redstone_ore'})
    event.remove({ id: 'spelunkery:crushing/calcite_redstone_ore'})

    // Redstone Ore

    // Forge:Ores/Redstone 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/redstone' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:redstone', count: 6 },
            { item: 'minecraft:redstone', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/redstone_ore');

    // Spelunkery Redstone Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:redstone_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_redstone_ore');

    // Alex Caves Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'alexscaves:guanostone_redstone_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'alexscaves:guanostone', chance: 0.12 }
		]
	}).id('kubejs:crushing/a_redstone_ore');

    // Removes Old Emerald Ore Recipes
    event.remove({ id: 'create:crushing/emerald_ore'})
    event.remove({ id: 'create:crushing/deepslate_emerald_ore'})
    event.remove({ id: 'create:crushing/gloomslate_emerald_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_emerald_ore'})
    event.remove({ id: 'create:crushing/glacio_emerald_ore'})
    event.remove({ id: 'create:crushing/venus_emerald_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_emerald_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_emerald_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_emerald_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_emerald_ore'})

    // Emerald Ore

    // Forge:Ores/Emerald 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/emerald' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:emerald'},
            { item: 'minecraft:emerald', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/emerald_ore');

    // Spelunkery Emerald Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:emerald_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_emerald_ore');

    // Removes Old Lapis Ore Recipes
    event.remove({ id: 'create:crushing/lapis_ore'})
    event.remove({ id: 'create:crushing/deepslate_lapis_ore'})
    event.remove({ id: 'create:crushing/gloomslate_lapis_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_lapis_ore'})
    event.remove({ id: 'create:crushing/glacio_lapis_ore'})
    event.remove({ id: 'create:crushing/venus_lapis_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_lapis_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_lapis_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_lapis_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_lapis_ore'})
    event.remove({ id: 'spelunkery:crushing/sandstone_lapis_ore'})

    // Lapis Ore

    // Forge:Ores/Lapis 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/lapis' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:lapis_lazuli', count: 10},
            { item: 'minecraft:lapis_lazuli', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/lapis_ore');

    // Spelunkery Lapis Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:lapis_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_lapis_ore');

    // Removes Old Diamond Ore Recipes
    event.remove({ id: 'create:crushing/diamond_ore'})
    event.remove({ id: 'create:crushing/deepslate_diamond_ore'})
    event.remove({ id: 'create:crushing/gloomslate_diamond_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_diamond_ore'})
    event.remove({ id: 'create:crushing/venus_diamond_ore'})
    event.remove({ id: 'create:crushing/mars_diamond_ore'})
    event.remove({ id: 'spelunkery:crushing/tuff_diamond_ore'})
    event.remove({ id: 'spelunkery:crushing/diorite_diamond_ore'})
    event.remove({ id: 'spelunkery:crushing/granite_diamond_ore'})
    event.remove({ id: 'spelunkery:crushing/andesite_diamond_ore'})
    event.remove({ id: 'spelunkery:crushing/smooth_basalt_diamond_ore'})

    // Diamond Ore

    // Forge:Ores/Diamond 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/diamond' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:diamond'},
            { item: 'minecraft:diamond', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/diamond_ore');

    // Spelunkery Diamond Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ tag: 'spelunkery:diamond_ores' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:diamond'},
			{ item: 'minecraft:diamond', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/s_diamond_ore');

    // Removes Old Quartz Ore Recipes
    event.remove({ id: 'create:crushing/nether_quartz_ore'})

    // Quartz Ore

    // Forge:Ores/Quartz 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/quartz' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:quartz', count: 2},
            { item: 'minecraft:quartz', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('kubejs:crushing/quartz_ore');
    
})