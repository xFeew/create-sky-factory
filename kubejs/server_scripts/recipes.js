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
* Architects pallete
*/
let AP = (id, x) => MOD("architects_palette", id, x)

let LV = (id, x) => MOD("libvulpes", id, x)
/**
* Create
*/
let CR = (id, x) => MOD("create", id, x)
/**
* Create Enchantment Industry
*/
let CEI = (id, x) => MOD("create_enchantment_industry", id, x)
/**
* Create Sifter
*/
let CS = (id, x) => MOD("createsifter", id, x)
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
* Chiseled
*/
let CH = (id, x) => MOD("chipped", id, x)
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
let OC = (id, x) => MOD("occultism", id, x)
//

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), BOP('fir'), BOP('redwood'), BOP('cherry'), BOP('mahogany'), BOP('jacaranda'), BOP('palm'), BOP('willow'), BOP('dead'), BOP('magic'), BOP('umbran'), BOP('hellbark'), AP('twisted'), EG('poise')]

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
    console.log("Removing Recipes");

    removeRecipes(event);

    console.log("Registering Recipes");
    mechanism(event);
    createStuff(event);
    basicMechanismRecipes(event);
    sifting(event);
    farmersdelight(event);
    rubberMatters(event);
    andesiteAlloy(event);
    woodProcessing(event);
    oreProcessing(event);
    slagProcessing(event);
    seeds(event);
    console.log("Recipes Updated");

});

function removeRecipes(event){
    //remove the base recipies
    event.remove({ mod: "createsifter" });

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

    //Sand washing
    event.remove({input: 'minecraft:red_sand', output: 'minecraft:gold_nugget' })


    //Create stuff
    event.remove({output: 'create:cogwheel' })
    event.remove({output: 'create:large_cogwheel' })
    event.remove({output: 'create:mechanical_saw' })
    event.remove({output: 'create:mechanical_drill' })
    event.remove({output: 'create:mechanical_press' })
    event.remove({output: 'create:mechanical_mixer' })
    event.remove({output: 'create:encased_fan' })
    event.remove({output: 'create:millstone' })

    event.remove({output: 'create:spout' })
    event.remove({output: 'create:fluid_valve' })
    event.remove({output: 'create:mechanical_pump' })

    //Water power
    event.remove({output: 'create:water_wheel' })
    event.remove({output: 'create:large_water_wheel' })

    //Thermal stuff
    event.remove({output: 'thermal:saw_blade' })
    event.remove({output: 'thermal:drill_head' })
    event.remove({output: 'thermal:device_tree_extractor' })



    //Create Precision mechanism
    //event.remove({output: 'create:precision_mechanism'})

}

function mechanism(event){
  //Basic

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:basic_mechanism'),
	], MC('#wooden_slabs'), [
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', MC("iron_nugget")]),
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', CR("andesite_alloy")]),
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism', ['kubejs:incomplete_basic_mechanism', CR("andesite_alloy")])
	]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1)

    //Basic Crafting bench
  event.shapeless('1x kubejs:basic_mechanism', [CR('andesite_alloy'), F('#nuggets/iron'), MC('#wooden_slabs'), CR('cogwheel')])
	// event.shapeless(KJ('basic_mechanism', 1), [
	// 	' N ',
	// 	'AS ',
	// ], {
  //       A: CR('andesite_alloy'),
	//     N: F('#nuggets/iron'),
	//     S: MC('#wooden_slabs')
	// })

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
  //Precision
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
		' S ',
    ' B ',
    ' A '
	], {
    A: CR('andesite_casing'),
		B: KJ('basic_mechanism'),
		S: TE('saw_blade')
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
		' A ',
    ' B ',
    ' D '
	], {
    A: CR('andesite_casing'),
		B: KJ('basic_mechanism'),
		D: TE('drill_head')
	})

  //Press
  event.shaped(CR('mechanical_press', 1), [
		' A ',
    ' M ',
    ' B '
	], {
    A: CR('andesite_casing'),
		B: MC('iron_block'),
		M: KJ('basic_mechanism')
	})

  //Mixer
  event.shaped(CR('mechanical_mixer', 1), [
		' B ',
    ' C ',
    ' W '
	], {
    C: CR('andesite_casing'),
		W: CR('whisk'),
		B: KJ('basic_mechanism')
	})

  //Fan
  event.shaped(CR('encased_fan', 1), [
		' B ',
    ' C ',
    ' P '
	], {
    C: CR('andesite_casing'),
		P: CR('propeller'),
		B: KJ('basic_mechanism')
	})


  //Millstone
  event.shaped(CR('millstone', 1), [
    ' B ',
    ' C ',
    ' S '
  ], {
    B: KJ('basic_mechanism'),
    C: CR('andesite_casing'),
    S: F('#stone')
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

/**
* Sifting recipie
* @param output - Array of objects:
  {
    item:
    chance:
  }
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
		' P '
	], {
		W: MC('#planks'),
		A: CR('andesite_casing'),
		C: CR('cogwheel'),
		P: F('#stone'),
		S: MC('stick'),
	})

	//Andesite Mesh
	event.shaped(CS('andesite_mesh', 1), [
		'SSS',
		'SAS',
		'SSS'
	], {
		A: CR('andesite_alloy'),
		S: MC('stick'),
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

 // siftingRecipie(event,CS('andesite_mesh'),MC('gravel'),[{item:TE("iron_dust"),chance:0.1},{item:MC("flint"),chance:0.9}])
  siftingRecipie(event,CS('andesite_mesh'),MC('gravel'),
  [
    {item:TE("iron_dust",2),chance:0.12},
    {item:KJ("zinc_dust"),chance:0.08},
    {item:TE("copper_dust"),chance:0.08},
    {item:TE("gold_dust"),chance:0.02},
    {item:MC("flint"),chance:0.5}
  ],false)

  siftingRecipie(event,CS('string_mesh'),MC('sand'),
  [
    {item:MC("clay_ball"),chance:0.3},
    {item:MC("flint"),chance:0.05}
  ],true)

  siftingRecipie(event,CS('andesite_mesh'),MC('red_sand'),
  [
    {item:TE("gold_dust"),chance:0.1},
    {item:MC("dead_bush"),chance:0.05},
  ],true)
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
  // let planks = [MC('oak_planks'), MC('spruce_planks'), MC('birch_planks'), MC('jungle_planks'), MC('acacia_planks'), MC('dark_oak_planks'), MC('crimson_planks'), MC('warped_planks')]

  // for(var i=0; i<planks.length;i++){
  //   let sawdust =  Item.of(TE('sawdust')).withChance(0.25)
  //   event.replaceOutput({type:"create:cutting"}, planks[i], [planks[i],sawdust])
  // }

  //event.recipes.create.cutting([MC('#planks'), Item.of(TE('sawdust')).withChance(0.25),Item.of(TE('sawdust')).withChance(0.25)], MC('#logs'))
}

function oreProcessing(event){
  //Remove existing ore recipies
  //event.remove({input: 'minecraft:iron_nugget', output: 'create:andesite_alloy' })
  event.remove({input: TE('iron_dust'), output: MC('iron_ingot') })
  event.remove({input: TE('copper_dust'), output: MC('copper_ingot') })
  event.remove({input: TE('gold_dust'), output: MC('gold_ingot') })


  //Blasting
  event.smelting(MC('iron_nugget'),TE('iron_dust'))
  event.smelting(CR('zinc_nugget'),KJ('zinc_dust'))
  event.smelting(CR('copper_nugget'),TE('copper_dust'))
  event.smelting(MC('gold_nugget'),TE('gold_dust'))
  //event.smelting([CR('zinc_nugget'),CR('zinc_nugget')],KJ('zinc_dust'))
 // event.smelting([MC('gold_nugget'),MC('gold_nugget')],KJ('gold_dust'))
 // event.smelting([MC('copper_nugget'),MC('copper_nugget')],KJ('copper_dust'))

  //Washing
  event.recipes.create.splashing([MC('iron_nugget'),Item.of(MC('iron_nugget')).withChance(0.5)],TE('iron_dust'))
  event.recipes.create.splashing([CR('zinc_nugget'),Item.of(CR('zinc_nugget')).withChance(0.5)],KJ('zinc_dust'))
  event.recipes.create.splashing([MC('gold_nugget'),Item.of(MC('gold_nugget')).withChance(0.5)],TE('gold_dust'))
  event.recipes.create.splashing([CR('copper_nugget'),Item.of(CR('copper_nugget')).withChance(0.5)],TE('copper_dust'))

  //Iron ores
  event.remove({input: MC('#iron_ores'), output: [MC('iron_ingot')]})
  event.remove({input: F('#ores/iron'), output: [MC('iron_ingot')]})

  //Zinc orees
  event.remove({input: CR('#zinc_ores'), output: [CR('zinc_ingot')]})
  event.remove({input: F('#ores/zinc'), output: [CR('zinc_ingot')]})

  //Gold orees
  event.remove({input: MC('#gold_ores'), output: [MC('gold_ingot')]})
  event.remove({input: F('#ores/gold'), output: [MC('gold_ingot')]})
  
  //Copper orees
  event.remove({input: MC('#copper_ores'), output: [MC('copper_ingot')]})
  event.remove({input: F('#ores/copper'), output: [MC('copper_ingot')]})

  //Raw iron
  event.remove({input: MC('raw_iron'), output: [CR('crushed_raw_iron'),MC('iron_ingot')]})
  event.recipes.create.milling([CR('crushed_raw_iron',2),Item.of(CR('crushed_raw_iron')).withChance(0.33)],MC('raw_iron'))
  event.recipes.create.crushing([CR('crushed_raw_iron',3),Item.of(CR('crushed_raw_iron')).withChance(0.5)],MC('raw_iron'))

  //Raw zinc
  event.remove({input: CR('raw_zinc'), output: [CR('crushed_raw_zinc'),CR('zinc_ingot')]})
  event.recipes.create.milling([CR('crushed_raw_zinc',2),Item.of(CR('crushed_raw_zinc')).withChance(0.33)],CR('raw_zinc'))
  event.recipes.create.crushing([CR('crushed_raw_zinc',3),Item.of(CR('crushed_raw_zinc')).withChance(0.5)],CR('raw_zinc'))

  //Raw gold
  event.remove({input: MC('raw_gold'), output: [CR('crushed_raw_gold'),MC('gold_ingot')]})
  event.recipes.create.milling([CR('crushed_raw_gold',2),Item.of(CR('crushed_raw_gold')).withChance(0.33)],MC('raw_gold'))
  event.recipes.create.crushing([CR('crushed_raw_gold',3),Item.of(CR('crushed_raw_gold')).withChance(0.5)],MC('raw_gold'))

  //Raw copper
  event.remove({input: MC('raw_copper'), output: [CR('crushed_raw_copper'),MC('copper_ingot')]})
  event.recipes.create.milling([CR('crushed_raw_copper',2),Item.of(CR('crushed_raw_copper')).withChance(0.33)],MC('raw_copper'))
  event.recipes.create.crushing([CR('crushed_raw_copper',3),Item.of(CR('crushed_raw_copper')).withChance(0.5)],MC('raw_copper'))

  //Crushed raw iron
  event.remove({input: CR('crushed_raw_iron'), output: [MC('iron_ingot'),MC('iron_nugget')]})
  event.recipes.create.milling([TE('iron_dust',2),Item.of(TE('iron_dust')).withChance(0.20)],CR('crushed_raw_iron'))
  event.recipes.create.crushing([TE('iron_dust',3),Item.of(TE('iron_dust')).withChance(0.5)],CR('crushed_raw_iron'))
  
  //Crushed raw zinc
  event.remove({input: CR('crushed_raw_zinc'), output: [CR('zinc_ingot'),CR('zinc_nugget')]})
  event.recipes.create.milling([KJ('zinc_dust',2),Item.of(KJ('zinc_dust')).withChance(0.20)],CR('crushed_raw_zinc'))
  event.recipes.create.crushing([KJ('zinc_dust',3),Item.of(KJ('zinc_dust')).withChance(0.5)],CR('crushed_raw_zinc'))

  //Crushed raw gold
  event.remove({input: CR('crushed_raw_gold'), output: [MC('gold_ingot'),CR('gold_nugget')]})
  event.recipes.create.milling([TE('gold_dust',2),Item.of(TE('gold_dust')).withChance(0.20)],CR('crushed_raw_gold'))
  event.recipes.create.crushing([TE('gold_dust',3),Item.of(TE('gold_dust')).withChance(0.5)],CR('crushed_raw_gold'))

  //Crushed raw copper
  event.remove({input: CR('crushed_raw_copper'), output: [MC('copper_ingot'),CR('copper_nugget')]})
  event.recipes.create.milling([TE('copper_dust',2),Item.of(TE('copper_dust')).withChance(0.20)],CR('crushed_raw_copper'))
  event.recipes.create.crushing([TE('copper_dust',3),Item.of(TE('copper_dust')).withChance(0.5)],CR('crushed_raw_copper'))

  //Dust to molten
  event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(KJ('molten_iron'), 150)],TE('iron_dust')).heated()
  event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(KJ('molten_zinc'), 150)],KJ('zinc_dust')).heated()
  event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(KJ('molten_gold'), 150)],TE('gold_dust')).heated()
  event.recipes.create.mixing([Item.of(TE('slag')).withChance(0.33),Fluid.of(KJ('molten_copper'), 150)],TE('copper_dust')).heated()
  //Molten to ingot
  event.recipes.create.compacting(MC("iron_ingot"),Fluid.of(KJ('molten_iron'), 1000))
  event.recipes.create.compacting(CR("zinc_ingot"),Fluid.of(KJ('molten_zinc'), 1000))
  event.recipes.create.compacting(CR("gold_ingot"),Fluid.of(KJ('molten_gold'), 1000))
  event.recipes.create.compacting(MC("copper_ingot"),Fluid.of(KJ('molten_copper'), 1000))
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
}

function miscRecipies(event){
  event.recipes.create.crushing(Item.of(MC('diamond')).withChance(0.01), MC('coal_block'))
}


function seeds(event){
  event.custom({
    type: "createsifter:sifting",
    ingredients: [
      {
        item: "createsifter:string_mesh",
      },
      {
        item: "minecraft:dirt",
      }
    ],
    results: [
      {
        item: "minecraft:wheat_seeds",
        chance: 0.02,
      },
      {
        item: "minecraft:melon_seeds",
        chance: 0.02,
      },
      {
        item: "minecraft:pumpkin_seeds",
        chance: 0.02,
      },
      {
        item: "minecraft:beetroot_seeds",
        chance: 0.02,
      },
      {
        item: "minecraft:carrot",
        chance: 0.02,
      },
      {
        item: "minecraft:potato",
        chance: 0.02,
      },
      {
        item: "farmersdelight:onion",
        chance: 0.02,
      },
      {
        item: "farmersdelight:rice",
        chance: 0.02,
      },
      {
        item: "farmersdelight:cabbage_seeds",
        chance: 0.02,
      },
      {
        item: "farmersdelight:tomato_seeds",
        chance: 0.02,
      },
      {
        item: "minecraft:sweet_berries",
        chance: 0.02,
      },
      {
        item: "delightful:salmonberry_pips",
        chance: 0.02,
      }
    ],
    processingTime: 500,
    waterlogged: true
  });
  event.custom({
    type: "createsifter:sifting",
    ingredients: [
      {
        item: "createsifter:andesite_mesh",
      },
      {
        item: "minecraft:dirt",
      }
    ],
    results: [
      {
        item: "minecraft:wheat_seeds",
        chance: 0.05,
      },
      {
        item: "minecraft:melon_seeds",
        chance: 0.05,
      },
      {
        item: "minecraft:pumpkin_seeds",
        chance: 0.05,
      },
      {
        item: "minecraft:beetroot_seeds",
        chance: 0.05,
      },
      {
        item: "minecraft:carrot",
        chance: 0.05,
      },
      {
        item: "minecraft:potato",
        chance: 0.05,
      },
      {
        item: "farmersdelight:onion",
        chance: 0.05,
      },
      {
        item: "farmersdelight:rice",
        chance: 0.05,
      },
      {
        item: "farmersdelight:cabbage_seeds",
        chance: 0.05,
      },
      {
        item: "farmersdelight:tomato_seeds",
        chance: 0.05,
      },
      {
        item: "minecraft:sweet_berries",
        chance: 0.05,
      },
      {
        item: "delightful:salmonberry_pips",
        chance: 0.05,
      }
    ],
    processingTime: 500,
    waterlogged: true
  });
  }
  