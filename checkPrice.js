const prices = [
    { // REAL
        cur: "R$ ",
        custom: {
            shader: [0, 2.5],
            size: [5, 7.5, 10],
            line: [0, 1],
            ocs: 0.5,
            alts: 0.25,
            nsfw: [0, 2]
        },
        abraca: {
            ocs: [5, 7.5],
            bg: [0, 0, 1]
        },
        goods: {
            bg: [5, 6],
            nsfw: [0, 0.5]
        },
        pride: {
            bg: [5, 7.5]
        },
        halloween: {
            abobora: [7.5, 8.5],
            nsfw: [0, 2],
            suits: 0.5,
            shader: [0, 0.5]
        }
    },
    { // DOLAR - taxa usada: R$ 6,00
        cur: "$ ",
        custom: {
            shader: [0, 1.5],
            size: [2, 4.5, 6],
            line: [0, 0.5],
            ocs: 0.5,
            alts: 0.25,
            nsfw: [0, 1]
        },
        abraca: {
            ocs: [2, 4.5],
            bg: [0, 0, 0.5]
        },
        goods: {
            bg: [2, 3],
            nsfw: [0, 0.5]
        },
        pride: {
            bg: [2, 4.5]
        },
        halloween: {
            abobora: [4.5, 7],
            nsfw: [0, 0.5],
            suits: 0.5,
            shader: [0, 0.5]
        }
    }
]
let type = 0
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
const curTab = [
    document.getElementById("brl"),
    document.getElementById("usd")
]

const modelsIMGDisplay = {
    headShot: {
        base: document.getElementById("HSModelBase").style,
        shader: document.getElementById("HSModelS").style,
        lines: document.getElementById("HSModelPL").style
    },
    halfBody: {
        base: document.getElementById("HBModelBase").style,
        shader: document.getElementById("HBModelS").style,
        lines: document.getElementById("HBModelPL").style,
        NSFW: document.getElementById("HBModelNSFW").style
    },
    fullBody: {
        base: document.getElementById("FBModelBase").style,
        shader: document.getElementById("FBModelS").style,
        lines: document.getElementById("FBModelPL").style,
        NSFW: document.getElementById("FBModelNSFW").style
    }
}

const modelsDIVSdisplay = {
    headShot: document.getElementById("headshot").style,
    halfBody: document.getElementById("halfbody").style,
    fullBody: document.getElementById("fullbody").style
}

const updateModel = () => {
    // Size
    modelsDIVSdisplay.headShot.display = indexes.custom.size == 0 ? "flex" : "none"
    modelsDIVSdisplay.halfBody.display = indexes.custom.size == 1 ? "flex" : "none"
    modelsDIVSdisplay.fullBody.display = indexes.custom.size == 2 ? "flex" : "none"

    // shader
    modelsIMGDisplay.headShot.shader.display = indexes.custom.shader == 1 ? "flex" : "none"
    modelsIMGDisplay.halfBody.shader.display = indexes.custom.shader == 1 ? "flex" : "none"
    modelsIMGDisplay.fullBody.shader.display = indexes.custom.shader == 1 ? "flex" : "none"

    // lines
    modelsIMGDisplay.headShot.lines.display = indexes.custom.lines == 1 ? "flex" : "none"
    modelsIMGDisplay.halfBody.lines.display = indexes.custom.lines == 1 ? "flex" : "none"
    modelsIMGDisplay.fullBody.lines.display = indexes.custom.lines == 1 ? "flex" : "none"

    // nsfw
    modelsIMGDisplay.halfBody.NSFW.display = indexes.custom.nsfw == 1 ? "flex" : "none"
    modelsIMGDisplay.fullBody.NSFW.display = indexes.custom.nsfw == 1 ? "flex" : "none"
}

const tab = n => {
    type = n
    for (const i in typesTab) {
        i == n ? typesTab[i].classList.replace("false", "true") : typesTab[i].classList.replace("true", "false")
        types[i].style.display = i == n ? "inline" : "none"
        updateModel()
    }
}


const indexes = {
    cur: 0,
    custom: {
        size: 0,
        shader: 0,
        lines: 0,
        nsfw: 0,
        ocs: 0,
        alts: 0
    },
    abraca: {
        ocs: 0,
        bg: 0

    },
    goods: {
        bg: 0,
        nsfw: 0
    },
    pride: {
        bg: 0
    }, 
    halloween: {
        abobora: 0,
        nsfw: 0,
        suits: 0,
        shader: 0
    }
}

indexes.cur = (document.getElementById("awa").attributes.currency.value == 1) ? 1 : 0

let cur = prices[indexes.cur].cur

const changeCur = c => {
    const el = [
        document.getElementById("r"),
        document.getElementById("d")
    ]
    for (const n in el) c == n ? (el[n].classList.replace("false", "true"), cur = prices[c].cur, indexes.cur = c) : el[n].classList.replace("true", "false")
    calc()
}


let dateref = new Date()
const date = {
    day: dateref.getDate(),
    month: dateref.getMonth(),
    year: dateref.getFullYear()
}
const checkToday = () => {
    // halloween
    (date.month !== 9) ?  typesTab[4].classList.replace("dis", "ind") : typesTab[4].classList.replace("ind", "dis")
}
checkToday()

const changeValue = (tab, toChange, value) => {
    const buttons = {
        custom: {
            shader: [
                document.getElementById("flatColor"),
                document.getElementById("Shader")
            ],
            size: [
                document.getElementById("HS"),
                document.getElementById("HB"),
                document.getElementById("FB")
            ],
            lines: [
                document.getElementById("NL"),
                document.getElementById("PL")
            ],
            nsfw: [
                document.getElementById("nsfwCN"),
                document.getElementById("nsfwCY")
            ],
            ocs: document.getElementById("ocsCustomIndex"),
            alts: document.getElementById("altsCustomIndex")
        },
        abraca: {
            ocs: [
                document.getElementById("ocsAbraca1"),
                document.getElementById("ocsAbraca2")
            ],
            bg: [
                document.getElementById("CSAbraca"),
                document.getElementById("ImgAbraca"),
                document.getElementById("BGAbraca")
            ]
        },
        goods: {
            bg: [
                document.getElementById("CSGoods"),
                document.getElementById("BGGoods")
            ],
            nsfw: [
                document.getElementById("nsfwGN"),
                document.getElementById("nsfwGY")
            ]
        },
        pride: {
            bg: [
                document.getElementById("CSPride"),
                document.getElementById("BGPride")
            ]
        },
        halloween: {
            abobora: [
                document.getElementById("PFHN"),
                document.getElementById("PFHY")
            ],
            nsfw: [
                document.getElementById("ALTNSFWN"),
                document.getElementById("ALTNSFWY")
            ],
            shader: [
                document.getElementById("FCH"),
                document.getElementById("SH")
            ],
            suits: document.getElementById("suitsH")
        }
    }
    
    if (tab == 0) {
        if (toChange == 0) { //shader
            for (const n in buttons.custom.shader) n == value ? (buttons.custom.shader[value].classList.replace("no", "yes"), indexes.custom.shader = value) : buttons.custom.shader[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 1) { // size
            for (const n in buttons.custom.size) n == value ? (buttons.custom.size[value].classList.replace("no", "yes"), indexes.custom.size = value) : buttons.custom.size[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 2) { // lines
            for (const n in buttons.custom.lines) n == value ? (buttons.custom.lines[value].classList.replace("no", "yes"), indexes.custom.lines = value) : buttons.custom.lines[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 3) { // ocs
            (indexes.custom.ocs <= 0 && value == -1) ? value = value : (indexes.custom.ocs += value, buttons.custom.ocs.innerHTML = indexes.custom.ocs + 1)
        } else if (toChange == 4) { // alts
            (indexes.custom.alts <= 0 && value == -1) ? value = value : (indexes.custom.alts += value, buttons.custom.alts.innerHTML = indexes.custom.alts + 1)
        } else if (toChange == 5) { // nsfw
            for (const n in buttons.custom.nsfw) n == value ? (buttons.custom.nsfw[value].classList.replace("no", "yes"), indexes.custom.nsfw = value) : buttons.custom.nsfw[parseInt(n)].classList.replace("yes", "no")
        }
        updateModel()
    } else if (tab == 1) {
        if (toChange == 0) {
            for (const n in buttons.abraca.ocs) n == value ? (buttons.abraca.ocs[value].classList.replace("no", "yes"), indexes.abraca.ocs = value) : buttons.abraca.ocs[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 1) {
            for (const n in buttons.abraca.bg) n == value ? (buttons.abraca.bg[value].classList.replace("no", "yes"), indexes.abraca.bg = value) : buttons.abraca.bg[parseInt(n)].classList.replace("yes", "no")
        }
    } else if (tab == 2) {
        if (toChange == 0) {
            for (const n in buttons.goods.bg) n == value ? (buttons.goods.bg[value].classList.replace("no", "yes"), indexes.goods.bg = value) : buttons.goods.bg[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 1) {
            for (const n in buttons.goods.nsfw) n == value ? (buttons.goods.nsfw[value].classList.replace("no", "yes"), indexes.goods.nsfw = value) : buttons.goods.nsfw[parseInt(n)].classList.replace("yes", "no")
        }
    } else if (tab == 3) {
        for (const n in buttons.pride.bg) n == value ? (buttons.pride.bg[value].classList.replace("no", "yes"), indexes.pride.bg = value) : buttons.pride.bg[parseInt(n)].classList.replace("yes", "no")
    } else if (tab == 4) {
        if (toChange == 0) {
            for (const n in buttons.halloween.abobora) n == value ? (buttons.halloween.abobora[value].classList.replace("no", "yes"), indexes.halloween.abobora = value) : buttons.halloween.abobora[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 1) {
            for (const n in buttons.halloween.nsfw) n == value ? (buttons.halloween.nsfw[value].classList.replace("no", "yes"), indexes.halloween.nsfw = value) : buttons.halloween.nsfw[parseInt(n)].classList.replace("yes", "no")
        } else if (toChange == 2) {
            (indexes.halloween.suits <= 0 && value == -1) ? value = value : (indexes.halloween.suits += value, buttons.halloween.suits.innerHTML = indexes.halloween.suits + 1)
        } else if (toChange == 3) {
            for (const n in buttons.halloween.shader) n == value ? (buttons.halloween.shader[value].classList.replace("no", "yes"), indexes.halloween.shader = value) : buttons.halloween.shader[parseInt(n)].classList.replace("yes", "no")
        }
    }
    calc()
}

const calc = () => {
    let results = {
        custom: 5,
        abraca: 5,
        goods: 5,
        pride: 5,
        halloween: 7.5
    }
    const obj = prices[indexes.cur]
    
    // CUSTOM
    // common
    results.custom = obj.custom.size[indexes.custom.size] + obj.custom.shader[indexes.custom.shader] + obj.custom.line[indexes.custom.lines] + obj.custom.nsfw[indexes.custom.nsfw]
    // just ocs
    results.custom = (indexes.custom.ocs > 0 && indexes.custom.alts == 0) ? (results.custom + (results.custom * (obj.custom.ocs * indexes.custom.ocs))) : results.custom
    // just alts
    results.custom = (indexes.custom.ocs == 0 && indexes.custom.alts > 0) ? (results.custom + (results.custom * (obj.custom.alts * indexes.custom.alts))) : results.custom
    // both
    results.custom = (indexes.custom.ocs > 0 && indexes.custom.alts > 0) ? ((results.custom + (results.custom * (obj.custom.ocs * indexes.custom.ocs))) + (results.custom * (obj.custom.alts * indexes.custom.alts))) : results.custom

    // ABRAÇADINHOS
    results.abraca = obj.abraca.ocs[indexes.abraca.ocs] + obj.abraca.bg[indexes.abraca.bg]

    // SHOW YOUR GOODS
    results.goods = obj.goods.bg[indexes.goods.bg] + obj.goods.nsfw[indexes.goods.nsfw]

    // PRIDE FACE
    results.pride = obj.pride.bg[indexes.pride.bg]

    // HALLOWEEN
    // common
    results.halloween = obj.halloween.abobora[indexes.halloween.abobora] + obj.halloween.nsfw[indexes.halloween.nsfw] + obj.halloween.shader[indexes.halloween.shader]
    // with more suits
    results.halloween = (indexes.halloween.suits > 0) ? (results.halloween + (results.halloween * (obj.halloween.suits * indexes.halloween.suits))) : results.halloween

    // setting calcs
    document.getElementById("totalCalc").innerHTML = cur + results.custom
    document.getElementById("totalCalc1").innerHTML = cur + results.abraca
    document.getElementById("totalCalc2").innerHTML = cur + results.goods
    document.getElementById("totalCalc3").innerHTML = cur + results.pride
    document.getElementById("totalCalc4").innerHTML = cur + results.halloween
}

calc()
changeCur(indexes.cur)