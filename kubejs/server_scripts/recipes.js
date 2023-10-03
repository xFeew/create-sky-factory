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
let TC = (id, x) => MOD("tconstruct", id, x)
/**
* Minecraft
*/
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
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


ServerEvents.recipes((event) => {
    console.log("Removing Recipes");
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

    console.log("Registering Recipes");
    sifting(event);
    farmersdelight(event);
    rubberMatters(event);
    andesiteAlloy(event);
    oreProcessing(event);
    console.log("Recipes Updated");
});




function sifting(event) {
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
          {
            item: "createsifter:andesite_mesh",
          },
          {
            item: "minecraft:gravel",
          },
        ],
        results: [
          {
            item: "minecraft:iron_dust",
            chance: 0.1,
          },
          {
            item: "minecraft:flint",
            chance: 0.9,
          },
        ],
        processingTime: 500,
    });
  
  
    event.custom({
  "type": "createsifter:sifting",
  "ingredients": [
    {
      "item": "minecraft:sand"
    },
    {
      "item": "createsifter:string_mesh"
    }
  ],
  "processingTime": 500,
  "results": [
    {
      "chance": 0.3,
      "item": "minecraft:clay_ball"
    },
    {
      "chance": 0.05,
      "item": "minecraft:flint"
    },
  ],
  "waterlogged": true
});
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

	event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), F("#vines", 4)])
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


function oreProcessing(event){
  //Remove existing ore recipies
  //event.remove({input: 'minecraft:iron_nugget', output: 'create:andesite_alloy' })
  //event.remove({input: 'create:zinc_nugget', output: 'create:andesite_alloy' })


  //Mixer
  event.recipes.create.mixing(CR('andesite_alloy'),[MC('andesite'), AP('algal_brick'),MC('iron_nugget')])
  event.recipes.create.crushing(Item.of(MC('diamond')).withChance(0.01), MC('coal_block'))
  event.recipes.create.splashing([MC('iron_nugget'),Item.of(MC('iron_nugget')).withChance(0.5)],TE('iron_dust'))
}

