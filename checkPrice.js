// Variáveis Select Type

let type = 0;
const typesTab = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4")
]
const types = [
    document.getElementById("custom"),
    document.getElementById("abraca"),
    document.getElementById("goods"),
    document.getElementById("pride"),
    document.getElementById("halloween")
]

// Botões Select Type

function tab(n) {
    if (n === 0 && n !== type) {
        typesTab[0].classList.replace("false", "true")
        typesTab[1].classList.replace("true", "false")
        typesTab[2].classList.replace("true", "false")
        typesTab[3].classList.replace("true", "false")
        typesTab[4].classList.replace("true", "false")
        type = 0
    }
    if (n === 1 && n !== type) {
        typesTab[0].classList.replace("true", "false")
        typesTab[1].classList.replace("false", "true")
        typesTab[2].classList.replace("true", "false")
        typesTab[3].classList.replace("true", "false")
        typesTab[4].classList.replace("true", "false")
        type = 1
    }
    if (n === 2 && n !== type) {
        typesTab[0].classList.replace("true", "false")
        typesTab[1].classList.replace("true", "false")
        typesTab[2].classList.replace("false", "true")
        typesTab[3].classList.replace("true", "false")
        typesTab[4].classList.replace("true", "false")
        type = 2
    }
    if (n === 3 && n !== type) {
        typesTab[0].classList.replace("true", "false")
        typesTab[1].classList.replace("true", "false")
        typesTab[2].classList.replace("true", "false")
        typesTab[3].classList.replace("false", "true")
        typesTab[4].classList.replace("true", "false")
        type = 3
    }
    if (n === 4 && n !== type) {
        typesTab[0].classList.replace("true", "false")
        typesTab[1].classList.replace("true", "false")
        typesTab[2].classList.replace("true", "false")
        typesTab[3].classList.replace("true", "false")
        typesTab[4].classList.replace("false", "true")
        type = 4
    }
    replaceTab()
}

function replaceTab() {
    for (let i = 0; i < types.length; i++) {
        if (i === type) {
            types[i].style.display = "inline"
        } else {
            types[i].style.display = "none"
        }
    }
}

const pricesCustom0 = [0, 2.5]
const pricesCustom1 = [5, 7.5, 10]
const pricesCustom2 = [0, 1]
const pricesCustom3 = 0.5
const pricesCustom4 = 0.25
const pricesCustom5 = [0, 2]

const pricesAbraca0 = [5, 7.5]
const pricesAbraca1 = [0, 0, 1]

const pricesGoods0 = [5, 6]
const pricesGoods1 = [0, 0.5]

const pricesPride0 = [5, 7.5]

const pricesHalloween0 = [7.5, 8.5]
const pricesHalloween1 = [0, 2]
const pricesHalloween2 = 0.5
const pricesHalloween3 = [0, 0.5]

const currency = "R$ "

let indexCustom = [0, 0, 0, 0, 0, 0]
let indexAbraca = [0, 0]
let indexgoods = [0, 0]
let IndexPride = 0
let indexHalloween = [0, 0, 0, 0]

function changeValue(tab, toChange, value) {

    if (tab === 0) { // custom
        if (toChange === 0) { // qualidade 
            if (value === false) { 
                document.getElementById("flatColor").classList.replace("no", "yes")
                document.getElementById("Shader").classList.replace("yes", "no")
                indexCustom[0] = 0
            } else {
                document.getElementById("flatColor").classList.replace("yes", "no")
                document.getElementById("Shader").classList.replace("no", "yes")
                indexCustom[0] = 1
            }
        }
        if (toChange === 1) {
            if (value === 0) {
                document.getElementById("HS").classList.replace("no", "yes")
                document.getElementById("HB").classList.replace("yes", "no")
                document.getElementById("FB").classList.replace("yes", "no")
                indexCustom[1] = 0
            }
            if (value === 1) {
                document.getElementById("HS").classList.replace("yes", "no")
                document.getElementById("HB").classList.replace("no", "yes")
                document.getElementById("FB").classList.replace("yes", "no")
                indexCustom[1] = 1
            }
            if (value === 2) {
                document.getElementById("HS").classList.replace("yes", "no")
                document.getElementById("HB").classList.replace("yes", "no")
                document.getElementById("FB").classList.replace("no", "yes")
                indexCustom[1] = 2
            }
        }
        if (toChange === 2) {
            if (value === false) {
                document.getElementById("NL").classList.replace("no", "yes")
                document.getElementById("PL").classList.replace("yes", "no")
                indexCustom[2] = 0
            } else {
                document.getElementById("NL").classList.replace("yes", "no")
                document.getElementById("PL").classList.replace("no", "yes")
                indexCustom[2] = 1
            }
        }
        if (toChange === 3) {
            if (indexCustom[3] <= 0 && value === -1) {} else {
                indexCustom[3] += value
                document.getElementById("ocsCustomIndex").innerHTML = indexCustom[3] + 1
            }
        }
        if (toChange === 4) {
            if (indexCustom[4] <= 0 && value === -1) {} else {
                indexCustom[4] += value
                document.getElementById("altsCustomIndex").innerHTML = indexCustom[4] + 1
            }
        }
        if (toChange === 5) {
            if (value === false) {
                document.getElementById("nsfwCN").classList.replace("no", "yes")
                document.getElementById("nsfwCY").classList.replace("yes", "no")
                indexCustom[5] = 0
            } else {
                document.getElementById("nsfwCN").classList.replace("yes", "no")
                document.getElementById("nsfwCY").classList.replace("no", "yes")
                indexCustom[5] = 1
            }
        }
        calc(0)
    }

    if (tab === 1) { // abraçadinhos
        if (toChange === 0) {
            if (value === 0) {
                document.getElementById("ocsAbraca1").classList.replace("no", "yes")
                document.getElementById("ocsAbraca2").classList.replace("yes", "no")
                indexAbraca[0] = 0
            } else {
                document.getElementById("ocsAbraca1").classList.replace("yes", "no")
                document.getElementById("ocsAbraca2").classList.replace("no", "yes")
                indexAbraca[0] = 1
            }
        }
        if (toChange === 1) {
            if (value === 0) {
                document.getElementById("CSAbraca").classList.replace("no", "yes")
                document.getElementById("ImgAbraca").classList.replace("yes", "no")
                document.getElementById("BGAbraca").classList.replace("yes", "no")
                indexAbraca[1] = 0
            } else if (value === 1) {
                document.getElementById("CSAbraca").classList.replace("yes", "no")
                document.getElementById("ImgAbraca").classList.replace("no", "yes")
                document.getElementById("BGAbraca").classList.replace("yes", "no")
                indexAbraca[1] = 1
            } else {
                document.getElementById("CSAbraca").classList.replace("yes", "no")
                document.getElementById("ImgAbraca").classList.replace("yes", "no")
                document.getElementById("BGAbraca").classList.replace("no", "yes")
                indexAbraca[1] = 2
            }
        }
        calc(1)
    }

    if (tab === 2) { // show your goods
        if (toChange === 0) {
            if (value === 0) {
                document.getElementById("CSGoods").classList.replace("no", "yes")
                document.getElementById("BGGoods").classList.replace("yes", "no")
                indexgoods[0] = 0
            } else {
                document.getElementById("CSGoods").classList.replace("yes", "no")
                document.getElementById("BGGoods").classList.replace("no", "yes")
                indexgoods[0] = 1
            }
        }
        if (toChange === 1) {
            if (value === 0) {
                document.getElementById("nsfwGN").classList.replace("no", "yes")
                document.getElementById("nsfwGY").classList.replace("yes", "no")
                indexgoods[1] = 0
            } else {
                document.getElementById("nsfwGN").classList.replace("yes", "no")
                document.getElementById("nsfwGY").classList.replace("no", "yes")
                indexgoods[1] = 1
            }
        }
        calc(2)
    }

    if (tab === 3) { // pride face
        if (value === 0) {
            document.getElementById("CSPride").classList.replace("no", "yes")
            document.getElementById("BGPride").classList.replace("yes", "no")
            IndexPride = 0
        } else {
            document.getElementById("CSPride").classList.replace("yes", "no")
            document.getElementById("BGPride").classList.replace("no", "yes") 
            IndexPride = 1
        }
        calc(3)
    }

    if (tab === 4) {
        if (toChange === 0) {
            if (value === 0) {
                document.getElementById("PFHN").classList.replace("no", "yes")
                document.getElementById("PFHY").classList.replace("yes", "no")
                indexHalloween[0] = 0
            } else {
                document.getElementById("PFHN").classList.replace("yes", "no")
                document.getElementById("PFHY").classList.replace("no", "yes")
                indexHalloween[0] = 1
            }
        }
        if (toChange === 1) {
            if (value === 0) {
                document.getElementById("ALTNSFWN").classList.replace("no", "yes")
                document.getElementById("ALTNSFWY").classList.replace("yes", "no")
                indexHalloween[1] = 0
            } else {
                document.getElementById("ALTNSFWN").classList.replace("yes", "no")
                document.getElementById("ALTNSFWY").classList.replace("no", "yes")
                indexHalloween[1] = 1
            }
        }
        if (toChange === 2) {
            if (value === 0 && indexHalloween[2] >= 1) {
                indexHalloween[2]--
            }
            if (value === 1) {
                indexHalloween[2]++
            }
            document.getElementById("suitsH").innerHTML = indexHalloween[2] + 1
        }
        if (toChange === 3) {
            if (value === 0) {
                document.getElementById("FCH").classList.replace("no", "yes")
                document.getElementById("SH").classList.replace("yes", "no")
                indexHalloween[3] = 0
            } else {
                document.getElementById("FCH").classList.replace("yes", "no")
                document.getElementById("SH").classList.replace("no", "yes") 
                indexHalloween[3] = 1
            }
        }
        calc(4)
    }
}

function calc(tab) {
    if (tab === 0) {
        const calcCS1 = pricesCustom0[indexCustom[0]] + pricesCustom1[indexCustom[1]] + pricesCustom2[indexCustom[2]] + pricesCustom5[indexCustom[5]]
        document.getElementById("totalCalc").innerHTML = currency + calcCS1
        if (indexCustom[3] !== 0 && indexCustom[4] !== 0) {
            const calcCS2 = calcCS1 + ( calcCS1 * (indexCustom[3] * pricesCustom3))
            const price = calcCS2 + (calcCS2 * (indexCustom[4] * pricesCustom4))
            document.getElementById("totalCalc").innerHTML = currency + price
        }
        if (indexCustom[3] !== 0 && indexCustom[4] === 0) {
            const price = calcCS1 + (calcCS1 * (indexCustom[3] * pricesCustom3))
            document.getElementById("totalCalc").innerHTML = currency + price
        }
        if (indexCustom[3] === 0 && indexCustom[4] !== 0) {
            const price = calcCS1 + (calcCS1 * (indexCustom[4] * pricesCustom4))
            document.getElementById("totalCalc").innerHTML = currency + price
        }
    }
    if (tab === 1) {
        const price = pricesAbraca0[indexAbraca[0]] + pricesAbraca1[indexAbraca[1]]
        document.getElementById("totalCalc1").innerHTML = currency + price
    }
    if (tab === 2) {
        const price = pricesGoods0[indexgoods[0]] + pricesGoods1[indexgoods[1]]
        document.getElementById("totalCalc2").innerHTML = currency + price
    }
    if (tab === 3) {
        const price = pricesPride0[IndexPride]
        document.getElementById("totalCalc3").innerHTML = currency + price
    }
    if (tab === 4) {
        const step1 = pricesHalloween0[indexHalloween[0]] + pricesHalloween1[indexHalloween[1]] + pricesHalloween3[indexHalloween[3]]
        if (indexHalloween[2] > 0) {
            const price = step1 + (step1 * (pricesHalloween2 * indexHalloween[2]))
            document.getElementById("totalCalc4").innerHTML = currency + price
        } else {
            document.getElementById("totalCalc4").innerHTML = currency + step1
        }
    }
}
