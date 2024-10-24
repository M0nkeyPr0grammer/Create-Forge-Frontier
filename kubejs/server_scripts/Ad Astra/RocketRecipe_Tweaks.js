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

    // Tier 4 Rocket

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
            " MMM ",
            " MdM ",
            " MRM ",
            " MMM ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("enlightened_end:malachite_block"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_4_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("forge_frontier:tier_5_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("forge_frontier:tier_5_engine")
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
            " MMM ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("alexscaves:primal_magma"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra_rocketed:tier_5_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("forge_frontier:tier_6_tank"),
            T: Ingredient.of("tfmg:steel_fluid_tank"),
            E: Ingredient.of("forge_frontier:tier_6_engine"),
        },
        result: Ingredient.of("ad_astra_rocketed:tier_6_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_6_rocket")

    // Forge Rocket, aka Tier 7 Rocket
    
    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_7_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " CCC ",
            " CCC ",
            " CDC ",
            " CRC ",
            " CCC ",
            "FTcTf",
            "F E f"
        ],
        key: {
            F: Ingredient.of("forge_frontier:forge_rocket_fin_left"),
            f: Ingredient.of("forge_frontier:forge_rocket_fin_right"),
            E: Ingredient.of("forge_frontier:forge_rocket_engine"),
            T: Ingredient.of("forge_frontier:forge_rocket_tank"),
            D: Ingredient.of("forge_frontier:forge_rocket_door"),
            N: Ingredient.of("forge_frontier:forge_rocket_nose_cone"),
            C: Ingredient.of("forge_frontier:forge_rocket_casing"),
            R: Ingredient.of('ad_astra_rocketed:tier_6_rocket'),
            c: Ingredient.of("forge_frontier:forge_rocket_core")
        },
        result: Ingredient.of("ad_astra_rocketed:tier_7_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/forge_rocket")

    // New Rocket Parts
        // Engines
            // Tier 5
            event.shaped(
                Item.of("forge_frontier:tier_5_engine"),
                [
                    "MMM",
                    "BEB",
                    " I "
                ],
                {
                    M: "enlightened_end:malachite_block",
                    B: "enlightened_end:bismuth_ingot",
                    E: "ad_astra:calorite_engine",
                    I: "enlightened_end:irradium_bar"
                    
                }
            ).id( "forge_frontier:shaped/tier_5_engine" )

            // Tier 6
            event.shaped(
                Item.of("forge_frontier:tier_6_engine"),
                [
                    "MMM",
                    "eEe",
                    " D "
                ],
                {
                    M: "alexscaves:primal_magma",
                    e: "alexscaves:enigmatic_engine",
                    E: "forge_frontier:tier_5_engine",
                    D: "alexscaves:pure_darkness"
                }
            ).id( "forge_frontier:shaped/tier_6_engine" )            

        // Tanks
            // Tier 5
            event.shaped(
                Item.of("forge_frontier:tier_5_tank"),
                [
                    "MM ",
                    "MTB",
                    "MM "
                ],
                {
                    M: "enlightened_end:malachite_block",
                    B: "enlightened_end:bismuth_ingot",
                    T: "ad_astra:calorite_tank",
                    
                }
            ).id( "forge_frontier:shaped/tier_5_tank" )

            // Tier 6
            event.shaped(
                Item.of("forge_frontier:tier_6_tank"),
                [
                    "MM ",
                    "MTC",
                    "MM "
                ],
                {
                    M: "alexscaves:primal_magma",
                    T: "forge_frontier:tier_5_tank",
                    C: "alexscaves:ominous_catalyst"
                }
            ).id( "forge_frontier:shaped/tier_6_tank" )  


})