// priority: 0

ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'chipped:benches/mechanist_workbench' }) // Removes Recipe, fixed below
	event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe
	event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' })
	event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' })
	event.remove({ id: 'create:crushing/nether_wart_block' })
	event.remove({ id: 'structurecompass:structure_compass' })
	event.remove({ id: 'shrink:shrinking_device' })
	event.remove({ id: 'waystones:warp_stone' })
	event.remove({ id: 'waystones:warp_dust' })
	event.remove({ id: 'angelblockrenewed:angel_block'})
	event.remove({ id: 'cagedmobs:crafting/hopping_mob_cage'})
	event.remove({ id: 'cagedmobs:crafting/mob_cage'})

	// Creates New Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:mob_cage'),
		[
			' A ',
			'B B',
			'CCC'
		],
		{
			A: 'minecraft:chain',
			B: 'createaddition:iron_rod',
			C: 'minecraft:iron_block'
		}
	)

	// Creates New Hopping Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:hopping_mob_cage'),
		[
			'   ',
			'ABA',
			' C '
		],
		{
			A: 'minecraft:redstone',
			B: 'cagedmobs:mob_cage',
			C: 'create:chute'
		}
	)

	// Creates New Angel Block Recipe
	event.shaped(
		Item.of('angelblockrenewed:angel_block', 1),
		[
			'ABA',
			'B B',
			'ABA'
		],
		{
			A: 'minecraft:feather',
			B: 'createaddition:brass_rod'
		}
	)

	// Creates New Warp Stone Recipe
	event.shaped(
		Item.of('waystones:warp_stone', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'create:polished_rose_quartz',
			B: '#forge:ender_pearls',
			C: 'minecraft:emerald'
		}
	)

	// Creates New Warp Dust Recipe
	event.shapeless(
		Item.of('waystones:warp_dust'),
		[
			'create:polished_rose_quartz',
			'#forge:ender_pearls'
		]
	)

	// Creates Shrinking Device Recipe
	event.shaped(
		Item.of('shrink:shrinking_device', 1),
		[
			'ABA',
			'ACA',
			'ADA'
		],
		{
			A: '#forge:ingots/steel',
			B: '#forge:ender_pearls',
			C: '#forge:glass',
			D: '#minecraft:buttons'
		}
	)

	// Creates Structure Compass Recipe
	event.shaped(
		Item.of('structurecompass:structure_compass', 1),
		[
			'ACA',
			'CBC',
			'ACA'
		],
		{
			A: 'advancednetherite:netherite_iron_ingot',
			B: 'naturescompass:naturescompass',
			C: 'create_dd:blaze_gold_block'
		}
	)

	// Creates Nether Eye Crafting Recipe
	event.shaped(
		Item.of('endrem:nether_eye', 1),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'minecraft:fire_charge',
			B: 'minecraft:blaze_rod',
			C: 'minecraft:ender_eye'
		}
	)

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
			D: '#forge:stripped_logs',
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
				amount: 100
			}
		],
	}).id('kubejs:emptying/dragons_breath')

	// Liquid to Bottle Recipe
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 100
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
				amount: 1000
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

