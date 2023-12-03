// Immersive Aircraft Create Compatibility Tweaks
ServerEvents.recipes(event => {
    // Removes Vanilla Immersive Aircraft Recipes
    event.remove({ id: 'immersive_aircraft:eco_engine' })
    event.remove({ id: 'immersive_aircraft:engine' })
    event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
    event.remove({ id: 'immersive_aircraft:gyrodyne' })
    event.remove({ id: 'immersive_aircraft:gyroscope' })
    event.remove({ id: 'immersive_aircraft:hull' })
    event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
    event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
    event.remove({ id: 'immersive_aircraft:industrial_gears' })
    event.remove({ id: 'immersive_aircraft:nether_engine' })
    event.remove({ id: 'immersive_aircraft:propeller' })
    event.remove({ id: 'immersive_aircraft:quadrocopter' })
    event.remove({ id: 'immersive_aircraft:boiler' })
    event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
    event.remove({ id: 'immersive_aircraft:steel_boiler' })
    event.remove({ id: 'immersive_aircraft:sail' })
    event.remove({ id: 'immersive_aircraft:biplane' })
    event.remove({ id: 'immersive_aircraft:airship' })

    // Creates Immersive Aircraft Create Recipes
    // Shaped Recipes

        // Eco Engine
    event.shaped(
        Item.of('immersive_aircraft:eco_engine', 1),
        [
            'CBC',
            'ADA'
        ],
        {
            A:'create:copper_sheet',
            B:'minecraft:water_bucket',
            C:'create:iron_sheet',
            D:'immersive_aircraft:boiler',
        }
    )

        // Engine
    event.shaped(
        Item.of('immersive_aircraft:engine', 1),
        [
            'CAC',
            'DBD'
        ],
        {
            A: 'create:precision_mechanism',
            B: 'immersive_aircraft:boiler',
            C: 'create:brass_sheet',
            D: 'create:sturdy_sheet',
        }
    )

        // Enhanced Proppeller
    event.shaped(
        Item.of('immersive_aircraft:enhanced_propeller', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:brass_sheet',
            B: 'create:propeller',
        }
    )

        // Gyrodyne
    event.shaped(
        Item.of('immersive_aircraft:gyrodyne', 1),
        [
            ' C ',
            'ADA',
            'BEB'
        ],
        {
            A: 'immersive_aircraft:sail',
            B: 'immersive_aircraft:hull',
            C: 'immersive_aircraft:propeller',
            D: 'create:precision_mechanism',
            E: '#create:seats',
        }
    )

        // Gyroscope
    event.shaped(
        Item.of('immersive_aircraft:gyroscope', 1),
        [
            'A',
            'B'
        ],
        {
            A: 'minecraft:compass',
            B: 'create:electron_tube',
        }
    )

        // Hull
    event.shaped(
        Item.of('immersive_aircraft:hull', 1),
        [
            'ABA',
            'ABA'
        ],
        {
            A: 'create:andesite_casing',
            B: 'minecraft:iron_ingot',
        }
    )

        // Hull Reinforcement
    event.shaped(
        Item.of('immersive_aircraft:hull_reinforcement', 1),
        [
            'BAB'
        ],
        {
            A: 'immersive_aircraft:hull',
            B: 'create:iron_sheet',
        }
    )

        // Improved Landing Gear
    event.shaped(
        Item.of('immersive_aircraft:improved_landing_gear', 1),
        [
            'CB',
            'A '
        ],
        {
            A: 'create:belt_connector',
            B: 'minecraft:iron_ingot',
            C: 'create:iron_sheet',
        }
    )

        // Industrial Gears
    event.shaped(
        Item.of('immersive_aircraft:industrial_gears', 1),
        [
            'BAB'
        ],
        {
            A: 'create:cogwheel',
            B: 'create:iron_sheet',
        }
    )

        // Nether Engine
    event.shaped(
        Item.of('immersive_aircraft:nether_engine', 1),
        [
            'CBC',
            'ADA'
        ],
        {
            A: 'create:sturdy_sheet',
            B: 'minecraft:lava_bucket',
            C: 'create:iron_sheet',
            D: 'immersive_aircraft:boiler',
        }
    )

        // Propeller
    event.shaped(
        Item.of('immersive_aircraft:propeller', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:propeller',
        }
    )

        // Quadrocopter
    event.shaped(
        Item.of('immersive_aircraft:quadrocopter', 1),
        [
            'DBD',
            ' C ',
            'DAD'
        ],
        {
            A: 'immersive_aircraft:boiler',
            B: 'create:andesite_casing',
            C: 'minecraft:string',
            D: 'create:propeller',
        }
    )

        // Boiler
    event.shaped(
        Item.of('immersive_aircraft:boiler', 1),
        [
            'B',
            'C',
            'A'
        ],
        {
            A: 'create:blaze_burner',
            B: 'create:steam_engine',
            C: 'create:fluid_tank',
        }
    )

        // Sturdy Pipes
    event.shaped(
        Item.of('immersive_aircraft:sturdy_pipes', 1),
        [
            'BAB'
        ],
        {
            A: 'create:fluid_pipe',
            B: 'create:iron_sheet',
        }
    )
        // Steel Boiler
    event.shaped(
        Item.of('immersive_aircraft:steel_boiler', 1),
        [
            'ABA'
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:fluid_tank',
        }
    )

        // Sail
    event.shaped(
        Item.of('immersive_aircraft:sail', 1),
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'create:white_sail',
        }
    )

    // Mechanical Crafter Recipes

        // Biplane
    // Biplane
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            '   D ',
            'D  D ',
            'AAEBC',
            'D  D ',
            '   D '
        ],
        key: {
            A: Ingredient.of('immersive_aircraft:hull').toJson(),
            B: Ingredient.of('immersive_aircraft:engine').toJson(),
            C: Ingredient.of('immersive_aircraft:propeller').toJson(),
            D: Ingredient.of('immersive_aircraft:sail').toJson(),
            E: Ingredient.of('#create:seats').toJson()
        },
        result: Ingredient.of('immersive_aircraft:biplane').toJson(),
        acceptMirrored: false
    }).id('kubejs:immersive_aircraft/biplane');

    // Airship
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'DDDDD',
            ' E E ',
            ' AFBC',
            ' AAA '
        ],
        key: {
            A: Ingredient.of('immersive_aircraft:hull').toJson(),
            B: Ingredient.of('immersive_aircraft:engine').toJson(),
            C: Ingredient.of('create:propeller').toJson(),
            D: Ingredient.of('immersive_aircraft:sail').toJson(),
            E: Ingredient.of('minecraft:string').toJson(),
            F: Ingredient.of('#create:seats').toJson()
        },
        result: Ingredient.of('immersive_aircraft:airship').toJson(),
        acceptMirrored: false
    }).id('kubejs:immersive_aircraft/airship');


})