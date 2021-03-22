const furnitureTypes = {
    sofas: document.getElementById("sofas"),
    sectionalSofas: document.getElementById("sectionalSofas"),
    sleeperSofas: document.getElementById("sleeperSofas"),
    accentChairs: document.getElementById("accentChairs"),
    loveseats: document.getElementById("loveseats"),
    chaises: document.getElementById("chaises"),
    chairsAndAHalf: document.getElementById("chairsAndAHalf"),
    recliners: document.getElementById("recliners"),
    swivelsAndGliders: document.getElementById("swivelsAndGliders"),
    chairOttomans: document.getElementById("chairOttomans"),
    diningTables: document.getElementById("diningTables"),
    armChairs: document.getElementById("armChairs"),
    sideChairs: document.getElementById("sideChairs"),
    barStools: document.getElementById("barStools"),
    sideboards: document.getElementById("sideboards"),
    consoleTables: document.getElementById("consoleTables"),
    beds: document.getElementById("beds"),
    headboards: document.getElementById("headboards"),
    nightstands: document.getElementById("nightstands"),
    dressers: document.getElementById("dressers"),
    chests: document.getElementById("chests"),
    mirrors: document.getElementById("mirrors"),
    mattresses: document.getElementById("mattresses"),
    benches: document.getElementById("benches"),
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
    leftProductDescription: document.querySelector("#leftDiv .description"),
    leftProductImg: document.getElementById("img-1"),
    
    centerProductName: document.querySelector("#centerDiv .productName"),
    centerProductPrice: document.querySelector("#centerDiv .price span"),
    centerProductDescription: document.querySelector("#centerDiv .description"),
    centerProductImg: document.getElementById("img-2"),
    
    rightProductName: document.querySelector("#rightDiv .productName"),
    rightProductPrice: document.querySelector("#rightDiv .price span"),
    rightProductDescription: document.querySelector("#rightDiv .description"),
    rightProductImg: document.getElementById("img-3")
    
};

const sofasList = [
    {
        name: "sofa 1",
        price: 299.99,
        description: "average sofa",
        imageSrc: "../images/products/sofa-1.jpg"
    },
    {
        name: "sofa 2",
        price: 399.99,
        description: "expensive sofa",
        imageSrc: "../images/products/sofa-2.jpg"
    },
    {
        name: "sofa 3",
        price: 189.99,
        description: "cheap sofa",
        imageSrc: "../images/products/sofa-3.jpg"
    }
];

const sectionalSofasList = [
    {
        name: "sectional sofa 1",
        price: 319.99,
        description: "average sectional sofa",
        imageSrc: "../images/products/sectional-sofa-1.jpg"
    },
    {
        name: "sectional sofa 2",
        price: 259.99,
        description: "cheap sectional sofa",
        imageSrc: "../images/products/sectional-sofa-2.jpg"
    },
    {
        name: "sectional sofa 3",
        price: 379.99,
        description: "expensive sectional sofa",
        imageSrc: "../images/products/sectional-sofa-3.jpg"
    }
];

const sleeperSofasList = [
    {
        name: "sleeper sofa 1",
        price: 319.99,
        description: "average sleeper sofa",
        imageSrc: "../images/products/sleeper-sofa-1.jpg"
    },
    {
        name: "sleeper sofa 2",
        price: 259.99,
        description: "cheap sleeper sofa",
        imageSrc: "../images/products/sleeper-sofa-2.jpg"
    },
    {
        name: "sleeper sofa 3",
        price: 379.99,
        description: "expensive sleeper sofa",
        imageSrc: "../images/products/sleeper-sofa-3.jpg"
    }
];

const accentChairsList = [
    {
        name: "accent chair 1",
        price: 319.99,
        description: "average accent chair ",
        imageSrc: "../images/products/accent-chair-1.jpg"
    },
    {
        name: "accent chair 2",
        price: 259.99,
        description: "cheap accent chair",
        imageSrc: "../images/products/accent-chair-2.jpg"
    },
    {
        name: "accent chair 3",
        price: 379.99,
        description: "expensive accent chair",
        imageSrc: "../images/products/accent-chair-3.jpg"
    }
];

const diningTablesList = [
    {
        name: "dining table 1",
        price: 219.99,
        description: "average dining table",
        imageSrc: "../images/products/dining-table-1.jpg"
    },
    {
        name: "dining table 2",
        price: 299.99,
        description: "expensive dining table",
        imageSrc: "../images/products/dining-table-2.jpg"
    },
    {
        name: "dining table 3",
        price: 169.99,
        description: "cheap dining table",
        imageSrc: "../images/products/dining-table-3.jpg"
    }
];

const bedsList = [
    {
        name: "bed 1",
        price: 219.99,
        description: "average bed",
        imageSrc: "../images/products/bed-1.jpg"
    },
    {
        name: "bed 2",
        price: 299.99,
        description: "expensive bed",
        imageSrc: "../images/products/bed-2.jpg"
    },
    {
        name: "bed 3",
        price: 169.99,
        description: "cheap bed",
        imageSrc: "../images/products/bed-3.jpg"
    }
];

const storageCabinetsList = [
    {
        name: "storage cabinet 1",
        price: 219.99,
        description: "average storage cabinet",
        imageSrc: "../images/products/storage-cabinet-1.jpg"
    },
    {
        name: "storage cabinet 2",
        price: 299.99,
        description: "expensive storage cabinet",
        imageSrc: "../images/products/storage-cabinet-2.jpg"
    },
    {
        name: "storage cabinet 3",
        price: 169.99,
        description: "cheap storage cabinet",
        imageSrc: "../images/products/storage-cabinet-3.jpg"
    }
];

const desksList = [
    {
        name: "desk 1",
        price: 219.99,
        description: "average desk",
        imageSrc: "../images/products/desk-1.jpg"
    },
    {
        name: "desk 2",
        price: 299.99,
        description: "expensive desk",
        imageSrc: "../images/products/desk-2.jpg"
    },
    {
        name: "desk 3",
        price: 169.99,
        description: "cheap desk",
        imageSrc: "../images/products/desk-3.jpg"
    }
];

const bookcasesList = [
    {
        name: "bookcase 1",
        price: 219.99,
        description: "average bookcase",
        imageSrc: "../images/products/bookcase-1.jpg"
    },
    {
        name: "bookcase 2",
        price: 299.99,
        description: "expensive bookcase",
        imageSrc: "../images/products/bookcase-2.jpg"
    },
    {
        name: "bookcase 3",
        price: 169.99,
        description: "cheap bookcase",
        imageSrc: "../images/products/bookcase-3.jpg"
    }
];

/*
Functions
*/
const showDivs = function(){
    leftDiv.style.display = "inline-block";
    centerDiv.style.display = "inline-block";
    rightDiv.style.display = "inline-block";
};

const loadSofas = function(){
    
    threeDivs.leftProductName.innerText = sofasList[0].name;
    threeDivs.leftProductPrice.innerText = sofasList[0].price;
    threeDivs.leftProductDescription.innerText = sofasList[0].description;
    threeDivs.leftProductImg.src = sofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sofasList[1].name;
    threeDivs.centerProductPrice.innerText = sofasList[1].price;
    threeDivs.centerProductDescription.innerText = sofasList[1].description;
    threeDivs.centerProductImg.src = sofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sofasList[2].name;
    threeDivs.rightProductPrice.innerText = sofasList[2].price;
    threeDivs.rightProductDescription.innerText = sofasList[2].description;
    threeDivs.rightProductImg.src = sofasList[2].imageSrc;
    
    showDivs();
};

const loadSectionalSofas = function(){
    
    threeDivs.leftProductName.innerText = sectionalSofasList[0].name;
    threeDivs.leftProductPrice.innerText = sectionalSofasList[0].price;
    threeDivs.leftProductDescription.innerText = sectionalSofasList[0].description;
    threeDivs.leftProductImg.src = sectionalSofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sectionalSofasList[1].name;
    threeDivs.centerProductPrice.innerText = sectionalSofasList[1].price;
    threeDivs.centerProductDescription.innerText = sectionalSofasList[1].description;
    threeDivs.centerProductImg.src = sectionalSofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sectionalSofasList[2].name;
    threeDivs.rightProductPrice.innerText = sectionalSofasList[2].price;
    threeDivs.rightProductDescription.innerText = sectionalSofasList[2].description;
    threeDivs.rightProductImg.src = sectionalSofasList[2].imageSrc;
    
    showDivs();
};

const loadSleeperSofas = function(){
    
    threeDivs.leftProductName.innerText = sleeperSofasList[0].name;
    threeDivs.leftProductPrice.innerText = sleeperSofasList[0].price;
    threeDivs.leftProductDescription.innerText = sleeperSofasList[0].description;
    threeDivs.leftProductImg.src = sleeperSofasList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = sleeperSofasList[1].name;
    threeDivs.centerProductPrice.innerText = sleeperSofasList[1].price;
    threeDivs.centerProductDescription.innerText = sleeperSofasList[1].description;
    threeDivs.centerProductImg.src = sleeperSofasList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = sleeperSofasList[2].name;
    threeDivs.rightProductPrice.innerText = sleeperSofasList[2].price;
    threeDivs.rightProductDescription.innerText = sleeperSofasList[2].description;
    threeDivs.rightProductImg.src = sleeperSofasList[2].imageSrc;
    
    showDivs();
};

const loadDiningTables = function(){
    
    threeDivs.leftProductName.innerText = diningTablesList[0].name;
    threeDivs.leftProductPrice.innerText = diningTablesList[0].price;
    threeDivs.leftProductDescription.innerText = diningTablesList[0].description;
    threeDivs.leftProductImg.src = diningTablesList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = diningTablesList[1].name;
    threeDivs.centerProductPrice.innerText = diningTablesList[1].price;
    threeDivs.centerProductDescription.innerText = diningTablesList[1].description;
    threeDivs.centerProductImg.src = diningTablesList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = diningTablesList[2].name;
    threeDivs.rightProductPrice.innerText = diningTablesList[2].price;
    threeDivs.rightProductDescription.innerText = diningTablesList[2].description;
    threeDivs.rightProductImg.src = diningTablesList[2].imageSrc;
    
    showDivs();
};     

const loadBeds = function(){
    
    threeDivs.leftProductName.innerText = bedsList[0].name;
    threeDivs.leftProductPrice.innerText = bedsList[0].price;
    threeDivs.leftProductDescription.innerText = bedsList[0].description;
    threeDivs.leftProductImg.src = bedsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = bedsList[1].name;
    threeDivs.centerProductPrice.innerText = bedsList[1].price;
    threeDivs.centerProductDescription.innerText = bedsList[1].description;
    threeDivs.centerProductImg.src = bedsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = bedsList[2].name;
    threeDivs.rightProductPrice.innerText = bedsList[2].price;
    threeDivs.rightProductDescription.innerText = bedsList[2].description;
    threeDivs.rightProductImg.src = bedsList[2].imageSrc;
    
    showDivs();
};

const loadStorageCabinets = function(){
    
    threeDivs.leftProductName.innerText = storageCabinetsList[0].name;
    threeDivs.leftProductPrice.innerText = storageCabinetsList[0].price;
    threeDivs.leftProductDescription.innerText = storageCabinetsList[0].description;
    threeDivs.leftProductImg.src = storageCabinetsList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = storageCabinetsList[1].name;
    threeDivs.centerProductPrice.innerText = storageCabinetsList[1].price;
    threeDivs.centerProductDescription.innerText = storageCabinetsList[1].description;
    threeDivs.centerProductImg.src = storageCabinetsList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = storageCabinetsList[2].name;
    threeDivs.rightProductPrice.innerText = storageCabinetsList[2].price;
    threeDivs.rightProductDescription.innerText = storageCabinetsList[2].description;
    threeDivs.rightProductImg.src = storageCabinetsList[2].imageSrc;
    
    showDivs();
};

const loadDesks = function(){
    
    threeDivs.leftProductName.innerText = desksList[0].name;
    threeDivs.leftProductPrice.innerText = desksList[0].price;
    threeDivs.leftProductDescription.innerText = desksList[0].description;
    threeDivs.leftProductImg.src = desksList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = desksList[1].name;
    threeDivs.centerProductPrice.innerText = desksList[1].price;
    threeDivs.centerProductDescription.innerText = desksList[1].description;
    threeDivs.centerProductImg.src = desksList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = desksList[2].name;
    threeDivs.rightProductPrice.innerText = desksList[2].price;
    threeDivs.rightProductDescription.innerText = desksList[2].description;
    threeDivs.rightProductImg.src = desksList[2].imageSrc;
    
    showDivs();
};

const loadBookcases = function(){
    
    threeDivs.leftProductName.innerText = bookcasesList[0].name;
    threeDivs.leftProductPrice.innerText = bookcasesList[0].price;
    threeDivs.leftProductDescription.innerText = bookcasesList[0].description;
    threeDivs.leftProductImg.src = bookcasesList[0].imageSrc;
    
    threeDivs.centerProductName.innerText = bookcasesList[1].name;
    threeDivs.centerProductPrice.innerText = bookcasesList[1].price;
    threeDivs.centerProductDescription.innerText = bookcasesList[1].description;
    threeDivs.centerProductImg.src = bookcasesList[1].imageSrc;
    
    threeDivs.rightProductName.innerText = bookcasesList[2].name;
    threeDivs.rightProductPrice.innerText = bookcasesList[2].price;
    threeDivs.rightProductDescription.innerText = bookcasesList[2].description;
    threeDivs.rightProductImg.src = bookcasesList[2].imageSrc;
    
    showDivs();
};

sofas.addEventListener("click", loadSofas);
sectionalSofas.addEventListener("click", loadSectionalSofas);

diningTables.addEventListener("click", loadDiningTables);

beds.addEventListener("click", loadBeds);

desks.addEventListener("click", loadDesks);
storageCabinets.addEventListener("click", loadStorageCabinets);
bookcases.addEventListener("click", loadBookcases);
