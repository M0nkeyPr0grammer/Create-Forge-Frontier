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

    event.shaped(
        Item.of('create_central_kitchen:miners_cooking_guide',1),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: 'create:sturdy_sheet',
            B: 'farmersdelight:canvas',
            C: 'miners_delight:cave_carrot'
        }
    )



})

