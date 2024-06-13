// Functionize Minecraft Fishing Start Code

//  Variables
let resultImg = document.getElementById("r-img");
let codEl = document.getElementById("n-cod");
let salmonEl = document.getElementById("n-sal");
let tropicalEl = document.getElementById("n-tro");
let pufferEl = document.getElementById("n-puff");
let fishBtn = document.getElementById("fish-btn");
let plus5Btn = document.getElementById("+5");
let until200Btn = document.getElementById("until-200");
let untilChoiceInput = document.getElementById("untilchoice");
let fishInventory = document.getElementById("inventory");

// Fish numbers
let nCod = 0;
let nSal = 0;
let nTro = 0;
let nPuff = 0;

// butttons
fishBtn.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
untilChoiceInput.addEventListener("change", untilChoice);

// Function
function fishOnce() {
  //  Select Character
  let character = document.getElementById("character-select").value;
  // Generate A Random Number
  let randNum = Math.random();

  if (character === "steve") {
    // Steve

    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      nCod++;
      codEl.innerHTML = nCod;
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      nSal++;
      salmonEl.innerHTML = nSal;
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      nTro++;
      tropicalEl.innerHTML = nTro;
    } else {
      resultImg.src = "img/Pufferfish.png";
      nPuff++;
      pufferEl.innerHTML = nPuff;
    }
    addToInventory();
  } else if (character === "alex") {
    // Alex

    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      nCod++;
      codEl.innerHTML = nCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      nSal++;
      salmonEl.innerHTML = nSal;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      nTro++;
      tropicalEl.innerHTML = nTro;
    } else {
      resultImg.src = "img/Pufferfish.png";
      nPuff++;
      pufferEl.innerHTML = nPuff;
    }
  } else if (character === "villager") {
    // Villager
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      nCod++;
      codEl.innerHTML = nCod;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      nSal++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      nTro++;
      tropicalEl.innerHTML = nTro;
    } else {
      resultImg.src = "img/Pufferfish.png";
      nPuff++;
      pufferEl.innerHTML = nPuff;
    }
  }
}

function plus5() {
  for (let fish = 1; fish <= 5; fish++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = nCod + 200;
  count = 0;
  while (nCod < codTarget) {
    fishOnce();
    count++;
  }
  console.log(count);
}

function untilChoice() {
  let untilChoiceValue = +untilChoiceInput.value;
  for (let fish = 1; fish <= untilChoiceValue; fish++) {
    fishOnce();
  }
}

function addToInventory() {
  if (resultImg.src == "img/Raw-Cod.png") {
    let addFish = document.createElement("img");
    addFish.src = "img/Raw-Cod.png";
    fishInventory.appendChild(newImg);
    console.log("if statement works");
  }
}
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  console.log("Fish");
}
