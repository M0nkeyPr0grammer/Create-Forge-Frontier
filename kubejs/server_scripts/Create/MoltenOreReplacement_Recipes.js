ServerEvents.recipes(event => {

    // Molten Copper
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_copper_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_copper_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_copper_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_copper_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_copper_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_copper_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:copper_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:copper_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_block_molten');

    // Molten Iron
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_iron_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_iron_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_iron_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_iron_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_iron_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_block_molten');

    // Molten Gold
        // Crushed Raw to Molten

        // Block Raw to Molten

        // Crushed Pile to Molten

        // Raw to Molten

        // Ore to Molten

        // Ingot to Molten
 
        // Block to Molten

    // Molten Carbon
        // Charcoal to Molten

        // Charcoal Block to Molten

        // Ore to Molten
 
        // Block to Molten

        // Coal to Molten

    // Molten Diamond
        // Ingot to Molten
 
        // Block to Molten

        // Ore to Molten

        // Raw to Molten

        // Grit to Molten

        // Carbon Compacting

    // Molten Zinc
        // Ingot to Molten

        // Crushed to Molten

        // Raw to Molten

        // Crushed Pile to Molten

        // Ore to Molten

        // Raw Block to Molten

        // Block to Molten

    // Molten Brass

        // Ingot to Molten
 
        // Block to Molten

        // Zinc, Copper Mixing

    // Molten Emerald

        // Ore to Molten

        // Ingot to Molten
 
        // Block to Molten

        // Raw to Molten

    // Molten Redstone

        // Raw to Molten

        // Ore to Molten

        // Ingot to Molten
 
        // Block to Molten

    // Molten Lapis

        // Ore to Molten

        // Ingot to Molten
 
        // Block to Molten

    // Molten Ancient Debris

        // Raw to Molten

        // Ingot to Molten

    // Molten Netherite
        // Debris and Gold Mixing

        // Block to Molten

        // Ingot to Molten

    // Molten Bronze
        // Copper, Tin, Zinc Mixing

        // Block to Molten

        // Ingot to Molten

    // Molten Tin
        // Ore to Molten

        // Block to Molten

        // Crushed Raw to Molten

        // Raw to Molten

        // Ingot to Molten

        // Raw Block to Molten

        // Crushed Pile to Molten

    // Molten Quartz
        // Block to Molten

        // Ore to Molten

        // Ingot to Molten

    // Molten Ice Shard
        // Ore to Molten

        // Ingot to Molten

    // Molten Uranium
        // Ingot to Molten

        // Ore to Molten

        // Block to Molten

        // Crushed to Molten

        // Crushed Pile to Molten

    // Molten Bismuth
        // Raw Block to Molten

        // Block to Molten

        // Ore to Molten

        // Crushed to Molten

        // Ingot to Molten

        // Raw to Molten

        // Crushed Pile to Molten

    // Molten Irradium
        // Raw Block to Molten

        // Ingot to Molten

        // Ore to Molten

        // Raw to Molten

        // Block to Molten

        // Crushed to Molten

        // Crushed Pile to Molten

    // Molten Malachite
        // Crushed to Molten

        // Ingot to Molten

        // Block to Molten

        // Ore to Molten

        // Crushed Pile to Molten

    // Molten Steel
        // Carbon, Iron, Mixing

        // Ingots to Molten

        // Blocks to Molten

    // Molten Netherite-Iron
        // Ingot to Molten

        // Netherite, Iron Mixing

        // Block to Molten

    // Molten Netherite-Gold
        // Ingot to Molten

        // Netherite, Gold Mixing

        // Block to Molten

    // Molten Netherite-Emerald
        // Ingot to Molten

        // Netherite, Emerald Mixing

        // Block to Molten

    // Molten Netherite-Diamond
        // Ingot to Molten

        // Netherite, Diamond Mixing

        // Block to Molten

    // Molten Desh
        // Ore to Molten

        // Block to Molten

        // Raw to Molten

        // Raw Block to Molten

        // Ingot to Molten

        // Crushed to Molten

        // Crushed Pile to Molten

    // Molten Calorite
        // Ore to Molten

        // Block to Molten

        // Raw to Molten

        // Raw Block to Molten

        // Ingot to Molten

        // Crushed to Molten

        // Crushed Pile to Molten

    // Molten Ostrum
        // Ore to Molten

        // Block to Molten

        // Raw to Molten

        // Raw Block to Molten

        // Ingot to Molten

        // Crushed to Molten

        // Crushed Pile to Molten

})