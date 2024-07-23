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