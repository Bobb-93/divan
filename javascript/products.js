/*
    DOM Objects
*/
const furnitureTypes = {
    sofas: document.getElementById("sofas"),
    sectionalSofas: document.getElementById("sectionalSofas"),
    sleeperSofas: document.getElementById("sleeperSofas"),
    ottomanChairs: document.getElementById("ottomanChairs"),
    diningTables: document.getElementById("diningTables"),
    armChairs: document.getElementById("armChairs"),
    consoleTables: document.getElementById("consoleTables"),
    beds: document.getElementById("beds"),
    nightstands: document.getElementById("nightstands"),
    mirrors: document.getElementById("mirrors"),
    desks: document.getElementById("desks"),
    storageCabinets: document.getElementById("storageCabinets"),
    bookcases: document.getElementById("bookcases"),
    leftDiv: document.getElementById("leftDiv"),
    centerDiv: document.getElementById("centerDiv"),
    rightDiv: document.getElementById("rightDiv"),
};

const threeDivs = {
    leftProductName: document.querySelector("#leftDiv .productName"),
    leftProductPrice: document.querySelector("#leftDiv .price span"),
    leftDataPrice: document.querySelector("#leftDiv .addToCart"),
    leftProductDescription: document.querySelector("#leftDiv .description"),
    leftProductImg: document.getElementById("img-1"),
    
    centerProductName: document.querySelector("#centerDiv .productName"),
    centerProductPrice: document.querySelector("#centerDiv .price span"),
    centerDataPrice: document.querySelector("#centerDiv .addToCart"),
    centerProductDescription: document.querySelector("#centerDiv .description"),
    centerProductImg: document.getElementById("img-2"),
    
    rightProductName: document.querySelector("#rightDiv .productName"),
    rightProductPrice: document.querySelector("#rightDiv .price span"),
    rightDataPrice: document.querySelector("#rightDiv .addToCart"),
    rightProductDescription: document.querySelector("#rightDiv .description"),
    rightProductImg: document.getElementById("img-3")
    
};

/*
    Furniture Lists from Objects
*/
const sofasList = [
    {
        name: "Sofa 1",
        price: 299.99,
        description: "Average Sofa",
        imageSrc: "../images/products/sofa-1.jpg"
    },
    {
        name: "Sofa 2",
        price: 399.99,
        description: "Expensive Sofa",
        imageSrc: "../images/products/sofa-2.jpg"
    },
    {
        name: "Sofa 3",
        price: 189.99,
        description: "Cheap Sofa",
        imageSrc: "../images/products/sofa-3.jpg"
    }
];

const sectionalSofasList = [
    {
        name: "Sectional Sofa 1",
        price: 319.99,
        description: "Average Sectional Sofa",
        imageSrc: "../images/products/sectional-sofa-1.jpg"
    },
    {
        name: "Sectional Sofa 2",
        price: 259.99,
        description: "Cheap Sectional Sofa",
        imageSrc: "../images/products/sectional-sofa-2.jpg"
    },
    {
        name: "Sectional Sofa 3",
        price: 379.99,
        description: "Expensive Sectional Sofa",
        imageSrc: "../images/products/sectional-sofa-3.jpg"
    }
];

const sleeperSofasList = [
    {
        name: "Sleeper Sofa 1",
        price: 319.99,
        description: "Average Sleeper Sofa",
        imageSrc: "../images/products/sleeper-sofa-1.jpg"
    },
    {
        name: "Sleeper Sofa 2",
        price: 259.99,
        description: "Cheap Sleeper Sofa",
        imageSrc: "../images/products/sleeper-sofa-2.jpg"
    },
    {
        name: "Sleeper Sofa 3",
        price: 379.99,
        description: "Expensive Sleeper Sofa",
        imageSrc: "../images/products/sleeper-sofa-3.jpg"
    }
];

const ottomanChairsList = [
    {
        name: "Ottoman Chair 1",
        price: 319.99,
        description: "Average Ottoman Chair",
        imageSrc: "../images/products/ottoman-chair-1.jpg"
    },
    {
        name: "Ottoman Chair 2",
        price: 259.99,
        description: "Cheap Ottoman Chair",
        imageSrc: "../images/products/ottoman-chair-2.jpg"
    },
    {
        name: "Ottoman Chair 3",
        price: 379.99,
        description: "Expensive Ottoman Chair",
        imageSrc: "../images/products/ottoman-chair-3.jpg"
    }
];

const diningTablesList = [
    {
        name: "Dining Table 1",
        price: 219.99,
        description: "Average Dining Table",
        imageSrc: "../images/products/dining-table-1.jpg"
    },
    {
        name: "Dining Table 2",
        price: 299.99,
        description: "Expensive Dining Table",
        imageSrc: "../images/products/dining-table-2.jpg"
    },
    {
        name: "Dining Table 3",
        price: 169.99,
        description: "Cheap Dining Table",
        imageSrc: "../images/products/dining-table-3.jpg"
    }
];

const armChairsList = [
    {
        name: "Armchair 1",
        price: 219.99,
        description: "Average Armchair",
        imageSrc: "../images/products/Armchair-1.jpg"
    },
    {
        name: "Armchair 2",
        price: 279.99,
        description: "Expensive Armchair",
        imageSrc: "../images/products/Armchair-2.jpg"
    },
    {
        name: "Armchair 3",
        price: 189.99,
        description: "Cheap Armchair",
        imageSrc: "../images/products/Armchair-3.jpg"
    }
];

const consoleTablesList = [
    {
        name: "Console Table 1",
        price: 209.99,
        description: "Average Console Table",
        imageSrc: "../images/products/console-table-1.jpg"
    },
    {
        name: "Console Table 2",
        price: 399.99,
        description: "Expensive Console Table",
        imageSrc: "../images/products/console-table-2.jpg"
    },
    {
        name: "Console Table 3",
        price: 179.99,
        description: "Cheap Console Table",
        imageSrc: "../images/products/console-table-3.jpg"
    }
];

const bedsList = [
    {
        name: "Bed 1",
        price: 219.99,
        description: "Average Bed",
        imageSrc: "../images/products/bed-1.jpg"
    },
    {
        name: "Bed 2",
        price: 299.99,
        description: "Expensive Bed",
        imageSrc: "../images/products/bed-2.jpg"
    },
    {
        name: "Bed 3",
        price: 169.99,
        description: "Cheap Bed",
        imageSrc: "../images/products/bed-3.jpg"
    }
];

const nightstandsList = [
    {
        name: "Night Stand 1",
        price: 219.99,
        description: "Average Night Stand",
        imageSrc: "../images/products/nightstand-1.jpg"
    },
    {
        name: "Night Stand 2",
        price: 299.99,
        description: "Expensive Night Stand",
        imageSrc: "../images/products/nightstand-2.jpg"
    },
    {
        name: "Night Stand 3",
        price: 169.99,
        description: "Cheap Night Stand",
        imageSrc: "../images/products/nightstand-3.jpg"
    }
];

const mirrorsList = [
    {
        name: "Mirror 1",
        price: 219.99,
        description: "Average Mirror",
        imageSrc: "../images/products/mirror-1.jpg"
    },
    {
        name: "Mirror 2",
        price: 299.99,
        description: "Expensive Mirror",
        imageSrc: "../images/products/mirror-2.jpg"
    },
    {
        name: "Mirror 3",
        price: 169.99,
        description: "Cheap Mirror",
        imageSrc: "../images/products/mirror-3.jpg"
    }
];

const desksList = [
    {
        name: "Desk 1",
        price: 219.99,
        description: "Average Desk",
        imageSrc: "../images/products/desk-1.jpg"
    },
    {
        name: "Desk 2",
        price: 299.99,
        description: "Expensive Desk",
        imageSrc: "../images/products/desk-2.jpg"
    },
    {
        name: "Desk 3",
        price: 169.99,
        description: "Cheap Desk",
        imageSrc: "../images/products/desk-3.jpg"
    }
];

const storageCabinetsList = [
    {
        name: "Storage Cabinet 1",
        price: 259.99,
        description: "Average Storage Cabinet",
        imageSrc: "../images/products/storage-cabinet-1.jpg"
    },
    {
        name: "Storage Cabinet 2",
        price: 299.99,
        description: "Expensive Storage Cabinet",
        imageSrc: "../images/products/storage-cabinet-2.jpg"
    },
    {
        name: "Storage Cabinet 3",
        price: 169.99,
        description: "Cheap Storage Cabinet",
        imageSrc: "../images/products/storage-cabinet-3.jpg"
    }
];

const bookcasesList = [
    {
        name: "Bookcase 1",
        price: 219.99,
        description: "Average Bookcase",
        imageSrc: "../images/products/bookcase-1.jpg"
    },
    {
        name: "Bookcase 2",
        price: 299.99,
        description: "Expensive Bookcase",
        imageSrc: "../images/products/bookcase-2.jpg"
    },
    {
        name: "Bookcase 3",
        price: 169.99,
        description: "Cheap Bookcase",
        imageSrc: "../images/products/bookcase-3.jpg"
    }
];

let totalSum = 0;
let cart = [];

/*
    Functions
*/

//help function
const showDivs = function(){
    leftDiv.style.display = "inline-block";
    centerDiv.style.display = "inline-block";
    rightDiv.style.display = "inline-block";
};

/*
    Loading Items
*/
const loadSofas = function(){
    
    threeDivs.leftProductName.innerText = sofasList[0].name;
    threeDivs.leftProductPrice.innerText = sofasList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", sofasList[0].price);
    threeDivs.leftProductDescription.innerText = sofasList[0].description;
    threeDivs.leftProductImg.src = sofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sofasList[1].name;
    threeDivs.centerProductPrice.innerText = sofasList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", sofasList[1].price);
    threeDivs.centerProductDescription.innerText = sofasList[1].description;
    threeDivs.centerProductImg.src = sofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sofasList[2].name;
    threeDivs.rightProductPrice.innerText = sofasList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", sofasList[2].price);
    threeDivs.rightProductDescription.innerText = sofasList[2].description;
    threeDivs.rightProductImg.src = sofasList[2].imageSrc;
    
    showDivs();
};

const loadSectionalSofas = function(){
    
    threeDivs.leftProductName.innerText = sectionalSofasList[0].name;
    threeDivs.leftProductPrice.innerText = sectionalSofasList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", sectionalSofasList[0].price);
    threeDivs.leftProductDescription.innerText = sectionalSofasList[0].description;
    threeDivs.leftProductImg.src = sectionalSofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sectionalSofasList[1].name;
    threeDivs.centerProductPrice.innerText = sectionalSofasList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", sectionalSofasList[1].price);
    threeDivs.centerProductDescription.innerText = sectionalSofasList[1].description;
    threeDivs.centerProductImg.src = sectionalSofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sectionalSofasList[2].name;
    threeDivs.rightProductPrice.innerText = sectionalSofasList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", sectionalSofasList[2].price);
    threeDivs.rightProductDescription.innerText = sectionalSofasList[2].description;
    threeDivs.rightProductImg.src = sectionalSofasList[2].imageSrc;
    
    showDivs();
};

const loadSleeperSofas = function(){
    
    threeDivs.leftProductName.innerText = sleeperSofasList[0].name;
    threeDivs.leftProductPrice.innerText = sleeperSofasList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", sleeperSofasList[0].price);
    threeDivs.leftProductDescription.innerText = sleeperSofasList[0].description;
    threeDivs.leftProductImg.src = sleeperSofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sleeperSofasList[1].name;
    threeDivs.centerProductPrice.innerText = sleeperSofasList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", sleeperSofasList[1].price);
    threeDivs.centerProductDescription.innerText = sleeperSofasList[1].description;
    threeDivs.centerProductImg.src = sleeperSofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sleeperSofasList[2].name;
    threeDivs.rightProductPrice.innerText = sleeperSofasList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", sleeperSofasList[2].price);
    threeDivs.rightProductDescription.innerText = sleeperSofasList[2].description;
    threeDivs.rightProductImg.src = sleeperSofasList[2].imageSrc;
    
    showDivs();
};

const loadOttomanChairs = function(){
    
    threeDivs.leftProductName.innerText = ottomanChairsList[0].name;
    threeDivs.leftProductPrice.innerText = ottomanChairsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", ottomanChairsList[0].price);
    threeDivs.leftProductDescription.innerText = ottomanChairsList[0].description;
    threeDivs.leftProductImg.src = ottomanChairsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = ottomanChairsList[1].name;
    threeDivs.centerProductPrice.innerText = ottomanChairsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", ottomanChairsList[1].price);
    threeDivs.centerProductDescription.innerText = ottomanChairsList[1].description;
    threeDivs.centerProductImg.src = ottomanChairsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = ottomanChairsList[2].name;
    threeDivs.rightProductPrice.innerText = ottomanChairsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", ottomanChairsList[2].price);
    threeDivs.rightProductDescription.innerText = ottomanChairsList[2].description;
    threeDivs.rightProductImg.src = ottomanChairsList[2].imageSrc;
    
    showDivs();
};

const loadDiningTables = function(){
    
    threeDivs.leftProductName.innerText = diningTablesList[0].name;
    threeDivs.leftProductPrice.innerText = diningTablesList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", diningTablesList[0].price);
    threeDivs.leftProductDescription.innerText = diningTablesList[0].description;
    threeDivs.leftProductImg.src = diningTablesList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = diningTablesList[1].name;
    threeDivs.centerProductPrice.innerText = diningTablesList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", diningTablesList[1].price);
    threeDivs.centerProductDescription.innerText = diningTablesList[1].description;
    threeDivs.centerProductImg.src = diningTablesList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = diningTablesList[2].name;
    threeDivs.rightProductPrice.innerText = diningTablesList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", diningTablesList[2].price);
    threeDivs.rightProductDescription.innerText = diningTablesList[2].description;
    threeDivs.rightProductImg.src = diningTablesList[2].imageSrc;
    
    showDivs();
};

const loadArmChairs = function(){
    
    threeDivs.leftProductName.innerText = armChairsList[0].name;
    threeDivs.leftProductPrice.innerText = armChairsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", armChairsList[0].price);
    threeDivs.leftProductDescription.innerText = armChairsList[0].description;
    threeDivs.leftProductImg.src = armChairsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = armChairsList[1].name;
    threeDivs.centerProductPrice.innerText = armChairsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", armChairsList[1].price);
    threeDivs.centerProductDescription.innerText = armChairsList[1].description;
    threeDivs.centerProductImg.src = armChairsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = armChairsList[2].name;
    threeDivs.rightProductPrice.innerText = armChairsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", armChairsList[2].price);
    threeDivs.rightProductDescription.innerText = armChairsList[2].description;
    threeDivs.rightProductImg.src = armChairsList[2].imageSrc;
    
    showDivs();
};

const loadConsoleTables = function(){
    
    threeDivs.leftProductName.innerText = consoleTablesList[0].name;
    threeDivs.leftProductPrice.innerText = consoleTablesList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", consoleTablesList[0].price);
    threeDivs.leftProductDescription.innerText = consoleTablesList[0].description;
    threeDivs.leftProductImg.src = consoleTablesList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = consoleTablesList[1].name;
    threeDivs.centerProductPrice.innerText = consoleTablesList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", consoleTablesList[1].price);
    threeDivs.centerProductDescription.innerText = consoleTablesList[1].description;
    threeDivs.centerProductImg.src = consoleTablesList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = consoleTablesList[2].name;
    threeDivs.rightProductPrice.innerText = consoleTablesList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", consoleTablesList[2].price);
    threeDivs.rightProductDescription.innerText = consoleTablesList[2].description;
    threeDivs.rightProductImg.src = consoleTablesList[2].imageSrc;
    
    showDivs();
};

const loadBeds = function(){
    
    threeDivs.leftProductName.innerText = bedsList[0].name;
    threeDivs.leftProductPrice.innerText = bedsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", bedsList[0].price);
    threeDivs.leftProductDescription.innerText = bedsList[0].description;
    threeDivs.leftProductImg.src = bedsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = bedsList[1].name;
    threeDivs.centerProductPrice.innerText = bedsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", bedsList[1].price);
    threeDivs.centerProductDescription.innerText = bedsList[1].description;
    threeDivs.centerProductImg.src = bedsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = bedsList[2].name;
    threeDivs.rightProductPrice.innerText = bedsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", bedsList[2].price);
    threeDivs.rightProductDescription.innerText = bedsList[2].description;
    threeDivs.rightProductImg.src = bedsList[2].imageSrc;
    
    showDivs();
};

const loadNightstands = function(){
    
    threeDivs.leftProductName.innerText = nightstandsList[0].name;
    threeDivs.leftProductPrice.innerText = nightstandsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", nightstandsList[0].price);
    threeDivs.leftProductDescription.innerText = nightstandsList[0].description;
    threeDivs.leftProductImg.src = nightstandsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = nightstandsList[1].name;
    threeDivs.centerProductPrice.innerText = nightstandsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", nightstandsList[1].price);
    threeDivs.centerProductDescription.innerText = nightstandsList[1].description;
    threeDivs.centerProductImg.src = nightstandsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = nightstandsList[2].name;
    threeDivs.rightProductPrice.innerText = nightstandsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", nightstandsList[2].price);
    threeDivs.rightProductDescription.innerText = nightstandsList[2].description;
    threeDivs.rightProductImg.src = nightstandsList[2].imageSrc;
    
    showDivs();
};

const loadMirrors = function(){
    
    threeDivs.leftProductName.innerText = mirrorsList[0].name;
    threeDivs.leftProductPrice.innerText = mirrorsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", mirrorsList[0].price);
    threeDivs.leftProductDescription.innerText = mirrorsList[0].description;
    threeDivs.leftProductImg.src = mirrorsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = mirrorsList[1].name;
    threeDivs.centerProductPrice.innerText = mirrorsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", mirrorsList[1].price);
    threeDivs.centerProductDescription.innerText = mirrorsList[1].description;
    threeDivs.centerProductImg.src = mirrorsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = mirrorsList[2].name;
    threeDivs.rightProductPrice.innerText = mirrorsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", mirrorsList[2].price);
    threeDivs.rightProductDescription.innerText = mirrorsList[2].description;
    threeDivs.rightProductImg.src = mirrorsList[2].imageSrc;
    
    showDivs();
};

const loadStorageCabinets = function(){
    
    threeDivs.leftProductName.innerText = storageCabinetsList[0].name;
    threeDivs.leftProductPrice.innerText = storageCabinetsList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", storageCabinetsList[0].price);
    threeDivs.leftProductDescription.innerText = storageCabinetsList[0].description;
    threeDivs.leftProductImg.src = storageCabinetsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = storageCabinetsList[1].name;
    threeDivs.centerProductPrice.innerText = storageCabinetsList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", storageCabinetsList[1].price);
    threeDivs.centerProductDescription.innerText = storageCabinetsList[1].description;
    threeDivs.centerProductImg.src = storageCabinetsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = storageCabinetsList[2].name;
    threeDivs.rightProductPrice.innerText = storageCabinetsList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", storageCabinetsList[2].price);
    threeDivs.rightProductDescription.innerText = storageCabinetsList[2].description;
    threeDivs.rightProductImg.src = storageCabinetsList[2].imageSrc;
    
    showDivs();
};

const loadDesks = function(){
    
    threeDivs.leftProductName.innerText = desksList[0].name;
    threeDivs.leftProductPrice.innerText = desksList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", desksList[0].price);
    threeDivs.leftProductDescription.innerText = desksList[0].description;
    threeDivs.leftProductImg.src = desksList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = desksList[1].name;
    threeDivs.centerProductPrice.innerText = desksList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", desksList[1].price);
    threeDivs.centerProductDescription.innerText = desksList[1].description;
    threeDivs.centerProductImg.src = desksList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = desksList[2].name;
    threeDivs.rightProductPrice.innerText = desksList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", desksList[2].price);
    threeDivs.rightProductDescription.innerText = desksList[2].description;
    threeDivs.rightProductImg.src = desksList[2].imageSrc;
    
    showDivs();
};

const loadBookcases = function(){
    console.log('bookcases!');
    threeDivs.leftProductName.innerText = bookcasesList[0].name;
    threeDivs.leftProductPrice.innerText = bookcasesList[0].price;
    threeDivs.leftDataPrice.setAttribute("data-price", bookcasesList[0].price);
    threeDivs.leftProductDescription.innerText = bookcasesList[0].description;
    threeDivs.leftProductImg.src = bookcasesList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = bookcasesList[1].name;
    threeDivs.centerProductPrice.innerText = bookcasesList[1].price;
    threeDivs.centerDataPrice.setAttribute("data-price", bookcasesList[1].price);
    threeDivs.centerProductDescription.innerText = bookcasesList[1].description;
    threeDivs.centerProductImg.src = bookcasesList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = bookcasesList[2].name;
    threeDivs.rightProductPrice.innerText = bookcasesList[2].price;
    threeDivs.rightDataPrice.setAttribute("data-price", bookcasesList[2].price);
    threeDivs.rightProductDescription.innerText = bookcasesList[2].description;
    threeDivs.rightProductImg.src = bookcasesList[2].imageSrc;
    
    showDivs();
};

/*
    Event Listeners
*/
sofas.addEventListener("click", loadSofas);
sectionalSofas.addEventListener("click", loadSectionalSofas);
sleeperSofas.addEventListener("click", loadSleeperSofas);
ottomanChairs.addEventListener("click", loadOttomanChairs);

diningTables.addEventListener("click", loadDiningTables);
armChairs.addEventListener("click", loadArmChairs);
consoleTables.addEventListener("click", loadConsoleTables);

beds.addEventListener("click", loadBeds);
nightstands.addEventListener("click", loadNightstands);
mirrors.addEventListener("click", loadMirrors);

desks.addEventListener("click", loadDesks);
storageCabinets.addEventListener("click", loadStorageCabinets);
bookcases.addEventListener("click", loadBookcases);
