StartupEvents.registry('fluid',event => {
    event.create('kubejs:liquid_dragons_breath')
        .color(0xc34781)
        .displayName('Liquid Dragons Breath')
        .bucketColor(0xc34781)
        .thickTexture(0xc34781)
        .viscosity(6000) // Similar to lava
        .temperature(1300) // Similar to lava
        .bucketItem; // Specify the bucket item here
});