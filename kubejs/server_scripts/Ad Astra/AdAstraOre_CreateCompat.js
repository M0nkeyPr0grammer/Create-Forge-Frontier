ServerEvents.recipes(event => {
// Removes old recipes
event.remove({ id: 'create:crushing/glacio_coal_ore'})
event.remove({ id: 'create:crushing/venus_coal_ore'})
event.remove({ id: 'create:crushing/glacio_copper_ore'})
event.remove({ id: 'create:crushing/glacio_lapis_ore'})
event.remove({ id: 'create:crushing/venus_gold_ore'})
event.remove({ id: 'create:crushing/mars_diamond_ore'})
event.remove({ id: 'create:crushing/venus_diamond_ore'})
event.remove({ id: 'create:crushing/mars_iron_ore'})
event.remove({ id: 'create:crushing/mercury_iron_ore'})
event.remove({ id: 'create:crushing/moon_iron_ore'})
event.remove({ id: 'create:crushing/glacio_iron_ore'})
event.remove({ id: 'create:crushing/deepslate_calorite_ore'})
event.remove({ id: 'create:crushing/venus_calorite_ore'})
event.remove({ id: 'create:crushing/deepslate_ostrum_ore'})
event.remove({ id: 'create:crushing/mars_ostrum_ore'})
event.remove({ id: 'create:crushing/deepslate_desh_ore'})
event.remove({ id: 'create:crushing/moon_desh_ore'})

// Ore Crushing Recipes

    // Vanilla Like Ores

    // Coal Ore
        // Glacio Coal Ore
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:glacio_coal_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'minecraft:coal' },
                { item: 'minecraft:coal', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
            ]
        }).id('kubejs:crushing/glacio_coal_ore');
    
        // Venus Coal Ore
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:venus_coal_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'minecraft:coal' },
                { item: 'minecraft:coal', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
            ]
        }).id('kubejs:crushing/venus_coal_ore');

    // Glacio Copper Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'ad_astra:glacio_copper_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_copper', count: 5 },
			{ item: 'create:crushed_raw_copper', chance: 0.25 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/glacio_copper_ore');

    // Glacio Lapis Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'ad_astra:glacio_lapis_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 10 },
			{ item: 'minecraft:lapis_lazuli', chance: 0.50 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/glacio_lapis_ore');

    // Venus Gold Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'ad_astra:venus_gold_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'ad_astra:venus_cobblestone', chance: 0.12 }
		]
	}).id('kubejs:crushing/venus_gold_ore');

    // Diamond Ore
        // Mars Diamond Ore
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:mars_diamond_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'minecraft:diamond' },
                { item: 'minecraft:diamond', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
            ]
        }).id('kubejs:crushing/mars_diamond_ore');

        // Venus Diamond Ore
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:venus_diamond_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'minecraft:diamond' },
                { item: 'minecraft:diamond', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
            ]
        }).id('kubejs:crushing/venus_diamond_ore');

        // Iron Ore
            // Mars Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mars_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
                ]
            }).id('kubejs:crushing/mars_iron_ore');

            // Mercury Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mercury_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mercury_cobblestone', chance: 0.12 }
                ]
            }).id('kubejs:crushing/mercury_iron_ore');

            // Moon Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:moon_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:moon_cobblestone', chance: 0.12 }
                ]
            }).id('kubejs:crushing/moon_iron_ore');

            // Glacio Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:glacio_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
                ]
            }).id('kubejs:crushing/glacio_iron_ore');


            // Ad Astra Ores

            // Calorite Ore
                // Deepslate Calorite Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:deepslate_calorite_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_calorite_ore' },
                        { item: 'kubejs:crushed_calorite_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/deepslate_calorite_ore');

                // Venus Calorite Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:venus_calorite_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_calorite_ore'},
                        { item: 'kubejs:crushed_calorite_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/venus_calorite_ore');

            // Ostrum Ore
                // Mars Ostrum Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:mars_ostrum_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_ostrum_ore'},
                        { item: 'kubejs:crushed_ostrum_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/mars_ostrum_ore');

                // Deepslate Ostrum Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:deepslate_ostrum_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_ostrum_ore' },
                        { item: 'kubejs:crushed_ostrum_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/deepslate_ostrum_ore');

            // Desh Ore
                // Moon Desh Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:moon_desh_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_desh_ore' },
                        { item: 'kubejs:crushed_desh_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'ad_astra:moon_cobblestone', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/moon_desh_ore');

                // Deepslate Desh Ore
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                        { item: 'ad_astra:deepslate_desh_ore' }
                    ],
                    processingTime: 400,
                    results: [
                        { item: 'kubejs:crushed_desh_ore' },
                        { item: 'kubejs:crushed_desh_ore', chance: 0.75 },
                        { item: 'create:experience_nugget', chance: 0.75 },
                        { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                    ]
                }).id('kubejs:crushing/deepslate_desh_ore');

            // Creates Blasting Recipes

            // Desh Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_desh_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:desh_ingot'
                }
            })

            // Ostrum Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_ostrum_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:ostrum_ingot'
                }
            })
            
            // Calorite Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_calorite_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:calorite_ingot'
                }
            })

})