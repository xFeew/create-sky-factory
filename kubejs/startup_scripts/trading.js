// priority: 0
Platform.mods.kubejs.name = 'Create: Sky Factory'
// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let LV = (id, x) => MOD("libvulpes", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let CD = (id, x) => MOD("culturaldelights", id, x)
let RQ = (id, x) => MOD("xreliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let S = (id, x) => MOD("salt", id, x)
let AN = (id, x) => MOD("ars_nouveau", id, x)

//


StartupEvents.registry('item', event => {

	global.trades = []
	global.professions = []
	global.transactions = []

	let profession = (name, c1, c2, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
		event.create(`profession_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/profession_card")
			.texture("kubejs:item/profession_card_0")
			.displayName(`Profession: ${name}`)
			.unstackable()
	}

	let trade = (name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions[id] = transactions
		event.create(`trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/trade_card_0")
			.displayName((custom ? "" : "Import: ") + name)
			.unstackable()
	}

	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)

	profession("Farming", 0xFFCC29, 0x81B214, [
		{ in: CD('avocado_crate'), out: S(1) },
		{ in: CD('cucumber_crate'), out: S(1) },
		{ in: CD('pickle_crate'), out: S(1) },
		{ in: CD('corn_cob_crate'), out: S(1) },
		{ in: CD('eggplant_crate'), out: S(1) },
		{ in: CD('white_eggplant_crate'), out: S(1) },

		{ in: FD('carrot_crate'), out: S(1) },
		{ in: FD('potato_crate'), out: S(1) },
		{ in: FD('beetroot_crate'), out: S(1) },
		{ in: FD('cabbage_crate'), out: S(1) },
		{ in: FD('tomato_crate'), out: S(1) },
		{ in: FD('onion_crate'), out: S(1) },
		{ in: FD('rice_bag'), out: S(1) },
		{ in: FD('canvas', 32), out: S(1) },

		{ in: TE('apple_block'), out: S(1) },
		{ in: MC('sweet_berries', 8), out: S(1) },
		{ in: MC('cocoa_beans', 16), out: S(1) },
		{ in: MC('honey_bottle', 8), out: S(1) },
		{ in: MC('honeycomb', 4), out: S(1) },
		{ in: MC('dandelion', 16), out: S(1) },
		{ in: MC('poppy', 16), out: S(1) },
		{ in: MC('oxeye_daisy', 16), out: S(1) },
		{ in: MC('bread', 8), out: S(1) },
		{ in: MC('brown_mushroom', 8), out: S(1) },
		{ in: MC('red_mushroom', 8), out: S(1) },
		{ in: MC('kelp', 64), out: S(1) },
		{ in: MC('pumpkin', 9), out: S(1) },
		{ in: MC('#wool', 16), out: S(1) },
		{ in: MC('melon', 3), out: S(1) }
	])

	profession("Carpentry", 0xD0AF84, 0x966C3B, [
		{ in: MC('oak_log', 64), out: S(1) },
		{ in: MC('spruce_log', 64), out: S(1) },
		{ in: MC('jungle_log', 64), out: S(1) },
		{ in: MC('dark_oak_log', 64), out: S(1) },
		{ in: MC('acacia_log', 64), out: S(2) },
		{ in: MC('birch_log', 64), out: S(2) },
		{ in: MC('crimson_stem', 64), out: S(4) },
		{ in: MC('warped_stem', 64), out: S(4) },
		{ in: MC('mangrove_log', 64), out: S(4) },
		{ in: CD('avocado_log', 64), out: S(4) },
	])

	profession("Mining", 0x1C1124, 0x88FFF7, [
		{ in: MC('andesite', 64), out: S(1) },
		{ in: MC('granite', 64), out: S(1) },
		{ in: MC('diorite', 64), out: S(1) },
		{ in: MC('sandstone', 64), out: S(1) },
		{ in: CR('limestone', 64), out: S(1) },
		{ in: CR('gabbro', 64), out: S(1) },
		{ in: TE('cinnabar', 8), out: S(6) },
		{ in: TE('sulfur', 16), out: S(6) },
		{ in: TE('niter', 16), out: S(6) },
		{ in: MC('lapis_lazuli', 16), out: S(6) },
		{ in: TE('apatite', 16), out: S(4) },
		{ in: TE('sapphire', 1), out: S(10) },
		{ in: TE('ruby', 1), out: S(10) },
		{ in: MC('diamond', 1), out: S(14) },
		{ in: MC('coal', 16), out: S(2) },
	])

	profession("Masonry", 0x5E6F64, 0xBA7967, [
		{ in: SP('checker_block', 64), out: S(4) },
		{ in: AP('basalt_tiles', 64), out: S(6) },
		{ in: AP('sunmetal_block', 64), out: S(8) },
		{ in: AP('osseous_bricks', 64), out: S(6) },
		{ in: AP('packed_ice_pillar', 64), out: S(8) },
		{ in: AP('flint_tiles', 64), out: S(4) },
		{ in: AP('abyssaline', 64), out: S(12) },
		{ in: AP('gilded_sandstone', 64), out: S(10) },
		{ in: MC('bricks', 64), out: S(6) },
		{ in: AP('olivestone_bricks', 64), out: S(4) },
		{ in: MC('quartz_bricks', 64), out: S(18) },
		{ in: AP('algal_bricks', 64), out: S(6) },
		{ in: CR('ornate_iron_window', 64), out: S(10) },
		{ in: MC('mossy_cobblestone', 64), out: S(6) },
		{ in: SP('daub_brace', 64), out: S(8) }
	])

	profession("Hunting", 0x393E46, 0xCF0000, [
		{ in: MC('phantom_membrane'), out: S(8) },
		{ in: MC('rabbit_foot'), out: S(8) },
		{ in: MC('nether_star'), out: G(1) },
		{ in: MC('dragon_breath'), out: S(1) },
		{ in: MC('ghast_tear'), out: S(10) },
		{ in: MC('dragon_egg'), out: G(2) },
	])

	profession("Cooking", 0xD8B384, 0xF7DAD9, [
		{ in: CR('bar_of_chocolate', 16), out: S(4) },
		{ in: CR('honeyed_apple', 16), out: S(4) },
		{ in: CR('builders_tea', 16), out: S(4) },
		{ in: FD('hot_cocoa', 16), out: S(5) },
		{ in: FD('tomato_sauce', 8), out: S(3) },
		{ in: FD('apple_pie_slice', 16), out: S(3) },
		{ in: FD('chocolate_pie_slice', 16), out: S(4) },
		{ in: FD('sweet_berry_cheesecake_slice', 17), out: S(3) },
		{ in: FD('cake_slice', 14), out: S(3) },
		{ in: FD('sweet_berry_cookie', 64), out: S(2) },
		{ in: FD('honey_cookie', 64), out: S(2) },
		{ in: MC('cookie', 64), out: S(2) },
		{ in: FD('melon_popsicle', 16), out: S(7) },
		{ in: FD('fruit_salad', 16), out: S(7) },
		{ in: FD('mixed_salad', 16), out: S(9) },
		{ in: FD('nether_salad', 16), out: S(5) },
		{ in: FD('barbecue_stick', 16), out: S(6) },
		{ in: FD('egg_sandwich', 16), out: S(5) },
		{ in: FD('chicken_sandwich', 16), out: S(9) },
		{ in: FD('bacon_sandwich', 16), out: S(9) },
		{ in: FD('hamburger', 16), out: S(11) },
		{ in: FD('mutton_wrap', 16), out: S(10) },
		{ in: FD('dumplings', 16), out: S(7) },
		{ in: FD('stuffed_potato', 16), out: S(6) },
		{ in: FD('cabbage_rolls', 16), out: S(5) },
		{ in: FD('beef_stew', 16), out: S(8) },
		{ in: FD('chicken_soup', 16), out: S(9) },
		{ in: MC('rabbit_stew', 16), out: S(10) },
		{ in: MC('beetroot_soup', 16), out: S(7) },
		{ in: MC('pumpkin_pie', 16), out: S(6) },
		{ in: FD('vegetable_soup', 16), out: S(9) },
		{ in: SP('pancake', 32), out: S(4) },
		{ in: FD('fish_stew', 16), out: S(9) },
		{ in: FD('fried_rice', 16), out: S(8) },
		{ in: FD('pumpkin_soup', 16), out: S(12) },
		{ in: FD('baked_cod_stew', 16), out: S(9) },
		{ in: FD('noodle_soup', 16), out: S(9) },
		{ in: FD('pasta_with_meatballs', 16), out: S(10) },
		{ in: FD('pasta_with_mutton_chop', 16), out: S(10) },
		{ in: FD('roasted_mutton_chops', 16), out: S(9) },
		{ in: FD('vegetable_noodles', 16), out: S(10) },
		{ in: FD('steak_and_potatoes', 16), out: S(9) },
		{ in: FD('ratatouille', 16), out: S(9) },
		{ in: FD('squid_ink_pasta', 16), out: S(11) },
		{ in: FD('roast_chicken', 16), out: S(7) },
		{ in: FD('stuffed_pumpkin', 16), out: S(9) },
		{ in: FD('honey_glazed_ham', 16), out: S(7) },
		{ in: FD('shepherds_pie', 16), out: S(7) },
		{ in: AC('sushi', 16), out: S(3) },
		{ in: CR('sweet_roll', 16), out: S(4) }
	])

	let quota = 8
	profession("Fishing", 0x9DDFD3, 0xDBF6E9, [
		{ in: MC('cod', quota), out: S(1) },
		{ in: MC('salmon', quota), out: S(1) },
		{ in: MC('pufferfish', quota), out: S(1) },
		{ in: MC('tropical_fish', quota), out: S(1) },
		{ in: AC('atlantic_herring', quota), out: S(3) },
		{ in: AC('synodontis', quota), out: S(3) },
		{ in: AC('bluegill', quota), out: S(3) },
		{ in: AC('perch', quota), out: S(3) },
		{ in: AC('tambaqui', quota), out: S(3) },
		{ in: AC('minnow', quota), out: S(4) },
		{ in: AC('blackfish', quota), out: S(4) },
		{ in: AC('pink_salmon', quota), out: S(5) },
		{ in: AC('brown_trout', quota), out: S(5) },
		{ in: AC('carp', quota), out: S(5) },
		{ in: AC('pollock', quota), out: S(5) },
		{ in: AC('smallmouth_bass', quota), out: S(5) },
		{ in: AC('boulti', quota), out: S(5) },
		{ in: AC('red_shrooma', quota), out: S(5) },
		{ in: AC('brown_shrooma', quota), out: S(5) },
		{ in: AC('gar', quota), out: S(7) },
		{ in: AC('rainbow_trout', quota), out: S(7) },
		{ in: AC('bayad', quota), out: S(7) },
		{ in: AC('piranha', quota), out: S(7) },
		{ in: AC('jellyfish', quota), out: S(7) },
		{ in: AC('red_grouper', quota), out: S(7) },
		{ in: AC('atlantic_cod', quota), out: S(7) },
		{ in: AC('muskellunge', quota), out: S(8) },
		{ in: AC('pacific_halibut', quota), out: S(8) },
		{ in: AC('atlantic_halibut', quota), out: S(8) },
		{ in: AC('catfish', quota), out: S(10) },
		{ in: AC('capitaine', quota), out: S(10) },
		{ in: AC('tuna', quota), out: S(10) },
		{ in: AC('arapaima', quota), out: S(10) },
		{ in: AC('arrau_turtle', quota), out: S(10) },
		{ in: AC('box_turtle', quota), out: S(10) },
		{ in: AC('starshell_turtle', quota), out: S(10) },
		{ in: AC('goldfish', quota), out: S(10) },
		{ in: AC('neptunium_ingot', 5), out: S(16) }
	])

	profession("Smithing", 0xFFC93C, 0xFF7A00, [
		{ in: MC('iron_boots'), out: S(2) },
		{ in: MC('iron_leggings'), out: S(4) },
		{ in: MC('iron_chestplate'), out: S(4) },
		{ in: MC('iron_helmet'), out: S(3) },
		{ in: MC('golden_boots'), out: S(4) },
		{ in: MC('golden_leggings'), out: S(7) },
		{ in: MC('golden_chestplate'), out: S(8) },
		{ in: MC('golden_helmet'), out: S(5) },
		{ in: MC('golden_apple'), out: S(10) },
		{ in: MC('arrow', 32), out: S(3) },
		{ in: MC('iron_sword'), out: S(1) },
		{ in: MC('golden_sword'), out: S(2) }
	])

	trade("Exchange Currencies", 0xEBA83A, 0xF4F4F4, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) }
	], true)

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = KJ("trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_'))

		if (col > 7) {
			col = 0
			row++
		}

		let x = col - (group_max_width[group] - 1) / 2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${name}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "Silver" : "Gold"}"
			can_repeat: true
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
				consume_items: true
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "Repeatable"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		entry_cost = 10
		simple("Dirt", MC('dirt', 16), 2, S, 0x513825, 0xA87954)
		simple("Sand", MC('sand', 16), 4, S, 0xC2B289, 0xD8D6B9)
		simple("Gravel", MC('gravel', 16), 2, S, 0x686160, 0xA19393)
		simple("Clay", MC('clay', 16), 6, S, 0x878B95, 0x8E939D)
		simple("Ice", MC('ice', 16), 16, S, 0x7E99CF, 0xABB8D0)
		simple("Blackstone", MC('blackstone', 16), 12, S, 0x140E0F, 0x2D2831)
		simple("Cobblestone", MC('cobblestone', 16), 1, S, 0x585858, 0x646363)
		simple("Granite", MC('granite', 16), 3, S, 0x563A2F, 0x9A6C5B)
		simple("Diorite", MC('diorite', 16), 3, S, 0x7F7F7F, 0xD4D4D4)
		simple("Andesite", MC('andesite', 16), 3, S, 0x5F5F5F, 0x8E8E8E)
		simple("Deepslate", MC('deepslate', 16), 3, S, 0xA7A89E, 0xC0C2BA)
		simple("Dripstone", MC('dripstone_block', 16), 3, S, 0x5E6055, 0x797E74)
		simple("Calcite", MC('calcite', 16), 3, S, 0xC2C2C2, 0xDADADA)
		simple("Tuff", MC('tuff', 16), 3, S, 0x6B5D4F, 0x7D6B5A)
		simple("Scoria", CR('scoria', 16), 3, S, 0x2A130C, 0x553427)
		simple("Scorchia", CR('scorchia', 16), 3, S, 0x0D0706, 0x23201A)
		simple("Obsidian", MC('obsidian', 1), 8, S, 0x05030A, 0x36234C)
		
		next_group()
		entry_cost = 10
		simple("Oak Log", MC('oak_log', 16), 4, S, 0x735932, 0xA88756)
		simple("Birch Log", MC('birch_log', 16), 4, S, 0xD6D6D2, 0xC4B079)
		simple("Spruce Log", MC('spruce_log', 16), 4, S, 0x523E21, 0x6F522F)
		simple("Jungle Log", MC('jungle_log', 16), 4, S, 0x5A501D, 0x9B6E4C)
		simple("Acacia Log", MC('acacia_log', 16), 4, S, 0x4F4B42, 0x9E552E)
		simple("Dark Oak Log", MC('dark_oak_log', 16), 4, S, 0x2C1B0D, 0x422B15)
		simple("Crimson Stem", MC('crimson_stem', 16), 8, S, 0x442332, 0x7A3852)
		simple("Warped Stem", MC('warped_stem', 16), 8, S, 0x3E1E2D, 0x347776)
		
		next_group()
		entry_cost = 10
		simple("Iron Ingot", MC('iron_ingot', 8), 16, S, 0xA6A6A6, 0xD5D5D5)
		simple("Zinc Ingot", CR('zinc_ingot', 8), 16, S, 0x616A60, 0xD0D2C5)
		simple("Copper Ingot", MC('copper_ingot', 8), 16, S, 0xDD7E5D, 0xFCEFBA)
		simple("Nickel Ingot", TE('nickel_ingot', 8), 32, S, 0x977756, 0xE4D196)
		simple("Lead Ingot", TE('lead_ingot', 8), 32, S, 0x232456, 0x7C95A4)
		simple("Gold Ingot", MC('gold_ingot', 8), 48, S, 0xD99413, 0xFAF25E)
		
		simple("Andesite Alloy", CR('andesite_alloy', 16), 8, S, 0x505050, 0x878787)
		simple("Steel", "8x alloyed:steel_ingot", 16, S, 0x3E4644, 0xB8DAC8)
		simple("Brass Ingot", CR('brass_ingot', 8), 48, S, 0x6F3C2D, 0xFCF085)
		simple("Invar Ingot", TE('invar_ingot', 4), 64, S, 0x406D6C, 0xC3CAC1)
		
		entry_cost = 10
		simple("Coal", MC('coal', 16), 4, S, 0x1C1C1E, 0x383D45)
		simple("Flint", MC('flint', 16), 4, S, 0x3C3B3B, 0xA6A6A6)
		simple("Cinnabar", TE('cinnabar', 4), 16, S, 0xFC7781, 0xFCCED0)
		simple("Redstone Dust", MC('redstone', 16), 8, S, 0xA80F01, 0xFC7781)
		simple("Diamond", MC('diamond', 1), 1, G, 0x20C3B3, 0xD2FCF3)
		simple("Lapis Lazuli", MC('lapis_lazuli', 8), 32, S, 0x335DC1, 0x7395E7)
		simple("Emerald", MC('emerald', 1), 1, G, 0x00A82B, 0xADFACB)
		simple("Sulfur", TE('sulfur', 4), 8, S, 0xC7A94A, 0xEEF071)
		simple("Apatite", TE('apatite', 4), 16, S, 0x27A9BB, 0x2CC7C9)
		simple("Niter", TE('niter', 4), 8, S, 0x735A65, 0xB8AFAF)
		simple("Nether Quartz", MC('quartz', 8), 24, S, 0xB19E8F, 0xE7E2DB)
		simple("Cured Rubber", TE('cured_rubber', 6), 16, S, 0x3D363C, 0x594F55)
		
		next_group()
		entry_cost = 10
		simple("Scaffolding", MC('scaffolding', 16), 2, S, 0x7F5F41, 0xDDC683)
		simple("Wool", MC('white_wool', 1), 8, S, 0xBEC4C5, 0xE4E4E4)
		simple("Sponge", MC('sponge', 1), 16, S, 0x8F8234, 0xCDCF4A)
		simple("Cobweb", MC('cobweb', 1), 16, S, 0xC2CCCF, 0xFCFCFC)
		
		row += 4
		
		next_group()
		entry_cost = 10
		simple("Rice", FD('rice_bag', 1), 4, S, 0x9F7653, 0xCEC6BC)
		simple("Straw", FD('straw', 32), 8, S, 0x623A17, 0x966537)
		simple("Sugar Cane", MC('sugar_cane', 4), 3, S, 0x688546, 0xC5FC85)
		simple("Kelp", MC('kelp', 8), 3, S, 0x5B8131, 0x58A92F)
		simple("Bamboo", MC('bamboo', 8), 5, S, 0x4F7416, 0x88AC5F)
		simple("Sweet Berries", MC('sweet_berries', 8), 11, S, 0x27613F, 0xA30700)
		simple("Vines", MC('vine', 4), 7, S, 0x183D08, 0x317B10)
		simple("Tree Fertilizer", CR('tree_fertilizer', 1), 8, S, 0xCF8469, 0x71933A)
		
		next_group()
		entry_cost = 10
		simple("Daub", SP('daub', 16), 5, S, 0xBFBAAA, 0xCBC8B6)
		simple("Copper Shingles", CR('copper_shingles', 16), 3, S, 0xB5654B, 0xE4BB79)
		simple("Algal Bricks", AP('algal_bricks', 32), 6, S, 0x292926, 0x3D4D48)
		simple("Olivestone Bricks", AP('olivestone_bricks', 32), 8, S, 0x3A3C2E, 0x57553E)
		simple("Limestone", CR('limestone', 32), 8, S, 0x756958, 0x7F7360)
		simple("Sunmetal", AP('sunmetal_block', 32), 8, S, 0x603E38, 0xB48764)
		simple("Plating Block", AP('plating_block', 32), 8, S, 0x222225, 0x39383C)
		simple("Twisted Planks", AP('twisted_planks', 32), 8, S, 0x5E5259, 0x72616B)
		simple("Osseous Bricks", AP('osseous_bricks', 32), 8, S, 0x9D976F, 0xD3D0BF)
		
		next_group()
		entry_cost = 10
		simple("Slime Ball", MC('slime_ball', 4), 24, S, 0x4F7E48, 0x8AD480)
		simple("String", MC('string', 4), 5, S, 0x2E4446, 0xD8D8D8)
		simple("Feather", MC('feather', 4), 6, S, 0xD0D0D0, 0xFCFCFC)
		simple("Gunpowder", MC('gunpowder', 4), 7, S, 0x535353, 0x717171)
		simple("Leather", MC('leather', 4), 8, S, 0x873A25, 0xC45B34)
		simple("Ink Sac", MC('ink_sac', 4), 8, S, 0x493F49, 0x786470)
		simple("Experience", MC('experience_bottle', 1), 8, S, 0x689AC7, 0xFFF2FF)
		simple("Shulker Shell", MC('shulker_shell', 1), 2, G, 0x6B476A, 0x956895)
		simple("Spider Eye", MC('spider_eye', 4), 10, S, 0x64062A, 0xC25E6A)
		simple("Ender Pearl", MC('ender_pearl', 1), 48, S, 0x0B4C41, 0x2BCBAF)
		simple("Rotten Flesh", MC('rotten_flesh', 4), 3, S, 0xB24320, 0x695C18)
		simple("Blaze Rod", MC('blaze_rod', 1), 20, S, 0xAC3B00, 0xD5AC26)
		simple("Bone", MC('bone', 4), 8, S, 0xC9C4A3, 0xC9C4A3)
		simple("Prismarine Shard", MC('prismarine_shard', 4), 16, S, 0x2F6355, 0x8FC0AA)
		simple("Prismarine Crystals", MC('prismarine_crystals', 4), 24, S, 0x71A296, 0xDCE6D9)
		
		entry_cost = 10
		simple("Phantom Membrane", MC('phantom_membrane', 1), 48, S, 0x6E506B, 0xC1B79F)
		simple("Blaze Cake", CR('blaze_cake', 1), 16, S, 0x834141, 0xFCE083)
		simple("Wilden Wing", AN('wilden_wing', 1), 16, S, 0x372d24, 0x857b5a)
		next_group()


		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}

})
