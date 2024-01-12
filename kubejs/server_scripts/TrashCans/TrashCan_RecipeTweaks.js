ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'trashcans:item_trash_can' }) // Removes Recipe
	event.remove({ id: 'trashcans:energy_trash_can' }) // Removes Recipe
	event.remove({ id: 'trashcans:liquid_trash_can' }) // Removes Recipe

	// Creates New Trash Can Recipe
	event.shaped(
		Item.of('trashcans:item_trash_can', 1),
		[
			'AAA',
			'BCB',
			'BBB'
		],
		{
			A: 'create_dd:steel_sheet',
			B: 'create_dd:steel_ingot',
			C: '#forge:chests'
		}
	)

	// Creates New Energy Trash Can Recipe
	event.shaped(
		Item.of('trashcans:energy_trash_can', 1),
		[
			'AAA',
			'BCB',
			'BBB'
		],
		{
			A: 'create_dd:steel_sheet',
			B: 'create_dd:steel_ingot',
			C: 'minecraft:redstone'
		}
	)

	// Creates New Fluid Trash Can Recipe
	event.shaped(
		Item.of('trashcans:liquid_trash_can', 1),
		[
			'AAA',
			'BCB',
			'BBB'
		],
		{
			A: 'create_dd:steel_sheet',
			B: 'create_dd:steel_ingot',
			C: 'minecraft:bucket'
		}
	)
})