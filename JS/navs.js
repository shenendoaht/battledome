import { displayPlayer } from "/JS/players.js";

//HIDE FUNCTIONS -------------------------------------------
function hideTown() {
  document.getElementById("town").style.display = "none";
  document.getElementById("townCont").style.display = "none";
}
function hideHouse() {
  document.getElementById("house").style.display = "none";
  document.getElementById("houseCont").style.display = "none";
}
function hideBed() {
  document.getElementById("bedroom").style.display = "none";
  document.getElementById("bedCont").style.display = "none";
}
function hideTav() {
  document.getElementById("tavern").style.display = "none";
  document.getElementById("tavCont").style.display = "none";
}
function hideInn() {
  document.getElementById("inn").style.display = "none";
  document.getElementById("innCont").style.display = "none";
}
function hideShop() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("shopCont").style.display = "none";
}
function hideArena() {
  document.getElementById("arena").style.display = "none";
  document.getElementById("arenaCont").style.display = "none";
}
function hideArmory() {
  document.getElementById("armory").style.display = "none";
  document.getElementById("armoryCont").style.display = "none";
}
function hideQuad() {
  document.getElementById("quad").style.display = "none";
  document.getElementById("quadCont").style.display = "none";
}
function hideBattleDome() {
  document.getElementById("battledome").style.display = "none";
  document.getElementById("battleCont").style.display = "none";
}
function hideForest() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("forestCont").style.display = "none";
}
function hideBridge() {
  document.getElementById("bridge").style.display = "none";
  document.getElementById("bridgeCont").style.display = "none";
}
function hideRiver() {
  document.getElementById("river").style.display = "none";
  document.getElementById("riverCont").style.display = "none";
}
function hideClearing() {
  document.getElementById("clearing").style.display = "none";
  document.getElementById("clearingCont").style.display = "none";
}
function hideHut() {
  document.getElementById("hut").style.display = "none";
  document.getElementById("hutCont").style.display = "none";
}
function hideHutInt() {
  document.getElementById("hutInt").style.display = "none";
  document.getElementById("hutIntCont").style.display = "none";
}
function hideDock() {
  document.getElementById("dock").style.display = "none";
  document.getElementById("dockCont").style.display = "none";
}
function hideShip() {
  document.getElementById("ship").style.display = "none";
  document.getElementById("shipCont").style.display = "none";
}
function hideHull() {
  document.getElementById("hull").style.display = "none";
  document.getElementById("hullCont").style.display = "none";
}
function hideIsland() {
  document.getElementById("island").style.display = "none";
  document.getElementById("islandCont").style.display = "none";
}
function hideVillage() {
  document.getElementById("village").style.display = "none";
  document.getElementById("villageCont").style.display = "none";
}
function hideOutskirt() {
  document.getElementById("outskirt").style.display = "none";
  document.getElementById("outskirtCont").style.display = "none";
}
function hideMountain() {
  document.getElementById("mountain").style.display = "none";
  document.getElementById("mountainCont").style.display = "none";
}
function hideTemple() {
  document.getElementById("temple").style.display = "none";
  document.getElementById("templeCont").style.display = "none";
}
function hideChampion() {
  document.getElementById("champion").style.display = "none";
  document.getElementById("championCont").style.display = "none";
}
function hideHell() {
  document.getElementById("hell").style.display = "none";
  document.getElementById("hellCont").style.display = "none";
}
// NAVS------------------------------------------------------
function landing() {
  hideChampion();
  hideHell();
  document.getElementById("landing").style.display = "block";
  document.getElementById(
    "lander-msg"
  ).innerText = `Name your player and begin your journey!`;
  document.getElementById("login").style.display = "none";
}
function town() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("town").style.display = "block";
  hideHouse();
  hideDock();
  hideArena();
  hideShop();
  hideTav();
}
function house() {
  hideTown();
  hideBed();
  document.getElementById("house").style.display = "block";
}
function bedroom() {
  document.getElementById("bedroom").style.display = "block";
  hideHouse();
}
function shop() {
  document.getElementById("shop").style.display = "block";
  hideTown();
}
function tavern() {
  document.getElementById("tavern").style.display = "block";
  hideInn();
  hideTown();
}
function inn() {
  document.getElementById("inn").style.display = "block";
  hideTav();
}
function arena() {
  document.getElementById("arena").style.display = "block";
  hideTown();
  hideArmory();
  hideQuad();
  hideBattleDome();
}
function quad() {
  document.getElementById("quad").style.display = "block";
  hideArena();
}
function armory() {
  document.getElementById("armory").style.display = "block";
  hideArena();
}
function battledome() {
  document.getElementById("battledome").style.display = "block";
  document.getElementById("expBattle").style.display = "block";
  hideArena();
}
function dock() {
  document.getElementById("dock").style.display = "block";
  hideTown();
  hideForest();
  hideShip();
  hideBridge();
  hideClearing();
}
function forest() {
  document.getElementById("forest").style.display = "block";
  hideDock();
  hideBridge();
}
function bridge() {
  document.getElementById("bridge").style.display = "block";
  hideForest();
  hideRiver();
  hideClearing();
}
function river() {
  document.getElementById("river").style.display = "block";
  hideBridge();
}
function clearing() {
  document.getElementById("clearing").style.display = "block";
  hideBridge();
  hideHut();
  hideHutInt();
}
function hut() {
  document.getElementById("hut").style.display = "block";
  hideClearing();
  hideHutInt();
}
function hutInt() {
  document.getElementById("hutInt").style.display = "block";
  hideHut();
}
function ship() {
  document.getElementById("ship").style.display = "block";
  hideDock();
  hideHull();
  hideIsland();
}
function hull() {
  document.getElementById("hull").style.display = "block";
  hideShip();
}
function island() {
  document.getElementById("island").style.display = "block";
  hideShip();
  hideVillage();
}
function village() {
  document.getElementById("village").style.display = "block";
  hideIsland();
  hideOutskirt();
}
function outskirt() {
  document.getElementById("outskirt").style.display = "block";
  hideVillage();
  hideMountain();
}
function mountain() {
  document.getElementById("mountain").style.display = "block";
  hideOutskirt();
  hideTemple();
}
function temple() {
  document.getElementById("temple").style.display = "block";
  hideMountain();
}
function champion() {
  document.getElementById("login").style.display = "none";
  document.getElementById("landing").style.display = "none";
  hideTown();
  hideHouse();
  hideBed();
  hideArena();
  hideArmory();
  hideQuad();
  hideBattleDome();
  hideShop();
  hideTav();
  hideInn();
  hideDock();
  hideForest();
  hideBridge();
  hideClearing();
  hideRiver();
  hideHut();
  hideHutInt();
  hideShip();
  hideHull();
  hideVillage();
  hideOutskirt();
  hideMountain();
  hideTemple();
  hideHell();
  document.getElementById("champion").style.display = "block";
}
function hell() {
  document.getElementById("login").style.display = "none";
  document.getElementById("landing").style.display = "none";
  hideTown();
  hideHouse();
  hideBed();
  hideArena();
  hideArmory();
  hideQuad();
  hideBattleDome();
  hideShop();
  hideTav();
  hideInn();
  hideDock();
  hideForest();
  hideBridge();
  hideClearing();
  hideRiver();
  hideHut();
  hideHutInt();
  hideShip();
  hideHull();
  hideVillage();
  hideOutskirt();
  hideMountain();
  hideTemple();
  hideChampion();
  document.getElementById("hell").style.display = "block";
}
function login() {
  document.getElementById("login").style.display = "block";
  document.getElementById("landing").style.display = "none";
  hideTown();
  hideHouse();
  hideBed();
  hideArena();
  hideArmory();
  hideQuad();
  hideBattleDome();
  hideShop();
  hideTav();
  hideInn();
  hideDock();
  hideForest();
  hideBridge();
  hideClearing();
  hideRiver();
  hideHut();
  hideHutInt();
  hideShip();
  hideHull();
  hideVillage();
  hideOutskirt();
  hideMountain();
  hideTemple();
  hideChampion();
  hideHell();
}
export {
  landing,
  town,
  house,
  bedroom,
  shop,
  tavern,
  inn,
  arena,
  quad,
  armory,
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
};
