/* global registerMonster */
/* global registerSource */
"use strict";

(function () {
	var sourceName = "Monster Manual",
		i, toAdd;

	registerSource(sourceName, true);

	toAdd = [
		[ "Aarakocra", 12 ],
		[ "Aboleth", 13 ],
		[ "Abominable Yeti", 306 ],
		[ "Acolyte", 342 ],
		[ "Adult Black Dragon", 88 ],
		[ "Adult Blue Dracolich", 84 ],
		[ "Adult Blue Dragon", 91 ],
		[ "Adult Brass Dragon", 105 ],
		[ "Adult Bronze Dragon", 108 ],
		[ "Adult Copper Dragon", 112 ],
		[ "Adult Gold Dragon", 114 ],
		[ "Adult Green Dragon", 94 ],
		[ "Adult Red Dragon", 98 ],
		[ "Adult Silver Dragon", 117 ],
		[ "Adult White Dragon", 101 ],
		[ "Air Elemental", 124 ],
		[ "Allosaurus", 79 ],
		[ "Ancient Black Dragon", 87 ],
		[ "Ancient Blue Dragon", 90 ],
		[ "Ancient Brass Dragon", 104 ],
		[ "Ancient Bronze Dragon", 107 ],
		[ "Ancient Copper Dragon", 110 ],
		[ "Ancient Gold Dragon", 113 ],
		[ "Ancient Green Dragon", 93 ],
		[ "Ancient Red Dragon", 97 ],
		[ "Ancient Silver Dragon", 116 ],
		[ "Ancient White Dragon", 100 ],
		[ "Androsphinx", 281 ],
		[ "Animated Armor", 19 ],
		[ "Ankheg", 21 ],
		[ "Ankylosaurus", 79 ],
		[ "Ape", 317 ],
		[ "Arcanaloth", 313 ],
		[ "Archmage", 342 ],
		[ "Assassin", 343 ],
		[ "Awakened shrub", 317 ],
		[ "Awakened tree", 317 ],
		[ "Axe beak", 317 ],
		[ "Azer", 22 ],
		[ "Baboon", 318 ],
		[ "Badger", 318 ],
		[ "Balor", 55 ],
		[ "Bandit Captain", 344 ],
		[ "Bandit", 343 ],
		[ "Banshee", 23 ],
		[ "Barbed Devil", 70 ],
		[ "Barlgura", 56 ],
		[ "Basilisk", 24 ],
		[ "Bat", 318 ],
		[ "Bearded Devil", 70 ],
		[ "Behir", 25 ],
		[ "Beholder Zombie", 316 ],
		[ "Beholder", 28 ],
		[ "Berserker", 344 ],
		[ "Black Bear", 318 ],
		[ "Black Dragon Wyrmling", 88 ],
		[ "Black Pudding", 241 ],
		[ "Blink dog", 318 ],
		[ "Blood hawk", 319 ],
		[ "Blue Dragon Wyrmling", 91 ],
		[ "Blue Slaad", 276 ],
		[ "Boar", 319 ],
		[ "Bone Devil", 71 ],
		[ "Bone Naga", 233 ],
		[ "Brass Dragon Wyrmling", 106 ],
		[ "Bronze Dragon Wyrmling", 109 ],
		[ "Brown Bear", 319 ],
		[ "Bugbear", 33 ],
		[ "Bugbear Chief", 33 ],
		[ "Bulette", 34 ],
		[ "Bullywug", 35 ],
		[ "Cambion", 36 ],
		[ "Camel", 320 ],
		[ "Carrion crawler", 37 ],
		[ "Cat", 320 ],
		[ "Centaur", 38 ],
		[ "Chain Devil", 72 ],
		[ "Chasme", 57 ],
		[ "Chimera", 39 ],
		[ "Chuul", 40 ],
		[ "Clay Golem", 168 ],
		[ "Cloaker", 41 ],
		[ "Cloud Giant", 154 ],
		[ "Cockatrice", 42 ],
		[ "Commoner", 345 ],
		[ "Constrictor Snake", 320 ],
		[ "Copper Dragon Wyrmling", 111 ],
		[ "Couatl", 43 ],
		[ "Crab", 320 ],
		[ "Crawling claw", 44 ],
		[ "Crocodile", 320 ],
		[ "Cult Fanatic", 345 ],
		[ "Cultist", 345 ],
		[ "Cyclops", 45 ],
		[ "Dao", 143 ],
		[ "Darkmantle", 46 ],
		[ "Death Dog", 321 ],
		[ "Death Knight", 47 ],
		[ "Death Tyrant", 29 ],
		[ "Death Slaad", 278 ],
		[ "Deep Gnome (Svirfneblin)", 164 ],
		[ "Deer", 321 ],
		[ "Demilich", 48 ],
		[ "Deva", 16 ],
		[ "Dire wolf", 321 ],
		[ "Displacer beast", 81 ],
		[ "Djinni", 144 ],
		[ "Doppelganger", 82 ],
		[ "Draft Horse", 321 ],
		[ "Dragon Turtle", 119 ],
		[ "Dretch", 57 ],
		[ "Drider", 120 ],
		[ "Drow Elite Warrior", 128 ],
		[ "Drow Mage", 129 ],
		[ "Drow Priestess of Lolth", 129 ],
		[ "Drow", 128 ],
		[ "Druid", 346 ],
		[ "Dryad", 121 ],
		[ "Duergar", 122 ],
		[ "Duodrone", 225 ],
		[ "Dust Mephit", 215 ],
		[ "Eagle", 322 ],
		[ "Earth Elemental", 124 ],
		[ "Efreeti", 145 ],
		[ "Elephant", 322 ],
		[ "Elk", 322 ],
		[ "Empyrean", 130 ],
		[ "Erinyes", 73 ],
		[ "Ettercap", 131 ],
		[ "Ettin", 132 ],
		[ "Faerie Dragon", 133 ],
		[ "Fire Elemental", 125 ],
		[ "Fire Giant", 154 ],
		[ "Fire Snake", 265 ],
		[ "Flameskull", 134 ],
		[ "Flesh Golem", 169 ],
		[ "Flumph", 135 ],
		[ "Flying Snake", 322 ],
		[ "Flying Sword", 20 ],
		[ "Fomorian", 136 ],
		[ "Frog", 322 ],
		[ "Frost Giant", 155 ],
		[ "Galeb duhr", 139 ],
		[ "Gargoyle", 140 ],
		[ "Gas Spore", 138 ],
		[ "Gelatinous Cube", 242 ],
		[ "Ghast", 148 ],
		[ "Ghost", 147 ],
		[ "Ghoul", 148 ],
		[ "Giant Ape", 323 ],
		[ "Giant Badger", 323 ],
		[ "Giant Bat", 323 ],
		[ "Giant Boar", 323 ],
		[ "Giant Centipede", 323 ],
		[ "Giant Constrictor Snake", 324 ],
		[ "Giant Crab", 324 ],
		[ "Giant Crocodile", 324 ],
		[ "Giant Eagle", 324 ],
		[ "Giant Elk", 325 ],
		[ "Giant Fire beetle", 325 ],
		[ "Giant Frog", 325 ],
		[ "Giant Goat", 326 ],
		[ "Giant Hyena", 326 ],
		[ "Giant Lizard", 326 ],
		[ "Giant Octopus", 326 ],
		[ "Giant Owl", 327 ],
		[ "Giant Poisonous Snake", 327 ],
		[ "Giant Rat", 327 ],
		[ "Giant Scorpion", 327 ],
		[ "Giant Sea Horse", 328 ],
		[ "Giant Shark", 328 ],
		[ "Giant Spider", 328 ],
		[ "Giant Toad", 329 ],
		[ "Giant Vulture", 329 ],
		[ "Giant Wasp", 329 ],
		[ "Giant Weasel", 329 ],
		[ "Giant Wolf Spider", 330 ],
		[ "Gibbering mouther", 157 ],
		[ "Githyanki Knight", 160 ],
		[ "Githyanki Warrior", 160 ],
		[ "Githzerai Monk", 161 ],
		[ "Githzerai Zerth", 161 ],
		[ "Glabrezu", 58 ],
		[ "Gladiator", 346 ],
		[ "Gnoll", 163 ],
		[ "Gnoll Fang of Yeenoghu", 163 ],
		[ "Gnoll Pack Lord", 163 ],
		[ "Goat", 330 ],
		[ "Goblin", 166 ],
		[ "Goblin Boss", 166 ],
		[ "Gold Dragon Wyrmling", 115 ],
		[ "Gorgon", 171 ],
		[ "Goristro", 59 ],
		[ "Gray Ooze", 243 ],
		[ "Gray Slaad", 277 ],
		[ "Green Dragon Wyrmling", 95 ],
		[ "Green Hag", 177 ],
		[ "Green Slaad", 277 ],
		[ "Grell", 172 ],
		[ "Grick", 173 ],
		[ "Grick Alpha", 173 ],
		[ "Griffon", 174 ],
		[ "Grimlock", 175 ],
		[ "Guard", 347 ],
		[ "Guardian Naga", 234 ],
		[ "Gynosphinx", 282 ],
		[ "Half-Ogre", 238 ],
		[ "Half-Red Dragon Veteran", 180 ],
		[ "Harpy", 181 ],
		[ "Hawk", 330 ],
		[ "Hell Hound", 182 ],
		[ "Helmed Horror", 183 ],
		[ "Hezrou", 60 ],
		[ "Hill Giant", 155 ],
		[ "Hippogriff", 184 ],
		[ "Hobgoblin", 186 ],
		[ "Hobgoblin Captain", 186 ],
		[ "Hobgoblin Warlord", 187 ],
		[ "Homunculus", 188 ],
		[ "Hook horror", 189 ],
		[ "Horned Devil", 74 ],
		[ "Hunter Shark", 330 ],
		[ "Hydra", 190 ],
		[ "Hyena", 331 ],
		[ "Ice Devil", 75 ],
		[ "Ice Mephit", 215 ],
		[ "Imp", 76 ],
		[ "Intellect Devourer", 191 ],
		[ "Invisible stalker", 192 ],
		[ "Iron Golem", 170 ],
		[ "Jackal", 331 ],
		[ "Jackalwere", 193 ],
		[ "Kenku", 194 ],
		[ "Killer whale", 331 ],
		[ "Knight", 347 ],
		[ "Kobold", 195 ],
		[ "Kraken", 197 ],
		[ "Kuo-toa Archpriest", 200 ],
		[ "Kuo-toa Whip", 200 ],
		[ "Kuo-toa", 199 ],
		[ "Lamia", 201 ],
		[ "Lemure", 76 ],
		[ "Lich", 202 ],
		[ "Lion", 331 ],
		[ "Lizard", 332 ],
		[ "Lizard King/Queen", 205 ],
		[ "Lizardfolk", 204 ],
		[ "Lizardfolk Shaman", 205 ],
		[ "Mage", 347 ],
		[ "Magma Mephit", 216 ],
		[ "Magmin", 212 ],
		[ "Mammoth", 332 ],
		[ "Manes", 60 ],
		[ "Manticore", 213 ],
		[ "Marid", 146 ],
		[ "Marilith", 61 ],
		[ "Mastiff", 332 ],
		[ "Medusa", 214 ],
		[ "Merfolk", 218 ],
		[ "Merrow", 219 ],
		[ "Mezzoloth", 313 ],
		[ "Mimic", 220 ],
		[ "Mind Flayer Arcanist", 222 ],
		[ "Mind Flayer", 222 ],
		[ "Minotaur Skeleton", 273 ],
		[ "Minotaur", 223 ],
		[ "Monodrone", 224 ],
		[ "Mud Mephit", 216 ],
		[ "Mule", 333 ],
		[ "Mummy Lord", 229 ],
		[ "Mummy", 228 ],
		[ "Myconid Adult", 232 ],
		[ "Myconid Sovereign", 232 ],
		[ "Myconid Sprout", 230 ],
		[ "Nalfeshnee", 62 ],
		[ "Needle Blight", 32 ],
		[ "Night Hag", 178 ],
		[ "Nightmare", 235 ],
		[ "Noble", 348 ],
		[ "Nothic", 236 ],
		[ "Nycaloth", 314 ],
		[ "Ochre Jelly", 243 ],
		[ "Octopus", 333 ],
		[ "Ogre Zombie", 316 ],
		[ "Ogre", 237 ],
		[ "Oni", 239 ],
		[ "Orc Eye of Gruumsh", 247 ],
		[ "Orc War Chief", 246 ],
		[ "Orc", 246 ],
		[ "Orog", 247 ],
		[ "Otyugh", 248 ],
		[ "Owl", 333 ],
		[ "Owlbear", 249 ],
		[ "Panther", 333 ],
		[ "Pegasus", 250 ],
		[ "Pentadrone", 226 ],
		[ "Peryton", 251 ],
		[ "Phase Spider", 334 ],
		[ "Piercer", 252 ],
		[ "Pit Fiend", 77 ],
		[ "Pixie", 253 ],
		[ "Planetar", 17 ],
		[ "Plesiosaurus", 80 ],
		[ "Poisonous Snake", 334 ],
		[ "Polar Bear", 334 ],
		[ "Poltergeist", 279 ],
		[ "Pony", 335 ],
		[ "Priest", 348 ],
		[ "Pseudodragon", 254 ],
		[ "Pteranodon", 80 ],
		[ "Purple Worm", 255 ],
		[ "Quadrone", 226 ],
		[ "Quaggoth Spore Servant", 230 ],
		[ "Quaggoth Thonot", 256 ],
		[ "Quaggoth", 256 ],
		[ "Quasit", 63 ],
		[ "Quipper", 335 ],
		[ "Rakshasa", 257 ],
		[ "Rat", 335 ],
		[ "Raven", 335 ],
		[ "Red Dragon Wyrmling", 98 ],
		[ "Red Slaad", 276 ],
		[ "Reef Shark", 336 ],
		[ "Remorhaz", 258 ],
		[ "Revenant", 259 ],
		[ "Rhinoceros", 336 ],
		[ "Riding Horse", 336 ],
		[ "Roc", 260 ],
		[ "Roper", 261 ],
		[ "Rug of Smothering", 20 ],
		[ "Rust monster", 262 ],
		[ "Saber-Toothed Tiger", 336 ],
		[ "Sahuagin Baron", 264 ],
		[ "Sahuagin Priestess", 264 ],
		[ "Sahuagin", 263 ],
		[ "Salamander", 266 ],
		[ "Satyr", 267 ],
		[ "Scarecrow", 268 ],
		[ "Scorpion", 337 ],
		[ "Scout", 349 ],
		[ "Sea Hag", 179 ],
		[ "Sea Horse", 337 ],
		[ "Shadow Demon", 64 ],
		[ "Shadow", 269 ],
		[ "Shambling Mound", 270 ],
		[ "Shield Guardian", 271 ],
		[ "Shrieker", 138 ],
		[ "Silver Dragon Wyrmling", 118 ],
		[ "Skeleton", 272 ],
		[ "Slaad Tadpole", 276 ],
		[ "Smoke Mephit", 217 ],
		[ "Solar", 18 ],
		[ "Spectator", 30 ],
		[ "Specter", 279 ],
		[ "Spider", 337 ],
		[ "Spined Devil", 78 ],
		[ "Spirit Naga", 234 ],
		[ "Sprite", 283 ],
		[ "Spy", 349 ],
		[ "Steam Mephit", 217 ],
		[ "Stirge", 284 ],
		[ "Stone Giant", 156 ],
		[ "Stone Golem", 170 ],
		[ "Storm Giant", 156 ],
		[ "Succubus/Incubus", 285 ],
		[ "Swarm of Bats", 337 ],
		[ "Swarm of Insects", 338 ],
		[ "Swarm of Poisonous Snakes", 338 ],
		[ "Swarm of Quippers", 338 ],
		[ "Swarm of Rats", 339 ],
		[ "Swarm of Ravens", 339 ],
		[ "Tarrasque", 286 ],
		[ "Thri-kreen", 288 ],
		[ "Thug", 350 ],
		[ "Tiger", 339 ],
		[ "Treant", 289 ],
		[ "Tribal Warrior", 350 ],
		[ "Triceratops", 80 ],
		[ "Tridrone", 225 ],
		[ "Troglodyte", 290 ],
		[ "Troll", 291 ],
		[ "Twig Blight", 32 ],
		[ "Tyrannosaurus Rex", 80 ],
		[ "Ultraloth", 314 ],
		[ "Umber hulk", 292 ],
		[ "Unicorn", 294 ],
		[ "Vampire Spawn", 298 ],
		[ "Vampire Spellcaster", 298 ],
		[ "Vampire Warrior", 298 ],
		[ "Vampire", 297 ],
		[ "Veteran", 350 ],
		[ "Vine Blight", 32 ],
		[ "Violet Fungus", 138 ],
		[ "Vrock", 64 ],
		[ "Vulture", 339 ],
		[ "Warhorse Skeleton", 273 ],
		[ "Warhorse", 340 ],
		[ "Water Elemental", 125 ],
		[ "Water weird", 299 ],
		[ "Weasel", 340 ],
		[ "Werebear", 208 ],
		[ "Wereboar", 209 ],
		[ "Wererat", 209 ],
		[ "Weretiger", 210 ],
		[ "Werewolf", 211 ],
		[ "White Dragon Wyrmling", 102 ],
		[ "Wight", 300 ],
		[ "Will-o'-Wisp", 301 ],
		[ "Winged Kobold", 195 ],
		[ "Winter Wolf", 340 ],
		[ "Wolf", 341 ],
		[ "Worg", 341 ],
		[ "Wraith", 302 ],
		[ "Wyvern", 303 ],
		[ "Xorn", 304 ],
		[ "Yeti", 305 ],
		[ "Yochlol", 65 ],
		[ "Young Black Dragon", 88 ],
		[ "Young Blue Dragon", 91 ],
		[ "Young Brass Dragon", 105 ],
		[ "Young Bronze Dragon", 108 ],
		[ "Young Copper Dragon", 112 ],
		[ "Young Gold Dragon", 115 ],
		[ "Young Green Dragon", 94 ],
		[ "Young Red Dragon", 98 ],
		[ "Young Red Shadow Dragon", 85 ],
		[ "Young Remorhaz", 258 ],
		[ "Young Silver Dragon", 118 ],
		[ "Young White Dragon", 101 ],
		[ "Yuan-ti Abomination", 308 ],
		[ "Yuan-ti Malison", 309 ],
		[ "Yuan-ti Pureblood", 310 ],
		[ "Zombie", 316 ],
	];

	for ( i = 0; i < toAdd.length; i++ ) {
		registerMonster(toAdd[i][0], sourceName, toAdd[i][1]);
	}
}());
