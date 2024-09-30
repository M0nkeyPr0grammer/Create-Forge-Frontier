ServerEvents.recipes(event => {

//Creates New Recipes for Farmers Delight items/recipes
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

