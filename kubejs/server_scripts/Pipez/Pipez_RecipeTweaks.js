ServerEvents.recipes(event => {

    event.remove({ id: 'pipez:item_pipe' }) // Removes Recipe
    event.remove({ id: 'pipez:fluid_pipe' }) // Removes Recipe
    event.remove({ id: 'pipez:energy_pipe' }) // Removes Recipe
	event.remove({ id: 'pipez:universal_pipe'})

    // Creates New Item Pipe Recipe
	event.shaped(
		Item.of('pipez:item_pipe', 2),
		[
			'ABA',
			'A A',
			'ABA'
		],
		{
			A: '#forge:rods/steel',
			B: 'create:chute'
		}
	)

    // Creates New Fluid Pipe Recipe
    event.shaped(
		Item.of('pipez:fluid_pipe', 2),
		[
			'ABA',
			'A A',
			'ABA'
		],
		{
			A: '#forge:rods/brass',
			B: 'create:fluid_pipe'
		}
	)

    // Creates New Energry Pipe Recipe
    event.shaped(
		Item.of('pipez:energy_pipe', 2),
		[
			'ABA',
			'A A',
			'ABA'
		],
		{
			A: '#forge:rods/desh',
			B: 'create:electron_tube'
		}
	)

	// Creates Universal Pipe Recipe
	event.shaped(
		Item.of('pipez:universal_pipe', 6),
		[
			'ABC',
			'D D',
			'ABC'
		],
		{
			A: 'pipez:item_pipe',
			B: 'pipez:fluid_pipe',
			C: 'pipez:energy_pipe',
			D: 'create_new_age:overcharged_iron'
		}
	)

})
