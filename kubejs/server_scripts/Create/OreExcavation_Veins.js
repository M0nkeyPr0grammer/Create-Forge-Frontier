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

        // Enlightend Ores: Malachite, Irradium, and Bismuth Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'minecraft:is_end',
            icon: {
            item: 'minecraft:end_stone'
            },
            name: 'Enlightend Ore Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/enlightend_vein')

        // Moon Ores: Cheese and Desh Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:moon_ore_veins',
            icon: {
            item: 'ad_astra:moon_globe'
            },
            name: 'Moon Ore Vein',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/moon_vein')

        // Mars Ores: Ostrum Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'ad_astra:has_structure/mars_temple',
            icon: {
            item: 'ad_astra:mars_globe'
            },
            name: 'Mars Ore Vein',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/mars_vein')
        
        // Venus Ores: Calorite Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:venus_ore_veins',
            icon: {
            item: 'ad_astra:venus_globe'
            },
            name: 'Venus Ore Vein',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/venus_vein')

        // Glacio Ores: Ice Shard Ore
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:glacio_ore_veins',
            icon: {
            item: 'ad_astra:glacio_globe'
            },
            name: 'Glacio Ore Vein',
            placement: {
            salt: 1,
            separation: 2,
            spacing: 2
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/glacio_vein')

        // Otherside Vein: Echo Shards
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:deeper_darker_vein',
            icon: {
            item: 'minecraft:echo_shard'
            },
            name: 'Deeper and Darker Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/deeper_darker_vein')

        // Toxic Vein: Uranium and Sulfur
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:toxic_vein',
            icon: {
            item: 'alexscavesdelight:toxic_sauce'
            },
            name: 'Toxic Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/toxic_vein')
    
        // Primordial Vein: Amber
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:primordial_vein',
            icon: {
            item: 'alexscaves:amber_curiosity'
            },
            name: 'Primordial Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/primordial_vein')

        // Abyssal Vein: Pearls
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:abyssal_vein',
            icon: {
            item: 'alexscaves:submarine'
            },
            name: 'Abyssal Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/abyssal_vein')

        // Forlorn Vein: Guano
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:forlorn_vein',
            icon: {
            item: 'alexscaves:pure_darkness'
            },
            name: 'Forlorn Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/forlorn_vein')

        // Magnetic Vein: Scarlet and Azure Neodymium
        event.custom({
            type: 'createoreexcavation:vein',
            amountMax: 40.0,
            amountMin: 15.0,
            biomeWhitelist: 'forge_frontier:magnetic_vein',
            icon: {
            item: 'alexscaves:telecore'
            },
            name: 'Magnetic Vein',
            placement: {
            salt: 1,
            separation: 1,
            spacing: 1
            },
            priority: 0
        }).id('createoreexcavation:ore_vein_type/magnetic_vein')        

        // The Forge Vein: Creative Flour; Will Create later, as it requires The Forge's Space Station

})