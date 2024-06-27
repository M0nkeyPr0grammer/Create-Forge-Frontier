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
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'minecraft:is_overworld',
            biomeBlacklist: 'minecraft:is_forest',
            icon: {
            item: 'minecraft:stone'
            },
            name: 'Vanilla Ore Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/vanilla_ore')

        // Create Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'minecraft:is_forest',
            icon: {
            item: 'create:cogwheel'
            },
            name: 'Create Ore Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/create_ore')

        // Gem Vein
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'minecraft:is_mountain',
            icon: {
            item: 'enlightened_end:stardust'
            },
            name: 'Gem Ore Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/gem_ore')

        // Non Precious Nether Ores Vein
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'minecraft:is_nether',
            biomeBlacklist: 'incendium:all_incendium_biomes',
            icon: {
            item: 'minecraft:netherrack'
            },
            name: 'Non Precious Nether Ore Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/non_precious_nether_ore')
        
        // Precious Nether Ores Vein
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'incendium:all_incendium_biomes',
            icon: {
            item: 'minecraft:ancient_debris'
            },
            name: 'Precious Nether Ore Vein',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/precious_nether_ore')

        // End Ores: Malachite, Irradium, and Bismuth Ore
            // Malachite Ore
            event.custom({
                type: 'createoreexcavation:vein',
                amountMax: 40.0,
                amountMin: 15.0,
                biomeWhitelist: 'minecraft:is_end',
                icon: {
                item: 'enlightened_end:malachite_ore'
                },
                name: 'Malachite Ore',
                placement: {
                salt: 1,
                separation: 2,
                spacing: 2
                },
                priority: 0
            }).id('createoreexcavation:ore_vein_type/malachite_ore')

            // Irradium Ore
            event.custom({
                type: 'createoreexcavation:vein',
                amountMax: 40.0,
                amountMin: 15.0,
                biomeWhitelist: 'minecraft:is_end',
                icon: {
                item: 'enlightened_end:irradium_ore'
                },
                name: 'Irradium Ore',
                placement: {
                salt: 1,
                separation: 2,
                spacing: 2
                },
                priority: 0
            }).id('createoreexcavation:ore_vein_type/irradium_ore')

            // Bismuth Ore
            event.custom({
                type: 'createoreexcavation:vein',
                amountMax: 40.0,
                amountMin: 15.0,
                biomeWhitelist: 'minecraft:is_end',
                icon: {
                item: 'enlightened_end:bismuth_ore'
                },
                name: 'Bismuth Ore',
                placement: {
                salt: 1,
                separation: 2,
                spacing: 2
                },
                priority: 0
            }).id('createoreexcavation:ore_vein_type/bismuth_ore')

        // Moon Ores: Cheese and Desh Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'ad_astra:moon_ore_veins',
            icon: {
            item: 'ad_astra:moon_globe'
            },
            name: 'Moon Ore',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/moon_ore')

        // Mars Ores: Ostrum Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'ad_astra:has_structure/mars_temple',
            icon: {
            item: 'ad_astra:mars_globe'
            },
            name: 'Mars Ore',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/mars_ore')
        
        // Venus Ores: Calorite Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'ad_astra:venus_ore_veins',
            icon: {
            item: 'ad_astra:venus_globe'
            },
            name: 'Venus Ore',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/venus_ore')

        // Glacio Ores: Ice Shard Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'ad_astra:glacio_ore_veins',
            icon: {
            item: 'ad_astra:glacio_globe'
            },
            name: 'Glacio Ore',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/glacio_ore')

})