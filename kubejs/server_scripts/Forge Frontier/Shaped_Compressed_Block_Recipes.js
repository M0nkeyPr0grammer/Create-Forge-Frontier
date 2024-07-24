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
        // Creates New Shaped Recipe for Irradium
        event.remove({ id: 'enlightened_end:irradium_block'})
        event.shaped(
            Item.of('enlightened_end:irradium_block'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:irradium_bar', 
            }
        ).id( 'forge_frontier:shaped/irradium_block' )

        // Creates New Compressed Recipes for Irradium Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_irradium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:irradium_block', 
            }
        ).id( 'forge_frontier:shaped/irradium_block_1x' )

        // Creates New Compressed Recipes for Irradium Compressed Blocks 2x through 9x
        function createIrradiumBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_irradium_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_irradium_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_irradium_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createIrradiumBlockRecipe(event, i);
        }

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