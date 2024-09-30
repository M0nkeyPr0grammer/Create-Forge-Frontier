LootJS.modifiers((event) => {

    // Target the witch's loot table
    event
        .addLootTableModifier('minecraft:entities/witch')
        .removeLoot('nether_remastered:seal_piece_2');
            
    // Target the evokers's loot table
    event
        .addLootTableModifier('minecraft:entities/evoker')
        .removeLoot('nether_remastered:seal_piece_3');

    // Target the warden's loot table
    event
        .addLootTableModifier('minecraft:entities/warden')
        .removeLoot('nether_remastered:seal_crystal');
        
});
