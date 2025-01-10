// Waystone Recipe Tweaks
ServerEvents.recipes(event => {
    // Remove Non-Essential Waystones Recipes
    const waystonesRecipes = [
        "waystones:warp_plate",
        "waystones:portstone",
        "waystones:white_sharestone",
        "waystones:orange_sharestone",
        "waystones:magenta_sharestone",
        "waystones:light_blue_sharestone",
        "waystones:yellow_sharestone",
        "waystones:lime_sharestone",
        "waystones:pink_sharestone",
        "waystones:gray_sharestone",
        "waystones:light_gray_sharestone",
        "waystones:cyan_sharestone",
        "waystones:purple_sharestone",
        "waystones:blue_sharestone",
        "waystones:brown_sharestone",
        "waystones:green_sharestone",
        "waystones:red_sharestone",
        "waystones:black_sharestone",
        "waystones:sharestone",
        "waystones:return_scroll",
        "waystones:bound_scroll",
        "waystones:warp_scroll"
    ];

    waystonesRecipes.forEach(recipeId => {
        event.remove({ id: recipeId });
    });

    // New Waystone Recipes
        // Andesite Casing Waystone
        event.remove({id: "waystones:waystone"})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                " CCC ",
                "CCDCC",
                " CWC ",
                " CDC ",
                " CDC ",
                "CCCCC"
            ],
            key: {
                C: Ingredient.of("create:railway_casing"),
                D: Ingredient.of("waystones:warp_dust"),
                W: Ingredient.of("waystones:warp_stone"),
            },
            result: Ingredient.of("waystones:waystone"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/andesite_casing_waystone")

        // Copper Casing Waystone
        event.remove({ id: "waystones:mossy_waystone_convert"})
        event.remove({id: "waystones:mossy_waystone"})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                " CCC ",
                "CCDCC",
                " CWC ",
                " CDC ",
                " CDC ",
                "CCCCC"
            ],
            key: {
                C: Ingredient.of("create_dd:steel_casing"),
                D: Ingredient.of("waystones:warp_dust"),
                W: Ingredient.of("waystones:warp_stone"),
            },
            result: Ingredient.of("waystones:mossy_waystone"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/copper_casing_waystone")


        // Brass Casing Waystone
        event.remove({id: "waystones:sandy_waystone"})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                " CCC ",
                "CCDCC",
                " CWC ",
                " CDC ",
                " CDC ",
                "CCCCC"
            ],
            key: {
                C: Ingredient.of("create_dd:bronze_casing"),
                D: Ingredient.of("waystones:warp_dust"),
                W: Ingredient.of("waystones:warp_stone"),
            },
            result: Ingredient.of("waystones:sandy_waystone"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/brass_casing_waystone")

    // New Warp Stone Recipe
    event.remove({id: "waystones:warp_stone"})
    event.custom({
		type: "create:mixing",
		heatRequirement: "heated",
		ingredients: [
		  {
			tag: "forge:ender_pearls"
		  },
          {
			tag: "forge:ender_pearls"
		  },
          {
			tag: "forge:ender_pearls"
		  },
          {
			tag: "forge:ender_pearls"
		  },
		  {
			item: "create_ethium:amethyst_mix"
		  },
          {
			item: "create_ethium:amethyst_mix"
		  },
          {
			item: "create_ethium:amethyst_mix"
		  },
          {
			item: "create_ethium:amethyst_mix"
		  }
		],
		results: [
		  {
			item: "waystones:warp_stone"
		  }
		]
	  }).id( "forge_frontier:mixing/warp_stone" )

    // New Warp Dust Recipe
    event.remove({id: "waystones:warp_dust"})
    event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				tag: "forge:ender_pearls"
			},
            {
                item: "createutilities:polished_amethyst"
            }
		],
		result: {
			item: "waystones:warp_dust",
			count: 4
		  }

	}).id( "forge_frontier:shapeless/warp_dust" )

});
