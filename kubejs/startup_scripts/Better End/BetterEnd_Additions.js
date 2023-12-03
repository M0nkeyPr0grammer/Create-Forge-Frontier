StartupEvents.registry('fluid', event => {
    event.create('kubejs:molten_thallasium')
        .color(0x87dad2)
        .displayName('Molten Thallasium')
        .bucketColor(0x87dad2)
        .thickTexture(0x87dad2)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

    event.create('kubejs:molten_amber')
        .color(0xe28704)
        .displayName('Molten Amber')
        .bucketColor(0xe28704)
        .thickTexture(0xe28704)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here

})

// New Items
StartupEvents.registry('item', event => {
    event.create('crushed_thallasium_ore')
        .displayName('Crushed Thallasium Ore')
        .texture('kubejs:item/crushed_thallasium_ore');

    event.create('crushed_amber_ore')
        .displayName('Crushed Amber Ore')
        .texture('kubejs:item/crushed_amber_ore');
});