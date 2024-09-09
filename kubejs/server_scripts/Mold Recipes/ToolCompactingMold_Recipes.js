ServerEvents.recipes(event => {

    // Reusable function for tool mold recipes
    function createMoldRecipe(fluid, resultItem, moldItem, stickCount, recipeName, fluidAmount, additionalItem) {
        // Set default values manually if not provided
        fluidAmount = fluidAmount || 100;
        additionalItem = additionalItem || null;

        const ingredients = [
            { fluid: fluid, amount: fluidAmount },
            { item: moldItem, count: 1 },
            { item: 'minecraft:stick', count: stickCount }
        ];

        if (additionalItem) {
            ingredients.push({ item: additionalItem });
        }

        event.custom({
            type: 'create:compacting',
            ingredients: ingredients,
            results: [
                { item: resultItem, count: 1 },
                { item: moldItem }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    }

    const toolRecipes = [
        // Swords
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'iron_sword' },
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:golden_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'golden_sword' },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'diamond_sword' },
        { fluid: 'forge_frontier:molten_copper', result: 'create_sa:copper_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'copper_sword' },
        { fluid: 'forge_frontier:molten_zinc', result: 'create_sa:zinc_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'zinc_sword' },
        { fluid: 'forge_frontier:molten_brass', result: 'create_sa:brass_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'brass_sword' },
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'netherite_sword', additional: 'minecraft:netherite_upgrade_smithing_template' },
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'netherite_iron_sword', additional: 'forge_frontier:netherite_iron_upgrade' },
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'netherite_gold_sword', additional: 'forge_frontier:netherite_gold_upgrade' },
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'netherite_emerald_sword', additional: 'forge_frontier:netherite_emerald_upgrade' },
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_sword', mold: 'forge_frontier:sword_mold', stickCount: 1, recipe: 'netherite_diamond_sword', additional: 'forge_frontier:netherite_diamond_upgrade' },

        // Axes
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'iron_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:golden_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'golden_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'diamond_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_copper', result: 'create_sa:copper_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'copper_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_zinc', result: 'create_sa:zinc_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'zinc_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_brass', result: 'create_sa:brass_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'brass_axe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'netherite_axe', additional: 'minecraft:netherite_upgrade_smithing_template', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'netherite_iron_axe', additional: 'forge_frontier:netherite_iron_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'netherite_gold_axe', additional: 'forge_frontier:netherite_gold_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'netherite_emerald_axe', additional: 'forge_frontier:netherite_emerald_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_axe', mold: 'forge_frontier:axe_mold', stickCount: 2, recipe: 'netherite_diamond_axe', additional: 'forge_frontier:netherite_diamond_upgrade', fluidAmount: 150 },

        // Pickaxe
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'iron_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:golden_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'golden_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'diamond_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_copper', result: 'create_sa:copper_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'copper_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_zinc', result: 'create_sa:zinc_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'zinc_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_brass', result: 'create_sa:brass_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'brass_pickaxe', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'netherite_pickaxe', additional: 'minecraft:netherite_upgrade_smithing_template', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'netherite_iron_pickaxe', additional: 'forge_frontier:netherite_iron_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'netherite_gold_pickaxe', additional: 'forge_frontier:netherite_gold_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'netherite_emerald_pickaxe', additional: 'forge_frontier:netherite_emerald_upgrade', fluidAmount: 150 },
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_pickaxe', mold: 'forge_frontier:pickaxe_mold', stickCount: 2, recipe: 'netherite_diamond_pickaxe', additional: 'forge_frontier:netherite_diamond_upgrade', fluidAmount: 150 },

        // Shovel
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'iron_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:golden_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'golden_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'diamond_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_copper', result: 'create_sa:copper_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'copper_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_zinc', result: 'create_sa:zinc_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'zinc_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_brass', result: 'create_sa:brass_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'brass_shovel', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'netherite_shovel', additional: 'minecraft:netherite_upgrade_smithing_template', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'netherite_iron_shovel', additional: 'forge_frontier:netherite_iron_upgrade', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'netherite_gold_shovel', additional: 'forge_frontier:netherite_gold_upgrade', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'netherite_emerald_shovel', additional: 'forge_frontier:netherite_emerald_upgrade', fluidAmount: 50 },
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_shovel', mold: 'forge_frontier:shovel_mold', stickCount: 2, recipe: 'netherite_diamond_shovel', additional: 'forge_frontier:netherite_diamond_upgrade', fluidAmount: 50 },

        // Hoe
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'iron_hoe'},
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:golden_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'golden_hoe'},
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'diamond_hoe'},
        { fluid: 'forge_frontier:molten_copper', result: 'create_sa:copper_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'copper_hoe'},
        { fluid: 'forge_frontier:molten_zinc', result: 'create_sa:zinc_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'zinc_hoe'},
        { fluid: 'forge_frontier:molten_brass', result: 'create_sa:brass_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'brass_hoe'},
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'netherite_hoe', additional: 'minecraft:netherite_upgrade_smithing_template'},
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'netherite_iron_hoe', additional: 'forge_frontier:netherite_iron_upgrade'},
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'netherite_gold_hoe', additional: 'forge_frontier:netherite_gold_upgrade'},
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'netherite_emerald_hoe', additional: 'forge_frontier:netherite_emerald_upgrade'},
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_hoe', mold: 'forge_frontier:hoe_mold', stickCount: 2, recipe: 'netherite_diamond_hoe', additional: 'forge_frontier:netherite_diamond_upgrade'}
    ];

    // Loop through each recipe and create the corresponding compacting recipe
    toolRecipes.forEach(recipe => {
        createMoldRecipe(recipe.fluid, recipe.result, recipe.mold, recipe.stickCount, recipe.recipe, recipe.fluidAmount, recipe.additional);
    });

});
