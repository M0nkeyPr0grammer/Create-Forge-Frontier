ServerEvents.recipes(event => {

    // Removes Old Recipes
    event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'}) // Removes Old Steel Blasting Recipe
    event.remove({ id: 'ad_astra:recipes/coal_generator'}) // Removes Old Coal Generator Recipe
    event.remove({ id: 'ad_astra:recipes/compressor'}) // Removes Old Compressor Recipe
    event.remove({ id: 'ad_astra:recipes/nasa_workbench'}) // Removes Old Nasaworkbench Recipe
    event.remove({ id: 'ad_astra:recipes/fuel_refinery'}) // Removes Old Fuel Refinery Recipe
    event.remove({ id: 'ad_astra:recipes/water_pump'}) // Removes Old Water Pump Recipe
    event.remove({ id: 'ad_astra:recipes/oxygen_sensor'}) // Removes Old Oxygen Sensor Recipe
    event.remove({ id: 'ad_astra:recipes/oxygen_loader'}) // Removes Old Oxygen Loader Recipe
    event.remove({ id: 'ad_astra:recipes/energizer'}) // Removes Old Energizer Recipe
    event.remove({ id: 'ad_astra:recipes/solar_panel'}) // Removes Old Solar Panel Recipe
    event.remove({ id: 'ad_astra:recipes/oxygen_distributor'}) // Removes Old Oxygen Distributor Recipe
    event.remove({ id: 'ad_astra:recipes/cryo_freezer'}) // Removes Old Cryo Freezer Recipe
    event.remove({ id: 'ad_astra:recipes/tier_1_rover'}) // Removes Old Tier 1 Rover Recipe
    event.remove({ id: 'ad_astra:recipes/launch_pad'}) // Removes Old Launch Pad Recipe
    event.remove({ id: 'ad_astra_giselle_addon:crafting/gravity_normalizer'}) // Removes Old Gravity Normalizer Recipe
    event.remove({ id: 'ad_astra_giselle_addon:crafting/rocket_sensor'}) // Removes Old Rocket Sensor Recipe
    event.remove({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'}) // Removes Old Automation Nasa Workbench Recipe
    event.remove({ id: 'ad_astra_giselle_addon:crafting/fuel_loader'}) // Removes Old Fuel Loader Recipe

    // Creates Brand New Recipes for Ad Astra Machines

        // Creates new Steel Ingot recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_ingot',
                    nbt: {},
                    amount: 1
                },
                {
                    item: 'betterend:thallasium_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    item: 'ad_astra:steel_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/steel_ingot');

        // Creates Oil Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'createfoundry:molten_carbon',
                    amount: 8100
                },
                {
                    fluid: 'createaddition:bioethanol',
                    amount: 8100
                }
            ],
            results: [
                {
                    fluid: 'ad_astra:oil',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/oil');

        // Creates Missing Iron Plate Pressing Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: 'minecraft:iron_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    item: 'ad_astra:iron_plate',
                    nbt: {},
                    amount: 1
                }
            ]
        }).id('kubejs:compacting/iron_plate')

        // Create New Coal Generator Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'ACA',
                'ABA'
            ],
            key: {
                A: Ingredient.of('#c:iron_plates').toJson(),
                B: Ingredient.of('minecraft:iron_ingot').toJson(),
                C: Ingredient.of('create:blaze_burner').toJson()
            },
            result: Ingredient.of('ad_astra:coal_generator').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/coal_generator');

        // Creates New Compressor Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'A A',
                'ABA'
            ],
            key: {
                A: Ingredient.of('#c:iron_plates').toJson(),
                B: Ingredient.of('create:mechanical_press').toJson()
            },
            result: Ingredient.of('ad_astra:compressor').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/compressor');
        
        // Creates New Nasa Workbench Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'CDC',
                'EFE'
            ],
            key: {
                A: Ingredient.of('minecraft:redstone_torch').toJson(),
                B: Ingredient.of('create:analog_lever').toJson(),
                C: Ingredient.of('ad_astra:steel_plate').toJson(),
                D: Ingredient.of('create:mechanical_crafter').toJson(),
                E: Ingredient.of('minecraft:redstone_block').toJson(),
                F: Ingredient.of('ad_astra:steel_block').toJson()
            },
            result: Ingredient.of('ad_astra:nasa_workbench').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/workbench');

        // Creates New Fuel Refinery Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'AAA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_plate').toJson(),
                B: Ingredient.of('create:fluid_pipe').toJson(),
                C: Ingredient.of('createdieselgenerators:diesel_engine').toJson()
            },
            result: Ingredient.of('ad_astra:fuel_refinery').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/fuel_refinery');

        // Creates New Water Pump Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'A ',
                'BA',
                'C '
            ],
            key: {
                A: Ingredient.of('create:mechanical_pump').toJson(),
                B: Ingredient.of('ad_astra:desh_plate').toJson(),
                C: Ingredient.of('create:spout').toJson()
            },
            result: Ingredient.of('ad_astra:water_pump').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/water_pump');

        // Creates New Oxygen Sensor
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'CDC',
                'AEA'
            ],
            key: {
                A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                B: Ingredient.of('ad_astra:engine_fan').toJson(),
                C: Ingredient.of('ad_astra:ostrum_ingot').toJson(),
                D: Ingredient.of('create:content_observer').toJson(),
                E: Ingredient.of('create:electron_tube').toJson()
            },
            result: Ingredient.of('ad_astra:oxygen_sensor').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/oxygen_sensor');

        // Creates New Oxygen Loader Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'CDC',
                'AEA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_plate').toJson(),
                B: Ingredient.of('ad_astra:engine_fan').toJson(),
                C: Ingredient.of('ad_astra:oxygen_tank').toJson(),
                D: Ingredient.of('createaddition:connector').toJson(),
                E: Ingredient.of('minecraft:redstone_block').toJson()
            },
            result: Ingredient.of('ad_astra:oxygen_loader').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/oxygen_loader');

        // Creates New Energizer Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'ACA',
                'DAD'
            ],
            key: {
                A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                B: Ingredient.of('minecraft:diamond_block').toJson(),
                C: Ingredient.of('createaddition:tesla_coil').toJson(),
                D: Ingredient.of('ad_astra:ostrum_block').toJson()
            },
            result: Ingredient.of('ad_astra:energizer').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/energizer');

        // Creates New Rocket Sensor Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'AAA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                B: Ingredient.of('#c:iron_plates').toJson(),
                C: Ingredient.of('create:content_observer').toJson()
            },
            result: Ingredient.of('ad_astra_giselle_addon:rocket_sensor').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/rocket_sensor');

        // Creates New Automation NASA Workbench Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'CDC',
                'ABA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_plate').toJson(),
                B: Ingredient.of('create:smart_chute').toJson(),
                C: Ingredient.of('minecraft:redstone').toJson(),
                D: Ingredient.of('ad_astra:nasa_workbench').toJson()
            },
            result: Ingredient.of('ad_astra_giselle_addon:automation_nasa_workbench').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/automation_nasa_workbench');

        // Creates New Fuel Loader Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'AAA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                B: Ingredient.of('#c:iron_plates').toJson(),
                C: Ingredient.of('create:mechanical_pump').toJson()
            },
            result: Ingredient.of('ad_astra_giselle_addon:fuel_loader').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/fuel_loader');

        // Changes Old Recipes to use mechanical crafter

        // Creates New Gravity Normalizer Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'AAA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                B: Ingredient.of('#c:iron_plates').toJson(),
                C: Ingredient.of('ad_astra:space_boots').toJson()
            },
            result: Ingredient.of('ad_astra_giselle_addon:gravity_normalizer').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/gravity_normalizer');

        // Creates New Solar Panel Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'CCC'
            ],
            key: {
                A: Ingredient.of('#chipped:blue_stained_glass').toJson(),
                B: Ingredient.of('ad_astra:steel_plate').toJson(),
                C: Ingredient.of('ad_astra:desh_plate').toJson()
            },
            result: Ingredient.of('ad_astra:solar_panel').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/solar_panel');

        // Creates New Oxygen Distributor Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'AAA',
                'BCB',
                'DED'
            ],
            key: {
                A: Ingredient.of('ad_astra:engine_fan').toJson(),
                B: Ingredient.of('ad_astra:oxygen_tank').toJson(),
                C: Ingredient.of('ad_astra:oxygen_loader').toJson(),
                D: Ingredient.of('ad_astra:desh_plate').toJson(),
                E: Ingredient.of('ad_astra:oxygen_gear').toJson(),
            },
            result: Ingredient.of('ad_astra:oxygen_distributor').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/oxygen_distributor');

        // Creates New Cryo Freezer Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'BCB',
                'DBD'
            ],
            key: {
                A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                B: Ingredient.of('ad_astra:ostrum_ingot').toJson(),
                C: Ingredient.of('ad_astra:ostrum_tank').toJson(),
                D: Ingredient.of('ad_astra:ostrum_block').toJson(),
            },
            result: Ingredient.of('ad_astra:cryo_freezer').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/cryo_freezer');

        // Creates New Tier 1 Rover Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'A B',
                'CAD',
                'EFE'
            ],
            key: {
                A: Ingredient.of('ad_astra:desh_block').toJson(),
                B: Ingredient.of('#c:iron_rods').toJson(),
                C: Ingredient.of('ad_astra:steel_block').toJson(),
                D: Ingredient.of('ad_astra:desh_engine').toJson(),
                E: Ingredient.of('ad_astra:wheel').toJson(),
                F: Ingredient.of('ad_astra:desh_plate').toJson()
            },
            result: Ingredient.of('ad_astra:tier_1_rover').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/tier_1_rover');

        // Creates New Launch Pad Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'ABA',
                'BAB',
                'ABA'
            ],
            key: {
                A: Ingredient.of('ad_astra:steel_plate').toJson(),
                B: Ingredient.of('#c:iron_plates').toJson()
            },
            result: Ingredient.of('ad_astra:launch_pad').toJson(),
            acceptMirrored: false
        }).id('kubejs:ad_astra/launch_pad');
        
})