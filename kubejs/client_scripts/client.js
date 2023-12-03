
let KJ = (id, x) => MOD("kubejs", id, x)
// //reference the classes used for the recipe
// let MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
// let ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

// //add the recipes manually
// MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
// MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))



JEIEvents.hideItems(event =>{
    event.hide(Item.of('kubejs:incomplete_basic_mechanism'))
    event.hide(Item.of('kubejs:incomplete_sealed_mechanism'))
    event.hide(Item.of('kubejs:incomplete_train_mechanism'))

    event.hide(Item.of('dimension_crystals:dimension_overworld'))
    event.hide(Item.of('dimension_crystals:dimension_nether'))


    event.hide(Item.of('waterstrainer:string_mesh'))
    event.hide(Item.of('waterstrainer:iron_mesh'))
    event.hide(Item.of('waterstrainer:obsidian_mesh'))

    event.hide(Item.of('waterstrainer:strainer_survivalist_solid'))
    event.hide(Item.of('waterstrainer:strainer_survivalist_reinforced'))

    event.hide(Item.of('waterstrainer:strainer_fisherman_solid'))
    event.hide(Item.of('waterstrainer:strainer_fisherman_reinforced'))


    event.hide('#pneumaticcraft:basic_drones')
    event.hide(Item.of('pneumaticcraft:drone'))

    event.hide('#pneumaticcraft:plastic_bricks')
    event.hide('#pneumaticcraft:smooth_plastic_bricks')

   // event.hide('farmersdelight:tree_bark')

})


JEIEvents.addItems(event =>{
    //Re-add chromatic compound
    event.add(Item.of('create:chromatic_compound'))
    event.add(Item.of('create:shadow_steel'))
    event.add(Item.of('create:shadow_steel_casing'))
    event.add(Item.of('create:refined_radiance'))
    event.add(Item.of('create:refined_radiance_casing'))
})

ItemEvents.tooltip(tooltip => {
    let not_consumed = (id, stage) => tooltip.add(id, [`§6Not consumed in the`, `§6Assembly Process`])
    
    not_consumed('kubejs:stone_saw')
	not_consumed('kubejs:iron_saw')
	not_consumed('kubejs:diamond_saw')
	not_consumed('kubejs:screwdriver')
	not_consumed('kubejs:pliers')
	not_consumed('kubejs:file')


    tooltip.add('kubejs:crystal_growth_solution',[`§2Use on smaller crystals`, `§2to make them grow`])
    tooltip.add('kubejs:crystal_growth_solution_bucket',[`§2Use on smaller crystals to make them grow`])


    tooltip.add('dimension_crystals:dimension_end',[`§7Allows for infinite teleportation to End dimension`])

    tooltip.add('kubejs:profession_permit',[`§6Allows to perform work in a profession`])


    //Chromatic stuff
    //tooltip.add(Item.of('create:chromatic_compound'),[``])
    tooltip.add(Item.of('create:shadow_steel'),[`A Chromatic material §6forged in the void§r.`])
    tooltip.add(Item.of('create:shadow_steel_casing'),[``])
    tooltip.add(Item.of('create:refined_radiance'),[`A Chromatic material forged from §6absorbed light§r.`])
    tooltip.add(Item.of('create:refined_radiance_casing'),[``])

    tooltip.addAdvanced('create:chromatic_compound', (item, advanced, text) => {
        let progress = item.nbt?.CollectingLight;
        let nextLine = 1;
        if(progress > 0){
            text.add(1, [Text.gray('Progress: '),Text.white(`${progress}0%`)])
            nextLine=2;
        }
        //text.add(nextLine, [Text.white(``)])
      })

})


JEIEvents.information(event =>{
    event.addItem('minecraft:andesite', ['Andesite is one of the most important items needed for processing'])
    event.addItem('minecraft:diorite', ['Diorite can be produced indefinitely using a custom generator'])
    event.addItem('minecraft:granite', ['Granite can be produced indefinitely using a custom generator'])
    event.addItem('minecraft:tuff', ['Tuff can be produced indefinitely using a custom generator'])


    event.addItem('dimension_crystals:dimension_end', ['Right click while holding to teleport to The End'])
})