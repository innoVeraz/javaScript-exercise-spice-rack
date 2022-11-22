const spiceRack = ["asd", "asd", "qwe"]; //

const shelf = document.querySelector("#spices");

printSpiceShelf(); //behövs bara om det finns saker i spiceRack variabeln från början

const addSpiceBtn = document.querySelector("#addSpiceBtn");
addSpiceBtn.addEventListener("click", addNewSpice);

function addNewSpice() {
  const newSpiceName = document.querySelector("#newSpiceField");
  if (newSpiceName.value.length === 0) {
    //kollar om det finns ett värde, annars avbryt
    return;
  }
  if (spiceRack.indexOf(newSpiceName.value) === -1) {
    // säkerställer att spice inte redan finns i spicerack
    spiceRack.push(newSpiceName.value); //lägg till spice i spicerack
  }
  printSpiceShelf();
}

function printSpiceShelf() {
  shelf.innerHTML = "";
  for (let i = 0; i < spiceRack.length; i++) {
    const spiceName = spiceRack[i];
    const spiceNode = document.createElement("li");
    spiceNode.classList.add("list-item");
    const spiceTextNode = document.createTextNode(spiceName);
    const trashIcon = document.createElement("button"); // trasch icon
    trashIcon.setAttribute("data-name", spiceName);
    trashIcon.classList.add("material-symbols-outlined");
    const trashIconText = document.createTextNode("delete");
    trashIcon.appendChild(trashIconText);

    spiceNode.appendChild(spiceTextNode);
    spiceNode.appendChild(trashIcon);

    shelf.appendChild(spiceNode);
  }

  const spices = Array.from(document.querySelectorAll("li button"));
  spices.forEach((item) => {
    item.addEventListener("click", removeSpice);
  });
}

function removeSpice(e) {
  const index = spiceRack.indexOf(e.target.dataset.name);
  if (index > -1) {
    spiceRack.splice(index, 1);
    printSpiceShelf();
  }
}
