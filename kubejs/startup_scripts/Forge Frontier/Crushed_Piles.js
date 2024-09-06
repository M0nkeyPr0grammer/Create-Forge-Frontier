StartupEvents.registry('block', event => {

// List of materials
const materials = [
    'Aluminum',
    'Bismuth',
    'Calorite',
    'Desh',
    'Irradium',
    'Lead',
    'Malachite',
    'Ostrum',
    'Tin',
    'Uranium'
];

// Crushed Piles
function createCrushedPiles(event, material) {
    const id = `crushed_${material.toLowerCase()}_pile`;
    event.create(`forge_frontier:${id}`)
        .displayName(`Crushed ${material} Pile`)
        .soundType('metal')
        .mapColor('Stone')
        .hardness(2.0)
        .model(`forge_frontier:block/crushed_piles/${id}`)
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true);
}

    materials.forEach(material => {
        createCrushedPiles(event, material);
    });

});