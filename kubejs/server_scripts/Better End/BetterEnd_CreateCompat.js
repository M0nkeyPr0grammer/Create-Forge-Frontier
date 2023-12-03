ServerEvents.recipes(event => {

    // Removes Old Crushing Recipes

    event.remove({ id: 'create:crushing/thallasium_ore'})
    event.remove({ id: 'create:crushing/amber_ore'})

    // Creates New Crushing Recipes

    // Thallasium Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'betterend:thallasium_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'kubejs:crushed_thallasium_ore' },
			{ item: 'kubejs:crushed_thallasium_ore', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:end_stone', chance: 0.12 }
		]
	}).id('kubejs:crushing/thallasium_ore');

    // Amber Ore
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'betterend:amber_ore' }
		],
		processingTime: 400,
		results: [
			{ item: 'kubejs:crushed_amber_ore' },
			{ item: 'kubejs:crushed_amber_ore', chance: 0.75 },
			{ item: 'create:experience_nugget', chance: 0.75 },
			{ item: 'minecraft:end_stone', chance: 0.12 }
		]
	}).id('kubejs:crushing/amber_ore');

    // Creates Blasting Recipes

    // Thallasium Ore
    event.custom({
        type: "minecraft:blasting",
        ingredient: [ // Changed 'ingredients' to 'ingredient'
            { item: 'kubejs:crushed_thallasium_ore' }
        ],
        cookingTime: 100,
        experience: 0.1,
        result: { // Ensure 'result' is a single object, not an array
            item: 'betterend:thallasium_ingot'
        }
    })

    // Amber Ore
    event.custom({
        type: "minecraft:blasting",
        ingredient: [ // Changed 'ingredients' to 'ingredient'
            { item: 'kubejs:crushed_amber_ore' }
        ],
        cookingTime: 100,
        experience: 0.1,
        result: { // Ensure 'result' is a single object, not an array
            item: 'betterend:raw_amber'
        }
    })

})