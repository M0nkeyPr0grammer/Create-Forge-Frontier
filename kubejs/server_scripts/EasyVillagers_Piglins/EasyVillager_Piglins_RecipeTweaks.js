ServerEvents.recipes(event => {

	// Remove recipes here
	event.remove({ id: 'easy_villagers:trader' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:auto_trader' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:farmer' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:breeder' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:converter' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:iron_farm' }) // Removes Recipe
    event.remove({ id: 'easy_villagers:incubator' }) // Removes Recipe
    event.remove({ id: 'easy_piglins:barterer' }) // Removes Recipe

	// Creates New Trader Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:redstone'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				item: 'minecraft:iron_ingot'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:trader'
			}
		]
	})

    // Creates New Auto Trader Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:redstone'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				item: 'minecraft:netherite_ingot'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:auto_trader'
			}
		]
	})

    // Creates New Farmer Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:water_bucket'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				item: 'minecraft:dirt'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:farmer'
			}
		]
	})

    // Creates New Breeder Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				tag: 'minecraft:beds'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				tag: 'minecraft:planks'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:breeder'
			}
		]
	})

    // Creates New Converter Recipe
    event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:rotten_flesh'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				item: 'minecraft:mossy_cobblestone'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:converter'
			}
		]
	})

    // Creates New Incubator Recipe
    event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
				tag: 'minecraft:wool'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_villagers:incubator'
			}
		]
	})

    // New Easy Piglin Barterer Recipe
    event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
            {
				item: 'minecraft:glass_pane'
			},
			{
				item: 'minecraft:iron_ingot'
			},
            {
                item: 'minecraft:gold_block'
            },
            {
				item: 'minecraft:nether_bricks'
			},
            {
				item: 'minecraft:iron_ingot'
			}
		],
		results: [
			{
				item: 'easy_piglins:barterer'
			}
		]
	})
    
})