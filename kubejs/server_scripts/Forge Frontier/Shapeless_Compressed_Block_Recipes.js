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
        // Desh Compressed 1x to Desh Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_desh_1x'
                }
            ],
            result: {
                item: 'ad_astra:desh_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_desh_block_1x' )
    
        // Desh Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createDeshBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_desh_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_desh_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_desh_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createDeshBlockShapelessRecipe(event, i);
        }    

    // Ostrum
        // Ostrum Compressed 1x to Ostrum Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_ostrum_1x'
                }
            ],
            result: {
                item: 'ad_astra:ostrum_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_ostrum_block_1x' )
    
        // Ostrum Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createOstrumBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_ostrum_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_ostrum_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_ostrum_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createOstrumBlockShapelessRecipe(event, i);
        }        

    // Calorite
        // Calorite Compressed 1x to Calorite Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_calorite_1x'
                }
            ],
            result: {
                item: 'ad_astra:calorite_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_calorite_block_1x' )
    
        // Calorite Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createCaloriteBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_calorite_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_calorite_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_calorite_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createCaloriteBlockShapelessRecipe(event, i);
        }            

    // Scarlet Neodymium
        // Scarlet Neodymium Compressed 1x to Scarlet Neodymium Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_scarlet_neodymium_1x'
                }
            ],
            result: {
                item: 'alexscaves:block_of_scarlet_neodymium',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_scarlet_neodymium_block_1x' )
    
        // Scarlet Neodymium Compressed Block to Lower Tier Compressed Shapeless Recipes
        function createScarletNeodymiumBlockShapelessRecipe(event, level) {
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: `forge_frontier:compressed_scarlet_neodymium_${level}x`
                    }
                ],
                result: {
                    item: `forge_frontier:compressed_scarlet_neodymium_${level-1}x`,
                    count: 9
                }
            }).id(`forge_frontier:shapeless/compressed_scarlet_neodymium_${level}x`);
        }
        
        for (let i = 2; i <= 9; i++) {
            createScarletNeodymiumBlockShapelessRecipe(event, i);
        }         

    // Azure Neodymium

    // Uranium

    // Amber

    // Sulfur

    // Pearls

    // Guano
    
})