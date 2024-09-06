StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        { name: 'lead', color: 0x5c7376 },
        { name: 'aluminum', color: 0xffffff },
        { name: 'copper', color: 0xc75d34 },
        { name: 'iron', color: 0xe6c6af },
        { name: 'gold', color: 0xf4c230 },
        { name: 'carbon', color: 0x2d2d2d },
        { name: 'diamond', color: 0x49ead6 },
        { name: 'zinc', color: 0xcfe9d4 },
        { name: 'brass', color: 0x8a6d3c },
        { name: 'emerald', color: 0x1dba59 },
        { name: 'redstone', color: 0xac2727 },
        { name: 'lapis', color: 0x1c52a6 },
        { name: 'ancient_debris', color: 0x412e29 },
        { name: 'netherite', color: 0x4b4042 },
        { name: 'bone_marrow', color: 0xc7c3a5 },
        { name: 'netherite_iron', color: 0xa6a6a6 },
        { name: 'netherite_gold', color: 0xf9ee3e },
        { name: 'netherite_emerald', color: 0x007a18 },
        { name: 'netherite_diamond', color: 0x327b81 },
        { name: 'bronze', color: 0xc37b5c },
        { name: 'tin', color: 0xe7e8ed },
        { name: 'quartz', color: 0x989186 },
        { name: 'ice_shard', color: 0x8890b8 },
        { name: 'uranium', color: 0x00fc00 },
        { name: 'bismuth', color: 0x555341 },
        { name: 'irradium', color: 0x21532b },
        { name: 'malachite', color: 0x3c776d },
        { name: 'steel', color: 0x757276 },
        { name: 'desh', color: 0xb05a3c },
        { name: 'calorite', color: 0xb63044 },
        { name: 'ostrum', color: 0x76525f }
    ];

    // Function to create molten fluids
    function createMoltenFluid(event, name, color) {
        event.create(`forge_frontier:molten_${name}`)
            .color(color)
            .displayName(`Molten ${capitalize(name)}`)
            .bucketColor(color)
            .thickTexture(color)
            .viscosity(6000)
            .temperature(1300)
            .bucketItem;
    }

    // Helper function to capitalize names
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Create all molten fluids
    moltenFluids.forEach(fluid => createMoltenFluid(event, fluid.name, fluid.color));

});
