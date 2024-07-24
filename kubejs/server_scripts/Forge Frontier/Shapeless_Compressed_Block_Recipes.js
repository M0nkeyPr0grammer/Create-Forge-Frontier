ServerEvents.recipes(event => {
    
    // Malachite
        // Malachite Block to Malchite Shapeless Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'enlightened_end:malachite_block'
                }
            ],
            result: {
                item: 'enlightened_end:malachite',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/malachite_block' )

        // Malachite Compressed 1x to Malachite Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_malachite_1x'
                }
            ],
            result: {
                item: 'enlightened_end:malachite_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_malachite_block_1x' )

        // Malachite Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createMalachiteBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_malachite_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_malachite_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_malachite_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createMalachiteBlockShapelessRecipe(event, i);
        }
    
    // Irradium
     // Irradium Block to Irradium Shapeless Recipe
     event.remove({ id: 'enlightened_end:irradium_block_convert' })
     event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'enlightened_end:irradium_block'
            }
        ],
        result: {
            item: 'enlightened_end:irradium_bar',
            count: 9
        }
    }).id( 'forge_frontier:shapeless/irradium_block' )

    // Irradium Compressed 1x to Irradium Block Recipe
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_irradium_1x'
            }
        ],
        result: {
            item: 'enlightened_end:irradium_block',
            count: 9
        }
    }).id( 'forge_frontier:shapeless/compressed_irradium_block_1x' )

    // Irradium Compressed Block to Lower Tier Compressed Shapeless Recipes
    function createIrradiumBlockShapelessRecipe(event, level) {
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: `forge_frontier:compressed_irradium_${level}x`
                }
            ],
            result: {
                item: `forge_frontier:compressed_irradium_${level-1}x`,
                count: 9
            }
        }).id(`forge_frontier:shapeless/compressed_irradium_${level}x`);
    }
    
    for (let i = 2; i <= 9; i++) {
        createIrradiumBlockShapelessRecipe(event, i);
    }

    // Bismuth
        // Bismuth Compressed 1x to Bismuth Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_bismuth_1x'
                }
            ],
            result: {
                item: 'enlightened_end:bismuth_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_bismuth_block_1x' )
    
        // Bismuth Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createBismuthBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_bismuth_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_bismuth_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_bismuth_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createBismuthBlockShapelessRecipe(event, i);
        }

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