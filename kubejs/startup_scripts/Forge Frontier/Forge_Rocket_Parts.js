StartupEvents.registry('item', event => {
    // Define an array of rocket items with their properties
    const rocketItems = [
        { id: "forge_frontier:forge_rocket_core", name: "Forge Rocket Core", texture: 'forge_frontier:item/forge_rocket/forge_rocket_core' },
        { id: "forge_frontier:forge_rocket_door", name: "Forge Rocket Door", texture: 'forge_frontier:item/forge_rocket/forge_rocket_door' },
        { id: "forge_frontier:forge_rocket_engine", name: "Forge Rocket Engine", texture: 'forge_frontier:item/forge_rocket/forge_rocket_engine' },
        { id: "forge_frontier:forge_rocket_fin_left", name: "Forge Rocket Fin Left", texture: 'forge_frontier:item/forge_rocket/forge_rocket_fin_left' },
        { id: "forge_frontier:forge_rocket_fin_right", name: "Forge Rocket Fin Right", texture: 'forge_frontier:item/forge_rocket/forge_rocket_fin_right' },
        { id: "forge_frontier:forge_rocket_nose_cone", name: "Forge Rocket Nose Cone", texture: 'forge_frontier:item/forge_rocket/forge_rocket_nose_cone' },
        { id: "forge_frontier:forge_alloy", name: "Forge Alloy", texture: 'forge_frontier:item/forge_rocket/forge_alloy'}
    ];

    // Create each rocket item
    rocketItems.forEach(item => {
        event.create(item.id)
            .displayName(item.name)
            .texture(item.texture);
    });
});


StartupEvents.registry('block', event => {

    event.create('forge_frontier:forge_rocket_casing')
    .displayName('Forge Rocket Casing')
    .soundType('metal') 
    .mapColor('Stone') 
    .hardness(2.0)
    .model('forge_frontier:block/forge_rocket/forge_rocket_casing')
    .requiresTool(true)
    .renderType('solid')
    .tagBlock("mineable/pickaxe")
    .tagBlock("mineable/axe")
    .fullBlock(true);
})