// Ad Astra Rocket Recipe Tweaks
ServerEvents.recipes(event => {

    // Tier 1 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " SSS ",
            " SSS ",
            " SDS ",
            " SBS ",
            " SPS ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            S: Ingredient.of("#c:steel_blocks"),
            D: Ingredient.of("ad_astra:steel_door"),
            B: Ingredient.of("create:display_board"),
            P: Ingredient.of("create:precision_mechanism"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:steel_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("ad_astra:steel_engine")
        },
        result: Ingredient.of("ad_astra:tier_1_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_1_rocket")

    // Tier 2 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " DDD ",
            " DDD ",
            " DdD ",
            " DRD ",
            " DDD ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            D: Ingredient.of("ad_astra:desh_block"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_1_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:desh_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("ad_astra:desh_engine")
        },
        result: Ingredient.of("ad_astra:tier_2_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_2_rocket")

    // Tier 3 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " OOO ",
            " OOO ",
            " OdO ",
            " ORO ",
            " OOO ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            O: Ingredient.of("ad_astra:ostrum_block"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_2_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:ostrum_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("ad_astra:ostrum_engine")
        },
        result: Ingredient.of("ad_astra:tier_3_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_3_rocket")

    // Tierr 4 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " CCC ",
            " CCC ",
            " CdC ",
            " CRC ",
            " CCC ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            C: Ingredient.of("ad_astra:calorite_block"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_3_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:calorite_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("ad_astra:calorite_engine")
        },
        result: Ingredient.of("ad_astra:tier_4_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_4_rocket")
    
    // Tier 5 Rocket

    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_5_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " MMM ",
            " MbM ",
            " MdM ",
            " MRM ",
            " MbM ",
            "FTTTF",
            "F B F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("enlightened_end:malachite_block"),
            b: Ingredient.of("enlightened_end:bismuth_block"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_4_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            B: Ingredient.of("enlightened_end:nuclear_bomb")
        },
        result: Ingredient.of("ad_astra_rocketed:tier_5_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_5_rocket")
    
    // Tier 6 Rocket

    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_6_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " MMM ",
            " MMM ",
            " MdM ",
            " MRM ",
            " McM ",
            "FTETF",
            "F D F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("alexscaves:primal_magma"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra_rocketed:tier_5_rocket"),
            c: Ingredient.of("alexscaves:ominous_catalyst"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("alexscaves:enigmatic_engine"),
            D: Ingredient.of("alexscaves:pure_darkness")
        },
        result: Ingredient.of("ad_astra_rocketed:tier_6_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_6_rocket")

    // Tier 7 Rocket
    
    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_7_rocket_from_nasa_workbench"})
    // Will Make Rocket Later

})