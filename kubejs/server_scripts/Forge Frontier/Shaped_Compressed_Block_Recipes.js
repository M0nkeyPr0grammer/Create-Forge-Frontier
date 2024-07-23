ServerEvents.recipes(event => {
	
    // Malachite
        // Creates New Shaped Recipe for Malachite
        event.remove({ id: 'enlightened_end:malachite_block' })
        event.shaped(
            Item.of('enlightened_end:malachite_block'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:malachite', 
            }
        ).id( 'forge_frontier:shaped/malachite_block' )

        // Creates New Compressed Recipes for Malachite Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_malachite_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:malachite_block', 
            }
        ).id( 'forge_frontier:shaped/malachite_block_1x' )

        // Creates New Compressed Recipes for Malachite Compressed Blocks 2x through 9x
        function createMalachiteBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_malachite_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_malachite_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_malachite_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createMalachiteBlockRecipe(event, i);
        }

    // Irradium

    // Bismuth

    // Desh

    // Ostrum

    // Calorite

    // Scarlet Neodymium

    // Azure Neodymium

    // Uranium

    // Amber

    // Sulfur

    // Pearls

    // Guano
    
})