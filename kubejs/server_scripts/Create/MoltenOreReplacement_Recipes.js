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
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
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
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_gold_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_gold_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_gold_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_gold_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_gold_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:gold_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_block_molten');

    // Molten Carbon
        // Charcoal to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:charcoal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/charcoal_molten');

        // Charcoal Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'quark:charcoal_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/charcoal_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/coal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 300
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 30
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_ore_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:coal_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_block_molten');

        // Coal to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:coal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_molten');

    // Molten Diamond
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:diamond',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:diamond_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/diamond',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_ore_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'createoreexcavation:raw_diamond',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_diamond_molten');

        // Grit to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'createaddition:diamond_grit',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_grit_molten');

        // Carbon Compacting
        event.custom({
            type:"create:compacting",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 1000
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:compacting/carbon_diamond_molten');

    // Molten Zinc
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:zinc_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_ingot_molten');

        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_zinc_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:raw_zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_zinc_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_zinc_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_zinc_pile_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 800
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 80
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_ore_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:raw_zinc_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_zinc_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:zinc_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_block_molten');

    // Molten Brass

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:brass_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/brass_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:brass_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/brass_block_molten');

        // Copper, Zinc Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 400
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_zinc_brass_molten');

    // Molten Emerald

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/emerald',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:emerald',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:emerald_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_block_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'createoreexcavation:raw_emerald',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_emerald_molten');

    // Molten Redstone

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'createoreexcavation:raw_redstone',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_redstone_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/redstone',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 1200
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 120
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:redstone',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:redstone_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_block_molten');

    // Molten Lapis

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/lapis',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 2000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:lapis_lazuli',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:lapis_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_block_molten');

    // Molten Ancient Debris

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/netherite_scrap',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 150
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 10
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ancient_debris_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_scrap',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_scrap_molten');

    // Molten Netherite
        // Debris, Gold Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 300
                },
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/debris_gold_netherite_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_ingot_molten');

    // Molten Bronze
        // Copper, Tin, Zinc Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 300
                },
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 400
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_tin_zinc_bronze_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:bronze_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bronze_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:bronze_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bronze_ingot_molten');

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