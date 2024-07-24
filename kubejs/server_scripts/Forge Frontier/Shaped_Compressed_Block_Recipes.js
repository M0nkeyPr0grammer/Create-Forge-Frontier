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
         // Creates New Compressed Recipes for Bismuth Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_bismuth_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:bismuth_block', 
            }
        ).id( 'forge_frontier:shaped/bismuth_block_1x' )

        // Creates New Compressed Recipes for Bismuth Compressed Blocks 2x through 9x
        function createBismuthBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_bismuth_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_bismuth_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_bismuth_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createBismuthBlockRecipe(event, i);
        }    

    // Desh
         // Creates New Compressed Recipes for Desh Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_desh_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:desh_block', 
            }
        ).id( 'forge_frontier:shaped/desh_block_1x' )

        // Creates New Compressed Recipes for Desh Compressed Blocks 2x through 9x
        function createDeshBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_desh_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_desh_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_desh_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createDeshBlockRecipe(event, i);
        }       

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