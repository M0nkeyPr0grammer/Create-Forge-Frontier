// Tom's Simple Storage Create Mod Compatibility Tweaks

ServerEvents.recipes(event => {
    // Removes Vanilla Tom's Simple Storage Recipes
    event.remove({ id: 'toms_storage:level_emitter' })
    event.remove({ id: 'toms_storage:inventory_proxy' })
    event.remove({ id: 'toms_storage:inventory_connector' })
    event.remove({ id: 'toms_storage:inventory_cable_connector' })
    event.remove({ id: 'toms_storage:inventory_cable' })
    event.remove({ id: 'toms_storage:trim_clean' })
    event.remove({ id: 'toms_storage:inventory_cable_framed' })
    event.remove({ id: 'toms_storage:inventory_cable_connector_framed' })
    event.remove({ id: 'toms_storage:inventory_cable_connector_filtered' })
    event.remove({ id: 'toms_storage:trim' })
    event.remove({ id: 'toms_storage:storage_terminal' })
    event.remove({ id: 'toms_storage:open_crate' })
    event.remove({ id: 'toms_storage:crafting_terminal' })
    event.remove({ id: 'toms_storage:inventory_hopper_basic' })
    event.remove({ id: 'toms_storage:wireless_terminal' })

	// Creates Tom's Simple Storage Create Recipes
	// Shapeless Recipes

	// Level Emitter
	event.shapeless(
		Item.of('toms_storage:ts.level_emitter'),
		[
			'create:content_observer',
			'toms_storage:ts.inventory_cable'
		]
	)

	// Inventory Connector
	event.shapeless(
		Item.of('toms_storage:ts.inventory_connector'),
		[
			'create:smart_chute',
			'create:brass_casing'
		]
	)

	// Inventory Proxy
	event.shapeless(
		Item.of('toms_storage:ts.inventory_proxy'),
		[
			'create:smart_chute',
			'toms_storage:ts.inventory_connector'
		]
	)

	// Inventory Cable Connector
	event.shapeless(
		Item.of('toms_storage:ts.inventory_cable_connector'),
		[
			'create:smart_chute',
			'toms_storage:ts.inventory_cable'
		]
	)

	// Inventory Cable
	event.shapeless(
		Item.of('toms_storage:ts.inventory_cable', 8),
		[
			'minecraft:dried_kelp',
			'create:brass_sheet'
		]
	)

	// Trim Clean
	event.shapeless(
		Item.of('toms_storage:ts.trim', 1),
		[
			'minecraft:water_bucket',
			'toms_storage:ts.painted_trim'
		]
	)

	// Shaped
	// Inventory Cable Framed
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_framed', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:wooden_rods',
			B: 'toms_storage:ts.inventory_cable',
		}
	)

	// Inventory Cable Connector Framed
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector_framed', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:wooden_rods',
			B: 'toms_storage:ts.inventory_cable_connector',
		}
	)

	// Inventory Cable Connector Filtered
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector_filtered', 1),
		[
			'A',
			'B',
			'C'
		],
		{
			A: '#c:brass_plates',
			B: 'toms_storage:ts.inventory_cable_connector',
			C: 'create:electron_tube',
		}
	)

	// Trim
	event.shaped(
		Item.of('toms_storage:ts.trim', 2),
		[
			'BBB',
			'BAB',
			'BBB'
		],
		{
			A: 'create:brass_tunnel',
			B: '#c:wooden_rods',
		}
	)

	// Storage Terminal
	event.shaped(
		Item.of('toms_storage:ts.storage_terminal', 1),
		[
			' A ',
			'BDE',
			'CCC'
		],
		{
			A: 'create:precision_mechanism',
			B: 'create:content_observer',
			C: '#minecraft:buttons',
			D: 'create:display_link',
			E: 'create:display_board',
		}
	)

	// Open Crate
	event.shaped(
		Item.of('toms_storage:ts.open_crate', 1),
		[
			'ACA',
			'ABA',
			'ADA'
		],
		{
			A: '#minecraft:planks',
			B: '#c:chests',
			C: '#c:wooden_rods',
			D: '#minecraft:trapdoors',
		}
	)

	// Basic Inventory Hopper
	event.shaped(
		Item.of('toms_storage:ts.inventory_hopper_basic', 1),
		[
			'ACA',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: 'create:chute',
			C: 'toms_storage:ts.inventory_cable'
		}
	)

	// Wireless Terminal
	event.shaped(
		Item.of('toms_storage:ts.wireless_terminal', 1),
		[
			'ABA',
			'CEF',
			'ADA'
		],
		{
			A: '#minecraft:planks',
			B: 'create:redstone_link',
			C: 'create:display_link',
			D: 'minecraft:ender_pearl',
			E: 'create:precision_mechanism',
			F: '#c:glass_blocks'
		}
	)

	// Mechanical Crafter
	// Crafting Terminal
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' A ',
			'BBB',
			'BBB',
			'BBB',
			'EDC'
		],
		key: {
			A: Ingredient.of('toms_storage:ts.storage_terminal').toJson(),
			B: Ingredient.of('create:mechanical_crafter').toJson(),
			C: Ingredient.of('create:linked_controller').toJson(),
			D: Ingredient.of('create:precision_mechanism').toJson(),
			E: Ingredient.of('create:sturdy_sheet').toJson()
		},
		result: Ingredient.of('toms_storage:ts.crafting_terminal').toJson(),
		acceptMirrored: false
	}).id('kubejs:toms_storage/crafting_terminal')
})