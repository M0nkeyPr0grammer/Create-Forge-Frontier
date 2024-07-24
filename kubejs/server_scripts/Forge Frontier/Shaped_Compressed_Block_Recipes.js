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
         // Creates New Compressed Recipes for Ostrum Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_ostrum_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:ostrum_block', 
            }
        ).id( 'forge_frontier:shaped/ostrum_block_1x' )

        // Creates New Compressed Recipes for Ostrum Compressed Blocks 2x through 9x
        function createOstrumBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_ostrum_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_ostrum_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_ostrum_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createOstrumBlockRecipe(event, i);
        }     

    // Calorite
         // Creates New Compressed Recipes for Calorite Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_calorite_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:calorite_block', 
            }
        ).id( 'forge_frontier:shaped/calorite_block_1x' )

        // Creates New Compressed Recipes for Calorite Compressed Blocks 2x through 9x
        function createCaloriteBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_calorite_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_calorite_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_calorite_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createCaloriteBlockRecipe(event, i);
        }    

    // Scarlet Neodymium
         // Creates New Compressed Recipes for Scarlet Neodymium Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_scarlet_neodymium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:block_of_scarlet_neodymium', 
            }
        ).id( 'forge_frontier:shaped/scarlet_neodymium_block_1x' )

        // Creates New Compressed Recipes for Scarlet Neodymium Compressed Blocks 2x through 9x
        function createScarletNeodymiumBlockRecipe(event, level) {
            event.shaped(
                Item.of(`forge_frontier:compressed_scarlet_neodymium_${level}x`),
                [
                    'AAA',
                    'AAA',
                    'AAA'
                ],
                {
                    A: `forge_frontier:compressed_scarlet_neodymium_${level-1}x`
                }
            ).id(`forge_frontier:shaped/compressed_scarlet_neodymium_${level}x`);
        }

        for (let i = 2; i <= 9; i++) {
            createScarletNeodymiumBlockRecipe(event, i);
        }   

    // Azure Neodymium

    // Uranium

    // Amber

    // Sulfur

    // Pearls

    // Guano

    // Methril

    // Bronze

    // Industrial Iron

    // Void Steel

    // Ethium

    // Netherite-Iron

    // Netherite-Gold

    // Netherite-Emerald

    // Netherite-Diamond

    // Star Infused Netherite Block    
    
})