import {
  players,
  displayPlayer,
  displayStats,
  renderTownPlayer,
  renderHousePlayer,
  renderBedPlayer,
  renderTavPlayer,
  renderInnPlayer,
  renderShopPlayer,
  renderArenaPlayer,
  renderQuadPlayer,
  renderArmoryPlayer,
  renderBattlePlayer,
  renderDockPlayer,
  renderForestPlayer,
  renderBridgePlayer,
  renderRiverPlayer,
  renderClearingPlayer,
  renderHutPlayer,
  renderHutIntPlayer,
  renderShipPlayer,
  renderHullPlayer,
  renderIslandPlayer,
  renderVillagePlayer,
  renderOutskirtPlayer,
  renderMtnPlayer,
  renderTemplePlayer,
  renderChampion,
  renderDeadPlayer,
} from "./js/players.js";
import { items, weapons, armor } from "./JS/data.js";
import { characters } from "./JS/char.js";
import { enemies } from "./JS/enemies.js";
import {
  landing,
  town,
  house,
  bedroom,
  shop,
  tavern,
  inn,
  arena,
  armory,
  quad,
  battledome,
  dock,
  forest,
  ship,
  hull,
  bridge,
  river,
  clearing,
  hut,
  hutInt,
  island,
  village,
  outskirt,
  mountain,
  temple,
  champion,
  hell,
  login,
} from "./JS/navs.js";

// NAV BTNS --------------------------------------------------------------------
document.getElementById("loginBtn").addEventListener("click", landing);
document.getElementById("loginBtn").addEventListener("touchend", landing);

document.getElementById("readyBtn").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("houseBtn").addEventListener("click", () => {
  house();
  renderHousePlayer();
});
document.getElementById("houseTownBtn").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("bedroomBtn").addEventListener("click", () => {
  bedroom();
  renderBedPlayer();
});
document.getElementById("downstairsBtn").addEventListener("click", () => {
  house();
  renderHousePlayer();
});
document.getElementById("shopBtn").addEventListener("click", () => {
  shop();
  renderShopPlayer();
});
document.getElementById("shopTownBtn").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("tavernBtn").addEventListener("click", () => {
  tavern();
  renderTavPlayer();
});
document.getElementById("tavTownBtn").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("innBtn").addEventListener("click", () => {
  if (players.Player1.inventory.Key) {
    inn();
    renderInnPlayer();
  } else if (players.Player1.gp >= 3) {
    players.Player1.gp -= 3;
    inn();
    renderInnPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).innerText = `Bartender: A Room at the Inn is 3 coins.`;
    setTimeout(endTavTalk, 2500);
  }
});
document.getElementById("innTavBtn").addEventListener("click", () => {
  tavern();
  renderTavPlayer();
});
document.getElementById("arenaBtn").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("arenaTownBtn").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("armoryBtn").addEventListener("click", () => {
  armory();
  renderArmoryPlayer();
});
document.getElementById("armoryExit").addEventListener("click", () => {
  arena();
  armoryLeave();
  renderArenaPlayer();
});
document.getElementById("quadBtn").addEventListener("click", () => {
  quad();
  renderQuadPlayer();
});
document.getElementById("quadExit").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("battledomeBtn").addEventListener("click", () => {
  battledome();
  renderBattlePlayer();
});
document.getElementById("bdExit").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("dockBtn").addEventListener("click", () => {
  dock();
  renderDockPlayer();
});
document.getElementById("forestBtn").addEventListener("click", () => {
  forest();
  renderForestPlayer();
});
document.getElementById("dockExit").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("forestDockBtn").addEventListener("click", () => {
  dock();
  renderDockPlayer();
});
document.getElementById("shipBtn").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("hullBtn").addEventListener("click", () => {
  hull();
  renderHullPlayer();
});
document.getElementById("hullExit").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("townDockBtn").addEventListener("click", () => {
  dock();
  renderDockPlayer();
});
document.getElementById("bridgeBtn").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("exitBridge").addEventListener("click", () => {
  forest();
  renderForestPlayer();
});
document.getElementById("riverBtn").addEventListener("click", () => {
  river();
  renderRiverPlayer();
});
document.getElementById("rvrBridgeBtn").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("clearingBtn").addEventListener("click", () => {
  clearing();
  renderClearingPlayer();
});
document.getElementById("clearingBridgeBtn").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("hutBtn").addEventListener("click", () => {
  hut();
  renderHutPlayer();
});
document.getElementById("hutClearingBtn").addEventListener("click", () => {
  clearing();
  renderClearingPlayer();
});
document.getElementById("enterHutBtn").addEventListener("click", () => {
  hutInt();
  renderHutIntPlayer();
});
document.getElementById("hutExitBtn").addEventListener("click", () => {
  hut();
  renderHutPlayer();
});
document.getElementById("islandBtn").addEventListener("click", () => {
  island();
  renderIslandPlayer();
});
document.getElementById("islandExit").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("villageBtn").addEventListener("click", () => {
  village();
  renderVillagePlayer();
});
document.getElementById("villageDockBtn").addEventListener("click", () => {
  island();
  renderIslandPlayer();
});
document.getElementById("outskirtBtn").addEventListener("click", () => {
  outskirt();
  renderOutskirtPlayer();
});
document.getElementById("villageReturn").addEventListener("click", () => {
  village();
  renderVillagePlayer();
});
document.getElementById("mtnBtn").addEventListener("click", () => {
  mountain();
  renderMtnPlayer();
});
document.getElementById("mtnExit").addEventListener("click", () => {
  outskirt();
  renderOutskirtPlayer();
});
document.getElementById("templeBtn").addEventListener("click", () => {
  temple();
  renderTemplePlayer();
});
document.getElementById("exitTemple").addEventListener("click", () => {
  mountain();
  renderMtnPlayer();
});
// ------------------------------------------
// PLAYER FUNCTIONS
// ------------------------------------------------------------------------------------
function killPlayer() {
  hell();
  renderDeadPlayer();
  players.Player1.name = "";
  players.Player1.level = 0;
  players.Player1.maxHP = 0;
  players.Player1.hp = 0;
  players.Player1.xp = 0;
  players.Player1.str = 0;
  players.Player1.def = 0;
  players.Player1.ab = 0;
  players.Player1.gp = 0;
  players.Player1.weapons = [];
  players.Player1.items = [];
  players.Player1.wins = [];
  players.Player1.alive = false;
  document.getElementById(
    "hellMsg"
  ).innerText = `${players.Player1.name}, you am ded.`;
}
function winGame() {
  champion();
  renderChampion();
}
function checkHP() {
  if (players.Player1.hp >= 1) {
    players.Player1.alive = true;
  } else {
    players.Player1.alive = false;
    killPlayer();
  }
}
function checkXP() {
  if (players.Player1.xp >= 50) {
    levelUP();
  }
}
function levelUP() {
  if (players.Player1.level >= 10) {
    winGame();
  } else {
    players.Player1.level += 1;
    players.Player1.xp = 0;
    players.Player1.ab += 5;
    players.Player1.str += 10;
    players.Player1.def += 10;
    players.Player1.maxHP += 10;
  }
}
function winMatch() {
  players.Player1.wins += 1;
  players.Player1.str += 1;
  players.Player1.ab += 1;
  players.Player1.def += 1;
  players.Player1.gp += 10;
  players.Player1.xp += 10;
  players.Player1.hp = players.Player1.maxHP;
}
function attackRoll(min = 1, max = players.Player1.str) {
  min = Math.ceil(1);
  max = Math.floor(players.Player1.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function defRoll(min = 1, max = players.Player1.def) {
  min = Math.ceil(1);
  max = Math.floor(players.Player1.def);
  return Math.floor(Math.random() * (max - min) + min);
}
function resetPlayer() {
  document.getElementById("playerDisplay").style.display = "none";
  document.getElementById("playerStats").innerText = "";
  document.getElementById("player-gen").style.display = "grid";
  document.getElementById("inputEl").value = "";
  document.getElementById("readyBtn").style.display = "none";
  login();
}
function rollMaxHP(min = 10, max = 20) {
  min = Math.ceil(10);
  max = Math.floor(20);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollStr(min = 1, max = 8) {
  min = Math.ceil(1);
  max = Math.floor(8);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollDef(min = 1, max = 6) {
  min = Math.ceil(2);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollAb(min = 1, max = 5) {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollStats() {
  players.Player1.maxHP = rollMaxHP();
  players.Player1.str = rollStr();
  players.Player1.def = rollDef();
  players.Player1.ab = rollAb();
}
document.getElementById("player-btn").addEventListener("click", () => {
  document.getElementById("stat-btn").style.display = "flex";
  document.getElementById("player-gen").style.display = "none";
  players.Player1.name = document.getElementById("inputEl").value;
  document.getElementById(
    "lander-msg"
  ).innerText = `${players.Player1.name}, roll your stats!`;
  players.Player1.level = 0;
  console.log(players.Player1);
  displayPlayer();
});
document.getElementById("stat-btn").addEventListener("click", () => {
  document.getElementById("stat-btn").style.display = "none";
  document.getElementById("readyBtn").style.display = "block";
  document.getElementById(
    "lander-msg"
  ).innerText = `${players.Player1.name}, you're ready!`;
  rollStats();
  players.Player1.hp = players.Player1.maxHP;
  console.log(players.Player1);
  displayStats();
  checkHP();
});
// ------------------------------------------------------------------------------------
// TOWN BTNS --------------------------------
function endTownTalk() {
  document.getElementById("townTalk").innerText = "";
}
function endTownMsg() {
  document.getElementById("townMsg").innerText = "";
}
document.getElementById("expTown").addEventListener("click", () => {
  document.getElementById("townCont").style.display = "flex";
});
document.getElementById("ftnBtn").addEventListener("click", () => {
  document.getElementById("coins").style.display = "block";
  document.getElementById("ftnBtn").style.display = "none";
  document.getElementById(
    "townMsg"
  ).innerText = `${players.Player1.name}, you found some coins!`;
  setTimeout(endTownMsg, 2000);
});
document.getElementById("coinBtn").addEventListener("click", () => {
  document.getElementById("coins").style.display = "none";
  players.Player1.gp += items.Coins.gp;
  players.Player1.xp += items.Coins.xp;
  players.Player1.items.push(items.Coins.name);
  players.Player1.inventory.push(items.Coins);
  checkXP();
  renderTownPlayer();
});
document.getElementById("monkBtn").addEventListener("click", () => {
  document.getElementById("townTalk").innerText = `${characters.Monk.name}: ${
    characters.Monk.quotes[
      Math.floor(Math.random() * characters.Monk.quotes.length)
    ]
  }`;
  setTimeout(endTownTalk, 5000);
});
document.getElementById("maidBtn").addEventListener("click", () => {
  document.getElementById("townTalk").innerText = `${characters.Maid.name}: ${
    characters.Maid.quotes[
      Math.floor(Math.random() * characters.Maid.quotes.length)
    ]
  }`;
  setTimeout(endTownTalk, 5000);
});

// HOUSE BTNS --------------------------------
function endHouseMsg() {
  document.getElementById("houseMsg").innerText = "";
}
document.getElementById("expHouse").addEventListener("click", () => {
  document.getElementById("expHouse").style.display = "none";
  document.getElementById("houseCont").style.display = "block";
  document.getElementById("food").style.display = "block";
  document.getElementById("houseMsg").innerText = `Look's delicious!`;
  setTimeout(endHouseMsg, 2000);
});
document.getElementById("foodBtn").addEventListener("click", () => {
  document.getElementById("food").style.display = "none";
  document.getElementById("houseMsg").innerText = `Mmm... what a feast!`;
  players.Player1.hp = players.Player1.maxHP;
  renderHousePlayer();
  setTimeout(endHouseMsg, 2000);
});
// BED BTNS --------------------------------
function endBedMsg() {
  document.getElementById("bedMsg").innerText = "";
}
function endBedTalk() {
  document.getElementById("bedTalk").innerText = "";
}
function renderInventory() {
  document.getElementById("inventory").style.display = "block";
  document.getElementById("bedItem").innerText =
    players.Player1.items.toString();
  document.getElementById("bedWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("bedArm").innerText =
    players.Player1.armor.toString();
  document.getElementById("bedWin").innerText = players.Player1.wins;
  document.getElementById("bedVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "bedTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
  setTimeout(endBedTalk, 5000);
}
function hideInventory() {
  document.getElementById("inventory").style.display = "none";
}
document.getElementById("restBtn").addEventListener("click", () => {
  players.Player1.hp = players.Player1.maxHP;
  document.getElementById(
    "bedMsg"
  ).innerText = `${players.Player1.name} had a resfreshing nap!`;
  renderBedPlayer();
  setTimeout(endBedMsg, 2000);
});
document.getElementById("expBed").addEventListener("click", () => {
  document.getElementById("bedCont").style.display = "block";
});
document.getElementById("inventoryBtn").addEventListener("click", () => {
  renderInventory();
});
document.getElementById("closeInventory").addEventListener("click", () => {
  hideInventory();
});
// SHOP BTNS --------------------------------
function endShopMsg() {
  document.getElementById("shopMsg").innerText = "";
}
function endShopTalk() {
  document.getElementById("shopTalk").innerText = "";
}
document.getElementById("expShop").addEventListener("click", () => {
  document.getElementById("shopCont").style.display = "block";
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.welcome[
      Math.floor(Math.random() * characters.Shopkeep.welcome.length)
    ]
  }`;
  setTimeout(endShopTalk, 4000);
});
document.getElementById("floorBtn").addEventListener("click", () => {
  document.getElementById(
    "shopMsg"
  ).innerText = `${players.Player1.name}, you found a receipt!`;
  document.getElementById("receipt").style.display = "block";
  document.getElementById("floorBtn").style.display = "none";
  setTimeout(endShopMsg, 4000);
});
document.getElementById("receiptBtn").addEventListener("click", () => {
  players.Player1.xp += items.Receipt.xp;
  players.Player1.items.push(items.Receipt.name);
  players.Player1.inventory.push(items.Receipt);
  document.getElementById("receipt").style.display = "none";
  renderShopPlayer();
});
document.getElementById("waresBtn").addEventListener("click", () => {
  document.getElementById("shopItems").style.display = "flex";
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.quotes[
      Math.floor(Math.random() * characters.Shopkeep.quotes.length)
    ]
  }`;
  setTimeout(endShopTalk, 4000);
});
document.getElementById("keyBtn").addEventListener("click", () => {
  if (players.Player1.gp >= items.Key.gp) {
    players.Player1.gp -= items.Key.gp;
    players.Player1.xp += items.Key.xp;
    players.Player1.items.push(items.Key.name);
    players.Player1.inventory.push(items.Key);
    document.getElementById("key").style.display = "none";
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.thanks[
        Math.floor(Math.random() * characters.Shopkeep.thanks.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
    renderShopPlayer();
  } else if (players.Player1.gp < items.Key.gp % 2) {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.threat[
        Math.floor(Math.random() * characters.Shopkeep.threat.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  } else {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.reject[
        Math.floor(Math.random() * characters.Shopkeep.reject.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  }
});
document.getElementById("ffBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.FlipFlops.gp) {
    players.Player1.gp -= armor.FlipFlops.gp;
    players.Player1.xp += armor.FlipFlops.xp;
    players.Player1.def += armor.FlipFlops.def;
    players.Player1.armor.push(armor.FlipFlops.name);
    players.Player1.inventory.push(armor.FlipFlops);
    document.getElementById("flipFlops").style.display = "none";
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.impress[
        Math.floor(Math.random() * characters.Shopkeep.impress.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
    renderShopPlayer();
  } else if (players.Player1.gp < armor.FlipFlops.gp % 2) {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.threat[
        Math.floor(Math.random() * characters.Shopkeep.threat.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  } else {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.reject[
        Math.floor(Math.random() * characters.Shopkeep.reject.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  }
});
document.getElementById("iBatBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.InflatableBat.gp) {
    players.Player1.gp -= weapons.InflatableBat.gp;
    players.Player1.str += weapons.InflatableBat.str;
    players.Player1.weapons.push(weapons.InflatableBat.name);
    players.Player1.inventory.push(weapons.InflatableBat);
    document.getElementById("inflatableBat").style.display = "none";
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.impress[
        Math.floor(Math.random() * characters.Shopkeep.impress.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
    renderShopPlayer();
  } else if (players.Player1.gp < weapons.InflatableBat.gp % 2) {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.threat[
        Math.floor(Math.random() * characters.Shopkeep.threat.length)
      ]
    }`;
    setTimeout(endShopTalk, 2000);
  } else {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.reject[
        Math.floor(Math.random() * characters.Shopkeep.reject.length)
      ]
    }`;
    setTimeout(endShopTalk, 2000);
  }
});
document.getElementById("fTankBtn").addEventListener("click", () => {
  if (players.Player1.gp >= items.Fishtank.gp) {
    players.Player1.gp -= items.Fishtank.gp;
    players.Player1.xp += items.Fishtank.xp;
    players.Player1.items.push(items.Fishtank.name);
    players.Player1.inventory.push(items.Fishtank);
    document.getElementById("fishTank").style.display = "none";
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.impress[
        Math.floor(Math.random() * characters.Shopkeep.impress.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
    renderShopPlayer();
  } else if (players.Player1.gp < items.Fishtank.gp % 2) {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.threat[
        Math.floor(Math.random() * characters.Shopkeep.threat.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  } else {
    document.getElementById("shopTalk").innerText = `${
      characters.Shopkeep.name
    }: ${
      characters.Shopkeep.reject[
        Math.floor(Math.random() * characters.Shopkeep.reject.length)
      ]
    }`;
    setTimeout(endShopTalk, 4000);
  }
});
// TAVERN BTNS --------------------------------
function endTavTalk() {
  document.getElementById("tavTalk").innerText = "";
}
function endTavMsg() {
  document.getElementById("tavMsg").innerText = "";
}
document.getElementById("expTav").addEventListener("click", () => {
  document.getElementById("tavCont").style.display = "block";
});
document.getElementById("bartenderBtn").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).textContent = `Bartender: Would you like a drink?`;
  document.getElementById("bar-choice").style.display = "flex";
});
document.getElementById("bar-yes").addEventListener("click", () => {
  if (players.Player1.gp >= items.Ale.gp) {
    document.getElementById("tavTalk").textContent = `Bartender: Here ya go!`;
    players.Player1.gp -= items.Ale.gp;
    document.getElementById("bar-choice").style.display = "none";
    document.getElementById("ale").style.display = "block";
    renderTavPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).textContent = `Bartender: This ale ain't free ya' know!`;
    document.getElementById("bar-choice").style.display = "none";
    setTimeout(endTavTalk, 4000);
  }
});
document.getElementById("bar-no").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).textContent = `Bartender: Let me know if you change your mind!`;
  document.getElementById("bar-choice").style.display = "none";
  setTimeout(endTavTalk, 2000);
});
document.getElementById("aleBtn").addEventListener("click", () => {
  document.getElementById("ale").style.display = "none";
  document.getElementById("tavTalk").textContent = `My goodness, my guiness!!`;
  players.Player1.items.push(items.Ale.name);
  players.Player1.inventory.push(items.Ale);
  players.Player1.hp -= items.Ale.hp;
  players.Player1.xp += items.Ale.xp;
  console.log(players.Player1);
  checkHP();
  checkXP();
  renderTavPlayer();
  setTimeout(endTavTalk, 4000);
});
document.getElementById("drunkBtn").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).textContent = `Drunkard: **grumble grumble** You wannna try some mead?`;
  document.getElementById("drunk-choice").style.display = "flex";
});
document.getElementById("drunk-yes").addEventListener("click", () => {
  if (players.Player1.gp >= items.Mead.gp) {
    document.getElementById(
      "tavTalk"
    ).textContent = `Drunkard: **grumble-hic** Careful...Thaz some strong shtuff... **hic**`;
    players.Player1.gp -= items.Mead.gp;
    document.getElementById("drunk-choice").style.display = "none";
    document.getElementById("mead").style.display = "block";
    renderTavPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).textContent = `Drunkard: **grumble** whadda yer thinkin bub? Coins furst!! **hic**`;
    document.getElementById("drunk-choice").style.display = "none";
    setTimeout(endTavTalk, 4000);
  }
});
document.getElementById("meadBtn").addEventListener("click", () => {
  document.getElementById("mead").style.display = "none";
  document.getElementById(
    "tavTalk"
  ).textContent = `Oooh....warm and tingly....`;
  players.Player1.items.push(items.Mead.name);
  players.Player1.inventory.push(items.Mead);
  players.Player1.hp -= items.Mead.hp;
  players.Player1.xp += items.Mead.xp;
  console.log(players.Player1);
  checkHP();
  checkXP();
  renderTavPlayer();
  setTimeout(endTavTalk, 4000);
});
document.getElementById("tableBtn").addEventListener("click", () => {
  document.getElementById("tableBtn").style.display = "none";
  document.getElementById("purse").style.display = "block";
  document.getElementById("tavMsg").textContent = `You found a purse!`;
  setTimeout(endTavMsg, 4000);
});
document.getElementById("purseBtn").addEventListener("click", () => {
  document.getElementById("tavMsg").textContent = "";
  document.getElementById("purse").style.display = "none";
  players.Player1.gp += items.Purse.gp;
  players.Player1.xp += items.Purse.xp;
  players.Player1.items.push(items.Purse.name);
  players.Player1.inventory.push(items.Purse);
  renderTavPlayer();
});
// INN BTNS --------------------------------
function endInnMsg() {
  document.getElementById("innMsg").innerText = "";
}
document.getElementById("expInn").addEventListener("click", () => {
  document.getElementById("innCont").style.display = "block";
  document.getElementById("potion").style.display = "block";
  document.getElementById(
    "innMsg"
  ).innerText = `${players.Player1.name}, you found a potion!`;
  setTimeout(endInnMsg, 2000);
});
document.getElementById("potionBtn").addEventListener("click", () => {
  document.getElementById("potion").style.display = "none";
  players.Player1.items.push(items.Potion.name);
  players.Player1.inventory.push(items.Potion);
  players.Player1.maxHP += items.Potion.hp;
  players.Player1.xp += items.Potion.xp;
  players.Player1.xp = players.Player1.maxHP;
  checkXP();
  renderInnPlayer();
});
document.getElementById("innRest").addEventListener("click", () => {
  document.getElementById(
    "innMsg"
  ).innerText = `${players.Player1.name}, took a quick cat-nap!`;
  players.Player1.hp = players.Player1.maxHP;
  renderInnPlayer();
  setTimeout(endInnMsg, 4000);
});
// ARENA BTNS --------------------------------
function endArenaMsg() {
  document.getElementById("arenaMsg").innerText = "";
}
function endArenaTalk() {
  document.getElementById("arenaTalk").innerText = "";
}
function beggarLeave() {
  document.getElementById("beggar").style.display = "none";
}
function beggarHit() {
  document.getElementById(
    "arenaMsg"
  ).innerText = `${players.Player1.name}, the beggar threw a rock at you!`;
  players.Player1.hp -= 1;
  setTimeout(endArenaMsg, 3000);
  renderArenaPlayer();
}
function beggarReject() {
  document.getElementById("arenaTalk").innerText = `Beggar: Is that right?`;
  document.getElementById("beggarChoice").style.display = "none";
  setTimeout(endArenaTalk, 3000);
  setTimeout(beggarHit, 4000);
}
document.getElementById("expArena").addEventListener("click", () => {
  document.getElementById("arenaCont").style.display = "block";
});
document.getElementById("beggarBtn").addEventListener("click", () => {
  document.getElementById("beggarChoice").style.display = "block";
  document.getElementById("arenaTalk").innerText = `Beggar: ${
    characters.Beggar.quotes[
      Math.floor(Math.random() * characters.Beggar.quotes.length)
    ]
  }`;
  setTimeout(endArenaTalk, 3000);
});
document.getElementById("beg-yes").addEventListener("click", () => {
  if (characters.Beggar.gp >= 6) {
    document.getElementById("arenaTalk").innerText = `Beggar: ${
      characters.Beggar.thanks[
        Math.floor(Math.random() * characters.Beggar.thanks.length)
      ]
    }`;
    setTimeout(endArenaTalk, 3000);
    setTimeout(beggarLeave, 4000);
    players.Player1.xp += 10;
    checkXP;
    renderArenaPlayer();
  } else if (players.Player1.gp <= 1) {
    beggarReject();
  } else {
    players.Player1.gp -= 2;
    characters.Beggar.gp += 2;
    document.getElementById("arenaTalk").innerText = `Beggar: ${
      characters.Beggar.thanks[
        Math.floor(Math.random() * characters.Beggar.thanks.length)
      ]
    }`;
    setTimeout(endArenaTalk, 4000);
    renderArenaPlayer();
  }
  document.getElementById("beggarChoice").style.display = "none";
});
document.getElementById("beg-no").addEventListener("click", () => {
  beggarReject();
});
document.getElementById("rubbishBtn").addEventListener("click", () => {
  document.getElementById("rubbishBtn").style.display = "none";
  document.getElementById("helm").style.display = "block";
  document.getElementById(
    "arenaMsg"
  ).innerText = `${players.Player1.name}, you found a rusty old helm!`;
  setTimeout(endArenaMsg, 4000);
});
document.getElementById("helmBtn").addEventListener("click", () => {
  document.getElementById("helm").style.display = "none";
  players.Player1.armor.push(armor.Helm.name);
  players.Player1.inventory.push(armor.Helm);
  players.Player1.def += armor.Helm.def;
  renderArenaPlayer();
});
// QUAD BTNS --------------------------------
function endQuadMsg() {
  document.getElementById("quadMsg").innerText = "";
}
function dummyHP() {
  if (enemies.Dummy.hp <= 0) {
    document.getElementById("dummy").style.display = "none";
    document.getElementById("quadBtns").style.display = "none";
    document.getElementById("expQuad").style.display = "none";
    document.getElementById("trainingSword").style.display = "block";
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} defeats ${enemies.Dummy.name}, earning ${weapons.TrainingSword.name}!`;
    winMatch();
    renderQuadPlayer();
    setTimeout(endQuadMsg, 4000);
  }
}
function renderDummyStat() {
  document.getElementById("dummyStat").innerText = `
  ${enemies.Dummy.name} | HP: ${enemies.Dummy.hp} | STR: ${enemies.Dummy.str} | 
  DEF: ${enemies.Dummy.def} | AB: ${enemies.Dummy.ab}`;
  dummyHP();
}
function aDiceDisplay() {
  document.getElementById("attack-dice").style.display = "flex";
}
function bDiceDisplay() {
  document.getElementById("def-dice").style.display = "flex";
}
function hideDice() {
  document.getElementById("attack-dice").style.display = "none";
  document.getElementById("def-dice").style.display = "none";
}
document.getElementById("expQuad").addEventListener("click", () => {
  document.getElementById("expQuad").style.display = "none";
  document.getElementById("quadCont").style.display = "block";
  document.getElementById("dummyBtn").style.display = "block";
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, hone your skills and conquer the battledome!`;
  setTimeout(endQuadMsg, 3000);
});
document.getElementById("dummyBtn").addEventListener("click", () => {
  document.getElementById("dummyBtn").style.display = "none";
  document.getElementById("dummy").style.display = "block";
  document.getElementById("quadBtns").style.display = "flex";
  if (players.Player1.str > players.Player1.def) {
    document.getElementById("quadDefend").style.display = "none";
  } else if (players.Player1.str < players.Player1.def) {
    document.getElementById("quadAttack").style.display = "none";
  }
  renderDummyStat();
});
document.getElementById("quadAttack").addEventListener("click", () => {
  const aScore = attackRoll();
  document.getElementById("aD1").innerText = aScore;
  aDiceDisplay();
  if (enemies.Dummy.def >= aScore) {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("quadAttack").style.display = "none";
    document.getElementById("quadDefend").style.display = "block";
    setTimeout(endQuadMsg, 2000);
  } else {
    enemies.Dummy.hp -= aScore - enemies.Dummy.ab;
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    renderDummyStat();
    setTimeout(endQuadMsg, 2000);
  }
  setTimeout(hideDice, 3000);
});
document.getElementById("quadDefend").addEventListener("click", () => {
  const bScore = defRoll();
  document.getElementById("bD1").innerText = bScore;
  bDiceDisplay();
  if (enemies.Dummy.str >= bScore) {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Dummy.str;
    renderQuadPlayer();
    checkHP();
    setTimeout(endQuadMsg, 2000);
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("quadDefend").style.display = "none";
    document.getElementById("quadAttack").style.display = "block";
    setTimeout(endQuadMsg, 2000);
  }
  setTimeout(hideDice, 3000);
});
document.getElementById("tSwordBtn").addEventListener("click", () => {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, with this sword... you can defeat bad guys and stuff....`;
  players.Player1.str += weapons.TrainingSword.str;
  players.Player1.weapons.push(weapons.TrainingSword.name);
  players.Player1.inventory.push(weapons.TrainingSword);
  document.getElementById("trainingSword").style.display = "none";
  renderQuadPlayer();
  setTimeout(endQuadMsg, 3000);
});
// ARMORY BTNS --------------------------------
function armoryLeave() {
  document.getElementById("weapons").style.display = "none";
  document.getElementById("armor").style.display = "none";
}
function endArmoryMsg() {
  document.getElementById("armoryMsg").innerText = "";
}
function endArmoryTalk() {
  document.getElementById("armoryTalk").innerText = "";
}
document.getElementById("expArmory").addEventListener("click", () => {
  document.getElementById("armoryCont").style.display = "block";
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.welcome[
      Math.floor(Math.random() * characters.Armorer.welcome.length)
    ]
  }`;
  setTimeout(endArmoryTalk, 3000);
});
document.getElementById("view-weaps").addEventListener("click", () => {
  document.getElementById("weapons").style.display = "flex";
  document.getElementById("armor").style.display = "none";
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.quotes[
      Math.floor(Math.random() * characters.Armorer.quotes.length)
    ]
  }`;
  setTimeout(endArmoryTalk, 3000);
});
document.getElementById("view-armor").addEventListener("click", () => {
  document.getElementById("weapons").style.display = "none";
  document.getElementById("armor").style.display = "flex";
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.quotes[
      Math.floor(Math.random() * characters.Armorer.quotes.length)
    ]
  }`;
  setTimeout(endArmoryTalk, 3000);
});
document.getElementById("dagBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Dagger.gp) {
    players.Player1.gp -= weapons.Dagger.gp;
    players.Player1.str += weapons.Dagger.str;
    players.Player1.weapons.push(weapons.Dagger.name);
    players.Player1.inventory.push(weapons.Dagger);
    document.getElementById("dagger").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= weapons.Dagger.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("bowBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Bow.gp) {
    players.Player1.gp -= weapons.Bow.gp;
    players.Player1.str += weapons.Bow.str;
    players.Player1.weapons.push(weapons.Bow.name);
    players.Player1.inventory.push(weapons.Bow);
    document.getElementById("bow").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= weapons.Bow.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("bSwordBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Broadsword.gp) {
    players.Player1.gp -= weapons.Broadsword.gp;
    players.Player1.str += weapons.Broadsword.str;
    players.Player1.weapons.push(weapons.Broadsword.name);
    players.Player1.inventory.push(weapons.Broadsword);
    document.getElementById("broadsword").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= weapons.Broadsword.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("xBowBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.CrossBow.gp) {
    players.Player1.gp -= weapons.CrossBow.gp;
    players.Player1.str += weapons.CrossBow.str;
    players.Player1.weapons.push(weapons.CrossBow.name);
    players.Player1.inventory.push(weapons.CrossBow);
    document.getElementById("xbow").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= weapons.CrossBow.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("gauntletBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.Gauntlet.gp) {
    players.Player1.gp -= armor.Gauntlet.gp;
    players.Player1.def += armor.Gauntlet.def;
    players.Player1.xp += armor.Gauntlet.xp;
    players.Player1.armor.push(armor.Gauntlet.name);
    players.Player1.inventory.push(armor.Gauntlet);
    document.getElementById("gauntlet").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= armor.Gauntlet.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("cMailBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.Chainmail.gp) {
    players.Player1.gp -= armor.Chainmail.gp;
    players.Player1.def += armor.Chainmail.def;
    players.Player1.xp += armor.Chainmail.xp;
    players.Player1.armor.push(armor.Chainmail.name);
    players.Player1.inventory.push(armor.Chainmail);
    document.getElementById("chainmail").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= armor.Chainmail.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("bShoesBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.BowlingShoes.gp) {
    players.Player1.gp -= armor.BowlingShoes.gp;
    players.Player1.def += armor.BowlingShoes.def;
    players.Player1.xp += armor.BowlingShoes.xp;
    players.Player1.armor.push(armor.BowlingShoes.name);
    players.Player1.inventory.push(armor.BowlingShoes);
    document.getElementById("bowlingShoes").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= armor.BowlingShoes.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
document.getElementById("topHatBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.TopHat.gp) {
    players.Player1.gp -= armor.TopHat.gp;
    players.Player1.def += armor.TopHat.def;
    players.Player1.xp += armor.TopHat.xp;
    players.Player1.armor.push(armor.TopHat.name);
    players.Player1.inventory.push(armor.TopHat);
    document.getElementById("topHat").style.display = "none";
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.thanks[
        Math.floor(Math.random() * characters.Armorer.thanks.length)
      ]
    }`;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryTalk, 3000);
  } else if (players.Player1.gp <= armor.TopHat.gp % 2) {
    document.getElementById("weapons").style.display = "none";
    document.getElementById(
      "armoryMsg"
    ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!!`;
    players.Player1.hp -= 1;
    checkHP();
    renderArmoryPlayer();
    setTimeout(endArmoryMsg, 3000);
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.threat[
        Math.floor(Math.random() * characters.Armorer.threat.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  } else {
    document.getElementById("armoryTalk").innerText = `${
      characters.Armorer.name
    }: ${
      characters.Armorer.reject[
        Math.floor(Math.random() * characters.Armorer.reject.length)
      ]
    }`;
    setTimeout(endArmoryTalk, 3000);
  }
});
// ------------------BATTLEDOME BTNS--------------------------------

// ------------------BATTLEDOME BTNS--------------------------------
function endBattleMsg() {
  document.getElementById("battleMsg").innerText = "";
}
function endBattleTalk() {
  document.getElementById("battleTalk").innerText = "";
}
function attDiceDisplay() {
  document.getElementById("bdAttDice").style.display = "flex";
}
function defDiceDisplay() {
  document.getElementById("bdDefDice").style.display = "flex";
}
function hideBattleDice() {
  document.getElementById("bdAttDice").style.display = "none";
  document.getElementById("bdDefDice").style.display = "none";
}
document.getElementById("expBattle").addEventListener("click", () => {
  document.getElementById("expBattle").style.display = "none";
  document.getElementById("battleCont").style.display = "block";
  document.getElementById("foeBtn").style.display = "block";
});
document.getElementById("foeBtn").addEventListener("click", () => {
  document.getElementById("foeBtn").style.display = "none";
  document.getElementById("bdExit").style.display = "none";
  battleChoice();
});
function battleChoice() {
  document.getElementById("battleChoice").style.display = "flex";
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} are you ready to do battle?`;
  setTimeout(endBattleMsg, 3000);
}
function battleYes() {
  document.getElementById("battleChoice").style.display = "none";
  if (enemies.Orc.alive === true) {
    orcHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Orc.name}: This is gonna be easy!!`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Goblin.alive === true) {
    goblinHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Goblin.name}: You may have beat ${enemies.Orc.name}, but you won't best me!!`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Bandit.alive === true) {
    banditHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Bandit.name}: You killed ${enemies.Goblin.name} & ${enemies.Orc.name}, you bastard!!!`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Golem.alive === true) {
    golemHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Golem.name}: ${enemies.Bandit.name}, ${enemies.Goblin.name} & ${enemies.Orc.name}... you will not have died in vain...`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Minotaur.alive === true) {
    minoHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Minotaur.name}: I will not go as gently as the others.`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Gladiator.alive === true) {
    gladHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Gladiator.name}: My name is NOT Maximus Desmus Meridias.... Call me ${enemies.Gladiator.name}`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Guardian.alive === true) {
    guardianHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Guardian.name}: I bear stern warning to what lays beyond....`;
    setTimeout(endBattleTalk, 3000);
  } else if (enemies.Giant.alive === true) {
    giantHP();
    document.getElementById(
      "battleTalk"
    ).innerText = `${enemies.Giant.name}: Fee-fi-fo-fred, it won't take long to make you ded.`;
    setTimeout(endBattleTalk, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} there are no opponents!`;
    document.getElementById("bdExit").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  }
}
function battleNo() {
  document.getElementById("battleChoice").style.display = "none";
  document.getElementById("bdExit").style.display = "block";
  document.getElementById(
    "battleMsg"
  ).innerText = `Ok ${players.Player1.name}, maybe later then!`;
  setTimeout(endBattleMsg, 3000);
}
document.getElementById("battle-yes").addEventListener("click", () => {
  battleYes();
});
document.getElementById("battle-no").addEventListener("click", () => {
  battleNo();
});
// ORC FUNCTIONS ------------------------
function orcHit() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.hits[Math.floor(Math.random() * enemies.Orc.hits.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function orcBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.blocks[Math.floor(Math.random() * enemies.Orc.blocks.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function orcMiss() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.miss[Math.floor(Math.random() * enemies.Orc.miss.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function renderOrc() {
  enemies.Orc.alive = true;
  document.getElementById("orc").style.display = "block";
  document.getElementById(
    "orcStat"
  ).innerText = `${enemies.Orc.name} | HP: ${enemies.Orc.hp} | STR: ${enemies.Orc.str} | DEF: ${enemies.Orc.def} | AB: ${enemies.Orc.ab} |`;
  document.getElementById("orcBtns").style.display = "flex";
}
function killOrc() {
  enemies.Orc.alive = false;
  document.getElementById("orc").style.display = "none";
  document.getElementById("orcBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Orc.name}: Waaait, nooo!!`;
  players.Player1.vanquished.push(enemies.Orc.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(endBattleMsg, 4000);
  setTimeout(battleChoice, 4000);
}
function orcHP() {
  if (enemies.Orc.hp <= 0) {
    killOrc();
  } else {
    renderOrc();
  }
}
function attackOrc() {
  const orcAScore = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = orcAScore;
  if (enemies.Orc.def >= orcAScore) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("orcAttack").style.display = "none";
    document.getElementById("orcDefend").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Orc.hp -= orcAScore - enemies.Orc.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    orcHit();
    orcHP();
  }
  setTimeout(hideBattleDice, 2000);
}
function defendOrc() {
  const orcDScore = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = orcDScore;
  if (enemies.Orc.str >= orcDScore + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Orc.str - players.Player1.ab;
    renderBattlePlayer();
    checkHP();
    document.getElementById("orcAttack").style.display = "none";
    document.getElementById("orcDefend").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    orcMiss();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("orcAttack").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    orcBlock();
    orcHP();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("orcAttack").addEventListener("click", () => {
  attackOrc();
});
document.getElementById("orcDefend").addEventListener("click", () => {
  defendOrc();
});
// GOBLIN FUNCTIONS ------------------------
function gobHit() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.hits[Math.floor(Math.random() * enemies.Goblin.hits.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function gobBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.blocks[
      Math.floor(Math.random() * enemies.Goblin.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function gobMiss() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.miss[Math.floor(Math.random() * enemies.Goblin.miss.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function renderGoblin() {
  enemies.Goblin.alive = true;
  document.getElementById("goblin").style.display = "block";
  document.getElementById("gobBtns").style.display = "flex";
  document.getElementById(
    "gobStat"
  ).innerText = `${enemies.Goblin.name} | HP: ${enemies.Goblin.hp} | STR: ${enemies.Goblin.str} | DEF: ${enemies.Goblin.def} | AB: ${enemies.Goblin.ab} |`;
}
function goblinHP() {
  if (enemies.Goblin.hp <= 0) {
    killGoblin();
  } else {
    renderGoblin();
  }
}
function killGoblin() {
  enemies.Goblin.alive = false;
  document.getElementById("goblin").style.display = "none";
  document.getElementById("gobBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Goblin.name}: You mis'ble curr!!`;
  players.Player1.vanquished.push(enemies.Goblin.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attackGoblin() {
  const gobAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = gobAtt;
  if (enemies.Goblin.def >= gobAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("gobAttack").style.display = "none";
    document.getElementById("gobDefend").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Goblin.hp -= gobAtt - enemies.Goblin.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    goblinHP();
    gobHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defendGoblin() {
  const defGob = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = defGob;
  if (enemies.Goblin.str >= defGob + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Goblin.str - players.Player1.ab;
    gobMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("gobAttack").style.display = "none";
    document.getElementById("gobDefend").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("gobAttack").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    goblinHP();
    gobBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("gobAttack").addEventListener("click", () => {
  attackGoblin();
});
document.getElementById("gobDefend").addEventListener("click", () => {
  defendGoblin();
});
// BANDIT FUNCTIONS ------------------------
function banditHit() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.hits[Math.floor(Math.random() * enemies.Bandit.hits.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function banditBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.blocks[
      Math.floor(Math.random() * enemies.Bandit.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function banditMiss() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.miss[Math.floor(Math.random() * enemies.Bandit.miss.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function banditHP() {
  if (enemies.Bandit.hp <= 0) {
    killBandit();
  } else {
    renderBandit();
  }
}
function renderBandit() {
  enemies.Bandit.alive = true;
  document.getElementById("bandit").style.display = "block";
  document.getElementById("banditBtns").style.display = "flex";
  document.getElementById(
    "bandStat"
  ).innerText = `${enemies.Bandit.name} | HP: ${enemies.Bandit.hp} | STR: ${enemies.Bandit.str} | DEF: ${enemies.Bandit.def} | AB: ${enemies.Bandit.ab} |`;
}
function killBandit() {
  enemies.Bandit.alive = false;
  document.getElementById("bandit").style.display = "none";
  document.getElementById("banditBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Bandit.name}: I'm comin' Elizabeth!!`;
  players.Player1.vanquished.push(enemies.Bandit.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attBandit() {
  const bandAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = bandAtt;
  if (enemies.Bandit.def >= bandAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attBandit").style.display = "none";
    document.getElementById("defBandit").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Bandit.hp -= bandAtt - enemies.Bandit.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    banditHP();
    banditHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defBandit() {
  const bandDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = bandDef;
  if (enemies.Bandit.str >= bandDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Bandit.str - players.Player1.ab;
    banditMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attBandit").style.display = "none";
    document.getElementById("defBandit").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attBandit").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    banditHP();
    banditBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attBandit").addEventListener("click", () => {
  attBandit();
});
document.getElementById("defBandit").addEventListener("click", () => {
  defBandit();
});
// GOLEM FUNCTIONS ------------------------
function golemHit() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.hits[Math.floor(Math.random() * enemies.Golem.hits.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function golemBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.blocks[
      Math.floor(Math.random() * enemies.Golem.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function golemMiss() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.miss[Math.floor(Math.random() * enemies.Golem.miss.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function golemHP() {
  if (enemies.Golem.hp <= 0) {
    killGolem();
  } else {
    renderGolem();
  }
}
function renderGolem() {
  enemies.Golem.alive = true;
  document.getElementById("golem").style.display = "block";
  document.getElementById("golemBtns").style.display = "flex";
  document.getElementById(
    "golemStat"
  ).innerText = `${enemies.Golem.name} | HP: ${enemies.Golem.hp} | STR: ${enemies.Golem.str} | DEF: ${enemies.Golem.def} | AB: ${enemies.Golem.ab} |`;
}
function killGolem() {
  enemies.Golem.alive = false;
  document.getElementById("golem").style.display = "none";
  document.getElementById("golemBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Golem.name}: No, not the precious!!!`;
  players.Player1.vanquished.push(enemies.Golem.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attGolem() {
  const golemAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = golemAtt;
  if (enemies.Golem.def >= golemAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGolem").style.display = "none";
    document.getElementById("defGolem").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Golem.hp -= golemAtt - enemies.Golem.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    golemHP();
    golemHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defGolem() {
  const golemDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = golemDef;
  if (enemies.Golem.str >= golemDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Golem.str - players.Player1.ab;
    golemMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attGolem").style.display = "none";
    document.getElementById("defGolem").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGolem").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    golemHP();
    golemBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attGolem").addEventListener("click", () => {
  attGolem();
});
document.getElementById("defGolem").addEventListener("click", () => {
  defGolem();
});
// MINOTAUR FUNCTIONS ------------------------
function minoHit() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.hits[
      Math.floor(Math.random() * enemies.Minotaur.hits.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function minoBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.blocks[
      Math.floor(Math.random() * enemies.Minotaur.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function minoMiss() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.miss[
      Math.floor(Math.random() * enemies.Minotaur.miss.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function minoHP() {
  if (enemies.Minotaur.hp <= 0) {
    killMino();
  } else {
    renderMino();
  }
}
function renderMino() {
  enemies.Minotaur.alive = true;
  document.getElementById("minotaur").style.display = "block";
  document.getElementById("minotaurBtns").style.display = "flex";
  document.getElementById(
    "minoStat"
  ).innerText = `${enemies.Minotaur.name} | HP: ${enemies.Minotaur.hp} | STR: ${enemies.Minotaur.str} | DEF: ${enemies.Minotaur.def} | AB: ${enemies.Minotaur.ab} |`;
}
function killMino() {
  enemies.Minotaur.alive = false;
  document.getElementById("minotaur").style.display = "none";
  document.getElementById("minotaurBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Minotaur.name}: I can't believe it!!`;
  players.Player1.vanquished.push(enemies.Minotaur.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attMino() {
  const minoAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = minoAtt;
  if (enemies.Minotaur.def >= minoAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attMinotaur").style.display = "none";
    document.getElementById("defMinotaur").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Minotaur.hp -= minoAtt - enemies.Minotaur.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    minoHP();
    minoHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defMino() {
  const minoDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = minoDef;
  if (enemies.Minotaur.str >= minoDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Minotaur.str - players.Player1.ab;
    minoMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attMinotaur").style.display = "none";
    document.getElementById("defMinotaur").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attMinotaur").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    minoHP();
    minoBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attMinotaur").addEventListener("click", () => {
  attMino();
});
document.getElementById("defMinotaur").addEventListener("click", () => {
  defMino();
});
// GLADIATOR FUNCTIONS ------------------------
function gladHit() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.hits[
      Math.floor(Math.random() * enemies.Gladiator.hits.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function gladBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.blocks[
      Math.floor(Math.random() * enemies.Gladiator.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function gladMiss() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.miss[
      Math.floor(Math.random() * enemies.Gladiator.miss.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function gladHP() {
  if (enemies.Gladiator.hp <= 0) {
    killGlad();
  } else {
    renderGlad();
  }
}
function renderGlad() {
  enemies.Gladiator.alive = true;
  document.getElementById("gladiator").style.display = "block";
  document.getElementById("gladiatorBtns").style.display = "flex";
  document.getElementById(
    "gladStat"
  ).innerText = `${enemies.Gladiator.name} | HP: ${enemies.Gladiator.hp} | STR: ${enemies.Gladiator.str} | DEF: ${enemies.Gladiator.def} | AB: ${enemies.Gladiator.ab} |`;
}
function killGlad() {
  enemies.Gladiator.alive = false;
  document.getElementById("gladiator").style.display = "none";
  document.getElementById("gladiatorBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Gladiator.name}: Tell Gracchus to free the Senate!`;
  players.Player1.vanquished.push(enemies.Gladiator.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attGlad() {
  const gladAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = gladAtt;
  if (enemies.Gladiator.def >= gladAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGladiator").style.display = "none";
    document.getElementById("defGladiator").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Gladiator.hp -= gladAtt - enemies.Gladiator.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    gladHP();
    gladHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defGlad() {
  const gladDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = gladDef;
  if (enemies.Gladiator.str >= gladDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Gladiator.str - players.Player1.ab;
    gladMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attGladiator").style.display = "none";
    document.getElementById("defGladiator").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGladiator").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    gladHP();
    gladBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attGladiator").addEventListener("click", () => {
  attGlad();
});
document.getElementById("defGladiator").addEventListener("click", () => {
  defGlad();
});
// BERSERKER FUNCTIONS ------------------------
function berskHit() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.hits[
      Math.floor(Math.random() * enemies.Berserker.hits.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function berskBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.blocks[
      Math.floor(Math.random() * enemies.Berserker.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function berskMiss() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.miss[
      Math.floor(Math.random() * enemies.Berserker.miss.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function berskHP() {
  if (enemies.Berserker.hp <= 0) {
    killBersk();
  } else {
    renderBersk();
  }
}
function renderBersk() {
  enemies.Berserker.alive = true;
  document.getElementById("berserker").style.display = "block";
  document.getElementById("berserkBtns").style.display = "flex";
  document.getElementById(
    "berserkStat"
  ).innerText = `${enemies.Berserker.name} | HP: ${enemies.Berserker.hp} | STR: ${enemies.Berserker.str} | DEF: ${enemies.Berserker.def} | AB: ${enemies.Berserker.ab} |`;
}
function killBersk() {
  enemies.Berserker.alive = false;
  document.getElementById("berserker").style.display = "none";
  document.getElementById("berserkBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Berserker.name}: F^$% you yankee blue-jean!!`;
  players.Player1.vanquished.push(enemies.Berserker.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attBersk() {
  const berskAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = berskAtt;
  if (enemies.Berserker.def >= berskAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attBerserk").style.display = "none";
    document.getElementById("defBerserk").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Berserker.hp -= berskAtt - enemies.Berserker.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    berskHP();
    berskHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defBersk() {
  const berskDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = berskDef;
  if (enemies.Berserker.str >= berskDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Berserker.str - players.Player1.ab;
    berskMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attBerserk").style.display = "none";
    document.getElementById("defBerserk").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attBerserk").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    berskHP();
    berskBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attBerserk").addEventListener("click", () => {
  attBersk();
});
document.getElementById("defBerserk").addEventListener("click", () => {
  defBersk();
});
// GUARDIAN FUNCTIONS ------------------------
function guardianHit() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.hits[
      Math.floor(Math.random() * enemies.Guardian.hits.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function guardianBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.blocks[
      Math.floor(Math.random() * enemies.Guardian.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function guardianMiss() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.miss[
      Math.floor(Math.random() * enemies.Guardian.miss.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function guardianHP() {
  if (enemies.Guardian.hp <= 0) {
    killGuardian();
  } else {
    renderGuardian();
  }
}
function renderGuardian() {
  enemies.Guardian.alive = true;
  document.getElementById("guardian").style.display = "block";
  document.getElementById("guardianBtns").style.display = "flex";
  document.getElementById(
    "guardianStat"
  ).innerText = `${enemies.Guardian.name} | HP: ${enemies.Guardian.hp} | STR: ${enemies.Guardian.str} | DEF: ${enemies.Guardian.def} | AB: ${enemies.Guardian.ab} |`;
}
function killGuardian() {
  enemies.Guardian.alive = false;
  document.getElementById("guardian").style.display = "none";
  document.getElementById("guardianBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Guardian.name}: So cross I unto the abyss....`;
  players.Player1.vanquished.push(enemies.Guardian.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(battleChoice, 4000);
}
function attGuardian() {
  const guardianAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = guardianAtt;
  if (enemies.Guardian.def >= guardianAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGuardian").style.display = "none";
    document.getElementById("defGuardian").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Guardian.hp -= guardianAtt - enemies.Guardian.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    guardianHP();
    guardianHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defGuardian() {
  const guardianDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = guardianDef;
  if (enemies.Guardian.str >= guardianDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Guardian.str - players.Player1.ab;
    guardianMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attGuardian").style.display = "none";
    document.getElementById("defGuardian").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGuardian").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    guardianHP();
    guardianBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attGuardian").addEventListener("click", () => {
  attGuardian();
});
document.getElementById("defGuardian").addEventListener("click", () => {
  defGuardian();
});
// GIANT FUNCTIONS ------------------------
function giantHit() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.hits[Math.floor(Math.random() * enemies.Giant.hits.length)]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function giantBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.blocks[
      Math.floor(Math.random() * enemies.Giant.blocks.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function giantMiss() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.miss[
      Math.floor(Math.random() * enemies.Guardian.miss.length)
    ]
  }`;
  setTimeout(endBattleTalk, 3000);
}
function giantHP() {
  if (enemies.Giant.hp <= 0) {
    killGiant();
  } else {
    renderGiant();
  }
}
function renderGiant() {
  enemies.Giant.alive = true;
  document.getElementById("giant").style.display = "block";
  document.getElementById("giantBtns").style.display = "flex";
  document.getElementById(
    "giantStat"
  ).innerText = `${enemies.Giant.name} | HP: ${enemies.Giant.hp} | STR: ${enemies.Giant.str} | DEF: ${enemies.Giant.def} | AB: ${enemies.Giant.ab} |`;
}
function killGiant() {
  enemies.Giant.alive = false;
  document.getElementById("giant").style.display = "none";
  document.getElementById("giantBtns").style.display = "none";
  document.getElementById(
    "battleTalk"
  ).innerText = `${enemies.Giant.name}: Fee-fi-fo-f^&$, losing more than sorta sucks.`;
  players.Player1.vanquished.push(enemies.Giant.name);
  winMatch();
  checkXP();
  renderBattlePlayer();
  setTimeout(endBattleTalk, 3000);
  setTimeout(winGame, 4000);
}
function attGiant() {
  const giantAtt = attackRoll();
  attDiceDisplay();
  document.getElementById("bdAttD1").innerText = giantAtt;
  if (enemies.Giant.def >= giantAtt) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGuardian").style.display = "none";
    document.getElementById("defGuardian").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    enemies.Giant.hp -= giantAtt - enemies.Giant.ab;
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBattleMsg, 3000);
    giantHP();
    giantHit();
  }
  setTimeout(hideBattleDice, 2000);
}
function defGiant() {
  const giantDef = defRoll();
  defDiceDisplay();
  document.getElementById("bdDefD1").innerText = giantDef;
  if (enemies.Giant.str >= giantDef + players.Player1.def) {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Giant.str - players.Player1.ab;
    giantMiss();
    renderBattlePlayer();
    checkHP();
    document.getElementById("attGiant").style.display = "none";
    document.getElementById("defGiant").style.display = "block";
    setTimeout(endBattleMsg, 3000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGiant").style.display = "block";
    setTimeout(endBattleMsg, 3000);
    giantHP();
    giantBlock();
  }
  setTimeout(hideBattleDice, 2000);
}
document.getElementById("attGiant").addEventListener("click", () => {
  attGiant();
});
document.getElementById("defGiant").addEventListener("click", () => {
  defGiant();
});
// ------------------BATTLEDOME BTNS--------------------------------
// ------------------BATTLEDOME BTNS--------------------------------
// FOREST BTNS --------------------------------
function endForestMsg() {
  document.getElementById("forestMsg").innerText = "";
}
function endForestTalk() {
  document.getElementById("forestTalk").innerText = "";
}
function forestAttDice() {
  document.getElementById("forestAtt1").style.display = "flex";
}
function forestDefDice() {
  document.getElementById("forestDef1").style.display = "flex";
}
function hideForestDice() {
  document.getElementById("forestAtt1").style.display = "none";
  document.getElementById("forestDef1").style.display = "none";
}
function returnThief() {
  document.getElementById("soldier").style.display = "block";
  document.getElementById("bridgeBtn").style.display = "block";
  document.getElementById("forestDockBtn").style.display = "block";
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, that was a close one!`;
  setTimeout(endForestMsg, 3000);
}
function hideFromThief() {
  document.getElementById("soldier").style.display = "none";
  document.getElementById("bridgeBtn").style.display = "none";
  document.getElementById("forestDockBtn").style.display = "none";
}
function soliderGab() {
  document.getElementById("forestTalk").innerText = `${
    characters.Soldier.name
  }: ${
    characters.Soldier.quotes[
      Math.floor(Math.random() * characters.Soldier.quotes.length)
    ]
  }`;
  setTimeout(endForestTalk, 3000);
}
document.getElementById("expForest").addEventListener("click", () => {
  document.getElementById("forestCont").style.display = "block";
});
document.getElementById("treeBtn").addEventListener("click", () => {
  document.getElementById("treeBtn").style.display = "none";
  document.getElementById("arrows").style.display = "block";
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, you found some arrows!`;
  setTimeout(endForestMsg, 3000);
});
document.getElementById("arrowBtn").addEventListener("click", () => {
  document.getElementById("arrows").style.display = "none";
  players.Player1.str += items.Arrows.str;
  players.Player1.items.push(items.Arrows.name);
  players.Player1.inventory.push(items.Arrows);
  checkXP();
  renderForestPlayer();
  thiefHP();
  document.getElementById(
    "forestTalk"
  ).innerText = `${enemies.Thief.name}: All who use these woods pay a toll...`;
  setTimeout(endForestTalk, 3000);
});
document.getElementById("soldierBtn").addEventListener("click", () => {
  soliderGab();
});
// THIEF FUNCTIONS
function thiefHit() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.hits[Math.floor(Math.random() * enemies.Thief.hits.length)]
  }`;
  setTimeout(endForestTalk, 3000);
}
function thiefBlock() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.blocks[
      Math.floor(Math.random() * enemies.Thief.blocks.length)
    ]
  }`;
  setTimeout(endForestTalk, 3000);
}
function thiefMiss() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.miss[Math.floor(Math.random() * enemies.Thief.miss.length)]
  }`;
  setTimeout(endForestTalk, 3000);
}
function thiefHP() {
  if (enemies.Thief.hp <= 0) {
    killThief();
  } else {
    renderThief();
  }
}
function renderThief() {
  enemies.Thief.alive = true;
  document.getElementById("thief").style.display = "block";
  document.getElementById("thiefBtns").style.display = "flex";
  document.getElementById(
    "thiefStat"
  ).innerText = `${enemies.Thief.name} | HP: ${enemies.Thief.hp} | STR: ${enemies.Thief.str} | DEF: ${enemies.Thief.def} | AB: ${enemies.Thief.ab} |`;
  hideFromThief();
}
function killThief() {
  enemies.Thief.alive = false;
  document.getElementById("thief").style.display = "none";
  document.getElementById("thiefBtns").style.display = "none";
  document.getElementById(
    "forestTalk"
  ).innerText = `${enemies.Thief.name}: Scatter my ashes in the mall food-court.`;
  players.Player1.vanquished.push(enemies.Thief.name);
  players.Player1.gp += 15;
  winMatch();
  checkXP();
  renderForestPlayer();
  setTimeout(endForestTalk, 3000);
  setTimeout(returnThief, 4000);
}
function attackThief() {
  const thiefAttScore = attackRoll();
  forestAttDice();
  document.getElementById("forestAtt1").innerText = thiefAttScore;
  if (enemies.Thief.def >= thiefAttScore) {
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("thiefAtt").style.display = "none";
    document.getElementById("thiefDef").style.display = "block";
    setTimeout(endForestMsg, 3000);
  } else {
    enemies.Thief.hp -= thiefAttScore - enemies.Thief.ab;
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endForestMsg, 3000);
    thiefHP();
    thiefHit();
  }
  setTimeout(hideForestDice, 2000);
}
function defendThief() {
  const thiefDefScore = defRoll();
  forestDefDice();
  document.getElementById("forestDef1").innerText = thiefDefScore;
  if (enemies.Thief.str >= thiefDefScore + players.Player1.def) {
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Thief.str - players.Player1.ab;
    players.Player1.gp -= 1;
    thiefMiss();
    renderForestPlayer();
    checkHP();
    document.getElementById("thiefAtt").style.display = "none";
    document.getElementById("thiefDef").style.display = "block";
    setTimeout(endForestMsg, 3000);
  } else {
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("thiefAtt").style.display = "block";
    setTimeout(endForestMsg, 3000);
    thiefHP();
    thiefBlock();
  }
  setTimeout(hideForestDice, 2000);
}
document.getElementById("thiefAtt").addEventListener("click", () => {
  attackThief();
});
document.getElementById("thiefDef").addEventListener("click", () => {
  defendThief();
});
// BRIDGE BTNS --------------------------------
function endBridgeMsg() {
  document.getElementById("bridgeMsg").innerText = "";
}
function endBridgeTalk() {
  document.getElementById("bridgeTalk").innerText = "";
}
function bridgeAttDice() {
  document.getElementById("bridgeAtt1").style.display = "flex";
}
function bridgeDefDice() {
  document.getElementById("bridgeDef1").style.display = "flex";
}
function hideBridgeDice() {
  document.getElementById("bridgeAtt1").style.display = "none";
  document.getElementById("bridgeDef1").style.display = "none";
}
function returnTroll() {
  document.getElementById("exitBridge").style.display = "block";
  document.getElementById("riverBtn").style.display = "block";
  document.getElementById("clearingBtn").style.display = "block";
}
function hideTroll() {
  document.getElementById("exitBridge").style.display = "none";
  document.getElementById("riverBtn").style.display = "none";
  document.getElementById("clearingBtn").style.display = "none";
}
function trollHit() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.hits[Math.floor(Math.random() * enemies.Troll.hits.length)]
  }`;
  setTimeout(endBridgeTalk, 3000);
}
function trollBlock() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.blocks[
      Math.floor(Math.random() * enemies.Troll.blocks.length)
    ]
  }`;
  setTimeout(endBridgeTalk, 3000);
}
function trollMiss() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.miss[Math.floor(Math.random() * enemies.Troll.miss.length)]
  }`;
  setTimeout(endBridgeTalk, 3000);
}
function renderTroll() {
  enemies.Troll.alive = true;
  document.getElementById("troll").style.display = "block";
  document.getElementById("trollBtns").style.display = "flex";
  document.getElementById(
    "trollStat"
  ).innerText = `${enemies.Troll.name} | HP: ${enemies.Troll.hp} | STR: ${enemies.Troll.str} | DEF: ${enemies.Troll.def} | AB: ${enemies.Troll.ab} |`;
  hideTroll();
}
function killTroll() {
  enemies.Troll.alive = false;
  document.getElementById("troll").style.display = "none";
  document.getElementById("trollBtns").style.display = "none";
  document.getElementById(
    "bridgeTalk"
  ).innerText = `${enemies.Troll.name}: Urrrrgha, I -- you--- urrrrrgha!!!!!!`;
  players.Player1.vanquished.push(enemies.Troll.name);
  setTimeout(endBridgeTalk, 3000);
  winMatch();
  checkXP();
  renderBridgePlayer();
  returnTroll();
  document.getElementById("shield").style.display = "block";
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${enemies.Troll.name} dropped a shield!`;
  setTimeout(endBridgeTalk, 3000);
}
function trollHP() {
  if (enemies.Troll.hp <= 0) {
    killTroll();
  } else {
    renderTroll();
  }
}
function attackTroll() {
  const trollAtt = attackRoll();
  bridgeAttDice();
  document.getElementById("bridgeAtt1").innerText = trollAtt;
  if (enemies.Troll.def >= trollAtt) {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("trollAtt").style.display = "none";
    document.getElementById("trollDef").style.display = "block";
    setTimeout(endForestMsg, 3000);
  } else {
    enemies.Troll.hp -= trollAtt - enemies.Troll.ab;
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endBridgeMsg, 3000);
    trollHP();
    trollHit();
  }
  setTimeout(hideBridgeDice, 2000);
}
function defendTroll() {
  const trollDef = defRoll();
  bridgeDefDice();
  document.getElementById("bridgeDef1").innerText = trollDef;
  if (enemies.Troll.str >= trollDef + players.Player1.def) {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Troll.str - players.Player1.ab;
    players.Player1.gp -= 1;
    trollMiss();
    renderBridgePlayer();
    checkHP();
    document.getElementById("trollAtt").style.display = "none";
    document.getElementById("trollDef").style.display = "block";
    setTimeout(endBridgeMsg, 3000);
  } else {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("trollAtt").style.display = "block";
    setTimeout(endBridgeMsg, 3000);
    trollHP();
    trollBlock();
  }
  setTimeout(hideBridgeDice, 2000);
}
document.getElementById("trollAtt").addEventListener("click", () => {
  attackTroll();
});
document.getElementById("trollDef").addEventListener("click", () => {
  defendTroll();
});
document.getElementById("expBridge").addEventListener("click", () => {
  document.getElementById("bridgeCont").style.display = "block";
  if (enemies.Troll.alive === true) {
    trollHP();
    document.getElementById(
      "bridgeTalk"
    ).innerText = `${enemies.Troll.name}: Urrrghaburrrg, who goes there?!`;
    setTimeout(endBridgeTalk, 3000);
  } else {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name}, isn't this so peaceful?`;
    setTimeout(endBridgeMsg, 3000);
  }
});
document.getElementById("shieldBtn").addEventListener("click", () => {
  document.getElementById("shield").style.display = "none";
  players.Player1.armor.push(armor.Shield.name);
  players.Player1.inventory.push(armor.Shield);
  players.Player1.xp += armor.Shield.xp;
  checkXP();
  renderBridgePlayer();
});
// RIVER BTNS --------------------------------
function endRiverMsg() {
  document.getElementById("riverMsg").innerText = "";
}
function endRiverTalk() {
  document.getElementById("riverTalk").innerText = "";
}
document.getElementById("expRiver").addEventListener("click", () => {
  document.getElementById("riverCont").style.display = "block";
});
document.getElementById("fisherBtn").addEventListener("click", () => {
  document.getElementById("fisherChoice").style.display = "flex";
  document.getElementById(
    "riverTalk"
  ).innerText = `${characters.Fisher.name}: Hey there, would you like to learn to fish?`;
  setTimeout(endRiverTalk, 3000);
});
document.getElementById("fishYes").addEventListener("click", () => {
  document.getElementById("fisherChoice").style.display = "none";
  document.getElementById(
    "riverTalk"
  ).innerText = `${characters.Fisher.name}: Well, when I figure it out I'll teach ya!!`;
  setTimeout(endRiverTalk, 3000);
});
document.getElementById("fishNo").addEventListener("click", () => {
  document.getElementById("fisherChoice").style.display = "none";
  document.getElementById(
    "riverTalk"
  ).innerText = `${characters.Fisher.name}: Maybe later then!`;
  setTimeout(endRiverTalk, 3000);
});
// CLEARING BTNS --------------------------------
document.getElementById("expClearing").addEventListener("click", () => {
  document.getElementById("clearingCont").style.display = "block";
});
function endClearingMsg() {
  document.getElementById("clearingMsg").innerText = "";
}
function endClearingTalk() {
  document.getElementById("clearingTalk").innerText = "";
}
function clearAttDice() {
  document.getElementById("clearAtt1").style.display = "flex";
}
function clearDefDice() {
  document.getElementById("clearDef1").style.display = "flex";
}
function hideClearDice() {
  document.getElementById("clearAtt1").style.display = "none";
  document.getElementById("clearDef1").style.display = "none";
}
function returnAmbush() {
  document.getElementById("ambush").style.display = "none";
  document.getElementById("clearingCont").style.display = "block";
  document.getElementById("clearingBridgeBtn").style.display = "block";
  document.getElementById("hutBtn").style.display = "block";
}
function ambush() {
  document.getElementById("clearingCont").style.display = "block";
  document.getElementById("ambush").style.display = "block";
  document.getElementById("clearingBridgeBtn").style.display = "none";
  document.getElementById("hutBtn").style.display = "none";
  guardOneHP();
}
// GUARD ONE FUNCTIONS
function guardOneHit() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardOne.name
  }: ${
    enemies.GuardOne.hits[
      Math.floor(Math.random() * enemies.GuardOne.hits.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardOneBlock() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardOne.name
  }: ${
    enemies.GuardOne.blocks[
      Math.floor(Math.random() * enemies.GuardOne.blocks.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardOneMiss() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardOne.name
  }: ${
    enemies.GuardOne.miss[
      Math.floor(Math.random() * enemies.GuardOne.miss.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardOneRender() {
  enemies.GuardOne.alive = true;
  document.getElementById("guardOne").style.display = "block";
  document.getElementById("guardOneBtns").style.display = "flex";
  document.getElementById(
    "guardOneStat"
  ).innerText = `${enemies.GuardOne.name} | HP: ${enemies.GuardOne.hp} | STR: ${enemies.GuardOne.str} | DEF: ${enemies.GuardOne.def} | AB: ${enemies.GuardOne.ab} |`;
}
function guardOneKill() {
  enemies.GuardOne.alive = false;
  document.getElementById("guardOne").style.display = "none";
  document.getElementById("guardOneBtns").style.display = "none";
  document.getElementById(
    "clearingTalk"
  ).innerText = `${enemies.GuardOne.name}: Avenge me... ${enemies.GuardTwo.name}`;
  players.Player1.vanquished.push(enemies.GuardOne.name);
  setTimeout(endClearingTalk, 3000);
  winMatch();
  checkXP();
  renderClearingPlayer();
  document.getElementById(
    "clearingMsg"
  ).innerText = `${players.Player1.name}, look out!`;
  setTimeout(endClearingMsg, 3000);
  setTimeout(guardTwoHP, 3000);
}
function guardOneHP() {
  if (enemies.GuardOne.hp <= 0) {
    guardOneKill();
  } else {
    guardOneRender();
  }
}
function attGuardOne() {
  const guardOneAtt = attackRoll();
  clearAttDice();
  document.getElementById("clearAtt1").innerText = guardOneAtt;
  if (enemies.GuardOne.def >= guardOneAtt) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGuardOne").style.display = "none";
    document.getElementById("defGuardOne").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    enemies.GuardOne.hp -= guardOneAtt - enemies.GuardOne.ab;
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endClearingMsg, 3000);
    guardOneHP();
    guardOneHit();
  }
  setTimeout(hideClearDice, 2000);
}
function defGuardOne() {
  const guardOneDef = defRoll();
  clearDefDice();
  document.getElementById("clearDef1").innerText = guardOneDef;
  if (enemies.GuardOne.str >= guardOneDef + players.Player1.def) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.GuardOne.str - players.Player1.ab;
    guardOneMiss();
    renderClearingPlayer();
    checkHP();
    document.getElementById("attGuardOne").style.display = "none";
    document.getElementById("defGuardOne").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGuardOne").style.display = "block";
    setTimeout(endClearingMsg, 3000);
    guardOneHP();
    guardOneBlock();
  }
  setTimeout(hideClearDice, 2000);
}
document.getElementById("attGuardOne").addEventListener("click", () => {
  attGuardOne();
});
document.getElementById("defGuardOne").addEventListener("click", () => {
  defGuardOne();
});
// GUARD TWO FUNCTIONS
function guardTwoHit() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardTwo.name
  }: ${
    enemies.GuardTwo.hits[
      Math.floor(Math.random() * enemies.GuardTwo.hits.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardTwoBlock() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardTwo.name
  }: ${
    enemies.GuardTwo.blocks[
      Math.floor(Math.random() * enemies.GuardTwo.blocks.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardTwoMiss() {
  document.getElementById("clearingTalk").innerText = `${
    enemies.GuardTwo.name
  }: ${
    enemies.GuardTwo.miss[
      Math.floor(Math.random() * enemies.GuardTwo.miss.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function guardTwoRender() {
  enemies.GuardTwo.alive = true;
  document.getElementById("guardTwo").style.display = "block";
  document.getElementById("guardTwoBtns").style.display = "flex";
  document.getElementById(
    "guardTwoStat"
  ).innerText = `${enemies.GuardTwo.name} | HP: ${enemies.GuardTwo.hp} | STR: ${enemies.GuardTwo.str} | DEF: ${enemies.GuardTwo.def} | AB: ${enemies.GuardTwo.ab} |`;
}
function guardTwoKill() {
  enemies.GuardTwo.alive = false;
  document.getElementById("guardTwo").style.display = "none";
  document.getElementById("guardTwoBtns").style.display = "none";
  document.getElementById(
    "clearingTalk"
  ).innerText = `${enemies.GuardTwo.name}: I'm sorry ${enemies.Witch.name}, I failed...`;
  players.Player1.vanquished.push(enemies.GuardTwo.name);
  setTimeout(endClearingTalk, 3000);
  winMatch();
  checkXP();
  renderClearingPlayer();
  document.getElementById(
    "clearingMsg"
  ).innerText = `${players.Player1.name}, look out!`;
  setTimeout(endClearingMsg, 3000);
  setTimeout(witchHP, 3000);
}
function guardTwoHP() {
  if (enemies.GuardTwo.hp <= 0) {
    guardTwoKill();
  } else {
    guardTwoRender();
  }
}
function attGuardTwo() {
  const guardTwoAtt = attackRoll();
  clearAttDice();
  document.getElementById("clearAtt1").innerText = guardTwoAtt;
  if (enemies.GuardTwo.def >= guardTwoAtt) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attGuardTwo").style.display = "none";
    document.getElementById("defGuardTwo").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    enemies.GuardTwo.hp -= guardTwoAtt - enemies.GuardTwo.ab;
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endClearingMsg, 3000);
    guardTwoHP();
    guardTwoHit();
  }
  setTimeout(hideClearDice, 2000);
}
function defGuardTwo() {
  const guardTwoDef = defRoll();
  clearDefDice();
  document.getElementById("clearDef1").innerText = guardTwoDef;
  if (enemies.GuardTwo.str >= guardTwoDef + players.Player1.def) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.GuardTwo.str - players.Player1.ab;
    guardTwoMiss();
    renderClearingPlayer();
    checkHP();
    document.getElementById("attGuardTwo").style.display = "none";
    document.getElementById("defGuardTwo").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attGuardTwo").style.display = "block";
    setTimeout(endClearingMsg, 3000);
    guardTwoHP();
    guardTwoBlock();
  }
  setTimeout(hideClearDice, 2000);
}
document.getElementById("attGuardTwo").addEventListener("click", () => {
  attGuardTwo();
});
document.getElementById("defGuardTwo").addEventListener("click", () => {
  defGuardTwo();
});
// WITCH FUNCTIONS
function witchHit() {
  document.getElementById("clearingTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.hits[Math.floor(Math.random() * enemies.Witch.hits.length)]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function witchBlock() {
  document.getElementById("clearingTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.blocks[
      Math.floor(Math.random() * enemies.Witch.blocks.length)
    ]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function witchMiss() {
  document.getElementById("clearingTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.miss[Math.floor(Math.random() * enemies.Witch.miss.length)]
  }`;
  setTimeout(endClearingTalk, 3000);
}
function witchRender() {
  enemies.Witch.alive = true;
  document.getElementById("witch").style.display = "block";
  document.getElementById("witchBtns").style.display = "flex";
  document.getElementById(
    "witchStat"
  ).innerText = `${enemies.Witch.name} | HP: ${enemies.Witch.hp} | STR: ${enemies.Witch.str} | DEF: ${enemies.Witch.def} | AB: ${enemies.Witch.ab} |`;
}
function witchKill() {
  enemies.Witch.alive = false;
  document.getElementById("witch").style.display = "none";
  document.getElementById("witchBtns").style.display = "none";
  document.getElementById(
    "clearingTalk"
  ).innerText = `${enemies.Witch.name}: Ohhhh what a world, what a world...`;
  players.Player1.vanquished.push(enemies.Witch.name);
  setTimeout(endClearingTalk, 3000);
  winMatch();
  checkXP();
  renderClearingPlayer();
  returnAmbush();
}
function witchHP() {
  if (enemies.Witch.hp <= 0) {
    witchKill();
  } else {
    witchRender();
  }
}
function witchAtt() {
  const witchAtt = attackRoll();
  clearAttDice();
  document.getElementById("clearAtt1").innerText = witchAtt;
  if (enemies.Witch.def >= witchAtt) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attWitch").style.display = "none";
    document.getElementById("defWitch").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    enemies.Witch.hp -= witchAtt - enemies.Witch.ab;
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endClearingMsg, 3000);
    witchHP();
    witchHit();
  }
  setTimeout(hideClearDice, 2000);
}
function witchDef() {
  const witchDef = defRoll();
  clearDefDice();
  document.getElementById("clearDef1").innerText = witchDef;
  if (enemies.Witch.str >= witchDef + players.Player1.def) {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.Witch.str - players.Player1.ab;
    witchMiss();
    renderClearingPlayer();
    checkHP();
    document.getElementById("attWitch").style.display = "none";
    document.getElementById("defWitch").style.display = "block";
    setTimeout(endClearingMsg, 3000);
  } else {
    document.getElementById(
      "clearingMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attWitch").style.display = "block";
    setTimeout(endClearingMsg, 3000);
    witchHP();
    witchBlock();
  }
  setTimeout(hideClearDice, 2000);
}
document.getElementById("attWitch").addEventListener("click", () => {
  witchAtt();
});
document.getElementById("defWitch").addEventListener("click", () => {
  witchDef();
});
// HUT BTNS --------------------------------
function endHutMsg() {
  document.getElementById("hutMsg").innerText = "";
}
function endHutTalk() {
  document.getElementById("hutTalk").innerText = "";
}
document.getElementById("expHut").addEventListener("click", () => {
  document.getElementById("hutCont").style.display = "block";
});
document.getElementById("wagonBtn").addEventListener("click", () => {
  document.getElementById("wagonBtn").style.display = "none";
  document.getElementById("leatherGloves").style.display = "block";
  document.getElementById(
    "hutMsg"
  ).innerText = `${players.Player1.name}, you found some Leather Gloves!`;
  setTimeout(endHutMsg, 3000);
});
document.getElementById("gloveBtn").addEventListener("click", () => {
  document.getElementById("leatherGloves").style.display = "none";
  players.Player1.def += armor.LeatherGloves.def;
  players.Player1.armor.push(armor.LeatherGloves.name);
  players.Player1.inventory.push(armor.LeatherGloves);
  renderHutPlayer();
});
document.getElementById("readSign").addEventListener("click", () => {
  document.getElementById(
    "hutMsg"
  ).innerText = `${players.Player1.name} reads the sign.`;
  setTimeout(endHutMsg, 3000);
  document.getElementById(
    "hutTalk"
  ).innerText = `WITCH'S HUT! DO NOT ENTER!! (You have been warned...)`;
  setTimeout(endHutTalk, 3000);
});
// HUT INT BTNS --------------------------------
function endHutIntMsg() {
  document.getElementById("hutIntMsg").innerText = "";
}
// function endHutIntTalk() {
//   document.getElementById("hutIntTalk").innerText = "";
// }
document.getElementById("expHutInt").addEventListener("click", () => {
  document.getElementById("hutIntCont").style.display = "block";
});
document.getElementById("searchHutInt").addEventListener("click", () => {
  document.getElementById("megaPotion").style.display = "block";
  document.getElementById(
    "hutIntMsg"
  ).innerText = `${players.Player1.name}, you found a MEGA POTION!`;
  setTimeout(endHutIntMsg, 3000);
});
document.getElementById("megaPotionBtn").addEventListener("click", () => {
  document.getElementById("megaPotion").style.display = "none";
  players.Player1.maxHP += items.MegaPotion.hp;
  players.Player1.xp += items.MegaPotion.xp;
  players.Player1.items.push(items.MegaPotion.name);
  players.Player1.inventory.push(items.MegaPotion);
  document.getElementById(
    "clearingTalk"
  ).innerText = `${enemies.GuardOne.name}: You wretched thief!!`;
  clearing();
  ambush();
  setTimeout(endClearingTalk, 3000);
});
// DOCK BTNS --------------------------------
function endDockMsg() {
  document.getElementById("dockMsg").innerText = "";
}
function endDockTalk() {
  document.getElementById("dockTalk").innerText = "";
}
document.getElementById("expDock").addEventListener("click", () => {
  document.getElementById("dockCont").style.display = "block";
});
document.getElementById("merchantBtn").addEventListener("click", () => {
  document.getElementById("merchChoice").style.display = "flex";
  document.getElementById(
    "dockTalk"
  ).innerText = `${characters.Merchant.name}: Lookin' fer a Ticket fer Ship Passage?`;
  setTimeout(endDockTalk, 3000);
});
document.getElementById("merchYes").addEventListener("click", () => {
  document.getElementById("merchChoice").style.display = "none";
  if (players.Player1.gp >= items.Ticket.gp) {
    players.Player1.gp -= items.Ticket.gp;
    players.Player1.xp += items.Ticket.xp;
    players.Player1.items.push(items.Ticket.name);
    players.Player1.inventory.push(items.Ticket);
    checkXP();
    renderDockPlayer();
    document.getElementById("shipBtn").style.display = "block";
    document.getElementById(
      "dockTalk"
    ).innerText = `${characters.Merchant.name}: Here ya go!`;
    setTimeout(endDockTalk, 3000);
    document.getElementById(
      "dockMsg"
    ).innerText = `${players.Player1.name}, bought a Ticket!`;
    setTimeout(endDockMsg, 3000);
  } else {
    document.getElementById(
      "dockTalk"
    ).innerText = `${characters.Merchant.name}: That'll be 20 Gold Coins!`;
    setTimeout(endDockTalk, 3000);
  }
});
document.getElementById("merchNo").addEventListener("click", () => {
  document.getElementById("merchChoice").style.display = "none";
  document.getElementById(
    "dockTalk"
  ).innerText = `${characters.Merchant.name}: Can't board the ship without a ticket!`;
  setTimeout(endDockTalk, 3000);
});
// // SHIP BTNS --------------------------------
function endShipTalk() {
  document.getElementById("shipTalk").innerText = "";
}
function endShipMsg() {
  document.getElementById("shipMsg").innerText = "";
}
document.getElementById("expShip").addEventListener("click", () => {
  document.getElementById("shipCont").style.display = "block";
  document.getElementById(
    "shipMsg"
  ).innerText = `${players.Player1.name}, hmmm... What's in the hull??`;
  setTimeout(endShipMsg, 3000);
});
document.getElementById("capnTalk").addEventListener("click", () => {
  document.getElementById("shipTalk").innerText = `
  ${characters.Captain.name}: ${
    characters.Captain.quotes[
      Math.floor(Math.random() * characters.Captain.quotes.length)
    ]
  }`;
  setTimeout(endShipTalk, 3000);
});
document.getElementById("boatswainTalk").addEventListener("click", () => {
  document.getElementById("shipTalk").innerText = `
  ${characters.Boatswain.name}: ${
    characters.Boatswain.quotes[
      Math.floor(Math.random() * characters.Boatswain.quotes.length)
    ]
  }`;
  setTimeout(endShipTalk, 3000);
});
// // HULL BTNS --------------------------------
function endHullMsg() {
  document.getElementById("hullMsg").innerText = "";
}
function endHullTalk() {
  document.getElementById("hullTalk").innerText = "";
}
document.getElementById("expHull").addEventListener("click", () => {
  document.getElementById("hullCont").style.display = "block";
});
document.getElementById("barrellBtn").addEventListener("click", () => {
  document.getElementById("barrellBtn").style.display = "none";
  document.getElementById("apple").style.display = "block";
  document.getElementById(
    "hullMsg"
  ).innerText = `${players.Player1.name}, you found an apple!`;
  setTimeout(endHullMsg, 3000);
});
document.getElementById("appleBtn").addEventListener("click", () => {
  document.getElementById("apple").style.display = "none";
  players.Player1.maxHP += items.Apple.hp;
  players.Player1.xp += items.Apple.xp;
  players.Player1.hp = players.Player1.maxHP;
  players.Player1.items.push(items.Apple.name);
  checkXP();
  renderHullPlayer();
});
document.getElementById("captiveTalk").addEventListener("click", () => {
  document.getElementById("captiveChoice").style.display = "flex";
  document.getElementById("hullTalk").innerText = `
  ${characters.Prisoner.name}: ${
    characters.Prisoner.quotes[
      Math.floor(Math.random() * characters.Prisoner.quotes.length)
    ]
  }`;
  setTimeout(endHullTalk, 3000);
});
document.getElementById("captiveYes").addEventListener("click", () => {
  document.getElementById("captiveChoice").style.display = "none";
  if (players.Player1.inventory.Key) {
    document.getElementById("hullTalk").innerText = `${
      characters.Prisoner.name
    }: ${
      characters.Prisoner.thanks[
        Math.floor(Math.random() * characters.Prisoner.thanks.length)
      ]
    }`;
    setTimeout(endHullTalk, 3000);
    characters.Prisoner.isFree = true;
    document.getElementById("captive").style.display = "none";
    players.Player1.xp += 25;
    checkXP();
    renderHullPlayer();
  } else {
    document.getElementById(
      "hullTalk"
    ).innerText = `${characters.Prisoner.name}: You're gonna need a KEY to get me out...`;
    setTimeout(endHullTalk, 3000);
  }
});
document.getElementById("captiveNo").addEventListener("click", () => {
  document.getElementById("captiveChoice").style.display = "none";
  document.getElementById("hullTalk").innerText = `${
    characters.Prisoner.name
  }: ${
    characters.Prisoner.pleads[
      Math.floor(Math.random() * characters.Prisoner.pleads.length)
    ]
  }`;
  setTimeout(endHullTalk, 3000);
});
// // ISLAND BTNS --------------------------------
function endIslandMsg() {
  document.getElementById("islandMsg").innerText = "";
}
function endIslandTalk() {
  document.getElementById("islandTalk").innerText = "";
}
document.getElementById("expIsland").addEventListener("click", () => {
  document.getElementById("islandCont").style.display = "block";
});
document.getElementById("constableTalk").addEventListener("click", () => {
  if (enemies.InvaderOne.alive === true && enemies.InvaderTwo.alive === true) {
    document.getElementById("islandTalk").innerText = `${
      characters.Constable.name
    }: ${
      characters.Constable.quotes[
        Math.floor(Math.random() * characters.Constable.quotes.length)
      ]
    }`;
    setTimeout(endIslandTalk, 3000);
  } else if (
    enemies.InvaderOne.alive === false &&
    enemies.InvaderTwo.alive === false
  ) {
    document.getElementById("islandTalk").innerText = `${
      characters.Constable.name
    }: ${
      characters.Constable.success[
        Math.floor(Math.random() * characters.Constable.success.length)
      ]
    }`;
    players.Player1.gp += 150;
    renderIslandPlayer();
    setTimeout(endIslandTalk, 3000);
    document.getElementById(
      "islandMsg"
    ).innerText = `Well done ${players.Player1.name}! You've helped the island village!`;
    setTimeout(endIslandMsg, 5000);
    document.getElementById("constable").style.display = "none";
  } else {
    document.getElementById("islandTalk").innerText = `${
      characters.Constable.name
    }: ${
      characters.Constable.fear[
        Math.floor(Math.random() * characters.Constable.fear.length)
      ]
    }`;
    setTimeout(endIslandTalk, 3000);
  }
});
// // VILLAGE BTNS --------------------------------
function endVillageMsg() {
  document.getElementById("villageMsg").innerText = "";
}
function endVillageTalk() {
  document.getElementById("villageTalk").innerText = "";
}
document.getElementById("expVillage").addEventListener("click", () => {
  document.getElementById("villageCont").style.display = "block";
});
document.getElementById("elderBtn").addEventListener("click", () => {
  if (
    enemies.InvaderOne.alive === false &&
    enemies.InvaderTwo.alive === false
  ) {
    document.getElementById("villageTalk").innerText = `${
      characters.Elder.name
    }: ${
      characters.Elder.gifts[
        Math.floor(Math.random() * characters.Elder.gifts.length)
      ]
    }`;
    document.getElementById("ragdoll").style.display = "block";
    setTimeout(endVillageTalk, 3000);
    document.getElementById("elder").style.display = "none";
  } else {
    document.getElementById("villageTalk").innerText = `${
      characters.Elder.name
    }: ${
      characters.Elder.quotes[
        Math.floor(Math.random() * characters.Elder.quotes.length)
      ]
    }`;
    setTimeout(endVillageTalk, 3000);
    document.getElementById(
      "villageMsg"
    ).innerText = `${players.Player1.name}, was that cannon fire?`;
    setTimeout(endVillageMsg, 3000);
  }
});
document.getElementById("ragdollBtn").addEventListener("click", () => {
  document.getElementById("ragdoll").style.display = "none";
  players.Player1.items.push(items.Ragdoll.name);
  players.Player1.inventory.push(items.Ragdoll);
  players.Player1.xp += items.Ragdoll.xp;
  checkXP();
  renderVillagePlayer();
});
// // OUTSKIRTS BTNS --------------------------------
function endOutMsg() {
  document.getElementById("outskirtMsg").innerText = "";
}
function endOutTalk() {
  document.getElementById("outskirtTalk").innerText = "";
}
function outAttDice() {
  document.getElementById("outAtt1").style.display = "flex";
}
function outDefDice() {
  document.getElementById("outDef1").style.display = "flex";
}
function hideOutDice() {
  document.getElementById("outAtt1").style.display = "none";
  document.getElementById("outDef1").style.display = "none";
}
function invade() {
  if (enemies.InvaderOne.alive === true) {
    invOneHP();
  } else if (enemies.InvaderTwo.alive === true) {
    invTwoHP();
  } else {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name} sees piles of broken armor where once stood 
    ${enemies.InvaderOne.name} & ${enemies.InvaderTwo.name}...`;
    endSkirmish();
    setTimeout(endOutMsg, 3000);
  }
}
function skirmish() {
  document.getElementById("skirmish").style.display = "block";
  invade();
}
function endSkirmish() {
  document.getElementById("skirmish").style.display = "none";
}
document.getElementById("expOutskirt").addEventListener("click", () => {
  document.getElementById("outskirtCont").style.display = "block";
  setTimeout(skirmish, 2000);
});
// INVADER ONE FUNCTIONS
function invOneHit() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderOne.name
  }: ${
    enemies.InvaderOne.hits[
      Math.floor(Math.random() * enemies.InvaderOne.hits.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invOneBlock() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderOne.name
  }: ${
    enemies.InvaderOne.blocks[
      Math.floor(Math.random() * enemies.InvaderOne.blocks.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invOneMiss() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderOne.name
  }: ${
    enemies.InvaderOne.miss[
      Math.floor(Math.random() * enemies.InvaderOne.miss.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invOneHP() {
  if (enemies.InvaderOne.hp <= 0) {
    invOneKill();
  } else {
    invOneRender();
  }
}
function invOneRender() {
  enemies.InvaderOne.alive = true;
  document.getElementById("invaderOne").style.display = "block";
  document.getElementById("invaderOneBtns").style.display = "flex";
  document.getElementById(
    "invaderOneStat"
  ).innerText = `${enemies.InvaderOne.name} | HP: ${enemies.InvaderOne.hp} | STR: ${enemies.InvaderOne.str} | DEF: ${enemies.InvaderOne.def} | AB: ${enemies.InvaderOne.ab} |`;
}
function invOneKill() {
  enemies.InvaderOne.alive = false;
  document.getElementById("invaderOne").style.display = "none";
  document.getElementById("invaderOneBtns").style.display = "none";
  document.getElementById(
    "outskirtTalk"
  ).innerText = `${enemies.InvaderOne.name}: I am vanquished!!`;
  players.Player1.vanquished.push(enemies.InvaderOne.name);
  setTimeout(endOutTalk, 3000);
  skirmish();
}
function invOneAtt() {
  const inv1Att = attackRoll();
  outAttDice();
  document.getElementById("outAtt1").innerText = inv1Att;
  if (enemies.InvaderOne.def >= inv1Att) {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attInvOne").style.display = "none";
    document.getElementById("defInvOne").style.display = "block";
    setTimeout(endOutMsg, 3000);
  } else {
    enemies.InvaderOne.hp -= inv1Att - enemies.InvaderOne.ab;
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endOutMsg, 3000);
    invOneHP();
    invOneHit();
  }
  setTimeout(hideOutDice, 2000);
}
function invOneDef() {
  const inv1Def = defRoll();
  outDefDice();
  document.getElementById("outDef1").innerText = inv1Def;
  if (enemies.InvaderOne.str >= inv1Def + players.Player1.def) {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.InvaderOne.str - players.Player1.ab;
    invOneMiss();
    renderOutskirtPlayer();
    checkHP();
    document.getElementById("attInvOne").style.display = "none";
    document.getElementById("defInvOne").style.display = "block";
    setTimeout(endOutMsg, 3000);
  } else {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attInvOne").style.display = "block";
    setTimeout(endOutMsg, 3000);
    invOneHP();
    invOneBlock();
  }
  setTimeout(hideOutDice, 2000);
}
document.getElementById("attInvOne").addEventListener("click", () => {
  invOneAtt();
});
document.getElementById("defInvOne").addEventListener("click", () => {
  invOneDef();
});
// INVADER TWO FUNCTIONS
function invTwoHit() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderTwo.name
  }: ${
    enemies.InvaderTwo.hits[
      Math.floor(Math.random() * enemies.InvaderTwo.hits.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invTwoBlock() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderTwo.name
  }: ${
    enemies.InvaderTwo.blocks[
      Math.floor(Math.random() * enemies.InvaderTwo.blocks.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invTwoMiss() {
  document.getElementById("outskirtTalk").innerText = `${
    enemies.InvaderTwo.name
  }: ${
    enemies.InvaderTwo.miss[
      Math.floor(Math.random() * enemies.InvaderTwo.miss.length)
    ]
  }`;
  setTimeout(endOutTalk, 3000);
}
function invTwoHP() {
  if (enemies.InvaderTwo.hp <= 0) {
    invTwoKill();
  } else {
    invTwoRender();
  }
}
function invTwoRender() {
  enemies.InvaderTwo.alive = true;
  document.getElementById("invaderTwo").style.display = "block";
  document.getElementById("invaderTwoBtns").style.display = "flex";
  document.getElementById(
    "invaderTwoStat"
  ).innerText = `${enemies.InvaderTwo.name} | HP: ${enemies.InvaderTwo.hp} | STR: ${enemies.InvaderTwo.str} | DEF: ${enemies.InvaderTwo.def} | AB: ${enemies.InvaderTwo.ab} |`;
}
function invTwoKill() {
  enemies.InvaderTwo.alive = false;
  document.getElementById("invaderTwo").style.display = "none";
  document.getElementById("invaderTwoBtns").style.display = "none";
  document.getElementById(
    "outskirtTalk"
  ).innerText = `${enemies.InvaderTwo.name}: You lucky bugger!!`;
  players.Player1.vanquished.push(enemies.InvaderTwo.name);
  setTimeout(endOutTalk, 3000);
  skirmish();
}
function invTwoAtt() {
  const inv2Att = attackRoll();
  outAttDice();
  document.getElementById("outAtt1").innerText = inv2Att;
  if (enemies.InvaderTwo.def >= inv2Att) {
    document.getElementById(
      "outskirtgMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    document.getElementById("attInvTwo").style.display = "none";
    document.getElementById("defInvTwo").style.display = "block";
    setTimeout(endOutMsg, 3000);
  } else {
    enemies.InvaderTwo.hp -= inv2Att - enemies.InvaderTwo.ab;
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, good hit!`;
    setTimeout(endOutMsg, 3000);
    invTwoHP();
    invTwoHit();
  }
  setTimeout(hideOutDice, 2000);
}
function invTwoDef() {
  const inv2Def = defRoll();
  outDefDice();
  document.getElementById("outDef1").innerText = inv2Def;
  if (enemies.InvaderTwo.str >= inv2Def + players.Player1.def) {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, you missed!`;
    players.Player1.hp -= enemies.InvaderTwo.str - players.Player1.ab;
    invTwoMiss();
    renderOutskirtPlayer();
    checkHP();
    document.getElementById("attInvTwo").style.display = "none";
    document.getElementById("defInvTwo").style.display = "block";
    setTimeout(endOutMsg, 3000);
  } else {
    document.getElementById(
      "outskirtMsg"
    ).innerText = `${players.Player1.name}, good block!`;
    document.getElementById("attInvTwo").style.display = "block";
    setTimeout(endOutMsg, 3000);
    invTwoHP();
    invTwoBlock();
  }
  setTimeout(hideOutDice, 2000);
}
document.getElementById("attInvTwo").addEventListener("click", () => {
  invTwoAtt();
});
document.getElementById("defInvTwo").addEventListener("click", () => {
  invTwoDef();
});

// // MOUNTAIN BTNS --------------------------------
function endMtnMsg() {
  document.getElementById("mountainMsg").innerText = "";
}
function endMtnTalk() {
  document.getElementById("mountainTalk").innerText = "";
}
document.getElementById("expMtn").addEventListener("click", () => {
  document.getElementById("mountainCont").style.display = "block";
});
document.getElementById("shepherdBtn").addEventListener("click", () => {
  document.getElementById("shepherdChoice").style.display = "flex";
  document.getElementById(
    "mountainTalk"
  ).innerText = `${characters.Shepherd.name}: Can you help me count my sheep? I keep falling asleep when I try!`;
  setTimeout(endMtnTalk, 3000);
});
document.getElementById("shepYes").addEventListener("click", () => {
  document.getElementById("shepherdChoice").style.display = "none";
  document.getElementById(
    "mountainTalk"
  ).innerText = `${characters.Shepherd.name}: Wonderful!`;
  setTimeout(endMtnTalk, 3000);
  document.getElementById(
    "mountainMsg"
  ).innerText = `This is where a sheep counting game occurs.`;
  setTimeout(endMtnMsg, 5000);
});
document.getElementById("shepNo").addEventListener("click", () => {
  document.getElementById("shepherdChoice").style.display = "none";
  document.getElementById(
    "mountainTalk"
  ).innerText = `${characters.Shepherd.name}: Well, that's a shame!`;
  setTimeout(endMtnTalk, 3000);
});

// // TEMPLE BTNS --------------------------------
function endTempleMsg() {
  document.getElementById("templeMsg").innerText = "";
}
function endTempleTalk() {
  document.getElementById("templeTalk").innerText = "";
}
document.getElementById("expTemple").addEventListener("click", () => {
  document.getElementById("templeCont").style.display = "block";
});
document.getElementById("huTalk").addEventListener("click", () => {
  huTemple();
});
document.getElementById("huYes").addEventListener("click", () => {
  document.getElementById("magicStick").style.display = "block";
  document.getElementById(
    "templeMsg"
  ).innerText = `${players.Player1.name}, Hu gave you a stick?!`;
  document.getElementById("exitTemple").style.display = "block";
  document.getElementById("huChoice").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: It is older and wiser than I am!`;
  setTimeout(endTempleTalk, 3000);
});
document.getElementById("huNo").addEventListener("click", () => {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: How unthankful.`;
  document.getElementById("huChoice").style.display = "none";
  document.getElementById("exitTemple").style.display = "block";
});
document.getElementById("magicStickBtn").addEventListener("click", () => {
  document.getElementById("magicStick").style.display = "none";
  players.Player1.str += weapons.MagicStick.str;
  players.Player1.def += weapons.MagicStick.def;
  players.Player1.weapons.push(weapons.MagicStick.name);
  players.Player1.inventory.push(weapons.MagicStick);
  renderTemplePlayer();
  document.getElementById(
    "templeMsg"
  ).innerText = `${players.Player1.name}, no enemy can stop you now!`;
  setTimeout(endTempleMsg, 3000);
});
// // CONVO FUNCTION
function huTemple() {
  document.getElementById("huTalk").style.display = "none";
  document.getElementById("expTemple").style.display = "none";
  document.getElementById("exitTemple").style.display = "none";
  setTimeout(huLine1, 1000);
  setTimeout(huLine2, 3000);
  setTimeout(huLine3, 5000);
  setTimeout(huLine4, 7000);
  setTimeout(huLine5, 9000);
  setTimeout(huLine6, 11000);
  setTimeout(huLine7, 13000);
  setTimeout(huLine8, 15000);
  setTimeout(huLine9, 17000);
  setTimeout(huLine10, 19000);
  setTimeout(huLine11, 21000);
  setTimeout(huLine12, 23000);
  setTimeout(huLine13, 25000);
  setTimeout(huLine14, 27000);
  setTimeout(huLine15, 29000);
  setTimeout(huLine16, 31000);
  setTimeout(huLine17, 33000);
  setTimeout(huLine18, 35000);
  setTimeout(huLine19, 37000);
  setTimeout(huLine20, 39000);
  setTimeout(huLine21, 41000);
  setTimeout(huLine22, 43000);
  setTimeout(huLine23, 45000);
  setTimeout(huLine24, 47000);
  setTimeout(huLine25, 49000);
  setTimeout(huLine26, 51000);
  setTimeout(huLine27, 53000);
  setTimeout(huGift, 55000);
}
function huLine1() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Do you know this is Hu's Temple?`;
}
function huLine2() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Who's temple?`;
}
function huLine3() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine4() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Who's temple?`;
}
function huLine5() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: It is.`;
}
function huLine6() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: It is what?`;
}
function huLine7() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Hu's temple.`;
}
function huLine8() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: That's what I'm asking you.`;
}
function huLine9() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: And I'm telling you.`;
}
function huLine10() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: The temple belongs to?`;
}
function huLine11() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Hu.`;
}
function huLine12() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Then who's the temple owner?`;
}
function huLine13() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine14() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Well who owns it?`;
}
function huLine15() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine16() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: No, no... Who lives here?`;
}
function huLine17() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: That's right.`;
}
function huLine18() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: I don't understand.`;
}
function huLine19() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: It is Hu's temple.`;
}
function huLine20() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: That's what I'm asking!`;
}
function huLine21() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: And you are correct!`;
}
function huLine22() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: What?`;
}
function huLine23() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: No... Hu.`;
}
function huLine24() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: I give up.`;
}
function huLine25() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Would you like a present?`;
}
function huLine26() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: A present from who?`;
}
function huLine27() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huGift() {
  document.getElementById("huChoice").style.display = "flex";
  document.getElementById(
    "templeMsg"
  ).innerText = `${characters.GreatMonk.name} offers a generous gift! Do you accept?`;
}
// // CHAMPION BTNS --------------------------------
function endChampMsg() {
  document.getElementById("champMsg").innerText = "";
}
function endChampTalk() {
  document.getElementById("champTalk").innerText = "";
}

document.getElementById("expChamp").addEventListener("click", () => {
  document.getElementById("championCont").style.display = "block";
  document.getElementById(
    "champMsg"
  ).innerText = `${players.Player1.name}, you are the champion! Look at all your loot!!`;
  setTimeout(endChampMsg, 4000);
});
document.getElementById("champTreasure").addEventListener("click", () => {
  document.getElementById("champion").style.backgroundImage =
    "url(/img/locations/champion.jpeg)";
  document.getElementById("leaderboard").style.display = "block";
  document.getElementById("playerItem").innerText =
    players.Player1.items.toString();
  document.getElementById("playerWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("playerArm").innerText =
    players.Player1.armor.toString();
  document.getElementById("playerWin").innerText = players.Player1.wins;
  document.getElementById("playerVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "champTalk"
  ).innerText = `CROWD: For ${players.Player1.name}'s a jolly good ${players.Player1.name}..
  For ${players.Player1.name}'s a jolly good ${players.Player1.name}..`;
  setTimeout(endChampTalk, 3000);
});
document.getElementById("playAgain").addEventListener("click", () => {
  resetPlayer();
});

// // HELL BTNS --------------------------------
function endHellMsg() {
  document.getElementById("hellMsg").innerText = "";
}
function endHellTalk() {
  document.getElementById("hellTalk").innerText = "";
}
document.getElementById("expHell").addEventListener("click", () => {
  document.getElementById("hellCont").style.display = "block";
  document.getElementById(
    "hellMsg"
  ).innerText = `${players.Player1.name}, welcom to HELL...`;
  setTimeout(endHellMsg, 3000);
});
document.getElementById("demonBtn").addEventListener("click", () => {
  document.getElementById("hellTalk").innerText = `${characters.Demon.name}: ${
    characters.Demon.quotes[
      Math.floor(Math.random() * characters.Demon.quotes.length)
    ]
  }`;
  setTimeout(endHellTalk, 3000);
});
document.getElementById("lawyerBtn").addEventListener("click", () => {
  document.getElementById("hellTalk").innerText = `${characters.Lawyer.name}: ${
    characters.Lawyer.quotes[
      Math.floor(Math.random() * characters.Demon.quotes.length)
    ]
  }`;
  setTimeout(endHellTalk, 3000);
});
document.getElementById("restart").addEventListener("click", () => {
  resetPlayer();
});
