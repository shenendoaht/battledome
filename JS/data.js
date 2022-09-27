const items = {
  Coins: { name: "Coins", gp: 5, xp: 2 },
  Purse: { name: "Purse", gp: 11, xp: 2 },
  Ale: { name: "Ale", gp: 3, hp: 2, xp: 2 },
  Mead: { name: "Mead", gp: 7, hp: 4, xp: 3 },
  Scroll: { name: "Scroll", xp: 4 },
  Potion: { name: "Potion", hp: 5, xp: 2 },
  MegaPotion: { name: "Mega-Potion", hp: 15, xp: 5 },
  Apple: { name: "Apple", hp: 1, xp: 1 },
  Ticket: { name: "Ticket", gp: 20, xp: 10 },
  Arrows: { name: "Arrows", str: 4 },
  Ragdoll: { name: "Ragdoll", xp: 100 },
  Receipt: { name: "Receipt", xp: 7, gp: 9 },
  Bolts: { name: "Bolts", str: 5 },
  Key: { name: "Key", gp: 4, xp: 4 },
  ShinyRock: { name: "Shiny Rock", xp: 4 },
  TinyFish: { name: "Tiny Fish", gp: 4, xp: 4 },
  BigFish: { name: "Big Fish", gp: 4, xp: 4 },
  Sharky: { name: "Sharky", gp: 40, xp: 4 },
  Fishtank: { name: "Fishtank", gp: 40, xp: 20 },
  TreasureChest: { name: "Treasure Chest", gp: 50, xp: 50 },
};
const weapons = {
  TrainingSword: { name: "Training Sword", str: 4 },
  Dagger: { name: "Dagger", str: 6, gp: 10 },
  Bow: { name: "Bow", str: 12, gp: 15 },
  CrossBow: { name: "Cross Bow", str: 15, gp: 30 },
  Mace: { name: "Mace", str: 19, gp: 40 },
  Broadsword: { name: "Broadsword", str: 25, gp: 50 },
  InflatableBat: { name: "Inflatable Bat", str: 30, gp: 70 },
  MagicStick: { name: "Magic Stick", str: 100, def: 100 },
};

const armor = {
  LeatherGloves: { name: "Leather Gloves", def: 2 },
  FlipFlops: { name: "Flip Flops", def: 1, xp: 2, gp: 15 },
  Helm: { name: "Helm", def: 3, xp: 2 },
  Shield: { name: "Shield", def: 4, xp: 5 },
  Gauntlet: { name: "Gauntlet", def: 6, xp: 10, gp: 20 },
  Chainmail: { name: "Chainmail", def: 8, xp: 10, gp: 30 },
  BowlingShoes: { name: "Bowling Shoes", def: 10, xp: 10, gp: 40 },
  TopHat: { name: "Top Hat", def: 40, ab: 10, gp: 75 },
};

export { items, weapons, armor };
