ServerEvents.recipes(event => {
    // Removal of Old Veins
    event.remove({ id: 'createoreexcavation:ore_vein_type/coal'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/copper'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/diamond'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/emerald'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/glowstone'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/gold'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/hardened_diamond'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/iron'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/lapis'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/netherite'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/nether_gold'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/quartz'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/redstone'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/water'})
    event.remove({ id: 'createoreexcavation:ore_vein_type/zinc'})

        // Vanilla Ore
        event.custom({
            type: "createoreexcavation:vein",
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: "minecraft:is_overworld",
            icon: {
            item: "minecraft:stone"
            },
            name: "Vanilla Ore Vein",
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/vanilla_ore')

        // Create Ore
        event.custom({
            type: "createoreexcavation:vein",
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: "minecraft:is_overworld",
            icon: {
            item: "create:cogwheel"
            },
            name: "Create Ore Vein",
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/create_ore')

        // Gem Vein
        event.custom({
            type: "createoreexcavation:vein",
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: "minecraft:is_overworld",
            icon: {
            item: "enlightened_end:stardust"
            },
            name: "Gem Ore Vein",
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/gem_ore')

        // Non Precious Nether Ores Vein
        event.custom({
            type: "createoreexcavation:vein",
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: "minecraft:is_nether",
            icon: {
            item: "minecraft:netherrack"
            },
            name: "Non Precious Nether Ore Vein",
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/non_precious_nether_ore')
        
        // Precious Nether Ores Vein
        event.custom({
            type: "createoreexcavation:vein",
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: "minecraft:is_nether",
            icon: {
            item: "minecraft:ancient_debris"
            },
            name: "Precious Nether Ore Vein",
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/precious_nether_ore')

        // End Ores: Malachite, Irradium, Bismuth, and Tungsten

        // Moon Ores: Cheese, Desh, Ice Shard

        // Mercury Ores:
        
        // Mars Ores

        // Venus Ores:

        // Glacio Ores:

})