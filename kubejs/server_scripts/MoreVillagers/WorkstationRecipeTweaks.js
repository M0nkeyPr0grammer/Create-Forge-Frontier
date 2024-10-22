ServerEvents.recipes(event => {
    // Define the recipes
    const recipes = [
        {
            id: 'morevillagers:oceanography_table',
            output: 'morevillagers:oceanography_table',
            ingredients: [
                { item: 'minecraft:conduit' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/oceanography_table'
        },
        {
            id: 'morevillagers:woodworking_table',
            output: 'morevillagers:woodworking_table',
            ingredients: [
                { item: 'create:mechanical_saw' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/woodworking_table'
        },
        {
            id: 'morevillagers:decayed_workbench',
            output: 'morevillagers:decayed_workbench',
            ingredients: [
                { item: 'wstweaks:fragment' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/decayed_workbench'
        },
        {
            id: 'morevillagers:purpur_altar',
            output: 'morevillagers:purpur_altar',
            ingredients: [
                { item: 'minecraft:dragon_breath' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/purpur_altar'
        },
        {
            id: 'morevillagers:gardening_table',
            output: 'morevillagers:gardening_table',
            ingredients: [
                { item: 'create:mechanical_harvester' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/gardening_table'
        },
        {
            id: 'morevillagers:hunting_post',
            output: 'morevillagers:hunting_post',
            ingredients: [
                { item: 'create_sa:brass_axe' },
                { tag: '#forge:workbench' }
            ],
            recipeId: 'forge_frontier:shapeless/hunting_post'
        }
    ];

    // Loop through the recipes and create them
    recipes.forEach(recipe => {
        event.remove({ id: recipe.id });
        event.shapeless(
            Item.of(recipe.output),
            recipe.ingredients.map(ingredient => ingredient.item || ingredient.tag), // Extract item or tag
        ).id(recipe.recipeId);
    });
});
