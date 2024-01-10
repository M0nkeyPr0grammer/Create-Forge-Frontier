ServerEvents.recipes(event => {

    // Removes Old Recipes
    event.remove({ id: 'farmersdelight:paper_from_tree_bark'}) //remove shapeless crafting for paper (its shit)

//Creates New Recipes for Farmers Delight items/recipes

    // Replaces Recipe for Bark to Paper
    event.shaped(
        Item.of('minecraft:paper', 1),
                [
                    'AA',
                    'A '
                ],
                {
                    A: 'farmersdelight:tree_bark'
                }
    )



})

