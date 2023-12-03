// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'wunderreich:wunder_kiste' }) // Removes Wunder_Kistes
	event.remove({ id: 'betterend:guidebook' }) // Removes guide book
	event.remove({ id: 'betternether:betternether_book' }) // Removes guide book
	event.remove({ id: 'seasonsextras:seasonal_compendium' }) // Removes Guide Book
	event.remove({ id: 'chipped:benches/mechanist_workbench' }) // Removes Recipe, fixed below
	event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe
	event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' })
	event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' })
	event.remove({ id: 'simplevillagers:iron_farm_block' })
	event.remove({ id: 'simplevillagers:trading_block' })
	event.remove({ id: 'create:crushing/nether_wart_block'})

	// Any Dirt to Vanilla Dirt
	event.shapeless(
		Item.of('minecraft:dirt'),
		[
			'#minecraft:dirt'
		]
	)

	// Creates Deeper and Darker Patchouli Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
		[
			'minecraft:book',
			'minecraft:sculk'
		]
	)

	// Creates Tom's Simple Storage Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'),
		[
			'minecraft:book',
			'minecraft:chest'
		]
	)

	// Creates Immersive Aircrafts Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'),
		[
			'minecraft:book',
			'immersive_aircraft:hull'
		]
	)

	// Create a Quest Book Recipe
	event.shapeless(
		Item.of('heracles:quest_book'),
		[
			'minecraft:book',
			'minecraft:emerald'
		]
	)

	// Diamond Grit Sandpaper
	event.shapeless(
		Item.of('createaddition:diamond_grit_sandpaper'),
		[
			'minecraft:paper',
			'createaddition:diamond_grit'
		]
	)

	// New Nether Wart Block Crushing Recipe
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'minecraft:nether_wart_block' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:nether_wart', count: 2 },
			{ item: 'minecraft:nether_wart', chance: 0.10 }]
	}).id('kubejs:crushing/nether_wart_block');

	// Create Chromatic Compound
	event.custom({
		type: "create:mixing",
		ingredients: [
			Ingredient.of('minecraft:glowstone_dust').toJson(),
			Ingredient.of('create:powdered_obsidian').toJson(),
			Ingredient.of('create:polished_rose_quartz').toJson()
		],
		results: [
			Ingredient.of('create:chromatic_compound').toJson()
		],
		conditions: ["superheated"]
	}).id('kubejs:create/chromatic_compound');

	// Fixes Chipped Tinkering Table Recipe
	event.shaped(
		Item.of('chipped:tinkering_table', 1),
		[
			'A  ',
			'BCC',
			'DED'
		],
		{
			A: 'minecraft:redstone_torch',
			B: 'minecraft:piston',
			C: '#minecraft:wooden_slabs',
			D: '#c:stripped_logs',
			E: 'minecraft:tnt'
		}
	)

	// New Dragon's Breath Recipe
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'minecraft:dragon_breath',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:glass_bottle'
			},
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 8100
			}
		],
	}).id('kubejs:emptying/dragons_breath')

	// Liquid to Bottle Recipe
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 8100
			},
			{
				item: 'minecraft:glass_bottle',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:dragon_breath',
				count: 1
			}
		]
	}).id('kubejs:filling/dragons_breath')

	// New Dragon Head Recipe
	event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:wither_skeleton_skull",
				count: 1
            },
			{
				fluid: "kubejs:liquid_dragons_breath",
				amount: 81000
			}
        ],
        results: [
            {
                item: "minecraft:dragon_head",
				count: 1
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/dragon_head')
})

