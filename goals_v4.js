// This is part of a version currently in development and may be changed at any time.

// Tags
var Item = {name: "Item", max: [25, 25, 20, 20, 20]}, 
Stat = {name: "Stat", max: [5, 5, 5, 5, 5]}, 
Action = {name: "Action", max: [20, 20, 20, 20, 20]}, 
Build = {name: "Build", max: [20, 20, 20, 20, 20]}, 
RareBiome = {name: "RareBiome", max: [0, 1, 2, 4, 6]}, 
Ocean = {name: "Ocean", max: [5, 5, 5, 5, 5]}, 
Village = {name: "Village", max: [0, 1, 2, 3, 4]}, 
Colour = {name: "Colour", max: [2, 2, 2, 2, 2]}, 
Never = {name: "Never", max: [5, 4, 3, 2, 1]}, 
Combat = {name: "Combat", max: [2, 10, 20, 20, 20]}, 
Overworld = {name: "Overworld", max: [25, 25, 24, 21, 18]}, 
Nether = {name: "Nether", max: [0, 2, 5, 10, 15]},
End = {name: "End", max: [0, 0, 0, 1, 5]};

var bingoList_v4 = [

// Very Easy (0)
[
	{name: "(32-64) Cobblestone", tags: [Item, Overworld]},	
	{name: "(32-64) Dirt", tags: [Item, Overworld]},	
	{name: "(32-64) Oak Wood Planks", antisynergy: ["OakPlanks"], frequency: 25, tags: [Item, Overworld]},	
	{name: "(32-64) Spruce Wood Planks", antisynergy: ["SprucePlanks"], frequency: 25, tags: [Item, Overworld]},	
	{name: "(32-64) Birch Wood Planks", antisynergy: ["BirchPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(32-64) Dark Oak Wood Planks", antisynergy: ["DarkOakPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(32-64) Acacia Wood Planks", antisynergy: ["AcaciaPlanks"], frequency: 25, tags: [Item, Overworld]},	
	{name: "(5-15) Oak Logs", antisynergy: ["OakLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Spruce Logs", antisynergy: ["SpruceLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Birch Logs", antisynergy: ["BirchLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Dark Oak Logs", antisynergy: ["DarkOakLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Acacia Logs", antisynergy: ["AcaciaLogs"], frequency: 25, tags: [Item, Overworld]},	
	{name: "(5-15) Redstone", antisynergy: ["Redstone"], frequency: 2, tags: [Item, Overworld]},	
	{name: "Lava Bucket", reactant: ["UseBuckets"], frequency: 4, tags: [Item]},	
	{name: "Milk Bucket", reactant: ["UseBuckets"], frequency: 4, tags: [Item, Overworld]},	
	{name: "Water Bucket", reactant: ["UseBuckets"], frequency: 4, tags: [Item, Overworld]},
	{name: "Bucket of Fish", reactant: ["UseBuckets"], frequency: 4, tooltiptext: "Can be any of the types of Fish", tooltipimg: "Goal Tooltip Images/FishBucket.jpg", tags: [Item, Ocean, Overworld]},	
	{name: "(16-32) Andesite", frequency: 3, tags: [Item, Overworld]},
	{name: "(16-32) Granite", frequency: 3, tags: [Item, Overworld]},
	{name: "(16-32) Diorite", frequency: 3, tags: [Item, Overworld]},
	{name: "Iron Block", antisynergy: ["IronBlocks"], frequency: 2, tags: [Item]},
	{name: "Gold Block", antisynergy: ["GoldBlocks"], frequency: 2, tags: [Item]},
	{name: "(5-25) Poppies & (5-25) Dandelions", tags: [Item, Overworld]},
	{name: "Level (5-7)", antisynergy: ["Level"], frequency: 2, tags: [Stat]},
	{name: "(2-5) Note Blocks", antisynergy: ["NoteBlocks"], frequency: 2, tags: [Item, Overworld]},
	{name: "(32-64) Leaves", tags: [Item, Overworld]},
	{name: "Build a (2-4)x(2-4)x(2-4) leaf cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/LeafCube.jpg", tags: [Action, Build, Overworld]},
	{name: "(2-4) Colours of Wool", antisynergy: ["WoolColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(8-16) Snowballs", tags: [Item, RareBiome, Overworld]},
	{name: "(2-4) Different Slabs", antisynergy: ["Slabs"], frequency: 2, tags: [Item]},
	{name: "(2-4) Different Stairs", antisynergy: ["Stairs"], frequency: 2, tags: [Item]},
	{name: "Diamond", tags: [Item]},
	{name: "(5-15) Rotten Flesh", antisynergy: ["RotFlesh"], frequency: 2, tags: [Item]},
	{name: "(10-32) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: ["Stone"], frequency: 2, tags: [Item, Overworld]},
	{name: "(1-5) Bread", antisynergy: ["Bread"], frequency: 2, tags: [Item, Overworld]},
	{name: "Hay Bale", antisynergy: ["HayBale"], frequency: 2, tags: [Item, Overworld]},
	{name: "Flower Pot", tags: [Item, Overworld]},
	{name: "(2-10) Feathers", antisynergy: ["Feathers"], frequency: 2, tags: [Item]},
	{name: "Sleep in a Bed", reactant: ["Sleep"], tags: [Action, Overworld]},
	{name: "(5-15) Charcoal", tags: [Item, Overworld]},
	{name: "(5-15) Coal", tags: [Item]},
	{name: "Fishing Rod", tags: [Item]},
	{name: "(2-5) Apples", tags: [Item, Overworld]},
	{name: "(32-64) Sticks", antisynergy: ["Sticks"], frequency: 2, tags: [Item]},
	{name: "(32-64) Kelp", tags: [Item, Ocean, Overworld]},
	{name: "(5-10) Oak Wood", antisynergy: ["OakWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Spruce Wood", antisynergy: ["SpruceWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Birch Wood", antisynergy: ["BirchWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Dark Oak Wood", antisyngitergy: ["DarkOakWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Acacia Wood", antisynergy: ["AcaciaWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Stripped Oak Wood", antisynergy: ["StrippedOakWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Stripped Spruce Wood", antisynergy: ["StrippedSpruceWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Stripped Birch Wood", antisynergy: ["StrippedBirchWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Stripped Dark Oak Wood", antisynergy: ["StrippedDarkOakWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-10) Stripped Acacia Wood", antisynergy: ["StrippedAcaciaWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Stripped Oak Logs", antisynergy: ["StrippedOakLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Stripped Spruce Logs", antisynergy: ["StrippedSpruceLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Stripped Birch Logs", antisynergy: ["StrippedBirchLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Stripped Dark Oak Logs", antisynergy: ["StrippedDarkOakLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(5-15) Stripped Acacia Logs", antisynergy: ["StrippedAcaciaLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(2-10) Raw Cod", reactant: ["Pacifist"], antisynergy: ["RawCod"], frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "(2-5) Raw Salmon", reactant: ["Pacifist"], antisynergy: ["RawSalmon"], frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "(2-3) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: ["EdibleItems"], frequency: 2, tags: [Item]},
	{name: "Breed 1 set of Animals", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["BreedAnimals"], frequency: 2, tags: [Action, Stat]},
	{name: "Crouch a distance of (25-50) meters", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["CrouchDistance"], frequency: 2, tags: [Action, Stat]},
],

// Easy (1)
[
	{name: "(2-4) Different Fish", reactant: ["Pacifist"], tags: [Item, Overworld]},
	{name: "Grow a Tree in the Nether", tooltiptext: "The Huge Crimson/Warped fungi don't count", tags: [Action, Nether, Overworld]},
	{name: "(4-7) Colours of Terracotta", antisynergy: ["TerracottaColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(1-5) Mushroom Stew", tags: [Item]},
	{name: "Shoot a Button with an Arrow", tags: [Action]},
	{name: "Book and Quill", tags: [Item, Overworld]},
	{name: "(16-64) Flint", tags: [Item]},
	{name: "Cake", tags: [Item, Overworld]},
	{name: "Pumpkin Pie", tags: [Item, Overworld]},
	{name: "Fish a Treasure and a Junk item", tooltiptext: "Treasure: Bow, Enchanted Book, Name Tag, Nautilus Shell, Saddle. Junk: Lily Pad, Bowl, Leather, Boots, Rotten Flesh, Stick, Water Bottle, Bone, Ink Sac, Tripwire Hook", reactant: ["Fishing", "Pacifist"], tags: [Action, Overworld]}, 
	{name: "(16-64) Coarse Dirt", tags: [Item, Overworld]},
	{name: "(2-3) Clocks", tags: [Item, Overworld]},
	{name: "(2-4) Iron Blocks", antisynergy: ["IronBlocks"], frequency: 2, tags: [Item]},
	{name: "(2-3) Gold Blocks", antisynergy: ["GoldBlocks"], frequency: 2, tags: [Item]},
	{name: "Golden Apple", tags: [Item, Overworld]},
	{name: "(2-4) Bookshelves", tags: [Item]},
	{name: "Never wear Chestplates", catalyst: ["WearArmour"], tags: [Never]},
	{name: "Never use Shields", tags: [Never]},
	{name: "Jukebox", tags: [Item]},
	{name: "Build a 3x3x3 Glass cube and fill the middle with Lava", tags: [Action, Build, Overworld]},
	{name: "(16-32) Mossy Cobblestone", tags: [Item, Overworld, RareBiome]},
	{name: "(5-15) Cacti", tags: [Item, RareBiome, Overworld]},
	{name: "(1-3) TNT", tags: [Item, Overworld]},
	{name: "Level (8-15)", antisynergy: ["Level"], frequency: 2, tags: [Stat]},
	{name: "Create a Snow Golem", tags: [Action, RareBiome, Overworld]},
	{name: "(5-15) Note Blocks", antisynergy: ["NoteBlocks"], frequency: 2, tags: [Item, Overworld]},
	{name: "(5-15) Ink Sacs", reactant: ["Pacifist"], antisynergy: ["InkSacs"], frequency: 2, tags: [Item, Overworld]},
	{name: "(6-10) Bread", antisynergy: ["Bread"], frequency: 2, tags: [Item, Overworld]},
	{name: "(2-3) Hay Bales", antisynergy: ["HayBale"], frequency: 2, tags: [Item, Overworld]},
	{name: "(5-8) Colours of Wool", antisynergy: ["WoolColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(5-10) Pistons", tags: [Item, Overworld]},
	{name: "Full Iron Armour", frequency: 3, tags: [Item]},
	{name: "Full Leather Armour", frequency: 3, tags: [Item]},
	{name: "Full Gold Armour", frequency: 3, tags: [Item]},
	{name: "Fill a Cauldron with Water", tags: [Overworld]},
	{name: "Complete a Map", antisynergy: ["CompleteMap"], tags: [Action, Overworld]},
	{name: "(16-64) Soul Sand", tags: [Item, Nether]},
	{name: "(5-10) Pumpkins", tags: [Item, Overworld]},
	{name: "(2-5) Carved Pumpkins", tags: [Item, Overworld]},
	{name: "(10-30) Vines", tags: [Item, RareBiome, Overworld]},
	{name: "(5-7) Different Slabs", antisynergy: ["Slabs"], frequency: 2, tags: [Item]},
	{name: "Wooden, Gold, Iron and Diamond Sword", frequency: 2, antisynergy: ["EverySword"], tags: [Item]},
	{name: "Wooden, Gold, Iron and Diamond Pickaxe", frequency: 2, antisynergy: ["EveryPickaxe"], tags: [Item]},
	{name: "(16-64) Brick Blocks", tags: [Item, Overworld]},
	{name: "(16-32) Nether Brick Blocks", tags: [Item, Nether]},
	{name: "(16-64) Arrows", tags: [Item]},
	{name: "(Try to) Sleep in the Nether", tags: [Action, Nether, Overworld]},
	{name: "Fermented Spider Eye", tags: [Item, Overworld]},
	{name: "(5-7) Different Stairs", antisynergy: ["Stairs"], frequency: 2, tags: [Item]},
	{name: "(2-3) Ender Pearls", antisynergy: ["EnderPearl"], frequency: 2, tags: [Item]},
	{name: "16 Chicken Eggs", tags: [Item]},
	{name: "Hang up 3 Different 4x4 Paintings", tags: [Action, Overworld]},
	{name: "(5-10) Bone Blocks", tags: [Item]},
	{name: "2 Creepers in the same Boat", tooltiptext: "The 2 Creepers must be in the same boat at the same time", tooltipimg: "Goal Tooltip Images/2creepers1boat.jpg", tags: [Action, Combat, Overworld]},
	{name: "Trade with a Villager", tags: [Village, Action, Overworld]},
	{name: "(2-3) Different Coloured Shields", tags: [Item, Colour, Overworld]},
	{name: "Dead Bush", tags: [Item, RareBiome, Overworld]},
	{name: "(15-32) Grass", tooltiptext: "The tall stuff, NOT the block", tooltipimg: "Goal Tooltip Images/TallGrass.jpg", tags: [Item, Overworld]},
	{name: "Cyan Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Light Gray Dye and Light Blue Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Magenta Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Red Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Orange Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Yellow Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Green Dye", frequency: 10, tags: [Item, RareBiome, Overworld]},
	{name: "Pink Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Purple Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Lime Dye", frequency: 10, tags: [Item, Overworld]},
	{name: "Never Sleep", catalyst: ["Sleep"], tags: [Never, Action, Overworld]},
	{name: "Grow a Huge Mushroom", tags: [Action]},
	{name: "Water, Lava and Milk Bucket", antisynergy: ["BucketTypes"], reactant: ["UseBuckets"], tags: [Item, Overworld]},
	{name: "(3-6) Different Flowers", antisynergy: ["Flowers"], frequency: 3, tags: [Item, Overworld]},
	{name: "(3-6) Colours of Concrete", antisynergy: ["ConcreteColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(3-6) Colours of Glazed Terracotta", antisynergy: ["GlazedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(3-6) Colours of Beds", antisynergy: ["BedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "Finish where you spawned using a Compass", tooltiptext: "Be stood close enough to spin your compass within a couple blocks at the end of the game", tooltipimg: "Goal Tooltip Images/Compass.jpg", antisynergy: ["Finish"], tags: [Action, Overworld]},
	{name: "Build a Redstone AND Gate", tags: [Action, Overworld]},
	{name: "(32-64) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: ["Stone"], frequency: 2, tags: [Item, Overworld]},
	{name: "Kill (4-8) Animals with only fire", reactant: ["Pacifist"], tags: [Action, Combat]},
	{name: "Kill a Creeper with only fire", reactant: ["Pacifist"], tags: [Action, Combat, Overworld]},
	{name: "(32-64) Iron Nuggets", tags: [Item]},
	{name: "(32-64) Gold Nuggets", tags: [Item]},
	{name: "(16-32) Rotten Flesh", antisynergy: ["RotFlesh"], frequency: 2, tags: [Item]},
	{name: "(16-64) Redstone", antisynergy: ["Redstone"], frequency: 2, tags: [Item, Overworld]},
	{name: "Golden Carrot", tags: [Item, Overworld]},
	{name: "Rotten Flesh, Spider Eye, Bone, Gunpowder and Ender Pearl", tags: [Item, Overworld]},
	{name: "(32-64) Feathers", antisynergy: ["Feathers"], frequency: 2, tags: [Item]},
	{name: "(2-10) Lily Pads", tags: [Item, RareBiome, Overworld]},
	{name: "(65-128) Sticks", antisynergy: ["Sticks"], frequency: 2, tags: [Item]},
	{name: "Wear 4 different colour Leather Armour at the same time", reactant: ["WearArmour"], tags: [Item, Colour, Overworld]},
	{name: "(65-128) Oak Wood Planks", antisynergy: ["OakPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(65-128) Spruce Wood Planks", antisynergy: ["SprucePlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(65-128) Birch Wood Planks", antisynergy: ["BirchPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(65-128) Dark Oak Wood Planks", antisynergy: ["DarkOakPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(65-128) Acacia Wood Planks", antisynergy: ["AcaciaPlanks"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Oak Logs", antisynergy: ["OakLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Spruce Logs", antisynergy: ["SpruceLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Birch Logs", antisynergy: ["BirchLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Dark Oak Logs", antisynergy: ["DarkOakLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Acacia Logs", antisynergy: ["AcaciaLogs"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Oak Wood", antisynergy: ["OakWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Spruce Wood", antisynergy: ["SpruceWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Birch Wood", antisynergy: ["BirchWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Dark Oak Wood", antisynergy: ["DarkOakWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Acacia Wood", antisynergy: ["AcaciaWood"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Stripped Oak Wood", antisynergy: ["StrippedOakWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Stripped Spruce Wood", antisynergy: ["StrippedSpruceWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Stripped Birch Wood", antisynergy: ["StrippedBirchWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Stripped Dark Oak Wood", antisynergy: ["StrippedDarkOakWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(11-20) Stripped Acacia Wood", antisynergy: ["StrippedAcaciaWood"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Stripped Oak Logs", antisynergy: ["StrippedOakLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Stripped Spruce Logs", antisynergy: ["StrippedSpruceLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Stripped Birch Logs", antisynergy: ["StrippedBirchLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Stripped Dark Oak Logs", antisynergy: ["StrippedDarkOakLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(16-32) Stripped Acacia Logs", antisynergy: ["StrippedAcaciaLog"], reactant: ["AxeUse"], frequency: 25, tags: [Item, Overworld]},
	{name: "(15-32) Seagrass", tags: [Item, Ocean, Overworld]},
	{name: "(2-5) Tropical Fish", reactant: ["Pacifist"], tags: [Item, Ocean, Overworld]},
	{name: "(2-5) Pufferfish", reactant: ["Pacifist"], tags: [Item, Ocean, RareBiome, Overworld]},
	{name: "(15-32) Raw Cod", reactant: ["Pacifist"], antisynergy: ["RawCod"], frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "(11-20) Raw Salmon", reactant: ["Pacifist"], antisynergy: ["RawSalmon"], frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "Never use a Fishing Rod", catalyst: ["Fishing"], tags: [Never, Overworld]},
	{name: "Never use a Boat", tags: [Never, Overworld]},
	{name: "Get a Fish into the Nether", reactant: ["Pacifist"], tags: [Nether, Action, Overworld]},
	{name: "(11-20) Dried Kelp Blocks", antisynergy: ["KelpBlocks"], tags: [Item, Ocean, Overworld]},
	{name: "Drown a Zombie", tags: [Action, Combat, Overworld]},
	{name: "(2-5) Gunpowder", antisynergy: ["Gunpowder"], frequency: 2, tags: [Item]},
	{name: "(2-5) Spider Eyes", antisynergy: ["SpiderEye"], frequency: 2, tags: [Item, Overworld]},
	{name: "(4-5) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: ["EdibleItems"], frequency: 2, tags: [Item, Overworld]},
	{name: "Breed (2-4) sets of Animals", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["BreedAnimals"], frequency: 2, tags: [Action, Stat]},
	{name: "Crouch a distance of (50-100) meters", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["CrouchDistance"], frequency: 2, tags: [Action, Stat]},
	{name: "Never use Debug (F3)", tags: [Never]},
],

// Medium (2) 
[
	{name: "Wither Skull", reactant: ["Pacifist"], tags: [Item, Nether, Combat, RareBiome]},
	{name: "(6-7) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: ["EdibleItems"], frequency: 2, tags: [Item, Overworld]},
	{name: "(4-6) Different Gold Items", antisynergy: ["GoldItems"], tooltiptext: "Any item with 'Gold' in it's name (yes even ingots and ores)", tags: [Item]},
	{name: "Beetroot Soup", tags: [Item, Overworld]},
	{name: "Emerald", tags: [Item, Overworld]},
	{name: "Tame a Horse", tags: [Action, Overworld]},
	{name: "Place a Cactus in a Flower Pot", tags: [Action, RareBiome, Overworld]},
	{name: "Detonate a TNT-Minecart", tags: [Action, Overworld]},
	{name: "(10-30) Magma Blocks", tags: [Item]},
	{name: "Skull Charge Banner Pattern", tags: [Item, Nether, Combat, RareBiome, Overworld]},
	{name: "Damaged Anvil", tags: [Item]},
	{name: "(16-64) Melons (Slices)", tags: [Item, Overworld]},
	{name: "Sleep in a Villager's bed", reactant: ["Sleep"], tags: [Action, Village, Overworld]},
	{name: "Kill a Skeleton with it's own Arrow", reactant: ["Pacifist"], tags: [Action, Combat]},
	{name: "Never wear any Armour", catalyst: ["WearArmour"], tags: [Never]},
	{name: "Get a Skeleton's Bow", reactant: ["Pacifist"], tooltiptext: "Kill Skeletons until you get a rare drop from one, it being their Bow", tags: [Item, Combat]},
	{name: "Diamond Block", antisynergy: ["DiamondBlock"], frequency: 2, tags: [Item]},
	{name: "(2-3) Lapis Lazuli Blocks", tags: [Item, Overworld]},
	{name: "(2-5) Different Saplings", tags: [Item, Overworld]},
	{name: "Tame a Wolf", tags: [Action, RareBiome, Overworld]},
	{name: "6 Fire Charges", tags: [Item, Nether, Combat]},
	{name: "(1-3) Magma Cream", tags: [Item, Nether, Combat]},
	{name: "Create an Iron Golem", tags: [Action, Overworld]},
	{name: "Eye of Ender", tags: [Item, Nether, Combat]},
	{name: "Rabbit Stew", reactant: ["Pacifist"], tags: [Item, RareBiome, Overworld]},
	{name: "Potion of Fire Resistance", frequency: 12, tags: [Item, Nether, Combat]},
	{name: "Potion of Healing", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Poison", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Harming", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Regeneration", frequency: 12, tags: [Item, Nether, Combat]},
	{name: "Potion of Slowness", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Strength", frequency: 12, tags: [Item, Nether, Combat]},
	{name: "Potion of Swiftness", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Weakness", frequency: 12, tags: [Item, Nether, Overworld]},
	{name: "Potion of Leaping", frequency: 12, tags: [Item, Nether, RareBiome, Overworld]},
	{name: "Potion of Slow Falling", frequency: 12, tags: [Item, Nether, Combat, Overworld]},
	{name: "Potion of the Turtle Master", frequency: 12, tags: [Item, Nether, Ocean, Overworld]},
	{name: "Finish by jumping from top to bottom of the world", tooltiptext: "Dig a hole to bedrock, build to 256 Y (height limit), then jump from top to bottom at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTopToBottom.jpg", antisynergy: ["Finish"], tags: [Action, Overworld]},
	{name: "Vegetarian", tooltiptext: "Never eat meat, including fish", tooltipimg: "Goal Tooltip Images/NoFish.jpg", antisynergy: ["Food"], tags: [Never, Action]},
	{name: "Carnivore", tooltiptext: "Only eat meat", tooltipimg: "Goal Tooltip Images/NoBread.jpg", antisynergy: ["Food"], tags: [Never, Action]},
	{name: "Kill yourself with your own arrow", reactant: ["Death", "Pacifist"], tags: [Action]},
	{name: "Get a '... while trying to escape ...' Death message", tooltiptext: "Example: 'PLAYER' drowned while trying to escape a Skeleton", tooltipimg: "Goal Tooltip Images/EscapeMessage.jpg", reactant: ["Death"], tags: [Action]},
	{name: "Set fire to a Villager's House", tags: [Action, Village, Overworld]},
	{name: "Finish on top of the world", tooltiptext: "Build up to 256 Y (the height limit) and stand on the top at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTop.jpg", antisynergy: ["Finish"], tags: [Action]},
	{name: "Kill a hostile mob with Gravel", reactant: ["Pacifist"], antisynergy: ["KillFallingBlock"], frequency: 2, tags: [Action, Combat]},
	{name: "Kill a hostile mob with Sand", reactant: ["Pacifist"], antisynergy: ["KillFallingBlock"], frequency: 2, tags: [Action, Combat]},
	{name: "Put a Carpet on a Llama", tags: [RareBiome, Action, Overworld]},
	{name: "Activate a (4-6)x(4-6) Nether Portal (not counting corners)", tooltiptext: "Width/height of the obsidian frame, disregarding corners (or in other words, width/height of the - once activated - purple portal area).", tooltipimg: "Goal Tooltip Images/Portal.jpg", tags: [Action, Nether]},
	{name: "(5-15) Obsidian", tags: [Item]},
	{name: "(5-7) Iron Blocks", antisynergy: ["IronBlocks"], frequency: 2, tags: [Item]},
	{name: "(3-4) Gold Blocks", antisynergy: ["GoldBlocks"], frequency: 2, tags: [Item]},
	{name: "Daylight Detector", tags: [Item, Overworld]},
	{name: "Enchanted Golden Sword", tags: [Item]},
	{name: "(8-11) colours of Wool", antisynergy: ["WoolColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(8-11) Colours of Terracotta", antisynergy: ["TerracottaColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(7-10) Colours of Glazed Terracotta", antisynergy: ["GlazedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(7-10) Colours of Concrete", antisynergy: ["ConcreteColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(7-10) Colours of Beds", antisynergy: ["BedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "Power a Redstone Lamp", tags: [Action, Overworld]},
	{name: "(7-10) Different Flowers", antisynergy: ["Flowers"], frequency: 3, tags: [Item, Overworld]},
	{name: "Put a Zombified Piglin in Water", reactant: ["Pacifist"], tags: [Action, Nether, Overworld]},
	{name: "Place an Iron, Gold and Diamond block on top of each other", tags: [Action]},
	{name: "Kill a hostile mob with an Anvil", reactant: ["Pacifist"], tags: [Action, Combat]},
	{name: "Never Die", tooltiptext: "No death allowed, including if immediately caused by completing the last goal (e.g. inadvertently dying to the explosion of \"Detonate a TNT-Minecart\")", catalyst: ["Death"], tags: [Never]},
	{name: "Level (16-26)", antisynergy: ["Level"], frequency: 2, tags: [Stat]},
	{name: "(2-3) Different Seeds", antisynergy: ["Seeds"], tooltiptext: "Includes Nether Wart and Cocoa Beans", tags: [Item, RareBiome, Overworld]},
	{name: "Wear 4 Different Armour types at the same time",  tooltiptext: "Example: GOLD shoes, LEATHER Trousers, IRON Chestplate and DIAMOND Helmet", tooltipimg: "Goal Tooltip Images/4Armour.jpg", reactant: ["WearArmour"], tags: [Action]},
	{name: "Fill a Hopper with 320 items", tags: [Action, Item]},
	{name: "(16-32) Red Nether Brick Blocks", tags: [Item, Nether]},
	{name: "(16-32) Spectral Arrows", tags: [Item, Nether]},
	{name: "(33-64) Rotten Flesh", antisynergy: ["RotFlesh"], frequency: 2, tags: [Item]},
	{name: "(16-32) Ink Sacks", antisynergy: ["InkSacks"], frequency: 2, tags: [Item, Overworld]},
	{name: "(2-6) Slimeballs", tags: [Item, RareBiome, Overworld]},
	{name: "Use a Lead on a Rabbit", tags: [Action, RareBiome, Overworld]},
	{name: "Firework Star", tags: [Item, Overworld]},
	{name: "Hang a mob with a Lead", reactant: ["Pacifist"], tooltiptext: "Suspend a mob in mid air using some Fences and a Lead", tooltipimg: "Goal Tooltip Images/HangingLead.jpg", tags: [Action, RareBiome, Overworld]},
	{name: "Blaze Rod", reactant: ["Pacifist"], tags: [Item, Nether, Combat]},
	{name: "Ghast Tear", reactant: ["Pacifist"], tags: [Item, Nether, Combat]},
	{name: "Never use Coal", tooltiptext: "Never use Coal for any crafting recipes or fuel in a furnace, CAN use Charcoal", tooltipimg: "Goal Tooltip Images/NoCoal.jpg", tags: [Never]},
	{name: "(32-64) Glowstone Dust", tags: [Item, Nether]},
	{name: "(10-32) Item Frames", tags: [Item]},
	{name: "(3-4) Different Diamond Items", antisynergy: ["DiamondItems"], tooltiptext: "Any item with 'Diamond' in it's name (yes even itself)", tags: [Item]},
	{name: "(2-5) Prismarine Crystals", frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "Dig straight down to Bedrock from Sea level (1x1 hole)", tags: [Action, Overworld]},
	{name: "Never use a Sword", catalyst: ["SwordUse"], tooltiptext: "Never use a Sword for Combat or Block Breaking. Holding or crafting is fine.", tooltipimg: "Goal Tooltip Images/NoSword.jpg", tags: [Never]},
	{name: "Deplete an Iron Sword", reactant: ["SwordUse"], tooltiptext: "Use an Iron Sword until it breaks, check the 'items' statistics screen!" ,tooltipimg: "Goal Tooltip Images/SwordDepelete.jpg", tags: [Action, Stat]},
	{name: "Full Diamond Armour", tags: [Item]},
	{name: "Saddle", tags: [Item]},
	{name: "Give a mob a Hat", tags: [Action, Combat]},
	{name: "Clean a Pattern off a Banner", tags: [Action, Overworld]},
	{name: "Heart of the Sea", tags: [Item, Ocean, Overworld]},
	{name: "Phantom Membrane", reactant: ["Pacifist"], tags: [Item, Combat, Overworld]},
	{name: "Turtle Shell", tags: [Item, Ocean, Overworld]},
	{name: "Add a Marker to a Map", tags: [Action, Overworld]},
	{name: "Water, Lava, Milk and Fish Bucket", antisynergy: ["BucketTypes"], reactant: ["UseBuckets"], tooltiptext: "Can be any of the types of Fish", tooltipimg: "Goal Tooltip Images/FishBucket.jpg", tags: [Item, Overworld]},
	{name: "Leash a Dolphin to a Fence", tags: [Action, Ocean, RareBiome, Overworld]},
	{name: "(21-32) Dried Kelp Blocks", antisynergy: ["KelpBlocks"], tags: [Item, Ocean, Overworld]},
	{name: "(6-15) Gunpowder", antisynergy: ["Gunpowder"], frequency: 2, tags: [Item, Combat]},
	{name: "(6-15) Spider Eyes", antisynergy: ["SpiderEye"], frequency: 2, tags: [Item, Combat, Overworld]},
	{name: "(4-6) Ender Pearls", antisynergy: ["EnderPearl"], frequency: 2, tags: [Item, Combat]},
	{name: "Never use an Axe", catalyst: ["AxeUse"], tags: [Never]},
	{name: "Enchant an item", tags: [Action, Overworld]},
	{name: "Blue Shield with White Flower Charge Pattern", tags: [Item, Overworld]},
	{name: "Tame a Cat", tags: [Action, Village, Overworld]},
	{name: "Breed (5-7) sets of Animals", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["BreedAnimals"], frequency: 2, tags: [Action, Stat]},
	{name: "Crouch a distance of (100-200) meters", tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["CrouchDistance"], frequency: 2, tags: [Action, Stat]},
	{name: "Kill (75-100) mobs", reactant: ["Pacifist"], tooltiptext: "Check the 'general' statistics screen!", antisynergy: ["MobKills"], tags: [Action, Combat, Stat]},
	{name: "Enchanted item", tags: [Item]},
	{name: "(33-64) Seagrass", tags: [Item, Ocean, Overworld]},
	{name: "Kill an Iron Golem", reactant: ["Pacifist"], tags: [Action, Overworld]},
	{name: "Kill a mob with an End Crystal", reactant: ["Pacifist"], tags: [Action, Overworld, Nether, Combat]},
	{name: "Never Craft Sticks", tags: [Never, Overworld]}, // Overworld because can't get sticks in the Nether without crafting them
],

// Hard (3)
[
	{name: "Grass Block", tooltiptext: "If you don't have Silk Touch I know a guy who might pick one up for you...",tooltipimg: "Goal Tooltip Images/GrassBlock.jpg", tags: [Item, Overworld]},
	{name: "Create an Enchantment requiring level 10+", tags: [Action, Overworld]},
	{name: "Milk a Mooshroom", frequency: 2, tags: [Action, RareBiome, Overworld]},
	{name: "Shear a Mooshroom", frequency: 2, tags: [Action, RareBiome, Overworld]},
	{name: "(2-5) Sea Lanterns", tags: [Item, Ocean, Overworld]},
	{name: "Sponge", tooltiptext: "DRY Sponge, not a wet one", tooltipimg: "Goal Tooltip Images/Sponge.jpg", tags: [Item, Ocean, Overworld]},
	{name: "Bounce on a Slime Block", tooltiptext: "Get a Slime Block, place it on the ground and give it a good old bouncin' on", tooltipimg: "Goal Tooltip Images/SlimeBlock.jpg", tags: [Action, Overworld]},
	{name: "Listen to a Music Disc", tags: [Item]},
	{name: "(11-14) Different Flowers", antisynergy: ["Flowers"], frequency: 3, tags: [Item, RareBiome, Overworld]},
	{name: "(3-5) Diamond Blocks", antisynergy: ["DiamondBlock"], frequency: 2, tags: [Item]},
	{name: "Get a Zombified Piglin's Sword", reactant: ["Pacifist"], tooltiptext: "Kill Pigmen until you get a rare drop from one, it being their Golden Sword", tooltipimg: "Goal Tooltip Images/GoldenSword.jpg", tags: [Action, Combat, Nether]},
	{name: "Finish by launching Fireworks of (5-10) Different Colours", antisynergy: ["Finish"], tags: [Action, Item, Colour, Overworld]},
	{name: "Nametag an Enderman", tags: [Action, Combat, Overworld]},
	{name: "Kill yourself with an Ender Pearl", tooltiptext: "Need to die to the small fall damage taken from using a pearl", tooltipimg: "Goal Tooltip Images/EnderPearl.jpg", reactant: ["Death", "Pacifist"], tags: [Action]},
	{name: "Finish on top of a Blaze spawner", tooltiptext: "Be stood on top of a Blaze spawner at the end of the game", tooltipimg: "Goal Tooltip Images/BlazeSpawner.jpg", antisynergy: ["Finish"], tags: [Action, Nether, Combat]},
	{name: "(12-15) colours of Wool", antisynergy: ["WoolColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(12-15) Colours of Terracotta", antisynergy: ["TerracottaColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(11-14) Colours of Glazed Terracotta", antisynergy: ["GlazedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(11-14) Colours of Concrete", antisynergy: ["ConcreteColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "(11-14) Colours of Beds", antisynergy: ["BedColour"], frequency: 4, tags: [Item, Colour, Overworld]},
	{name: "Poison a Parrot", reactant: ["Pacifist"], frequency: 2, tags: [Action, RareBiome, Overworld]},
	{name: "Tame a Parrot", frequency: 2, tags: [Action, RareBiome, Overworld]},
	{name: "Ice Block on top of a Magma Block", tags: [Item, Nether, Action, Overworld]},
	{name: "Level (27-37)", antisynergy: ["Level"], frequency: 2, tags: [Stat]},
	{name: "Build a (2-4)x(2-4)x(2-4) Ice cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/IceCube.jpg", tags: [Action, Build, Overworld]},
	{name: "(4-5) Different Seeds", antisynergy: ["Seeds"], tooltiptext: "Includes Nether Wart and Cocoa Beans", tooltipimg: "Goal Tooltip Images/Seeds.jpg", tags: [Item, RareBiome, Overworld]},
	{name: "Finish on top of a stairway to Heaven", tooltiptext: "Using Stairs, build up to 256 Y (height limit) and stand on top at the end of the game (If you need to jump over a block it's not a finished stairway)", tooltipimg: "Goal Tooltip Images/FinishStairs.jpg", antisynergy: ["Finish"], tags: [Action, Overworld]},
	{name: "Never place Torches", tags: [Never]},
	{name: "Get a Ghast into the Overworld", tags: [Action, Nether, Overworld]},
	{name: "Enchanted Golden Apple", tags: [Item, Overworld]},
	{name: "Tame a Donkey", tags: [Action, Overworld]},
	{name: "Never wear Armour or use Shields", catalyst: ["WearArmour"], tags: [Never]},
	{name: "Kill a mob that is wearing Full Iron Armour", reactant: ["Pacifist"], tags: [Action, Combat]},
	{name: "Enchant 5 different items", tags: [Action]},
	{name: "Never use Buckets", catalyst: ["UseBuckets"], tags: [Never]},
	{name: "Conduit", tags: [Item, Ocean, Overworld]},
	{name: "(2-5) types of Dead Coral Blocks", tags: [Item, Ocean, RareBiome, Overworld]},
	{name: "(16-32) Sea Pickles", tags: [Item, Ocean, RareBiome, Overworld]},
	{name: "Trident", tags: [Item, Ocean, Combat, Overworld]},
	{name: "Get a '... didn't want to live in the same world as ...' Death message", reactant: ["Death"], tags: [Action]},
	{name: "Cookie", tags: [Item, Overworld]},
	{name: "Grow a Full Jungle Tree", tags: [Action, RareBiome, Overworld]},
	{name: "(2-10) Prismarine Shards", frequency: 2, tags: [Item, Ocean, Overworld]},
	{name: "(16-32) Jungle Logs", frequency: 4, tags: [Item, RareBiome, Overworld]},
	{name: "(11-20) Jungle Wood", frequency: 4, tags: [Item, RareBiome, Overworld]},
	{name: "(11-20) Stripped Jungle Wood", reactant: ["AxeUse"], frequency: 4, tags: [Item, RareBiome, Overworld]},
	{name: "(11-20) Stripped Jungle Logs", reactant: ["AxeUse"], frequency: 4, tags: [Item, RareBiome, Overworld]},
	{name: "(5-7) Different Diamond Items", antisynergy: ["DiamondItems"], tooltiptext: "Any item with 'Diamond' in it's name (yes even itself)", tags: [Item]},
	{name: "(7-8) Different Gold Items", antisynergy: ["GoldItems"], tooltiptext: "Any item with 'Gold' in it's name (yes even ingots and ores)", tags: [Item]},
	{name: "Destroy a Monster Spawner", tags: [Action, Combat]},
	{name: "(32-64) Popped Chorus Fruit", tags: [Item, End]},
	{name: "Get a villager into The End", tags: [Action, End, Village]},
	{name: "(5-16) Dragon's Breath", tags: [Item, Combat, End]},
	{name: "Dragon Egg", tags: [Item, Combat, End]},
	{name: "Complete a full size Map", antisynergy: ["CompleteMap"], tags: [Action, Overworld]},
	{name: "Be killed by a Villager", reactant: ["Death"], tooltiptext: "Sometimes you need to DISPENSE some DEFENCE", tags: [Village, Overworld, Stat, Combat]},
	{name: "Save yourself with a Totem of Undying", tags: [Item, Overworld]},
	{name: "Every type of Sword", frequency: 2, antisynergy: ["EverySword"], tooltiptext: "Wooden, Gold, Iron, Diamond and yes, even Netherite", tags: [Item, Nether]},
	{name: "Every type of Pickaxe", frequency: 2, antisynergy: ["EveryPickaxe"], tooltiptext: "Wooden, Gold, Iron, Diamond and yes, even Netherite", tags: [Item, Nether]},
	{name: "Pacifist", tooltiptext: "Never kill any creature", catalyst: ["Pacifist"], tags: [Never, Action]},
],

// Very Hard (4)
[
	{name: "(5-7) Different Ores (Silk Touch)", tooltiptext: "Coal, Diamond, Emerald, Gold, Iron, Lapis Lazuli, Nether Quartz, Nether Gold and Redstone ores are your choices", tooltipimg: "Goal Tooltip Images/Ores.jpg", tags: [Item, Overworld]},
	{name: "(7-9) Different Potions", tooltiptext: "Splash variants count! Even Lingering if you want to get crazy", tooltipimg: "Goal Tooltip Images/Potions.jpg", tags: [Item, Nether, Combat, Overworld]},
	{name: "Cure a Zombie Villager", tags: [Action, Overworld]},
	{name: "Every type of Chestplate", tooltiptext: "Leather, Gold, Chainmail, Iron, Diamond and yes, even Netherite", tooltipimg: "Goal Tooltip Images/chainmail chest.jpg", tags: [Item, Combat]},
	{name: "Nether Star", reactant: ["Pacifist"], tags: [Item, Nether, Combat]},
	{name: "Any mob head OTHER than a Wither Skeleton's", tooltiptext: "Dragon, Skeleton, Zombie or a Creeper Head. Wither Skeleton skulls do NOT count", tags: [Item, Combat, Overworld]},
	{name: "Every colour of Dye", reactant: ["Pacifist"], tooltiptext: "Black, Blue, Brown, Cyan, Grey, Green, Light Blue, Light Grey, Lime, Magenta, Orange, Pink, Purple, Red, White and Yellow!", tags: [Item, Colour, Overworld]},
	{name: "Level (38-50)", antisynergy: ["Level"], frequency: 2, tags: [Stat]},
	{name: "Fill a Double Chest with 3456 items", tags: [Item, Action]},
	{name: "(16-32) Tipped Arrows", tags: [Item, Nether, Overworld]},
	{name: "Place 1 of each Mineral block on top of each other", tooltiptext: "Coal, Iron, Gold, Diamond, Redstone, Lapis, Emerald, Quartz and Netherite blocks", tooltipimg: "Goal Tooltip Images/MineralBlocks.jpg", tags: [Item, Action, Overworld, Nether]},
	{name: "Sleep in a Woodland Mansion", tags: [Action, RareBiome, Overworld]},
	{name: "(10-32) Mycelium", tags: [Item, RareBiome, Overworld]},
	{name: "5 types of Coral Blocks", tooltiptext: "The alive stuff, not the Dead Coral Blocks", tooltipimg: "Goal Tooltip Images/CoralBlocks.jpg", tags: [Item, RareBiome, Ocean, Overworld]},
	{name: "(32-64) Blue Ice", tags: [Item, Overworld]},
	{name: "Fully power a Conduit", tags: [Item, Ocean, Action, Overworld]},
	{name: "Every item Diamonds are used to Craft", antisynergy: ["DiamondItems"], tooltiptext: "Block, Axe, Boots, Chestplate, Helmet, Hoe, Leggings, Pickaxe, Shovel, Sword, Enchantment Table, Firework Star and Jukebox", tags: [Item]},
	{name: "Get a Shulker into the Overworld", tags: [Action, Combat, End, Overworld]},
	{name: "(10-20) Diamond Blocks", antisynergy: ["DiamondBlock"], frequency: 2, tags: [Item]},
	{name: "Complete a full size Map in the End", antisynergy: ["CompleteMap"], tags: [Action, Overworld, End]},
]

];
