// Variáveis Select Type

let type = 0;
const type0 = document.getElementById("0");
const type1 = document.getElementById("1");
const type2 = document.getElementById("2");
const type3 = document.getElementById("3");
const typecustom = document.getElementById("custom")
const typeabraca = document.getElementById("abraca")
const typegoods = document.getElementById("goods")
const typepride = document.getElementById("pride")

// Botões Select Type

function custom() {
    if (type !== 0) {
        type0.classList.replace("false", "true")
        type1.classList.replace("true", "false")
        type2.classList.replace("true", "false")
        type3.classList.replace("true", "false")
        type = 0
        replaceType()
    }
}

function abraca() {
    if (type !== 1) {
        type0.classList.replace("true", "false")
        type1.classList.replace("false", "true")
        type2.classList.replace("true", "false")
        type3.classList.replace("true", "false")
        type = 1
        replaceType()
    }
}

function goods() {
    if (type !== 2) {
        type0.classList.replace("true", "false")
        type1.classList.replace("true", "false")
        type2.classList.replace("false", "true")
        type3.classList.replace("true", "false")
        type = 2
        replaceType()
    }
}

function pride() {
    if (type !== 3) {
        type0.classList.replace("true", "false")
        type1.classList.replace("true", "false")
        type2.classList.replace("true", "false")
        type3.classList.replace("false", "true")
        type = 3
        replaceType()
    }
}

// Functions Select Type

function replaceType() {
    if (type === 0) {
        typecustom.style.display = "inline"
        typeabraca.style.display = "none"
        typegoods.style.display = "none"
        typepride.style.display = "none"
    } else if (type === 1) {
        typecustom.style.display = "none"
        typeabraca.style.display = "inline"
        typegoods.style.display = "none"
        typepride.style.display = "none"
    } else if (type === 2) {
        typecustom.style.display = "none"
        typeabraca.style.display = "none"
        typegoods.style.display = "inline"
        typepride.style.display = "none"
    } else if (type === 3 ) {
        typecustom.style.display = "none"
        typeabraca.style.display = "none"
        typegoods.style.display = "none"
        typepride.style.display = "inline"
    }
}

// Variáveis YCH Abraçadinhos

let OCs1 = 1;
let BG1 = 0;
let BG1Text = "no";
let priceAbraca = 0;

// Botôes Abraçadinhos

function OCsM1() {
    if (OCs1 === 2) {
        OCs1 = 1
    }
    updateTexts()
}

function OCsP1() {
    if (OCs1 === 1) {
        OCs1 = 2
    }
    updateTexts()
}

function BGM1() {
    if (BG1 === 1) {
        BG1 = 0
    }
    updateTexts()
}

function BGP1() {
    if (BG1 === 0) {
        BG1 = 1
    }
    updateTexts()
}

// VAriáveis Show Your Goods

let BG2 = 0;
let BG2Text = "No"
let NSFW2 = 0;
let NSFW2Text = "No"
let priceGoods = 0

// Botões Show Your Goods

function BGM2() {
    if (BG2 === 1) {
        BG2 = 0
    }
    updateTexts()
}

function BGP2() {
    if (BG2 === 0) {
        BG2 = 1
    }
    updateTexts()
}

function NSFWM2() {
    if (NSFW2 === 1) {
        NSFW2 = 0
    }
    updateTexts()
}

function NSFWP2() {
    if (NSFW2 === 0) {
        NSFW2 = 1
    }
    updateTexts()
}

// Variáveis Pride Face

let BG3 = 0
let BG3Text = "No"
let pricePride = 0

// Botôes Pride Face

function BGM3() {
    if (BG3 === 1) {
        BG3 = 0
    }
    updateTexts()
}

function BGP3() {
    if (BG3 === 0) {
        BG3 = 1
    }
    updateTexts()
}

// Variáveis Custom

let shader = 0;
let shaderType = "Flat colors";
let size = 0;
let sizeType = "Headshot";
let sizePrice = 5;
let OCs = 1;
let Alts = 1;
let NSFW = 0;
let NSFWText = "No";
let priceCustom = 0;
let priceWAlts = 0;
let priceWOCs = 0;
let priceTotal = 0;
const currency = "R$ "


const headshotPrice = 5;
const halfPrice = 7.5;
const fullPrice = 10;

// Botões Custom

function shaderM() {
    if (shader === 1) {
        shader = 0;
    }
    updateTexts()
}

function shaderP() {
    if (shader === 0) {
        shader = 1
    }
    updateTexts()
}

function sizeM() {
    if (size > 0) {
        size -= 1
    }
    updateTexts()
}

function sizeP() {
    if (size < 2) {
        size += 1
    }
    updateTexts()
}

function OCsM() {
    if (OCs > 0) {
        OCs -= 1
    }
    updateTexts()
}

function OCsP() {
    OCs += 1
    updateTexts()
}

function AltsM() {
    if (Alts > 0) {
        Alts -= 1
    }
    updateTexts()
}

function AltsP() {
    Alts += 1
    updateTexts()
}

function NSFWN() {
    if (NSFW === 1) {
        NSFW = 0
    }
    updateTexts()
}

function NSFWY() {
    if (NSFW === 0) {
        NSFW = 1
    }
    updateTexts()
}

// function updateTexts()
function updateTexts() {

    if (shader === 0) {
        shaderType = "Flat colors"
    } else if (shader === 1) {
        shaderType = "Shadered"
    };

    if (size === 0) {
        sizeType = "Headshot"
        sizePrice = headshotPrice
    } else if (size === 1) {
        sizeType = "Half body"
        sizePrice = halfPrice
    } else {
        sizeType = "Full body"
        sizePrice = fullPrice
    }

    if (NSFW === 0) {
        NSFWText = "No"
    } else {
        NSFWText = "Yes"
    }

    if (BG1 === 0) {
        BG1Text = "No"
    } else {
        BG1Text = "Yes"
    }

    if (BG2 === 0) {
        BG2Text = "No"
    } else {
        BG2Text = "Yes"
    }

    if (NSFW2 === 0) {
        NSFW2Text = "No"
    } else {
        NSFW2Text = "Yes"
    }

    if (BG3 === 0) {
        BG3Text = "No"
    } else {
        BG3Text = "Yes"
    }

    // Price math Custom
    priceCustom = ((shader * 2.5) + (sizePrice) + (NSFW * 2))
    document.getElementById("totalCalc").innerHTML = currency + priceCustom
    if (OCs > 1 && Alts === 1) {
    priceWOCs = priceCustom + (priceCustom * ((OCs - 1) * 0.5))
    document.getElementById("totalCalc").innerHTML = currency + priceWOCs
    }
    if (OCs === 1 && Alts > 1) {
        priceWAlts = priceCustom + (priceCustom * ((Alts - 1) * 0.25))
        document.getElementById("totalCalc").innerHTML = currency + priceWAlts
    }
    if (OCs > 1 && Alts > 1) {
        priceWOCs = priceCustom + (priceCustom * ((OCs - 1) * 0.5))
        priceWAlts = priceWOCs + (priceWOCs * ((Alts - 1) * 0.25))
        document.getElementById("totalCalc").innerHTML = currency + priceWAlts
    }

    // Price math abraçadinhos
    priceAbraca = 5 + ((OCs1 - 1) * 2.5) + BG1
    document.getElementById("totalCalc1").innerHTML = currency + priceAbraca

    // Price math Show Your Goods
    priceGoods = 5 + BG2 + (NSFW2 * 0.5)
    document.getElementById("totalCalc2").innerHTML = currency + priceGoods

    // Pride Face math
    pricePride = 5 + (BG3 * 2.5)
    document.getElementById("totalCalc3").innerHTML = currency + pricePride
    

    // Custom texts
    document.getElementById("shader").innerHTML = shaderType
    document.getElementById("size").innerHTML = sizeType
    document.getElementById("OCs").innerHTML = OCs
    document.getElementById("Alts").innerHTML = Alts
    document.getElementById("NSFW").innerHTML = NSFWText
    // Abraçadinhos texts
    document.getElementById("OCs1").innerHTML = OCs1
    document.getElementById("BG1").innerHTML = BG1Text
    // Show Your Goods texts
    document.getElementById("BG2").innerHTML = BG2Text
    document.getElementById("NSFW2").innerHTML = NSFW2Text
    // Pride Face texts
    document.getElementById("BG3").innerHTML = BG3Text
}