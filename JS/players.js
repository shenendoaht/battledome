let players = {
  Player1: {
    name: "",
    level: 0,
    maxHP: 0,
    hp: 0,
    xp: 0,
    str: 0,
    def: 0,
    ab: 0,
    gp: 0,
    weapons: [],
    items: [],
    armor: [],
    vanquished: [],
    inventory: [],
    wins: 0,
    alive: false,
    // email: "",
    // pw: "",
  },
};

//  PLAYER DISPLAY
function displayStats() {
  document.getElementById(
    "playerStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function displayPlayer() {
  document.getElementById("playerDisplay").style.display = "block";
  document.getElementById("playerStats").style.display = "block";
  displayStats();
}
function renderTownPlayer() {
  document.getElementById("townPlayer").style.display = "block";
  document.getElementById(
    "townStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHousePlayer() {
  document.getElementById("housePlayer").style.display = "block";
  document.getElementById(
    "houseStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBedPlayer() {
  document.getElementById("bedPlayer").style.display = "block";
  document.getElementById(
    "bedStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderTavPlayer() {
  document.getElementById("tavPlayer").style.display = "block";
  document.getElementById(
    "tavStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderInnPlayer() {
  document.getElementById("innPlayer").style.display = "block";
  document.getElementById(
    "innStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderShopPlayer() {
  document.getElementById("shopPlayer").style.display = "block";
  document.getElementById(
    "shopStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderArenaPlayer() {
  document.getElementById("arenaPlayer").style.display = "block";
  document.getElementById(
    "arenaStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderQuadPlayer() {
  document.getElementById("quadPlayer").style.display = "block";
  document.getElementById(
    "quadStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderArmoryPlayer() {
  document.getElementById("armoryPlayer").style.display = "block";
  document.getElementById(
    "armoryStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBattlePlayer() {
  document.getElementById("battlePlayer").style.display = "block";
  document.getElementById(
    "battleStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderDockPlayer() {
  document.getElementById("dockPlayer").style.display = "block";
  document.getElementById(
    "dockStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderForestPlayer() {
  document.getElementById("forestPlayer").style.display = "block";
  document.getElementById(
    "forestStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBridgePlayer() {
  document.getElementById("bridgePlayer").style.display = "block";
  document.getElementById(
    "bridgeStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderRiverPlayer() {
  document.getElementById("riverPlayer").style.display = "block";
  document.getElementById(
    "riverStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderClearingPlayer() {
  document.getElementById("clearingPlayer").style.display = "block";
  document.getElementById(
    "clearingStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHutPlayer() {
  document.getElementById("hutPlayer").style.display = "block";
  document.getElementById(
    "hutStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHutIntPlayer() {
  document.getElementById("hutIntPlayer").style.display = "block";
  document.getElementById(
    "hutIntStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderShipPlayer() {
  document.getElementById("shipPlayer").style.display = "block";
  document.getElementById(
    "shipStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHullPlayer() {
  document.getElementById("hullPlayer").style.display = "block";
  document.getElementById(
    "hullStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderIslandPlayer() {
  document.getElementById("islandPlayer").style.display = "block";
  document.getElementById(
    "islandStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderVillagePlayer() {
  document.getElementById("villagePlayer").style.display = "block";
  document.getElementById(
    "villageStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderOutskirtPlayer() {
  document.getElementById("outskirtPlayer").style.display = "block";
  document.getElementById(
    "outskirtStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderMtnPlayer() {
  document.getElementById("mtnPlayer").style.display = "block";
  document.getElementById(
    "mtnStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderTemplePlayer() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById(
    "templeStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderChampion() {
  document.getElementById("championPlayer").style.display = "block";
  document.getElementById(
    "champStats"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderDeadPlayer() {
  document.getElementById("hellPlayer").style.display = "block";
}

export {
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
};
