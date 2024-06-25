ServerEvents.recipes(event => {
// Drill Settings
      // Gem Ores: Lapis, Redstone, Emerald, and Diamond
        // Lapis
        event.custom({
            type: "createoreexcavation:drilling",
            drill: {
            item: "createoreexcavation:drill"
            },
            fluid: {
                fluid: "create_dd:condense_milk",
                amount: 100
            },
            output: [
            {
                item: "minecraft:cobblestone",
                count: 3,
                chance: 1
            },
            {
                item: "minecraft:cobbled_deepslate",
                count: 2,
                chance: .75
            },
            {
                item: "minecraft:lapis_ore",
                count: 1, 
                chance: .50
            }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: "createoreexcavation:ore_vein_type/gem_ore"
        }).id('forge_frontier:drilling/lapis')
        
        // Redstone
        event.custom({
            type: "createoreexcavation:drilling",
            drill: {
            item: "createoreexcavation:drill"
            },
            fluid: {
                fluid: "create_dd:vanilla",
                amount: 100
            },
            output: [
                {
                    item: "minecraft:cobblestone",
                    count: 3,
                    chance: 1
                },
                {
                    item: "minecraft:cobbled_deepslate",
                    count: 2,
                    chance: .75
                },
                {
                    item: "minecraft:redstone_ore",
                    count: 1, 
                    chance: .50
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: "createoreexcavation:ore_vein_type/gem_ore"
        }).id('forge_frontier:drilling/redstone')

        // Emerald
        event.custom({
            type: "createoreexcavation:drilling",
            drill: {
            item: "createoreexcavation:diamond_drill"
            },
            fluid: {
                fluid: "create_dd:cream",
                amount: 100
            },
            output: [
                {
                    item: "minecraft:cobblestone",
                    count: 3,
                    chance: 1
                },
                {
                    item: "minecraft:cobbled_deepslate",
                    count: 2,
                    chance: .75
                },
                {
                    item: "minecraft:emerald_ore",
                    count: 1, 
                    chance: .50
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: "createoreexcavation:ore_vein_type/gem_ore"
        }).id('forge_frontier:drilling/emerald')

        // Diamond
        event.custom({
            type: "createoreexcavation:drilling",
            drill: {
            item: "createoreexcavation:diamond_drill"
            },
            fluid: {
                fluid: "create_dd:vanilla_milkshake",
                amount: 100
            },
            output: [
                {
                    item: "minecraft:cobblestone",
                    count: 3,
                    chance: 1
                },
                {
                    item: "minecraft:cobbled_deepslate",
                    count: 2,
                    chance: .75
                },
                {
                    item: "minecraft:diamond_ore",
                    count: 1, 
                    chance: .50
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: "createoreexcavation:ore_vein_type/gem_ore"
        }).id('forge_frontier:drilling/diamond')
      })