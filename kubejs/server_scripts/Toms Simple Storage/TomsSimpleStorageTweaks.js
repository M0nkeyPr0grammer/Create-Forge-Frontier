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
	).id('forge_frontier:level_emitter')

	// Inventory Connector
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'sophisticatedstorage:storage_link'
		  },
		  {
			item: 'create:brass_casing'
		  }
		],
		results: [
		  {
			item: 'toms_storage:ts.inventory_connector'
		  }
		]
	  }).id('forge_frontier:item_application/inventory_connector');

	// Inventory Proxy
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'sophisticatedstorage:storage_io'
		  },
		  {
			item: 'create:brass_casing'
		  }
		],
		results: [
		  {
			item: 'toms_storage:ts.inventory_proxy'
		  }
		]
	  }).id('forge_frontier:item_application/inventory_proxy');

	// Inventory Cable Connector
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector'),
		[
			' A ',
			' B ',
			' C '
		],
		{
			A: 'create:smart_chute',
			B: 'toms_storage:ts.inventory_cable',
			C: 'sophisticatedstorage:diamond_barrel'
		}
	).id('forge_frontier:inventory_cable_connector')

	// Inventory Cable
	event.shapeless(
		Item.of('toms_storage:ts.inventory_cable', 8),
		[
			'minecraft:dried_kelp',
			'create:brass_sheet'
		]
	).id('forge_frontier:inventory_cable')

	// Trim Clean
	event.shapeless(
		Item.of('toms_storage:ts.trim', 1),
		[
			'minecraft:water_bucket',
			'toms_storage:ts.painted_trim'
		]
	).id('forge_frontier:trim_clean')

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
			A: '#forge:rods/wooden',
			B: 'toms_storage:ts.inventory_cable',
		}
	).id('forge_frontier:inventory_cable_framed')

	// Inventory Cable Connector Framed
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector_framed', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#forge:rods/wooden',
			B: 'toms_storage:ts.inventory_cable_connector',
		}
	).id('forge_frontier:inventory_cable_connector_framed')

	// Inventory Cable Connector Filtered
	event.shaped(
		Item.of('toms_storage:ts.inventory_cable_connector_filtered', 1),
		[
			'A',
			'B',
			'C'
		],
		{
			A: '#forge:plates/brass',
			B: 'toms_storage:ts.inventory_cable_connector',
			C: 'create:electron_tube',
		}
	).id('forge_frontier:inventory_cable_connector_filtered')

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
			B: '#forge:rods/wooden',
		}
	).id('forge_frontier:trim')

	// Storage Terminal
	event.shaped(
		Item.of('toms_storage:ts.storage_terminal', 1),
		[
			' A ',
			'BED',
			'CCC'
		],
		{
			A: 'create:precision_mechanism',
			B: 'create:content_observer',
			C: '#minecraft:buttons',
			D: 'create:display_link',
			E: 'sophisticatedstorage:controller',
		}
	).id('forge_frontier:storage_terminal')

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
			B: 'sophisticatedstorage:chest',
			C: '#forge:rods/wooden',
			D: '#minecraft:trapdoors',
		}
	).id('forge_frontier:open_crate')

	// Basic Inventory Hopper
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'minecraft:hopper'
		  },
		  {
			item: 'create:brass_ingot'
		  }
		],
		results: [
		  {
			item: 'toms_storage:ts.inventory_hopper_basic'
		  }
		]
	  }).id('forge_frontier:item_application/inventory_hopper_basic');

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
			F: '#forge:glass'
		}
	).id('forge_frontier:wireless_terminal')

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
	}).id('forge_frontier:mechanical_crafting/crafting_terminal')
})