// New Age Forge Frontier Custom Block Recipes
ServerEvents.recipes(event => {

  // Shaped Recipes for Overcharged Blocks
  const overchargedBlocks = {
      overcharged_iron_block: "create_new_age:overcharged_iron",
      overcharged_gold_block: "create_new_age:overcharged_gold",
      overcharged_diamond_block: "create_new_age:overcharged_diamond",
      overcharged_netherite_block: "forge_frontier:overcharged_netherite_ingot"
  };

  Object.entries(overchargedBlocks).forEach(([block, material]) => {
      event.shaped(Item.of(`forge_frontier:${block}`), ["AAA", "AAA", "AAA"], { A: material })
          .id(`forge_frontier:shaped/${block}`);
  });

  // Energising Recipes
  const energisingRecipes = {
      overcharged_iron_block: { ingredients: [{ item: "minecraft:iron_block" }], energy_needed: 9000 },
      overcharged_gold_block: { ingredients: [{ item: "minecraft:gold_block" }], energy_needed: 18000 },
      overcharged_diamond_block: { ingredients: [{ item: "minecraft:diamond_block" }], energy_needed: 90000 },
      overcharged_netherite_block: { ingredients: [{ item: "minecraft:netherite_block" }], energy_needed: 450000 },
      overcharged_netherite_ingot: { ingredients: [{ item: "minecraft:netherite_ingot" }], energy_needed: 50000 }
  };

  Object.entries(energisingRecipes).forEach(([result, recipe]) => {
      event.custom({
          type: "create_new_age:energising",
          energy_needed: recipe.energy_needed,
          ingredients: recipe.ingredients,
          results: [{ item: `forge_frontier:${result}` }]
      }).id(`forge_frontier:energising/${result}`);
  });

  // Shapeless Recipes for Overcharged Materials
  Object.entries(overchargedBlocks).forEach(([block, material]) => {
      event.custom({
          type: "minecraft:crafting_shapeless",
          ingredients: [{ item: `forge_frontier:${block}` }],
          result: { item: material, count: 9 }
      }).id(`forge_frontier:shapeless/${block}`);
  });

// New Age Forge Frontier Custom Item Application Magnet Recipes
  // Define Magnet Upgrade Paths as an Array of Objects
  let magnetUpgrades = [
    { result: "create_new_age:redstone_magnet", base: "create_new_age:magnetite_block", upgrade: "forge_frontier:overcharged_iron_block" },
    { result: "create_new_age:layered_magnet", base: "create_new_age:redstone_magnet", upgrade: "forge_frontier:overcharged_gold_block" },
    { result: "create_new_age:fluxuated_magnetite", base: "create_new_age:layered_magnet", upgrade: "forge_frontier:overcharged_diamond_block" },
    { result: "create_new_age:netherite_magnet", base: "create_new_age:fluxuated_magnetite", upgrade: "forge_frontier:overcharged_netherite_block" }
  ];

  // Loop Through Magnet Upgrade Paths
  for (let i = 0; i < magnetUpgrades.length; i++) {
    let upgrade = magnetUpgrades[i];

    // Remove Existing Recipes for the Item
    event.remove({ id: `create_new_age:shaped/${upgrade.result.split(":")[1]}` });

    // Create the New Item Application Recipe
    event.custom({
        type: "create:item_application",
        ingredients: [
            { item: upgrade.base },
            { item: upgrade.upgrade }
        ],
        results: [
            { item: upgrade.result }
        ]
    }).id(`forge_frontier:item_application/${upgrade.result.split(":")[1]}`);
  }

});
