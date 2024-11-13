ServerEvents.tags('item', event => {

    // Create Stone Types
    const createStones = [
        'forge_frontier:amberlite', 'forge_frontier:aubrum', 'forge_frontier:azurnium', 'forge_frontier:frostite',
        'forge_frontier:glacium', 'forge_frontier:guanite', 'forge_frontier:neodymrium', 'forge_frontier:pearlyte',
        'forge_frontier:pyroclast', 'forge_frontier:radiantite', 'forge_frontier:stellaris',
        'forge_frontier:sulphite', 'forge_frontier:verdantine', 'forge_frontier:uraniumnite',
        'enlightened_end:palerock', 'create_dd:potassic', 'deeperdarker:sculk_grime',
        'enlightened_end:void_shale'
    ];
    createStones.forEach(stone => {
        const stoneName = stone.split(':')[1]; // Extract the name part after the colon
        event.add(`create:stone_types/${stoneName}`, stone);
    });

    // Crafting Tables
    const craftingTables = [
        'alpha_crafting_table', 'baobab_crafting_table', 'blackwood_crafting_table', 'blue_bioshroom_crafting_table',
        'brimwood_crafting_table', 'cobalt_crafting_table', 'cypress_crafting_table', 'ru_dead_crafting_table',
        'eucalyptus_crafting_table', 'green_bioshroom_crafting_table', 'joshua_crafting_table', 'kapok_crafting_table',
        'larch_crafting_table', 'magnolia_crafting_table', 'maple_crafting_table', 'mauve_crafting_table',
        'ru_palm_crafting_table', 'pine_crafting_table', 'pink_bioshroom_crafting_table', 'ru_redwood_crafting_table',
        'ru_willow_crafting_table', 'yellow_bioshroom_crafting_table', 'socotra_crafting_table'
    ];
    craftingTables.forEach(table => event.add('mctb:revertable_workbench', `mctb:${table}`));

    // Small Cactus
    event.add('forge:small_cacti',[
        'creeperoverhaul:tiny_cactus','regions_unexplored:barrel_cactus'
    ]);

    // Cassette Tape
    event.add('iammusicplayer:cassette_tape',[
        'iammusicplayer:cassette_tape','iammusicplayer:cassette_tape_glass'
    ]);

    // Cerulean Stalk Block
    event.add('enlightened_end:cerulean_stalk_blocks',[
        'enlightened_end:cerulean_log','enlightened_end:stripped_cerulean_log'
    ]);

    // Magnolia Logs
    event.add('regions_unexplored:magnolia_logs',[
        'regions_unexplored:magnolia_log','regions_unexplored:stripped_magnolia_log','regions_unexplored:magnolia_wood','regions_unexplored:stripped_magnolia_wood'
    ]);

    // Ad Astra Ores
    event.add('forge:ores/ice_shard', [
        'ad_astra:moon_ice_shard_ore', 'ad_astra:deepslate_ice_shard_ore', 'ad_astra:mars_ice_shard_ore', 'ad_astra:glacio_ice_shard_ore'
    ]);
    event.add('forge:ores/cheese', 'ad_astra:moon_cheese_ore');
    event.add('forge:ores/desh', ['ad_astra:moon_desh_ore', 'ad_astra:deepslate_desh_ore']);
    event.add('forge:ores/ostrum', ['ad_astra:mars_ostrum_ore', 'ad_astra:deepslate_ostrum_ore']);
    event.add('forge:ores/calorite', ['ad_astra:venus_calorite_ore', 'ad_astra:deepslate_calorite_ore']);

    // Alex Caves Ores
    event.add('forge:ores/redstone', 'alexscaves:guanostone_redstone_ore');
    event.add('forge:ores/coal', 'alexscaves:coprolith_coal_ore');
    event.add('forge:ores/uranium', 'alexscaves:radrock_uranium_ore');

    // Enlightened End Ores
    event.add('forge:ores/bismuth', 'enlightened_end:bismuth_ore');
    event.add('forge:ores/irradium', 'enlightened_end:irradium_ore');
    event.add('forge:ores/malachite', 'enlightened_end:malachite_ore');

    // Forge Templates/Smithing
    event.add('forge:templates/smithing', [
        'minecraft:netherite_upgrade_smithing_template', 'forge_frontier:netherite_iron_upgrade',
        'forge_frontier:netherite_gold_upgrade', 'forge_frontier:netherite_emerald_upgrade',
        'forge_frontier:netherite_diamond_upgrade', 'cataclysm:ignitium_upgrade_smithing_template',
        'enlightened_end:adamantite_smithing_template', 'ethuim:ethium_upgrade_smithing_template',
        'endreborn:mysterious_upgrade_template', 'endreborn:curious_upgrade_template',
        'deeperdarker:warden_upgrade_smithing_template', 'create_additions_synthetics:gilded_upgrade'
    ]);

    // Forge Energized Items
    event.add('forge:energized/items', [
        'create_new_age:overcharged_iron', 'create_new_age:overcharged_golden_sheet', 'create_new_age:overcharged_diamond',
        'create_new_age:overcharged_gold', 'create_new_age:overcharged_iron_sheet', 'forge_frontier:overcharged_netherite_ingot'
    ]);

    // Create Crushed Raw Materials
    const crushedMaterials = [
        'crushed_desh', 'crushed_ostrum', 'crushed_calorite', 'crushed_bismuth', 'crushed_irradium', 'crushed_malachite',
        'crushed_redstone', 'crushed_verdantine', 'crushed_glacium', 'crushed_debris', 'crushed_grime', 'crushed_aubrum',
        'crushed_pyroclast', 'crushed_frostite', 'crushed_stellaris', 'crushed_radiantite', 'crushed_shale',
        'crushed_palerock', 'crushed_guanite', 'crushed_pearlyte', 'crushed_amberlite', 'crushed_azurnium', 'crushed_neodymrium',
        'crushed_uraniumnite', 'crushed_sulphite'
    ];
    crushedMaterials.forEach(material => event.add('create:crushed_raw_materials', `forge_frontier:${material}`));

    // Forge Frontier End Remastered Eye Pieces
    const eyePieces = [
        'pirate_arrow', 'pirate_crossbow', 'cannon_ball', 'soul_flame_staff', 'infernal_ingot', 'ras_solar_sword',
        'sun_disc', 'piglin_kings_crown', 'piglin_war_axe', 'piglin_totem', 'infernal_chisel', 'hellhounds_fang'
    ];
    eyePieces.forEach(piece => event.add('forge_frontier:end_remastered_eye_pieces', `forge_frontier:${piece}`));

    // Forge Frontier Molds
    const molds = [
        'upgrade_mold', 'axe_mold', 'boots_mold', 'block_mold', 'chestplate_mold', 'coal_mold', 'gem_mold',
        'head_mold', 'helmet_mold', 'hoe_mold', 'ingot_mold', 'leggings_mold', 'pickaxe_mold', 'shovel_mold',
        'skull_mold', 'sword_mold', 'mold_template'
    ];
    molds.forEach(mold => event.add('forge_frontier:mold_templates', `forge_frontier:${mold}`));

    // Vanilla Tag
    event.add('forge_frontier:vanilla', ['minecraft:dandelion', 'minecraft:blue_orchid']);

    // Connector Tag
    event.add('forge_frontier:connector', [
        'create_new_age:electrical_connector', 'createaddition:connector', 'createaddition:large_connector', 'tfgm:cable_connector'
    ]);

    // Create Casing
    event.add('create:casing', 'forge_frontier:forge_rocket_casing');

});

ServerEvents.tags('fluid', event => {

    // Fluids
    event.add('forge:crude_oil', 'ad_astra:oil');
    event.remove('minecraft:water', 'createaddition:bioethanol');

});
