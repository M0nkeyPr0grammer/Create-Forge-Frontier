ServerEvents.recipes(event => {

// Create Worldshaper
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        '   AAAAAA',
        ' AABCDDDA',
        'AAEFGAAAA',
        ' AABA    ',
        '  AA     ',
        '  A      '
    ],
    key: {
        A: Ingredient.of('minecraft:dragon_breath').toJson(),
        B: Ingredient.of('create:creative_blaze_cake').toJson(),
        C: Ingredient.of('advancednetherite:netherite_diamond_shovel').toJson(),
        D: Ingredient.of('minecraft:nether_star').toJson(),
        E: Ingredient.of('createaddition:creative_energy').toJson(),
        F: Ingredient.of('create:creative_crate').toJson(),
        G: Ingredient.of('deeperdarker:warden_shovel').toJson()
    },
    result: Ingredient.of('create:handheld_worldshaper').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_worldshaper');

// Create Creative Crate
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'AAAAAAA',
        'AABCBAA',
        'ADEFEDA',
        'ACGHGCA',
        'ADEIEDA',
        'AABCBAA',
        'AAAAAAA'
    ],
    key: {
        A: Ingredient.of('minecraft:dragon_breath').toJson(),
        B: Ingredient.of('reinfshulker:netherite_shulker_box').toJson(),
        C: Ingredient.of('minecraft:nether_star').toJson(),
        D: Ingredient.of('reinfchest:netherite_chest').toJson(),
        E: Ingredient.of('reinfbarrel:netherite_barrel').toJson(),
        F: Ingredient.of('create:creative_fluid_tank').toJson(),
        G: Ingredient.of('create:creative_blaze_cake').toJson(),
        H: Ingredient.of('createaddition:creative_energy').toJson(),
        I: Ingredient.of('create:creative_motor').toJson()
    },
    result: Ingredient.of('create:creative_crate').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_crate');

// Create Creative Generator
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'AAAAAA',
        'ABCCBA',
        'ADDDDA',
        'AEFFEA',
        'AGGGGA',
        'AAAAAA'
    ],
    key: {
        A: Ingredient.of('minecraft:dragon_breath').toJson(),
        B: Ingredient.of('createaddition:tesla_coil').toJson(),
        C: Ingredient.of('minecraft:nether_star').toJson(),
        D: Ingredient.of('createaddition:alternator').toJson(),
        E: Ingredient.of('deeperdarker:heart_of_the_deep').toJson(),
        F: Ingredient.of('create:creative_fluid_tank').toJson(),
        G: Ingredient.of('createaddition:modular_accumulator').toJson()
    },
    result: Ingredient.of('createaddition:creative_energy').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_generator');

// Create Creative Motor
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'AAAAAA',
        'BCCCCB',
        'EFGGFE',
        'BDDDDB',
        'AAAAAA'
    ],
    key: {
        A: Ingredient.of('minecraft:dragon_breath').toJson(),
        B: Ingredient.of('minecraft:nether_star').toJson(),
        C: Ingredient.of('createaddition:electric_motor').toJson(),
        D: Ingredient.of('createutilities:void_motor').toJson(),
        E: Ingredient.of('advancednetherite:netherite_diamond_block').toJson(),
        F: Ingredient.of('deeperdarker:heart_of_the_deep').toJson(),
        G: Ingredient.of('create:creative_fluid_tank').toJson()
    },
    result: Ingredient.of('create:creative_motor').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_motor');

// Create Creative Tank
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'AAAAA',
        'ABCBA',
        'ADEDA',
        'ABDBA',
        'AAAAA'
    ],
    key: {
        A: Ingredient.of('minecraft:dragon_breath').toJson(),
        B: Ingredient.of('createutilities:void_tank').toJson(),
        C: Ingredient.of('create:hose_pulley').toJson(),
        D: Ingredient.of('create:creative_blaze_cake').toJson(),
        E: Ingredient.of('deeperdarker:heart_of_the_deep').toJson()
    },
    result: Ingredient.of('create:creative_fluid_tank').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_fluid_tank');

// Create Creative Blaze Cake
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        ' ABA ',
        'ACDCA',
        'BDEDB',
        'ACFCA',
        ' ABA '
    ],
    key: {
        A: Ingredient.of('advancednetherite:netherite_diamond_ingot').toJson(),
        B: Ingredient.of('create:refined_radiance').toJson(),
        C: Ingredient.of('minecraft:dragon_head').toJson(),
        D: Ingredient.of('minecraft:nether_star').toJson(),
        E: Ingredient.of('create:blaze_cake').toJson(),
        F: Ingredient.of('deeperdarker:warden_carapace').toJson(),
    },
    result: Ingredient.of('create:creative_blaze_cake').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_blaze_cake');

// Extended Drawers Creative Drawer Upgrade
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'AAA',
        'BCB',
        'AAA'
    ],
    key: {
        A: Ingredient.of('advancednetherite:netherite_diamond_ingot').toJson(),
        B: Ingredient.of('extended_drawers:t4_upgrade').toJson(),
        C: Ingredient.of('create:creative_blaze_cake').toJson()
    },
    result: Ingredient.of('extended_drawers:creative_upgrade').toJson(),
    acceptMirrored: false
}).id('kubejs:create/creative_drawer_upgrade');

})