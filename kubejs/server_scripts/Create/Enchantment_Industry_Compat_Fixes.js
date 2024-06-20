ServerEvents.recipes(event => {

// Cognitium to Liquid Experienc
event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_enchantment_industry:experience_rotor'
                },
                {
                    fluid: 'experienceobelisk:cognitium',
                    amount: 200
                }
            ],
            results: [
                {
                    fluid: 'create_enchantment_industry:experience',
                    amount: 10
                },
                {
                    item: 'create_enchantment_industry:experience_rotor'
                }
            ],
        }).id('forge_frontier:mixing/cognitium_experience_liquid');

    // New Hyper Experience Recipe
    event.remove({ id: 'create_enchantment_industry:mixing/hyper_experience'})
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'minecraft:glow_ink_sac'
            },
            {
                fluid: 'forge_frontier:molten_lapis',
                amount: 100
            },
            {
                fluid: 'create_enchantment_industry:experience',
                amount: 100
            }
            
        ],
        results: [
            {
                fluid: 'create_enchantment_industry:hyper_experience',
                amount: 10
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/hyper_experience');

    })