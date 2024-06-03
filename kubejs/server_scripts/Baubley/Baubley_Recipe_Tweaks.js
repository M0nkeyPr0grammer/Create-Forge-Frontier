ServerEvents.recipes(event => {

    event.remove({ id: 'bhc:blade_of_vitality'})
    event.remove({ id: 'bhc:heart_amulet'})
    event.remove({ id: 'bhc:canister'})

// Creates New Canister Recipe
event.shaped(
    Item.of('bhc:canister'),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: '#forge:plates/andesite_alloy',
        B: 'minecraft:bone'
    }
)

// Creates New Blade of Vitality Recipe
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'ABC',
        'DEF',
        ' G '
    ],
    key: {
        A: Ingredient.of('bhc:red_heart_canister').toJson(),
        B: Ingredient.of('bhc:soul_heart_crystal').toJson(),
        C: Ingredient.of('bhc:yellow_heart_canister').toJson(),
        D: Ingredient.of('bhc:green_heart_canister').toJson(),
        E: Ingredient.of('bhc:heart_amulet').toJson(),
        F: Ingredient.of('bhc:blue_heart_canister').toJson(),
        G: Ingredient.of('minecraft:stick').toJson()
    },
    result: Ingredient.of('bhc:blade_of_vitality').toJson(),
    acceptMirrored: false
}).id('forge_frontier:create/blade_of_vitality');

// Creates New Heart Amulet Recipe
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'A A',
        'BCB',
        ' B '
    ],
    key: {
        A: Ingredient.of('minecraft:string').toJson(),
        B: Ingredient.of('#forge:glass').toJson(),
        C: Ingredient.of('#forge:heart').toJson()
    },
    result: Ingredient.of('bhc:heart_amulet').toJson(),
    acceptMirrored: false
}).id('forge_frontier:create/heart_amulet');

})