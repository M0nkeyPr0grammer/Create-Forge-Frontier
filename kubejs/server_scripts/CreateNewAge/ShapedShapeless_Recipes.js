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

    // Shapeless Recipes for Overcharged Materials
    Object.entries(overchargedBlocks).forEach(([block, material]) => {
        event.custom({
            type: "minecraft:crafting_shapeless",
            ingredients: [{ item: `forge_frontier:${block}` }],
            result: { item: material, count: 9 }
        }).id(`forge_frontier:shapeless/${block}`);
    });
});