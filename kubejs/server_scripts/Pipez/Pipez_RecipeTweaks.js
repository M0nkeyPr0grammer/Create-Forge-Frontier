ServerEvents.recipes(event => {

    event.remove({ id: 'pipez:item_pipe' }) // Removes Recipe
    event.remove({ id: 'pipez:fluid_pipe' }) // Removes Recipe
    event.remove({ id: 'pipez:energy_pipe' }) // Removes Recipe

    // Creates New Item Pipe Recipe
	event.shaped(
		Item.of('pipez:item_pipe', 16),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'create:andesite_alloy',
			B: 'create:chute',
			C: 'minecraft:redstone'
		}
	)

    // Creates New Fluid Pipe Recipe
    event.shaped(
		Item.of('pipez:fluid_pipe', 16),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'minecraft:copper_ingot',
			B: 'create:fluid_pipe',
			C: 'minecraft:redstone'
		}
	)

    // Creates New Energry Pipe Recipe
    event.shaped(
		Item.of('pipez:energy_pipe', 16),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'create:polished_rose_quartz',
			B: 'create:electron_tube',
			C: 'minecraft:redstone'
		}
	)

})
