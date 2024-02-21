ServerEvents.recipes(event => {

    event.remove('endertanks:tank')
    event.remove('enderchests:ender_chest')
    event.remove('enderchests:ender_pouch')

    // Ender Tank
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: Ingredient.of('create_dd:blaze_gold_block').toJson(),
            B: Ingredient.of('#minecraft:wool').toJson(),
            C: Ingredient.of('allthecompressed:obsidian_2x').toJson(),
            D: Ingredient.of('minecraft:bucket').toJson(),
            E: Ingredient.of('create_dd:mithril_ingot').toJson()
        },
        result: Ingredient.of('endertanks:ender_tank').toJson(),
        acceptMirrored: false
    }).id('kubejs:ender/tanks');

    // Ender Chest
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            'CDC',
            'ACA'
        ],
        key: {
            A: Ingredient.of('create_dd:blaze_gold_block').toJson(),
            B: Ingredient.of('#minecraft:wool').toJson(),
            C: Ingredient.of('allthecompressed:obsidian_2x').toJson(),
            D: Ingredient.of('enderchests:ender_bag').toJson()
        },
        result: Ingredient.of('enderchests:ender_chest').toJson(),
        acceptMirrored: false
    }).id('kubejs:ender/chests');

    // Ender Pouch
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            ' A ',
            'ABA',
            ' A '
        ],
        key: {
            A: Ingredient.of('create_dd:leather_block').toJson(),
            B: Ingredient.of('minecraft:ender_eye').toJson()
        },
        result: Ingredient.of('enderchests:ender_pouch').toJson(),
        acceptMirrored: false
    }).id('kubejs:ender/pouch');

})