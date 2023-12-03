// Ad Astral Create and Create Foundry Compat Additions

// New Fluids
StartupEvents.registry('fluid', event => {
    event.create('kubejs:molten_calorite')
        .color(0xc41a39)
        .displayName('Calorite')
        .bucketColor(0xc41a39)
        .thickTexture(0xc41a39)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

    event.create('kubejs:molten_ostrum')
        .color(0x73515E)
        .displayName('Ostrum')
        .bucketColor(0x73515E)
        .thickTexture(0x73515E)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

    event.create('kubejs:molten_desh')
        .color(0xb05a3c)
        .displayName('Desh')
        .bucketColor(0xb05a3c)
        .thickTexture(0xb05a3c)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here
        
    event.create('kubejs:molten_steel')
        .color(0x757276)
        .displayName('Molten Steel')
        .bucketColor(0x757276)
        .thickTexture(0x757276)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here
});


// New Items
StartupEvents.registry('item', event => {
    event.create('crushed_desh_ore')
        .displayName('Crushed Desh Ore')
        .texture('kubejs:item/crushed_desh_ore');

    event.create('crushed_ostrum_ore')
        .displayName('Crushed Ostrum Ore')
        .texture('kubejs:item/crushed_ostrum_ore');

    event.create('crushed_calorite_ore')
        .displayName('Crushed Calorite Ore')
        .texture('kubejs:item/crushed_calorite_ore');
});
