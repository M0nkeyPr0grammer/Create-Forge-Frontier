StartupEvents.registry('item', event => {

    // List of materials
    const materials = [
        'Bismuth',
        'Calorite',
        'Desh',
        'Irradium',
        'Malachite',
        'Ostrum',
        'Diamond',
        'Emerald',
        'Redstone'
    ];

    // Crushed Ores
    function createCrushedOres(event, material) {
        const id = `crushed_${material.toLowerCase()}`;
        event.create(`forge_frontier:${id}`)
            .displayName(`Crushed ${material}`)
            .texture(`forge_frontier:item/crushed_ore/${id}`);
    }

    materials.forEach(material => {
        createCrushedOres(event, material);
    });

});