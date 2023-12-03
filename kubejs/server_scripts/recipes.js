//priority: 0

var seed
var log = []

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
/**
* Applied Energetics 2
*/
let AE2 = (id, x) => MOD("appliedenergistics2", id, x)
/**
* Thermal Expansion
*/
let TE = (id, x) => MOD("thermal", id, x)
/**
* Architects palette
*/
let AP = (id, x) => MOD("architects_palette", id, x)

let LV = (id, x) => MOD("libvulpes", id, x)
/**
* Create
*/
let CR = (id, x) => MOD("create", id, x)
/**
* Create Deco
*/
let CRD = (id, x) => MOD("createdeco", id, x)
/**
* Create Addition
*/
let CRA = (id, x) => MOD("createaddition", id, x)
/**
* Create Enchantment Industry
*/
let CEI = (id, x) => MOD("create_enchantment_industry", id, x)
/**
* Create Sifter
*/
let CS = (id, x) => MOD("createsifter", id, x)
/**
* Create Things and misc
*/

let CRTM = (id, x) => MOD("create_things_and_misc", id, x)
/**
* compressedcreativity
*/

let CPC = (id, x) => MOD("compressedcreativity", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
/**
* Minecraft
*/
let MC = (id, x) => MOD("minecraft", id, x)
/**
* KubeJS
*/
let KJ = (id, x) => MOD("kubejs", id, x)
/**
* chipped
*/
let CH = (id, x) => MOD("chipped", id, x)
/**
* Salt
*/
let S = (id, x) => MOD("salt", id, x)
/**
* Immersive Weathering
*/
let IW = (id, x) => MOD("immersive_weathering", id, x)
/**
* Water striner
*/
let WS = (id, x) => MOD("waterstrainer", id, x)
/**
* Dimension cake
*/
let DC = (id, x) => MOD("dimension_crystals", id, x)
/**
* createchromaticreturn
*/
let CCR = (id, x) => MOD("createchromaticreturn", id, x)
/**
* delightful
*/
let DE = (id, x) => MOD("delightful", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let PR_C = (id, x) => MOD("projectred-core", id, x)
let PR_T = (id, x) => MOD("projectred-transmission", id, x)
let PR_I = (id, x) => MOD("projectred-illumination", id, x)
let RQ = (id, x) => MOD("xreliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
/**
* pneumaticcraft
*/
let PC = (id, x) => MOD("pneumaticcraft", id, x)
//

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), AP('twisted'), EG('poise')]

let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

let sandwichCraft = (event, output, ham, bread) => {
	event.shaped(output, [
		'AAA',
		'BBB',
		'AAA'
	], {
		A: ham,
		B: bread
	})
}

let fillCraft = (event, output, item) => {
	event.shaped(output, [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: item,
	})
}


ServerEvents.recipes((event) => {
    console.log("Unifying")
    unify(event); 
  
    console.log("Removing Recipes");
    removeRecipes(event);


    console.log("Registering Recipes");
    tweaks(event);
    tools(event);
    mechanism(event);
    breakingBad(event);
    saltyStuff(event);
    createStuff(event);
    basicMechanismRecipes(event);
    trainMechanismRecipes(event);
    waterStrainerStuff(event);
    sifting(event);
    farmersdelight(event);
    rubberMatters(event);
    andesiteAlloy(event);
    woodProcessing(event);
    oreProcessing(event);
    brassAge(event);
    slagProcessing(event);
    seeds(event);
    sandProcessing(event);
    miscRecipies(event);
    tuffProcessing(event);
    dimensionCrystals(event);
    moltenGlass(event);
    trading(event);
    explosionCrafting(event);
    pneumaticcraft(event);
    console.log("Recipes Updated");

});

function removeRecipes(event){
    //remove the base recipies
    event.remove({ mod: "createsifter" });
    event.remove({ mod: "waterstrainer" });

    // Remove all coins recipes by forge/coin tag
    event.remove({ input: '#forge:coin' })
    event.remove({ input: '#forge:coins' })
    event.remove({ output: '#forge:coin' })
    event.remove({ output: '#forge:coins' })

    //Remove all create deco coin recipes
    event.remove({input: 'create:zinc_nugget', output: 'createdeco:zinc_coin' })
    event.remove({input: '#forge:nuggets/copper', output: 'createdeco:copper_coin' })
    event.remove({input: 'minecraft:gold_nugget', output: 'createdeco:gold_coin' })
    event.remove({input: 'minecraft:iron_nugget', output: 'createdeco:iron_coin' })
    event.remove({input: 'createdeco:cast_iron_nugget', output: 'createdeco:cast_iron_coin' })
    event.remove({input: 'create:brass_nugget', output: 'createdeco:brass_coin' })
    event.remove({input: '#forge:nuggets/netherite', output: 'createdeco:netherite_coin' })



    event.remove({input: 'minecraft:coal', output: 'minecraft:black_dye' })
    event.remove({input: 'minecraft:charcoal', output: 'minecraft:black_dye' })

    event.remove({id: 'thermal:gunpowder_4'})
    

    //Sand washing
    event.remove({input: 'minecraft:red_sand', output: 'minecraft:gold_nugget' })

    //Sould Sand washing
    event.remove({input: 'minecraft:soul_sand', output: 'minecraft:quartz' })

    //Create stuff
    event.remove({ input: '#forge:coins' })
    event.remove({ input: '#forge:ores/redstone' })
    event.remove({ input: '#create:crushed_raw_materials' })
    event.remove({ input: '#forge:ores/tin' })
    event.remove({ input: '#forge:ores/silver' })
    event.remove({ output: '#forge:plates/tin' })
    event.remove({ output: '#forge:plates/silver' })
    event.remove({ output: '#forge:gears/tin' })
    event.remove({ output: '#forge:gears/silver' })
    event.remove({ output: TE('steel_plate') })
    event.remove({ output: TE('steel_ingot') })
    event.remove({ output: TE('steel_block') })
    event.remove({ type: TE('press') })
    
    event.remove({output: 'create:cogwheel' })
    event.remove({output: 'create:electron_tube' })
    event.remove({output: 'create:large_cogwheel' })
    event.remove({output: 'create:mechanical_saw' })
    event.remove({output: 'create:mechanical_drill' })
    event.remove({output: 'create:mechanical_press' })
    event.remove({output: 'create:mechanical_mixer' })
    event.remove({output: 'create:deployer' })
    event.remove({output: 'create:encased_fan' })
    event.remove({output: 'create:millstone' })

    event.remove({output: 'create:track_station' })
    event.remove({output: 'create:track_signal' })
    event.remove({output: 'create:controls' })
    event.remove({output: 'create:track_observer' })


    event.remove({output: 'create:spout' })
    event.remove({output: 'create:fluid_valve' })
    event.remove({output: 'create:mechanical_pump' })
    event.remove({output: 'create:steam_engine' })

    //Water power
    event.remove({output: 'create:water_wheel' })
    event.remove({output: 'create:large_water_wheel' })

    //Thermal stuff
    event.remove({output: 'thermal:saw_blade' })
    event.remove({output: 'thermal:drill_head' })
    event.remove({output: 'thermal:device_tree_extractor' })

    event.remove({output: 'create:precision_mechanism'})
    event.remove({output: 'create:mechanical_crafter'})
    event.remove({output: 'create:fluid_tank'})

    event.remove({output: 'create_sa:heat_engine'})
    event.remove({output: 'create_sa:hydraulic_engine'})
    event.remove({output: 'create_sa:steam_engine'})


    event.remove({id: 'create_things_and_misc:slimefluidcraft'}) 

    //Thermal Crystalizer (replaced with custom spout + soultion)
    event.remove({type: 'thermal:crystallizer'}) 
    event.remove({output: 'thermal:machine_crystallizer'}) 

    //Thermal Pulverizer (replaced with crushing/milling)
    event.remove({type: 'thermal:pulverizer'}) 
    event.remove({output: 'thermal:machine_pulverizer'}) 

    event.remove({output: 'create:powdered_obsidian'})
    event.remove({ input: 'minecraft:obsidian', output:'minecraft:crying_obsidian' })
    

    //farming stuff
    event.remove({output: 'quark:carrot_crate'}) 
    event.remove({output: 'quark:golden_carrot_crate'}) 
    event.remove({output: 'quark:potato_crate'}) 
    event.remove({output: 'quark:onion_crate'}) 
    event.remove({output: 'quark:apple_crate'}) 
    event.remove({output: 'quark:golden_apple_crate'}) 


    native_metals.forEach(e => {
      event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
      event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
      event.remove({ type: TC("melting"), input: F("#dusts/" + e) })
      event.remove({ id: TC('smeltery/melting/metal/' + e +'/dust')})
    })


    //Repressurized
    event.remove({input: PC('ingot_iron_compressed'), output: CR('fluid_tank') })
    event.remove({input: PC('ingot_iron_compressed'), output: PC('small_tank') })

    
    event.remove({output: '#pneumaticcraft:basic_drones'})
    event.remove({output: 'pneumaticcraft:drone'})
    event.remove({output: 'pneumaticcraft:wheat_flour'})
    event.remove({output: '#pneumaticcraft:plastic_bricks'})
    event.remove({output: '#pneumaticcraft:smooth_plastic_bricks'})

    event.remove({output: 'pneumaticcraft:capacitor'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/capacitor'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/transistor'})


    event.remove({output: 'pneumaticcraft:empty_pcb'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})


    event.remove({output: 'pneumaticcraft:uv_light_box'})
    event.remove({output: 'pneumaticcraft:etching_tank'})


    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})

    event.remove({input: F('#dough'), output: 'pneumaticcraft:sourdough'})
    event.remove({id: 'pneumaticcraft:sourdough_bread'})
    event.remove({id: 'brewinandchewin:fermenting/pale_jane'})



    event.remove({id: 'pneumaticcraft:reinforced_stone_from_slab'})

    event.remove({output: 'pneumaticcraft:yeast_culture'})
    event.remove({output: 'pneumaticcraft:sourdough'})

    event.remove({input: `pneumaticcraft:minigun`})
    event.remove({output: `pneumaticcraft:minigun`})
    
    event.remove({input: `pneumaticcraft:gun_ammo`})
    event.remove({output: `pneumaticcraft:gun_ammo`})


    event.remove({output: `pneumaticcraft:refinery`})
    event.remove({output: `pneumaticcraft:refinery_output`})

    event.remove({output: 'pneumaticcraft:memory_essence'})


    event.remove({output: 'pneumaticcraft:pneumatic_helmet'})
    event.remove({output: 'pneumaticcraft:pneumatic_chestplate'})
    event.remove({output: 'pneumaticcraft:pneumatic_leggings'})
    event.remove({output: 'pneumaticcraft:pneumatic_boots'})


    event.remove({output: 'compressedcreativity:rotational_compressor'})
    event.remove({output: 'compressedcreativity:compressed_air_engine'})
    event.remove({output: 'compressedcreativity:air_blower'})
    event.remove({output: 'compressedcreativity:industrial_air_blower'})


    let tanks = ['small','medium','large','huge']
    tanks.forEach(e => {
      event.remove({input: `pneumaticcraft:${e}_tank`})
      event.remove({output: `pneumaticcraft:${e}_tank`})
    })

    event.remove({output: 'farmersdelight:tree_bark' })
    event.remove({output: FD('tree_bark') })

    //No recipes anyway & used pneumaticcraft refining
    event.remove({output: 'thermal:refined_fuel'})
    event.remove({output: 'thermal:heavy_oil'})
    event.remove({output: 'thermal:light_oil'})
    event.remove({output: 'thermal:crude_oil'})
    event.remove({output: 'thermal:tree_oil'})
    event.remove({output: 'thermal:creosote'})

    event.remove({input: 'thermal:refined_fuel'})
    event.remove({input: 'thermal:heavy_oil'})
    event.remove({input: 'thermal:light_oil'})
    event.remove({input: 'thermal:crude_oil'})
    event.remove({input: 'thermal:tree_oil'})
    event.remove({input: 'thermal:creosote'})
    event.remove({type: 'create:mixing', input:DE('acorn'), output:MC('milk_bucket')}) 



}

function unify(event) {

	event.recipes.createMilling(TE("nickel_dust"), TE("nickel_ingot"))
	event.recipes.createMilling(TE("lead_dust"), TE("lead_ingot"))
	event.recipes.createMilling(TE("copper_dust"), MC("copper_ingot"))
	event.recipes.createMilling(KJ("zinc_dust"), CR("zinc_ingot"))
	
	event.replaceOutput({ id: CR('compat/ae2/milling/gold') }, AE2('gold_dust'), TE('gold_dust'))
	event.replaceOutput({ id: CR('compat/ae2/milling/iron') }, AE2('iron_dust'), TE('iron_dust'))
	event.replaceInput({ id: TE('augments/rf_coil_storage_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_xfer_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('tools/detonator') }, F('#ingots/silver'), TE('lead_ingot'))

	event.replaceInput({}, '#forge:plates/iron', CR('iron_sheet'))
	event.replaceInput({}, '#forge:plates/gold', CR('golden_sheet'))
	event.replaceInput({}, '#forge:dusts/gold', TE('gold_dust'))
	event.replaceInput({}, '#forge:dusts/iron', TE('iron_dust'))
	event.replaceInput({}, '#forge:dusts/copper', TE('copper_dust'))
	event.replaceInput({}, '#forge:plates/copper', CR('copper_sheet'))
	event.replaceInput({}, '#forge:ingots/copper', MC('copper_ingot'))
	event.replaceOutput({}, '#forge:ingots/copper', MC('copper_ingot'))
	event.replaceInput({}, '#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({}, '#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({}, '#forge:ores/copper', '#minecraft:copper_ores')
	event.replaceOutput({}, '#forge:nuggets/silver', TE('silver_nugget'))
	event.replaceOutput({}, '#forge:ingots/silver', TE('silver_ingot'))
	event.replaceOutput({}, '#forge:storage_blocks/silver', TE('silver_block'))
	event.replaceInput({}, '#forge:nuggets/silver', TE('silver_nugget'))
	event.replaceInput({}, '#forge:ingots/silver', TE('silver_ingot'))
	event.replaceInput({}, '#forge:storage_blocks/silver', TE('silver_block'))
	event.replaceInput({}, '#forge:storage_blocks/copper', MC('copper_block'))
	event.replaceOutput({}, '#forge:storage_blocks/copper', MC('copper_block'))
  
	event.replaceInput({}, '#forge:plates/electrum', CRA('electrum_sheet'))
	event.replaceInput({}, '#forge:ingots/electrum', CRA('electrum_ingot'))
	event.replaceInput({}, '#forge:dusts/electrum', TE('electrum_dust'))
	event.replaceInput({}, '#forge:nuggets/electrum', TE('electrum_nugget'))

	event.replaceOutput({}, '#forge:plates/electrum', CRA('electrum_sheet'))
	event.replaceOutput({}, '#forge:ingots/electrum', CRA('electrum_ingot'))
	event.replaceOutput({}, '#forge:dusts/electrum', TE('electrum_dust'))
	event.replaceOutput({}, '#forge:nuggets/electrum', TE('electrum_nugget'))

	event.replaceInput({}, '#forge:gems/ruby', TE('ruby'))
	event.replaceInput({}, '#forge:gems/sapphire', TE('sapphire'))

	event.replaceInput({}, TE('niter'), '#forge:gems/niter')
	event.replaceInput({}, TE('apatite'),'#forge:gems/apatite' )
	event.replaceInput({}, TE('cinnabar'),'#forge:gems/cinnabar' )
	event.replaceInput({}, MC('quartz'),'#forge:gems/quartz' )


	event.replaceInput({ type: "minecraft:crafting_shaped" }, '#forge:ingots/tin', CR('zinc_ingot'))

	event.replaceInput({}, '#forge:plates/bronze', TE('nickel_plate'))
	event.replaceInput({}, '#forge:ingots/bronze', 'alloyed:bronze_ingot')
	event.replaceInput({}, '#forge:plates/silver', TE('invar_plate'))
	event.replaceInput({}, '#forge:plates/constantan', TE('signalum_plate'))

	event.replaceInput({}, '#forge:gears/tin', TE('lead_gear'))
	event.replaceInput({}, '#forge:gears/bronze', TE('nickel_gear'))
	event.replaceInput({}, '#forge:gears/silver', TE('invar_gear'))
	event.replaceInput({}, '#forge:gears/constantan', TE('signalum_gear'))

	event.replaceInput({}, '#forge:plates/invar', TE('invar_ingot'))

	event.recipes.createPressing([TE('lead_plate')], TE('lead_ingot'))
	event.recipes.createPressing([TE('enderium_plate')], TE('enderium_ingot'))
	event.recipes.createPressing([TE('lumium_plate')], TE('lumium_ingot'))
	event.recipes.createPressing([TE('signalum_plate')], TE('signalum_ingot'))
	event.recipes.createPressing([TE('constantan_plate')], TE('constantan_ingot'))

	event.replaceOutput({}, '#forge:storage_blocks/bamboo', TE('bamboo_block'))
	event.replaceInput({}, FD('tree_bark'), '#immersive_weathering:bark') //Workaround the cutting board
	event.replaceOutput({type: 'pneumaticcraft:explosion_crafting'}, 'pneumaticcraft:wheat_flour', 'create:wheat_flour')
	event.replaceInput({}, 'pneumaticcraft:wheat_flour', 'create:wheat_flour')

  event.replaceOutput({}, 'thermal:gunpowder_block','quark:gunpowder_sack')

  //forge:dough used only for wheat apparently
	event.replaceOutput({}, '#forge:dough', 'farmersdelight:wheat_dough')
	event.replaceInput({}, '#forge:dough', 'farmersdelight:wheat_dough')
	event.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough')
	event.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')


	event.replaceInput({}, CRA('capacitor'), PC('capacitor'))
	event.replaceOutput({}, CRA('capacitor'), PC('capacitor'))


  event.replaceOutput({}, 'thermal:crude_oil', PC('oil'))
  event.replaceInput({}, 'thermal:crude_oil', PC('oil'))


  //Pneumaticraft


	event.replaceInput({}, 'cofh_core:experience', 'create_enchantment_industry:experience')
	event.replaceOutput({}, 'cofh_core:experience', 'create_enchantment_industry:experience')

	event.replaceInput({}, PC('memory_essence'), 'create_enchantment_industry:experience')
	event.replaceOutput({}, PC('memory_essence'), 'create_enchantment_industry:experience')


  event.replaceOutput({}, `pneumaticcraft:small_tank`, CR('fluid_tank'))
  event.replaceInput({}, `pneumaticcraft:small_tank`, CR('fluid_tank'))


	let woodcutting = (mod, log, planks, slab) => {
		event.recipes.createCutting([mod + ":stripped_" + log], mod + ":" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":stripped_" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
	}

	woodcutting("forbidden_arcanus", "cherrywood_log", "cherrywood_planks", "cherrywood_slab")
	woodcutting("forbidden_arcanus", "mysterywood_log", "mysterywood_planks", "mysterywood_slab")
	woodcutting("architects_palette", "twisted_log", "twisted_planks", "twisted_slab")

  let woods = ["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","archwood","azalea"] 
  let bark = (wood) => {
    event.remove({type:'create:cutting', input:`minecraft:${wood}_log`, output:`minecraft:stripped_${wood}_log`})
    event.remove({type:'create:cutting', input:`minecraft:${wood}_wood`, output:`minecraft:stripped_${wood}_wood`})

    event.recipes.create.cutting([`minecraft:stripped_${wood}_log`,Item.of(`immersive_weathering:${wood}_bark`).withChance(0.5)], `minecraft:${wood}_log`)
    event.recipes.create.cutting([`minecraft:stripped_${wood}_wood`,Item.of(`immersive_weathering:${wood}_bark`).withChance(0.75)], `minecraft:${wood}_wood`) //has more bark

    //pale jane
    event.custom({
      "type": "brewinandchewin:fermenting",
      "container": {
        "item": "brewinandchewin:tankard"
      },
      "experience": 0.6,
      "fermentingtime": 1200,
      "fluiditem": {
        "item": "brewinandchewin:rice_wine"
      },
      "ingredients": [
        {
          "item": "minecraft:honey_bottle"
        },
        {
          "item": `immersive_weathering:${wood}_bark`
        },
        {
          "item": "minecraft:lily_of_the_valley"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "recipe_book_tab": "drinks",
      "result": {
        "item": "brewinandchewin:pale_jane"
      },
      "temperature": 4
    })

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": `minecraft:${wood}_log`
        }
      ],
      "result": [
        {
          "item": `minecraft:stripped_${wood}_log`
        },
        {
          "item": `immersive_weathering:${wood}_bark`
        }
      ],
      "tool": {
        "tag": "forge:tools/axes"
      }
    });

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": `minecraft:${wood}_wood`
        }
      ],
      "result": [
        {
          "item": `minecraft:stripped_${wood}_wood`
        },
        {
          "item": `immersive_weathering:${wood}_bark`
        }
      ],
      "tool": {
        "tag": "forge:tools/axes"
      }
    });
  }

  let customBark = (wood, output1, output2) =>{
    event.remove({type:'create:cutting', input:wood, output:output1})
    event.remove({type:'create:cutting', input:wood, output:output1})

    event.recipes.create.cutting([output1,Item.of(output2).withChance(0.5)], wood)
    event.recipes.create.cutting([output1,Item.of(output2).withChance(0.75)], wood) //has more bark
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": `${wood}`
        }
      ],
      "result": [
        {
          "item": `${output1}`
        },
        {
          "item": `${output2}`
        }
      ],
      "tool": {
        "tag": "forge:tools/axes"
      }
    });
  }


  
  woods.forEach(wood =>{
    //planks to slabs
    event.recipes.create.cutting([`2x minecraft:${wood}_slab`], `minecraft:${wood}_planks`)

    bark(wood)
  })

  let modsWoods = ["quark:ancient","quark:blossom","thermal:rubberwood","architects_palette:twisted","forbidden_arcanus:fungyss","forbidden_arcanus:cherry","forbidden_arcanus:aurum","forbidden_arcanus:edelwood"] // no bamboo :(

  customBark("quark:ancient_log","quark:stripped_ancient_log","immersive_weathering:quark/ancient_bark")
  customBark("quark:ancient_wood","quark:stripped_ancient_wood","immersive_weathering:quark/ancient_bark")
  event.recipes.create.cutting([`2x quark:ancient_planks_slab`], "quark:ancient_planks")

  customBark("quark:blossom_log","quark:stripped_blossom_log","immersive_weathering:quark/blossom_bark")
  customBark("quark:blossom_wood","quark:stripped_blossom_wood","immersive_weathering:quark/blossom_bark")
  event.recipes.create.cutting([`2x quark:blossom_planks_slab`], "quark:blossom_planks")

  customBark("quark:azalea_log","quark:stripped_azalea_log","immersive_weathering:quark/azalea_bark")
  customBark("quark:azalea_wood","quark:stripped_azalea_wood","immersive_weathering:quark/azalea_bark")
  event.recipes.create.cutting([`2x quark:azalea_planks_slab`], "quark:azalea_planks")

  customBark("thermal:rubberwood_log","thermal:stripped_rubberwood_log","immersive_weathering:thermal/rubberwood_bark")
  customBark("thermal:rubberwood_wood","thermal:stripped_rubberwood_wood","immersive_weathering:thermal/rubberwood_bark")
  event.recipes.create.cutting([`2x thermal:rubberwood_slab`], "thermal:rubberwood_planks")

  customBark("architects_palette:twisted_log","architects_palette:stripped_twisted_log","immersive_weathering:architects_palette/twisted_bark")
  customBark("architects_palette:twisted_wood","architects_palette:stripped_twisted_wood","immersive_weathering:architects_palette/twisted_bark")
  event.recipes.create.cutting([`2x architects_palette:twisted_slab`], "architects_palette:twisted_planks")

  let wcl=['blue','purple','green','red']
  wcl.forEach(color=>{
    customBark(`ars_nouveau:${color}_archwood_log`,`ars_nouveau:stripped_${color}_archwood_log`,"immersive_weathering:ars_nouveau/archwood_bark")
    customBark(`ars_nouveau:${color}_archwood_wood`,`ars_nouveau:stripped_${color}_archwood_wood`,"immersive_weathering:ars_nouveau/archwood_bark")
  })
  event.recipes.create.cutting([`2x ars_nouveau:archwood_slab`], `ars_nouveau:archwood_planks`)

  // customBark("forbidden_arcanus:fungyss_stem","forbidden_arcanus:stripped_fungyss_stem","immersive_weathering:forbidden_arcanus/fungyss_bark")
  // customBark("forbidden_arcanus:fungyss_hyphae","forbidden_arcanus:stripped_fungyss_hyphae","immersive_weathering:forbidden_arcanus/fungyss_bark")

  customBark("forbidden_arcanus:cherry_log","forbidden_arcanus:stripped_cherry_log","immersive_weathering:forbidden_arcanus/cherry_bark")
  customBark("forbidden_arcanus:cherry_wood","forbidden_arcanus:stripped_cherry_wood","immersive_weathering:forbidden_arcanus/cherry_bark")

  customBark("forbidden_arcanus:aurum_log","forbidden_arcanus:stripped_aurum_log","immersive_weathering:forbidden_arcanus/aurum_bark")
  customBark("forbidden_arcanus:aurum_wood","forbidden_arcanus:stripped_aurum_wood","immersive_weathering:forbidden_arcanus/aurum_bark")

  customBark("forbidden_arcanus:edelwood_log","forbidden_arcanus:carved_edelwood_log","immersive_weathering:forbidden_arcanus/edelwood_bark")
  customBark("forbidden_arcanus:edelwood_wood","forbidden_arcanus:carved_edelwood_wood","immersive_weathering:forbidden_arcanus/edelwood_bark")
}

function tweaks(event){
  //Coal
  event.recipes.create.milling([KJ('coal_dust',1),Item.of(MC('black_dye')).withChance(0.25),Item.of(MC('gray_dye',1)).withChance(0.1)],MC('coal')).processingTime(400)
  event.recipes.create.milling([KJ('coal_dust',1),Item.of(MC('black_dye')).withChance(0.25),Item.of(MC('gray_dye',1)).withChance(0.1)],MC('charcoal')).processingTime(400)

  event.recipes.create.crushing([KJ('coal_dust',2),Item.of(KJ('coal_dust',1)).withChance(0.25),Item.of(MC('black_dye')),Item.of(MC('gray_dye',1)).withChance(0.1)],MC('coal')).processingTime(400)
  event.recipes.create.crushing([KJ('coal_dust',2),Item.of(KJ('coal_dust',1)).withChance(0.25),Item.of(MC('black_dye')),Item.of(MC('gray_dye',1)).withChance(0.1)],MC('charcoal')).processingTime(400)


  event.shapeless(MC('gunpowder',1), [KJ('coal_dust'),F('#dusts/niter',2)])

  event.shapeless(MC('gunpowder',4), [KJ('coal_dust'),F('#dusts/niter',2),F('#dusts/sulfur')])


  //Replace reinforced stones with plates & ingots
  event.recipes.create.pressing([KJ('compressed_iron_sheet')],PC('ingot_iron_compressed'))
  
  event.replaceInput({ output: 'pneumaticcraft:cannon_barrel' }, 'pneumaticcraft:reinforced_brick_wall', KJ('compressed_iron_sheet'))
  event.replaceInput({ output: 'pneumaticcraft:fluid_mixer' }, 'pneumaticcraft:reinforced_brick_wall', KJ('compressed_iron_sheet'))


  event.replaceInput({ output: 'pneumaticcraft:gas_lift' }, 'pneumaticcraft:reinforced_stone_slab', KJ('compressed_iron_sheet'))
  event.replaceInput({ output: 'pneumaticcraft:charging_station' }, 'pneumaticcraft:reinforced_stone_slab', KJ('compressed_iron_sheet'))
  event.replaceInput({}, 'pneumaticcraft:reinforced_stone_slab', KJ('compressed_iron_sheet'))

  event.replaceInput({output: 'pneumaticcraft:logistic_core'}, 'pneumaticcraft:reinforced_brick_tile', PC('ingot_iron_compressed'))
  event.replaceInput({output: 'pneumaticcraft:tube_junction'}, 'pneumaticcraft:reinforced_brick_wall', KJ('compressed_iron_sheet'))
  event.replaceInput({output: 'pneumaticcraft:vacuum_trap'}, 'pneumaticcraft:reinforced_brick_wall', KJ('compressed_iron_sheet'))
  //Better milk recipe
  event.recipes.create.mixing([Fluid.of(MC('milk'), 1000)],[Fluid.of(MC('water'),1000),Item.of(DE('acorn'),2),MC('sugar')]).heated()

  //Different slime fluid recipe
  event.recipes.create.mixing([Fluid.of(CRTM('slime'), 100)],[Fluid.of(MC('water'),100),Item.of(MC('slime_ball'))])


}

function tools(event){
  event.shaped(KJ('stone_saw', 1), [
    'MS ',
		' MS',
    '  S'
	], {
    M: MC('flint'),
		S: MC('stick'),
	})

  event.shaped(KJ('iron_saw', 1), [
    'MS ',
		' MS',
    '  S'
	], {
    M: MC('iron_ingot'),
		S: MC('stick'),
	})

  event.shaped(KJ('diamond_saw', 1), [
    'MS ',
		' MS',
    '  S'
	], {
    M: MC('diamond'),
		S: MC('stick'),
	})


  event.shaped(KJ('screwdriver', 1), [
    '  R',
		'SR ',
    'AS '
	], {
    A: CR('andesite_alloy'),
		R: 'createaddition:iron_rod',
		S: CR('copper_sheet')
	})

  event.shaped(KJ('pliers', 1), [
    '  A',
		'SA ',
    ' S '
	], {
    A: CR('andesite_alloy'),
		S: MC('stick')
	})

  event.shaped(KJ('file', 1), [
    '  N',
		'AN ',
    'SA '
	], {
    A: CR('andesite_alloy'),
    N: MC('iron_nugget'),
		S: MC('stick')
	})

}
function mechanism(event){
  //Basic

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:basic_mechanism'),
	], MC('#wooden_slabs'), [
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', CR("andesite_alloy")]),
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', CR("andesite_alloy")]),
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', F("#saws")]).keepHeldItem(),
	]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1)

  //Basic Crafting bench
  //event.shapeless('kubejs:basic_mechanism', [F("#saws"),CR('andesite_alloy'), MC('#wooden_slabs'), CR('cogwheel')])
	event.shaped(KJ('basic_mechanism', 1), [
		'SA ',
		'LC ',
	], {
      A: CR('andesite_alloy'),
	    S: F("#saws"),
	    L: MC('#wooden_slabs'),
	    C: CR('cogwheel'),
	})
  .damageIngredient(Item.of(KJ('stone_saw')),10)
  .damageIngredient(Item.of(KJ('iron_saw')),10)
  .damageIngredient(Item.of(KJ('diamond_saw')),10)

  //Sealed
	event.shaped(KJ('sealed_mechanism', 1), [
    'CCC',
		'SBS',
    'CCC'
	], {
    B: KJ('basic_mechanism'),
		S: TE('cured_rubber'),
    C: CR('copper_nugget')
	})

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:sealed_mechanism'),
	], KJ('basic_mechanism'), [
		event.recipes.createDeploying('kubejs:incomplete_sealed_mechanism', ['kubejs:incomplete_sealed_mechanism', CR('copper_nugget')]),
		event.recipes.createDeploying('kubejs:incomplete_sealed_mechanism', ['kubejs:incomplete_sealed_mechanism', TE('cured_rubber')])
	]).transitionalItem('kubejs:incomplete_sealed_mechanism').loops(2)

  //Train
  event.shaped(KJ('train_mechanism', 1), [
    ' H ',
		'BRS',
    ' H '
	], {
    B: KJ('basic_mechanism'),
		S: KJ('sealed_mechanism'),
    R: CR('brass_ingot'),
    H: CR('sturdy_sheet')
	})  

  //Heat Engine
  event.recipes.create.sequenced_assembly([
		Item.of('create_sa:heat_engine')
	], Item.of('kubejs:magmatic_mechanism'), [
		event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', CRD('zinc_sheet')]),
		event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', CR("copper_sheet")]),
		event.recipes.createPressing('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine']),
		event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', F("#files")]).keepHeldItem(),
	]).transitionalItem('create_sa:incomplete_heat_engine').loops(3)

  //Hydraulic Engine

  let incomplete_hydraulic_engine = 'create_sa:incomplete_hydraulic_engine'
  event.recipes.create.sequenced_assembly([
		Item.of('create_sa:hydraulic_engine')
	], Item.of('create_sa:heat_engine'), [
		event.recipes.createDeploying(incomplete_hydraulic_engine, [incomplete_hydraulic_engine, CR("copper_sheet")]),
    event.recipes.createPressing(incomplete_hydraulic_engine, [incomplete_hydraulic_engine]),
		event.recipes.createFilling(incomplete_hydraulic_engine, [incomplete_hydraulic_engine, Fluid.of(MC("water"),500)]),
    event.recipes.createPressing(incomplete_hydraulic_engine, [incomplete_hydraulic_engine]),
		event.recipes.createDeploying(incomplete_hydraulic_engine, [incomplete_hydraulic_engine, F("#files")]).keepHeldItem(),
	]).transitionalItem(incomplete_hydraulic_engine).loops(3)


  //Steam Engine
  let incomplete_steam_engine = 'create_sa:incomplete_steam_engine'

  event.recipes.create.sequenced_assembly([
    Item.of('create_sa:steam_engine')
  ], Item.of('create_sa:hydraulic_engine'), [
    event.recipes.createDeploying(incomplete_steam_engine, [incomplete_steam_engine, CR("brass_sheet")]),
    event.recipes.createDeploying(incomplete_steam_engine, [incomplete_steam_engine, F("#files")]).keepHeldItem(),
    event.recipes.createDeploying(incomplete_steam_engine, [incomplete_steam_engine, CR('propeller')]),
    event.recipes.createPressing(incomplete_steam_engine, [incomplete_steam_engine]),
  ]).transitionalItem(incomplete_steam_engine).loops(4)



  //Precision
  event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130),
    Item.of('create:brass_sheet').withChance(8.0),
		Item.of('create:andesite_alloy').withChance(8.0),
    Item.of('create:electron_tube').withChance(6.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:polished_rose_quartz').withChance(4.0),
		Item.of('create:shaft').withChance(2.0)
	], Item.of('kubejs:basic_mechanism'), [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', CR("brass_sheet")]),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', CR("cogwheel")]),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', CR("large_cogwheel")]),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', CR("electron_tube")]),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', F("#screwdrivers")]).keepHeldItem(),
	]).transitionalItem('create:incomplete_precision_mechanism').loops(2)


  //Magmatic
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:magmatic_mechanism')
	], Item.of('create:precision_mechanism'), [
		event.recipes.createDeploying('kubejs:incomplete_magmatic_mechanism', ['kubejs:incomplete_magmatic_mechanism', CR('powdered_obsidian')]),
    event.recipes.createDeploying('kubejs:incomplete_magmatic_mechanism', ['kubejs:incomplete_magmatic_mechanism', CRTM('crushed_magma')]),
		event.recipes.createFilling('kubejs:incomplete_magmatic_mechanism', ['kubejs:incomplete_magmatic_mechanism', Fluid.of(MC("lava"),500)]),
	]).transitionalItem('kubejs:incomplete_magmatic_mechanism').loops(2)

  //Pneumatic
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:pneumatic_mechanism')
	], Item.of('create:precision_mechanism'), [
		event.recipes.createDeploying('kubejs:incomplete_pneumatic_mechanism', ['kubejs:incomplete_pneumatic_mechanism', PC('pressure_tube')]),
		event.recipes.createDeploying('kubejs:incomplete_pneumatic_mechanism', ['kubejs:incomplete_pneumatic_mechanism', PC("ingot_iron_compressed")]),
		event.recipes.createDeploying('kubejs:incomplete_pneumatic_mechanism', ['kubejs:incomplete_pneumatic_mechanism', PC("pneumatic_cylinder")]),
		event.recipes.createDeploying('kubejs:incomplete_pneumatic_mechanism', ['kubejs:incomplete_pneumatic_mechanism', F("#screwdrivers")]).keepHeldItem(),
	]).transitionalItem('kubejs:incomplete_pneumatic_mechanism').loops(2)


    //Microcontroller
    event.recipes.create.mechanical_crafting(KJ('unpowered_microcontroller', 1), [
      'ABCDEF',
      '     Z'
    ], {
      A: PC('network_api'),
      B: PC('network_io_port'),
      C: PC('network_node'),
      D: PC('network_data_storage'),
      E: PC('network_registry'),
      F: PC('diagnostic_subroutine'),
      Z: PC('module_expansion_card'),
    })  

    event.custom({
      "type":"createaddition:charging",
      "input": {
            "item": "kubejs:unpowered_microcontroller",
        "count": 1
      },
      "result": {
        "item": "kubejs:microcontroller",
        "count": 1
      },
      "energy": 10000,
      "maxChargeRate": 200
    });
}


//Chemistry, crystals, fertilizers and stuff
function breakingBad(event){
  //Remove unused
  event.remove({input: TE('cinnabar_dust'),output: TE('cinnabar_dust') })


  //Destablized redstone
  event.recipes.create.mixing([Fluid.of(TE('redstone'), 100)],MC('redstone')).heated()
  event.recipes.create.mixing([Fluid.of(TE('redstone'), 900)],MC('redstone_block')).heated()

  //Seed recipes
  event.shapeless(KJ('apatite_seed',2), [F("#sand"),TE('apatite_dust')])
  event.shapeless(KJ('cinnabar_seed',2), [F("#sand"),MC('redstone')])
  event.shapeless(KJ('niter_seed',2), [F("#sand"),TE('niter_dust')])
  event.shapeless(KJ('quartz_seed',2), [F("#sand"),TE('quartz_dust')])

  //Pure Apatite
  event.recipes.create.milling([TE('apatite_dust',6)],F('#gems/apatite')).processingTime(700)
  event.recipes.create.crushing([TE('apatite_dust',8),Item.of(TE('apatite_dust',2)).withChance(0.25),Item.of(MC('cyan_dye',2)).withChance(0.25)],F('#gems/apatite')).processingTime(500)

  //Pure Niter
  event.recipes.create.milling([TE('niter_dust',6)],F('#gems/niter')).processingTime(700)
  event.recipes.create.crushing([TE('niter_dust',8),Item.of(TE('niter_dust',2)).withChance(0.25)],F('#gems/niter')).processingTime(500)

  //Cinnabar
  event.recipes.create.milling([MC('redstone',4)],F('#gems/cinnabar')).processingTime(700)
  event.recipes.create.crushing([MC('redstone',6),Item.of(MC('redstone',2)).withChance(0.25),Item.of(MC('red_dye',2)).withChance(0.25)],F('#gems/cinnabar')).processingTime(500)

  //Pure Quartz
  event.remove({input: F('#gems/quartz'), output:CR('experience_nugget')})
  event.recipes.create.milling([TE('quartz_dust',1)],F('#gems/quartz')).processingTime(700)
  event.recipes.create.crushing([TE('quartz_dust',2),Item.of(TE('quartz_dust')).withChance(0.30),Item.of(CR('experience_nugget')).withChance(0.30)],F('#gems/quartz')).processingTime(500)


  //Phyto-gro
  event.remove({output: TE('phytogro') })
  event.shapeless(TE('phytogro',4), [F("#sand"),MC('bone_meal'),TE('apatite_dust'),TE('niter_dust')])


  //Growth solution
  let gs = KJ('crystal_growth_solution')
  let gs_bucket = KJ('crystal_growth_solution_bucket')
  event.recipes.create.mixing([Fluid.of(gs,1000)],[Fluid.of(MC('water'), 1000),S('salt'),TE('apatite_dust'),TE('niter_dust'),MC('bone_meal')])

  event.shapeless(Item.of(KJ('crystal_growth_solution_bucket',1)), [MC('water_bucket'),MC('bone_meal'), S('salt'),TE('apatite_dust'),TE('niter_dust')])
  event.remove({input:MC('water_bucket'), output: KJ('crystal_growth_solution_bucket')})

  let grow = (from, to) =>{
    event.recipes.create.sequenced_assembly([Item.of(to)], from, [
      event.recipes.createFilling(from, [from, Fluid.of(gs,250)])
    ]).transitionalItem(from).loops(4)

    event.recipes.create.sequenced_assembly([Item.of(to)], from, [
      event.recipes.createFilling(from, [from, Fluid.of(CRTM('diluted_bonemeal'),100)])
    ]).transitionalItem(from).loops(16)
  }

  let growWater = (from, to) =>{
    event.recipes.create.sequenced_assembly([Item.of(to)], from, [
      event.recipes.createFilling(from, [from, Fluid.of(MC('water'),250)])
    ]).transitionalItem(from).loops(4)
  }

  grow(KJ('apatite_seed'),KJ('tiny_apatite_crystal'))
  grow(KJ('tiny_apatite_crystal'),KJ('small_apatite_crystal'))
  grow(KJ('small_apatite_crystal'),KJ('pure_apatite_crystal'))

  grow(KJ('cinnabar_seed'),KJ('tiny_cinnabar_crystal'))
  grow(KJ('tiny_cinnabar_crystal'),KJ('small_cinnabar_crystal'))
  grow(KJ('small_cinnabar_crystal'),KJ('pure_cinnabar_crystal'))

  grow(KJ('niter_seed'),KJ('tiny_niter_crystal'))
  grow(KJ('tiny_niter_crystal'),KJ('small_niter_crystal'))
  grow(KJ('small_niter_crystal'),KJ('pure_niter_crystal'))


  growWater(KJ('quartz_seed'),KJ('tiny_quartz_crystal'))
  growWater(KJ('tiny_quartz_crystal'),KJ('small_quartz_crystal'))
  growWater(KJ('small_quartz_crystal'),KJ('pure_quartz_crystal'))

  //Destabilized redstone + gems/quartz
  event.recipes.create.mixing([CR('rose_quartz')],[Fluid.of(TE('redstone'), 400),F('#gems/quartz')]).processingTime(300)
}

function saltyStuff(event){
  event.remove({input: S('salt'), output: MC('gunpowder') })
  //Create recipe
  event.recipes.create.mixing([S('salt'),Item.of(S('salt')).withChance(0.75)],[Fluid.of(MC('water'), 1000)]).processingTime(500).heated()
  event.recipes.create.haunting(S('raw_rock_salt'),S('salt')).processingTime(1000)
  event.recipes.create.haunting(S('raw_rock_salt_block'),S('salt_block')).processingTime(1000)
}

function createStuff(event){

  event.shaped(CR('cogwheel', 1), [
		' B ',
    'BSB',
    ' B '
	], {
    B: MC('#wooden_buttons'),
		S: CR('shaft')
	})


  event.shaped(CR('large_cogwheel', 1), [
		'BWB',
    'WSW',
    'BWB'
	], {
    B: MC('#wooden_buttons'),
		S: CR('shaft'),
		W: MC('#wooden_slabs')
	})

  event.shaped(CR('large_cogwheel', 1), [
		' W ',
    'WCW',
    ' W '
	], {
		C: CR('cogwheel'),
		W: MC('#wooden_slabs')
	})


  //Tube Base
  event.shaped(KJ('tube_base', 1), [
		' P ',
    'WIS',
    ' F '
	], {
		I: CR('iron_sheet'),
		P: F('#pliers'),
		W: F('#screwdrivers'),
		S: F('#saws'),
    F: F("#files")
	})
  .damageIngredient(Item.of(KJ('stone_saw')),10)
  .damageIngredient(Item.of(KJ('iron_saw')),10)
  .damageIngredient(Item.of(KJ('diamond_saw')),10)
  .damageIngredient(Item.of(KJ('pliers')),10)
  .damageIngredient(Item.of(KJ('screwdriver')),10)
  .damageIngredient(Item.of(KJ('file')),10)

  event.recipes.create.deploying(KJ('tube_base_cast'), ['kubejs:blank_cast', KJ('tube_base')]).keepHeldItem()

  event.recipes.create.filling(KJ('tube_base'),[Item.of(KJ('tube_base_cast')),Fluid.of(KJ('molten_iron'), 144)])

  //Empty tube
  event.shaped(KJ('empty_tube', 1), [
		'GF',
    'SC'
	], {
		G: F("#glass"),
		S: KJ('tube_base'),
    C: F('#screwdrivers'),
    F: F("#files")
	})
  .damageIngredient(Item.of(KJ('screwdriver')),10)
  .damageIngredient(Item.of(KJ('file')),10)

  let incomplete_tube = KJ('tube_base');

	event.recipes.create.sequenced_assembly([
		Item.of(KJ('empty_tube')),
	], KJ('tube_base'), [
		event.recipes.createDeploying(incomplete_tube, [incomplete_tube, F("#glass")]),
		event.recipes.createDeploying(incomplete_tube, [incomplete_tube, F('#screwdrivers')]).keepHeldItem(),
	]).transitionalItem(incomplete_tube).loops(1)


  //Electron tube
  event.recipes.create.deploying(CR('electron_tube'), ['kubejs:empty_tube', CR("polished_rose_quartz")])



}

function waterStrainerStuff(event){
    event.shaped(WS('strainer_base', 1), [
      'B B',
      'AMA',
      'WCW'
    ], {
      B: MC('iron_bars'),
      M: KJ('basic_mechanism'),
      A: CR('andesite_alloy'),
      C: F('#chests'),
      W: MC('#planks'),
    })


    event.shaped(WS('strainer_survivalist', 1), [
      'SSS',
      'AAA',
      'SSS'
    ], {
      S: MC('stick'),
      A: FD('canvas'),
    })

    
    event.shaped(WS('strainer_fisherman', 1), [
      'SSS',
      'AAA',
      'SSS'
    ], {
      S: MC('bamboo'),
      A: FD('canvas'),
    })
}

function basicMechanismRecipes(event){
  //Saw
  event.shaped(TE('saw_blade', 1), [
		'PP ',
    'PAP',
    ' PP'
	], {
    A: CR('andesite_alloy'),
		P: F('#plates/iron')
	})


  event.shaped(CR('mechanical_saw', 1), [
		' B ',
    'ACA',
    ' S '
	], {
    A: CR('andesite_casing'),
		B: KJ('basic_mechanism'),
		C: CR('shaft'),
		S: TE('saw_blade'),
	})

  //Drill
  event.shaped(TE('drill_head', 1), [
		' P ',
    'PAP',
    'PPP'
	], {
    A: CR('andesite_alloy'),
		P: F('#plates/iron')
	})

  event.shaped(CR('mechanical_drill', 1), [
		' B ',
    'ASA',
    ' D '
	], {
    A: CR('andesite_casing'),
		S: CR('shaft'),
		B: KJ('basic_mechanism'),
		D: TE('drill_head'),
	})

  //Press
  event.shaped(CR('mechanical_press', 1), [
		' P ',
    'AMA',
    ' B '
	], {
    A: CR('andesite_casing'),
    P: CR('piston_extension_pole'),
		B: MC('iron_block'),
		M: KJ('basic_mechanism'),
	})

  //Mixer
  event.shaped(CR('mechanical_mixer', 1), [
		' B ',
    'COC',
    ' W '
	], {
    C: CR('andesite_casing'),
		W: CR('whisk'),
		O: CR('cogwheel'),
		B: KJ('basic_mechanism'),
	})
  .damageIngredient(Item.of(KJ('screwdriver')))

  //Deployer
  event.shaped(CR('deployer', 1), [
		' P ',
    'CBC',
    ' W '
	], {
    C: CR('andesite_casing'),
    P: CR('piston_extension_pole'),
		W: CR('brass_hand'),
		B: KJ('basic_mechanism'),
	})
  .damageIngredient(Item.of(KJ('screwdriver')))


  //Fan
  event.shaped(CR('encased_fan', 1), [
		' B ',
    'CSC',
    ' P '
	], {
    C: CR('andesite_casing'),
		S: CR('shaft'),
		P: CR('propeller'),
		B: KJ('basic_mechanism')
	})


  //Millstone
  event.shaped(CR('millstone', 1), [
    ' O ',
    'CBC',
    ' S '
  ], {
    B: KJ('basic_mechanism'),
    O: CR('cogwheel'),
    C: CR('andesite_casing'),
    S: F('#stone')
  })


  //Spout
  event.shaped(CR('fluid_tank', 1), [
    'CRC',
    'GBG',
    'CRC'
  ], {
    C: F('#plates/copper'),
    B: F('#barrels'),
    G: F('#glass'),
    R: TE('cured_rubber')
  })

  //Spout
  event.shaped(CR('spout', 1), [
    ' C ',
    ' S ',
    ' P '
  ], {
    C: CR('copper_casing'),
    S: KJ('sealed_mechanism'),
    P: CR('fluid_pipe')
  })

  //Pump
  event.shaped(CR('mechanical_pump', 1), [
    'SPC',
  ], {
    C: CR('cogwheel'),
    S: KJ('sealed_mechanism'),
    P: CR('fluid_pipe')
  })

  //Valve
  event.shaped(CR('fluid_valve', 1), [
    'IPS',
  ], {
    P: CR('fluid_pipe'),
    S: KJ('sealed_mechanism'),
    I: F('#plates/iron')
  })

  //Printer 
  event.shaped(CEI('printer', 1), [
    ' S ',
    ' I ',
  ], {
    S: CR('spout'),
    I: F('#plates/iron')
  })

  //Water Wheel
  event.shaped(CR('water_wheel', 1), [
    'PPP',
    'PLP',
    'PPP'
  ], {
    P: MC('#planks'),
    L: CR('large_cogwheel')
  })
  //Large Water Wheel
  event.shaped(CR('large_water_wheel', 1), [
    'PAP',
    'ALA',
    'PAP'
  ], {
    A: CR('andesite_alloy'),
    P: MC('#planks'),
    L: CR('water_wheel')
  })
}

function trainMechanismRecipes(event){
  event.shaped(CR('track_station', 2), [
		'M',
    'C',
	], {
    C: MC('compass'),
		M: KJ('train_mechanism')
	})

  event.shaped(CR('controls', 1), [
		'L',
    'C',
    'M',
	], {
    L: CR('analog_lever'),
		M: KJ('train_mechanism'),
		C: CR('railway_casing')
	})

  event.shaped(CR('track_observer', 2), [
		'P',
    'C',
    'M',
	], {
    P: MC('#wooden_pressure_plates'),
		M: KJ('train_mechanism'),
		C: CR('railway_casing')
	})

  event.shaped(CR('track_signal', 4 ), [
		'T',
    'C',
    'M',
	], {
    T: CR('electron_tube'),
		M: KJ('train_mechanism'),
		C: CR('railway_casing')
	})

  
  //Mechanical Crafter
  event.shaped(CR('mechanical_crafter', 1), [
		' P ',
    'CGC',
    ' M ',
	], {
    P: CR('electron_tube'),
		M: MC('crafting_table'),
		G: CR('precision_mechanism'),
		C: CR('brass_casing')
	})

  //Steam Engine
  event.shaped(CR('steam_engine', 1), [
		' P ',
    'CGC',
    ' M ',
	], {
    P: CR('golden_sheet'),
		M: MC('copper_block'),
		G: 'create_sa:steam_engine',
		C: CR('copper_sheet')
	})

}


let andesite_mesh = CS('andesite_mesh');
let string_mesh = CS('string_mesh');
let brass_mesh = CS('brass_mesh');

/**
* Sifting recipie
* @param output - Array of objects  @objects {item: 'example:item', chance: 0.1 }
*/
let siftingRecipie = (event,mesh,input,output,waterlogged) =>{
  event.custom({
    type: "createsifter:sifting",
    ingredients: [
      {
        item: mesh,
      },
      {
        item: input,
      },
    ],
    results: output,
    processingTime: 500,
    waterlogged:waterlogged
});

}


function sifting(event) {
	//Sifter
	event.shaped(CS('sifter', 1), [
		'WAW',
		'SCS',
		'PMP'
	], {
		W: MC('#planks'),
		A: CR('andesite_casing'),
		C: CR('cogwheel'),
		P: F('#stone'),
		M: KJ('basic_mechanism'),
		S: MC('stick'),
	})

	//Brass Sifter
	event.shaped(CS('brass_sifter', 1), [
		'SSS',
		'IPI',
		'IRI'
	], {
		S: CR('brass_sheet'),
		I: CR('brass_ingot'),
		P: CS('sifter'),
		R: MC('redstone'),
	})


	//String Mesh
	event.shaped(CS('string_mesh', 1), [
		'SSS',
		'AAA',
		'SSS'
	], {
		A: MC('string'),
		S: MC('stick'),
	})

	//Andesite Mesh
	event.shaped(CS('andesite_mesh', 1), [
		'SSS',
		'AAA',
		'SSS'
	], {
		A: CRD('andesite_mesh_fence'),
		S: MC('stick'),
	})

	//Brass Mesh
	event.shaped(CS('brass_mesh', 1), [
		'SSS',
		'AAA',
		'SSS'
	], {
		A: CRD('brass_mesh_fence'),
		S: MC('stick'),
	})

 // siftingRecipie(event,CS('andesite_mesh'),MC('gravel'),[{item:TE("iron_dust"),chance:0.1},{item:MC("flint"),chance:0.9}])
  siftingRecipie(event,CS('string_mesh'),MC('gravel'),
  [
    {item:TE("iron_dust"),chance:0.15},
    {item:TE("tin_dust"),chance:0.12},
    {item:TE("copper_dust"),chance:0.12},
    {item:MC("flint"),chance:0.5}
  ],false)

  siftingRecipie(event,CS('andesite_mesh'),MC('gravel'),
  [
    {item:KJ("zinc_dust"),chance:0.12},
    {item:TE("nickel_dust"),chance:0.12},
    {item:MC("flint"),chance:0.5}
  ],false)

  siftingRecipie(event,CS('brass_mesh'),MC('gravel'),
  [
    {item:TE("lead_dust"),chance:0.12},
    {item:TE("silver_dust"),chance:0.08},
    {item:MC("flint"),chance:0.5}
  ],true)




  siftingRecipie(event,CS('string_mesh'),MC('sand'),
  [
    {item:MC("clay_ball"),chance:0.3},
    {item:MC("flint"),chance:0.15},
    {item:IW("sand_layer_block"),chance:0.25},
  ],true)

  siftingRecipie(event,CS('brass_mesh'),MC('sand'),
  [
    {item:MC("clay_ball"),chance:0.5},
    {item:MC("flint"),chance:0.1},
    {item:IW("sand_layer_block"),chance:0.2},
  ],true)



  siftingRecipie(event,CS('andesite_mesh'),MC('red_sand'),
  [
    {item:TE("gold_dust"),chance:0.01},
    {item:MC("dead_bush"),chance:0.05},
    {item:IW("red_sand_layer_block"),chance:0.25},
  ],true)

  siftingRecipie(event,CS('andesite_mesh'),CH('white_sand'),
  [
    {item:S("salt"),chance:0.15},
    {item:MC("dead_bush"),chance:0.05},
    {item:IW("sand_layer_block"),chance:0.25},
  ],true)

  siftingRecipie(event,CS('andesite_mesh'),MC('soul_sand'),
  [
    {item:'spirit:soul_powder',chance:0.15},
    {item:TE("quartz_dust",2),chance:0.3},
    {item:MC("bone"),chance:0.05},
    {item:TE("gold_dust"),chance:0.08},
  ],false)

  siftingRecipie(event,CS('brass_mesh'),MC('soul_sand'),
  [
    {item:'spirit:soul_powder',chance:0.25},
    {item:TE("quartz_dust",3),chance:0.4},
    {item:TE("gold_dust"),chance:0.12},
    {item:'forbidden_arcanus:corrupt_soul',chance:0.02},
  ],false)
}

function farmersdelight(event){

    event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "supplementaries:flax"
    }
  ],
  "result": [
    {
      "item": "minecraft:string",
      "chance": 0.7,
    },
    {
      "item": "farmersdelight:straw",
      "chance": 0.25,
    }
  ],
  "tool": {
    "tag": "forge:tools/knives"
  }
});
event.shapeless(IW('oak_bark'), [FD('tree_bark')]) //just in case FD bark gets in your hands




}

function rubberMatters(event) {
  //Arboreal Tree Extractor fix
  
	event.shaped(TE('device_tree_extractor'), [
		'PAP',
		'GBG',
    'PAP'
	], {
		A: CR('fluid_pipe'),
    B: MC('bucket'),
    P: MC('#planks'),
    G: F('#glass')
	})


	let overrideTreeOutput = (id, trunk, leaf) => {
		event.remove({ id: id })
		event.custom({
			"type": "thermal:tree_extractor",
			"trunk": trunk,
			"leaves": leaf,
			"result": {
				"fluid": "thermal:resin",
				"amount": 25
			}
		});
	}

	overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_jungle'), MC('jungle_log'), MC('jungle_leaves'))
	overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_spruce'), MC('spruce_log'), MC('spruce_leaves'))
	overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_dark_oak'), MC('dark_oak_log'), MC('dark_oak_leaves'))
	overrideTreeOutput(TE('compat/biomesoplenty/tree_extractor_bop_maple'), MC('oak_log'), 'biomesoplenty:maple_leaves')

	event.remove({ id: CR('crafting/kinetics/belt_connector') })
	event.shaped(CR('belt_connector', 3), [
		'SSS',
		'SSS'
	], {
		S: TE('cured_rubber')
	})


//	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vine", 4)])
	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), MC("#vine", 4)])
	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), CH("#vine", 4)])
	
	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])

	event.remove({ id: 'thermal:rubber_3' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })
	event.remove({ id: 'thermal:rubber_from_vine' })

}

function andesiteAlloy(event){
  //Remove existing andesite alloy recipie
  event.remove({input: 'minecraft:iron_nugget', output: 'create:andesite_alloy' })
  event.remove({input: 'create:zinc_nugget', output: 'create:andesite_alloy' })

  //Crafing
  event.shaped(CR('andesite_alloy', 1), [
		'AB',
		'AC'
	], {
		A: MC('andesite'),
		B: AP('algal_brick'),
		C: MC('iron_nugget')
	})

  //Mixer
  event.recipes.create.mixing(CR('andesite_alloy'),[MC('andesite'), AP('algal_brick'),MC('iron_nugget')])
}

function woodProcessing(event){

}

function oreProcessing(event){

	event.shaped(Item.of(KJ('blank_cast'), 4), [
		'SS'
	], {
		S: F('#casting_sand')
	})

  event.recipes.create.deploying(KJ('ingot_cast'), ['kubejs:blank_cast', F('#ingots')]).keepHeldItem()
  event.recipes.create.deploying(KJ('nugget_cast'), ['kubejs:blank_cast', F('#nuggets')]).keepHeldItem()

  let stone = Item.of(MC("cobblestone"), 1).withChance(.5)
	let deepslate = Item.of(MC("deepslate"), 1).withChance(.5)


	let remove_smelts = (tag) =>{
		event.remove({ input: tag, type: TE("smelter") })
		event.remove({ input: tag, type: TE("pulverizer") })
		event.remove({ input: tag, type: TE("centrifuge") })
		event.remove({ input: tag, type: TE("induction") })
		event.remove({ input: tag, type: MC("blasting") })
		event.remove({ input: tag, type: MC("smelting") })
		event.remove({ input: tag, type: CR("crushing") })
		event.remove({ input: tag, type: CR("milling") })
		event.remove({ input: tag, type: CR("splashing") })
	}


  let dust_process = (name, ingot, nugget, dust, ore_raw, ore_block) => {
		let fluid = KJ("molten_" + name)
		let crushed = CR('crushed_raw_' + name)
		let deepslate_ore = ore_block.replace(":", ":deepslate_")

    let quark_bricks = `raw_${name}_bricks`
		remove_smelts("quark:" + quark_bricks)

		remove_smelts("#forge:dusts/" + name)
		remove_smelts("#forge:ores/" + name)
		remove_smelts("#forge:raw_materials/" + name)
		remove_smelts("#forge:storage_blocks/raw_" + name)


    //Ore Block -> Raw Ore
		event.recipes.create.milling([Item.of(ore_raw, 1), stone], ore_block)
		event.recipes.create.milling([Item.of(ore_raw, 1), stone], deepslate_ore)

		event.recipes.create.crushing([Item.of(ore_raw, 1),Item.of(ore_raw, 1).withChance(0.5), CR('experience_nugget', 2), stone], ore_block)
		event.recipes.create.crushing([Item.of(ore_raw, 1),Item.of(ore_raw, 1).withChance(0.5), CR('experience_nugget', 2), deepslate], deepslate_ore)
    
    //Raw Ore -> Crushed Raw Ore
		event.recipes.create.milling([Item.of(crushed, 1)], ore_raw)
		event.recipes.create.crushing([Item.of(crushed, 1),Item.of(crushed, 1).withChance(0.5)], ore_raw)

    //Crushed Raw Ore -> Ore Dust
		event.recipes.create.milling([Item.of(dust, 2),Item.of(dust, 1).withChance(0.5)], crushed)
		event.recipes.create.crushing([Item.of(dust,3),Item.of(dust, 1).withChance(0.5),Item.of(dust, 1).withChance(0.5),Item.of(dust, 1).withChance(0.5)], crushed)
		
		event.recipes.thermal.pulverizer([Item.of(dust, 6)], crushed).energy(10000)

		event.recipes.thermal.crucible(Fluid.of(fluid, 40), dust).energy(3000)

    //Ore Dust -> Nugget
		event.smelting(Item.of(nugget, 1), dust).cookingTime(40)
		event.recipes.create.splashing([Item.of(nugget, 1),Item.of(nugget, 1).withChance(0.5)], dust)

    //Liquid
    event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(fluid, 32)],dust).heated()

    event.recipes.create.filling(ingot,[Item.of(KJ('ingot_cast')),Fluid.of(fluid, 144)])
  }


	dust_process('nickel',	TE('nickel_ingot'),TE('nickel_nugget'),TE('nickel_dust'),TE('raw_nickel'),TE('nickel_ore'))
	dust_process('lead',	TE('lead_ingot'),	TE('lead_nugget'),	TE('lead_dust'),	TE('raw_lead'),TE('lead_ore'))
	dust_process('iron',	MC('iron_ingot'),	MC('iron_nugget'),	TE('iron_dust'),	MC('raw_iron'),MC('iron_ore'))
	dust_process('gold',	MC('gold_ingot'),	MC('gold_nugget'),	TE('gold_dust'),	MC('raw_gold'),MC('gold_ore'))
	dust_process('copper',	MC('copper_ingot'),CR('copper_nugget'),TE('copper_dust'),MC('raw_copper'),MC('copper_ore'))
	dust_process('zinc',	CR('zinc_ingot'),	CR('zinc_nugget'),	KJ('zinc_dust'),	CR('raw_zinc'),CR('zinc_ore'))
	dust_process('tin',	TE('tin_ingot'),	TE('tin_nugget'),	TE('tin_dust'),	TE('raw_tin'),TE('tin_ore'))
	dust_process('silver',	TE('silver_ingot'),	TE('silver_nugget'),	TE('silver_dust'),	TE('raw_silver'),TE('silver_ore'))

}



function brassAge(event){
  let dust = KJ('brass_dust')
  let nugget = CR('brass_nugget')
  let ingot = CR('brass_ingot')
  let fluid = KJ('molten_brass')
  
  event.remove({input: [MC('copper_ingot'),CR('zinc_ingot')], output:CR('brass_ingot')})

  event.recipes.create.mixing([KJ('brass_dust'),Item.of(KJ('brass_dust')).withChance(0.25)],[TE('copper_dust'),KJ('zinc_dust')]).heated()


  //Ore Dust -> Nugget
  event.smelting(Item.of(nugget, 1), dust).cookingTime(80)
  event.recipes.create.splashing([Item.of(nugget, 1),Item.of(nugget, 1).withChance(0.5)], dust)

  //Liquid
  event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(fluid, 32)],dust).heated()
  event.recipes.create.filling(ingot,[Item.of(KJ('ingot_cast')),Fluid.of(fluid, 144)])



  event.recipes.create.mixing([CR('brass_nugget',2),Item.of(TE('rich_slag')).withChance(0.10)],[F('#nuggets/copper'),CR('zinc_nugget')]).heated()

  event.recipes.create.mixing([CR('brass_ingot',2),Item.of(TE('rich_slag')).withChance(0.30)],[MC('copper_ingot'),CR('zinc_ingot')]).heated()

  event.recipes.create.mixing([Fluid.of(KJ('molten_brass'),2000),Item.of(TE('rich_slag',2)).withChance(0.50)],[Fluid.of(KJ('molten_copper'),1000),Fluid.of(KJ('molten_zinc'),1000)]).heated()

}


function slagProcessing(event){
  event.remove({input: TE('slag'), output: TE('slag_block') })
  event.remove({input: MC('gravel'), output: TE('slag') })
  event.remove({input: TE('slag_block'), output: TE('slag') })
  fillCraft(event,TE('slag_block'),TE('slag'))

  event.shaped(MC('gravel'), [
		'AA',
		'AA',
	], {
		A: TE('slag'),
	})

  event.recipes.create.milling([Item.of(TE('sulfur_dust')).withChance(0.05),Item.of(KJ('coal_dust')).withChance(0.5)],TE('rich_slag'))
  event.recipes.create.crushing([Item.of(TE('sulfur_dust')).withChance(0.15),Item.of(KJ('coal_dust')).withChance(0.8)],TE('rich_slag'))


}

function miscRecipies(event){
  event.recipes.create.crushing(Item.of(MC('diamond')).withChance(0.01), MC('coal_block'))

  event.recipes.create.haunting([MC('crying_obsidian')], MC('obsidian')).processingTime(1250)
  event.recipes.create.crushing([CR('powdered_obsidian'),Item.of(MC('obsidian')).withChance(0.75)], MC('crying_obsidian'))


  event.recipes.create.haunting([MC('lapis_lazuli')], KJ('pure_apatite_crystal')).processingTime(1000)


}


function seeds(event){
  
}
  
function sandProcessing(event){
  //to unify
  event.recipes.create.splashing([Item.of(MC('clay_ball')).withChance(0.25)],CH('white_sand'))
  

  //
  //siftingRecipie(event,)
  event.recipes.create.splashing([Item.of(MC('clay_ball')).withChance(0.25)],CH('white_sand'))

}


function tuffProcessing(event){
  event.remove({input: MC('tuff'), type: 'create:crushing'}) 
  event.recipes.create.crushing(
    [
      Item.of(MC('flint')).withChance(0.25),
      Item.of(TE('iron_dust')).withChance(0.25),
      Item.of(TE('copper_dust')).withChance(0.15),
      Item.of(KJ('zinc_dust')).withChance(0.15),
      Item.of(TE('lead_dust')).withChance(0.10),
      Item.of(TE('gold_dust')).withChance(0.10),
    ],MC('tuff'))
}


function dimensionCrystals(event){
  event.remove({output: 'dimension_crystals:dimension_overworld' })
  event.remove({output: 'dimension_crystals:dimension_nether' })
  event.remove({output: 'dimension_crystals:dimension_end' })


  let incompleted_end = KJ('incomplete_dimension_end');

   event.recipes.create.sequenced_assembly([
    {item:'dimension_crystals:dimension_end',count:1,nbt:{Enchantments:[{}]}}
	], CR('sturdy_sheet'), [
		event.recipes.createDeploying(incompleted_end, [incompleted_end, TE('enderium_plate')]),
		event.recipes.createDeploying(incompleted_end, [incompleted_end, MC('end_crystal')]),
		event.recipes.createFilling(incompleted_end, [incompleted_end, Fluid.of(TE('ender'),1000)]),
		event.recipes.createFilling(incompleted_end, [incompleted_end, Fluid.of(KJ('molten_glass'),1000)]),
		event.recipes.createPressing(incompleted_end, incompleted_end),
	]).transitionalItem(incompleted_end).loops(1)

}


function moltenGlass(event){
  event.recipes.create.mixing([Fluid.of(KJ('molten_glass'), 1000)],F('#glass')).heated()
}

function trading(event) {
	let trade = (card_id, ingredient, output) => {
		event.recipes.thermal.press(output, [ingredient, card_id]).energy(1000)
	}

	global.trades.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				console.log(element)
				trade(KJ('trade_card_' + element), transaction.in, transaction.out)
			})
	});

	global.professions.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				console.log(transaction.in)
				trade(KJ('profession_card_' + element), transaction.in, transaction.out)
			})
	});
}


function explosionCrafting(event){
  event.custom({
    "type": "pneumaticcraft:explosion_crafting",
    "input": {
      "item": "minecraft:crying_obsidian"
    },
    "loss_rate": 25,
    "results": [
      {
        "item": "create:powdered_obsidian"
      }
    ]
  });

  event.custom({
    "type": "pneumaticcraft:explosion_crafting",
    "input": {
      "item": "minecraft:wheat"
    },
    "loss_rate": 50,
    "results": [
      {
        "item": "create:wheat_flour"
      }
    ]
  });
}

function pneumaticcraft(event){

  //Thermopneumatic processing alternatives
  event.smelting(PC('sourdough_bread'), PC('sourdough'))
  event.smoking(PC('sourdough_bread'), PC('sourdough'))
  event.campfireCooking(PC('sourdough_bread'), PC('sourdough'))
  event.recipes.create.mixing([Fluid.of(PC('yeast_culture'),1000)],[Fluid.of(MC('water'),1000), MC('sugar'),F('#mushrooms'),F('#dough')])
  event.recipes.create.mixing([PC('sourdough',8)],[Fluid.of(PC('yeast_culture'),1000),F('#dough',8)])

  let plantOils = [PC('vegetable_oil'),CRA('seed_oil'),CRA('flowing_seed_oil')]
  plantOils.forEach(oil =>{
    event.recipes.create.mixing([PC('salmon_tempura')],[Fluid.of(PC('vegetable_oil'),100),PC('raw_salmon_tempura')]).heated()
  })


  event.shaped(PC('refinery_output', 1), [
		'CSC',
		'GHG',
    'CSC'
	], {
		H: MC('hopper'),
		G: F('#glass'),
		C: CPC('compressed_iron_casing'),
		S: KJ('compressed_iron_sheet')
	})


  event.shaped(PC('refinery', 1), [
		'CSC',
		'RHR',
    'CSC'
	], {
		H: CR('smart_fluid_pipe'),
		R: CR('electron_tube'),
		C: CPC('compressed_iron_casing'),
		S: KJ('compressed_iron_sheet')
	})


  event.shaped(PC('uv_light_box', 1), [
		'AEA',
		'C P',
    'CDC'
	], {
		A: KJ('apatite_tube'),
		E: CR('electron_tube'),
		D: CR('depot'),
    P: PC('pressure_tube'),
		C: PC('ingot_iron_compressed')
	})

  event.shaped(PC('etching_tank', 1), [
		'OPO',
		'CTC',
    'CCC'
	], {
		O: CR('sturdy_sheet'),
		P: F('#glass_panes'),
		T: CR('fluid_tank'),
		C: PC('ingot_iron_compressed')
	})

  event.recipes.create.mixing([Fluid.of(PC('oil'), 10)],[MC('weeping_vines'),MC('twisting_vines'),KJ("coal_dust",2)]).heated()

  event.recipes.create.mixing([Fluid.of(KJ('sulphuric_acid'), 1000)],[Fluid.of(MC('water'),1000),TE('sulfur_dust',2)])
  event.recipes.create.mixing([Fluid.of(KJ('nitric_acid'), 1000)],[Fluid.of(KJ('sulphuric_acid'), 1000),TE('niter_dust',1)])
  event.recipes.create.mixing([Fluid.of(PC('etching_acid'), 1500)],[Fluid.of(KJ('nitric_acid'), 1000),TE('apatite_dust'),TE('iron_dust')]).heated()

  event.recipes.create.mixing([Fluid.of(PC('etching_acid'), 1000)],[Fluid.of(MC('water'),500),MC('gunpowder',2),MC('rotten_flesh',2),MC('spider_eye',2)]).heated()


  let incompleted_cap = KJ('incomplete_capacitor');

  event.recipes.create.sequenced_assembly([
   PC('capacitor')
 ], CR('copper_sheet'), [
   event.recipes.createDeploying(incompleted_cap, [incompleted_cap, CRA('copper_spool')]),
   event.recipes.createDeploying(incompleted_cap, [incompleted_cap, MC('redstone')]),
   event.recipes.createFilling(incompleted_cap, [incompleted_cap, Fluid.of(PC('plastic'),250)]),
 ]).transitionalItem(incompleted_cap).loops(1)

  let incompleted_transistor = KJ('incomplete_transistor');

  event.recipes.create.sequenced_assembly([
  PC('transistor')
], MC('gold_nugget'), [
  event.recipes.createDeploying(incompleted_transistor, [incompleted_transistor, CRA('iron_wire')]),
  event.recipes.createDeploying(incompleted_transistor, [incompleted_transistor, MC('redstone')]),
  event.recipes.createFilling(incompleted_transistor, [incompleted_transistor, Fluid.of(PC('plastic'),250)]),
]).transitionalItem(incompleted_transistor).loops(1)


let incompleted_pcb = KJ('incomplete_pcb');

event.recipes.create.sequenced_assembly([
PC('empty_pcb')
], CR('copper_sheet'), [
  event.recipes.createDeploying(incompleted_pcb, [incompleted_pcb, MC('gold_nugget')]),
  event.recipes.createDeploying(incompleted_pcb, [incompleted_pcb, MC('redstone')]),
  event.recipes.createFilling(incompleted_pcb, [incompleted_pcb, Fluid.of(PC('plastic'),250)]),
]).transitionalItem(incompleted_pcb).loops(1)



  //Pneumatic suit
  event.recipes.create.mechanical_crafting(PC('pneumatic_helmet', 1), [
    ' P ',
    'PMP',
    'PCP',
    ' P '
  ], {
    C: PC('compressed_iron_helmet'),
    M: KJ('microcontroller'),
    P: PC('air_canister'),
  })  

  event.recipes.create.mechanical_crafting(PC('pneumatic_chestplate', 1), [
    ' P ',
    'PMP',
    'RCR',
    'SPS'
  ], {
    C: PC('compressed_iron_chestplate'),
    M: KJ('microcontroller'),
    P: PC('air_canister'),
    R: PC('reinforced_air_canister'),
    S: KJ('compressed_iron_sheet')
  }) 

  event.recipes.create.mechanical_crafting(PC('pneumatic_leggings', 1), [
    'PMP',
    'PCP',
    'SPS'
  ], {
    C: PC('compressed_iron_leggings'),
    M: KJ('microcontroller'),
    P: PC('air_canister'),
    S: KJ('compressed_iron_sheet')
  })  

  event.recipes.create.mechanical_crafting(PC('pneumatic_boots', 1), [
    'PMP',
    'PCP',
    'S S'
  ], {
    C: PC('compressed_iron_boots'),
    M: KJ('microcontroller'),
    P: PC('air_canister'),
    S: KJ('compressed_iron_sheet')
  })  





event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 250,
    "tag": "forge:biodiesel"
  },
  "fluid_output": {
    "amount": 1000,
    "fluid": "pneumaticcraft:plastic"
  },
  "item_input": {
    "tag": "forge:dusts/coal"
  },
  "temperature": {
    "min_temp": 373
  }
})

event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 250,
    "tag": "forge:lpg"
  },
  "fluid_output": {
    "amount": 1000,
    "fluid": "pneumaticcraft:plastic"
  },
  "item_input": {
    "tag": "forge:dusts/coal"
  },
  "temperature": {
    "min_temp": 373
  }
})

event.shaped(PC('air_compressor', 1), [
  'III',
  'ISE',
  'IFI'
], {
  I: PC('ingot_iron_compressed'),
  E: PC('pressure_tube'),
  F: MC('furnace'),
  S: KJ('pneumatic_mechanism'),
})

//Compressed creativity

event.shaped(CPC('rotational_compressor', 1), [
  'IPI',
  'ECE',
  'OSO'
], {
  I: PC('ingot_iron_compressed'),
  P: CR('propeller'),
  C: CR('brass_casing'),
  E: PC('pressure_tube'),
  O: CR('cogwheel'),
  S: KJ('pneumatic_mechanism'),
})

event.shaped(CPC('compressed_air_engine', 1), [
  'CEC',
  'CPC',
  'CMC'
], {
  E: PC('pressure_tube'),
  P: CPC('engine_rotor'),
  C: CR('copper_sheet'),
  M: KJ('pneumatic_mechanism'),
})


event.shaped(CPC('air_blower', 1), [
  ' E ',
  'CMC',
  'SBS'
], {
  E: PC('pressure_tube'),
  B: MC('iron_bars'),
  C: CR('copper_casing'),
  M: KJ('pneumatic_mechanism'),
  S: CR('copper_sheet'),
})

event.shaped(CPC('industrial_air_blower', 1), [
  'SES',
  'CMC',
  'SBS'
], {
  E: PC('pressure_tube'),
  B: MC('iron_bars'),
  C: CPC('compressed_iron_casing'),
  M: KJ('pneumatic_mechanism'),
  S: PC('ingot_iron_compressed'),
})

}