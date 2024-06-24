ServerEvents.recipes(event => {

    event.remove({ id: 'create_sa:copper_propeler_recipe'})
    event.remove({ id: 'create_sa:andesite_jetpack_recipe'})
    event.remove({ id: 'create_sa:brass_jetpack_recipe'})

    // Bronze Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('create_dd:bronze_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:hydraulic_engine').toJson(),
			E: Ingredient.of('design_decor:copper_gas_tank').toJson(),
            F: Ingredient.of('create:copper_backtank').toJson()
		},
		result: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/bronze_jetpack');

    // Vanadium Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('vintageimprovements:vanadium_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:heat_engine').toJson(),
			E: Ingredient.of('design_decor:gas_tank').toJson(),
            F: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson()
		},
		result: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/vanadium_jetpack');

    // Chorium Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('createcasing:chorium_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:steam_engine').toJson(),
			E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
            F: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson()
		},
		result: Ingredient.of('create_sa:brass_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/chorium_jetpack');

})