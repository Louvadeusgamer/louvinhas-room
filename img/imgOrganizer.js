class imgSheet {
    constructor(img, Dpt, Den, data) {
        this.img = img
        this.Dpt = Dpt
        this.Den = Den
        this.data = data
    }
}

const tags = {
    custom: "custom",
    abraca: "abraçadinhos",
    goods: "show your goods",
    pride: "pride face",
    halloween2024: "halloween 2024"
}

const SM = {
    tt: "Twitter",
    bsky: "Bluesky",
    dc: "Discord",
    tl: "Telegram"
}

class Divisor {
    constructor(year) {
        this.read = true
        this.year = year
    }
}

class Cmm extends imgSheet {
    constructor(img, data, user, social, tag, alts) {
        super(img, data)
        this.user = user
        this.social = social
        this.tag = tag
        this.alts = alts
    }
}

class Art extends imgSheet {
    constructor(img, Dpt, Den, data) {
        super(img, Dpt, Den, data)
    }
}

class Gift extends Art {
    constructor(img, Dpt, Den, data, user, social, alt) {
        super(img, Dpt, Den, data)
        this.user = user
        this.social = social
        this.alt = alt
    }
}



const cmms = [
    new Divisor(2024),

    new Cmm(
        "cmm/halloween2024/draglu_17.png",
        "01/10/2024",
        "draglu_17",
        SM.dc,
        tags.halloween2024
    ),
    new Cmm(
        "cmm/halloween2024/co3kyfox.png",
        "01/10/2024",
        "co3kyfox",
        SM.dc,
        tags.halloween2024
    ),
    new Cmm(
        "cmm/halloween2024/chomy.exe.png",
        "01/10/2024",
        "chromy.exe",
        SM.dc,
        tags.halloween2024
    ),
    new Cmm(
        "cmm/custom/yelleow_01.png",
        "27/06/2024",
        "yellewo_01",
        SM.dc,
        tags.custom
    ),
    new Cmm(
        "cmm/pride/co3kyfox.png",
        "19/06/2024",
        "co3kyfox",
        SM.dc,
        tags.pride
    ),
    new Cmm(
        "cmm/pride/melvinkitty.png",
        "01/06/2024",
        "melvinkitty",
        SM.dc,
        tags.pride
    ),
    new Cmm(
        "cmm/pride/jesse13_.png",
        "30/05/2024",
        "jesse13_",
        SM.dc,
        tags.pride
    ),
    new Cmm(
        "cmm/pride/meiruucuteness.png",
        "30/05/2024",
        "meiruucuteness",
        SM.tt,
        tags.pride
    ),
    new Cmm(
        "cmm/pride/kodytk.png",
        "30/05/2024",
        "kodytk",
        SM.dc,
        tags.pride
    ),
    new Cmm(
        "cmm/goods/FARFACE5",
        "25/4/2024",
        "FARFACE5",
        SM.tt,
        tags.goods
    ),
    new Cmm(
        "cmm/goods/Raposinha_ai343VER1.png",
        "24/04/2024",
        "Raposinha_ai343",
        SM.tt,
        tags.goods,
        ["cmm/goods/Raposinha_ai343VER2.png"]
    ),
    new Cmm(
        "cmm/goods/coekiefox.png",
        "23/4/2024",
        "co3kiefox",
        SM.tt,
        tags.goods
    ),
    new Cmm(
        "cmm/custom/melvinho_kitty.png",
        "10/03/2024",
        "melvinho_kitty",
        SM.tt,
        tags.custom
    ),

    new Divisor(2023),

    new Cmm(
        "cmm/custom/DavyLuizz.png",
        "28/11/2023",
        "DavyLuizz",
        SM.tt,
        tags.custom
    ),
    new Cmm(
        "cmm/custom/S2LuhBR.png",
        "23/11/2023",
        "S2LuhBR",
        SM.tt,
        tags.custom
    ),
    new Cmm(
        "cmm/abraca/loboartsNSFW.png",
        "12/11/2023",
        "loboartsNSFW",
        SM.tt,
        tags.abraca
    ),
    new Cmm(
        "cmm/abraca/FARFACE5.png",
        "12/11/2023",
        "FARFACE5",
        SM.tt,
        tags.abraca
    ),
    new Cmm(
        "cmm/abraca/TheRealShelly.png",
        "02/11/2023",
        "TheRealShelly",
        SM.tt,
        tags.abraca
    )
]

const artsCommon = [
    
]

const gifts = [
    new Divisor(2024),

    new Gift(
        "All arts/ChromyBirthdayGift.png",
        "Um incrível presente de aniversário que eu e a @co3kiefox fizemos :3",
        "One amazing bithday gift were me and @Co3kiefox made :3",
        "26/09/2024",
        "chromy.exe",
        SM.tt
    ),
    new Gift(
        "All arts/giveaway/bsky/050924/umarapowsitaai.png",
        "Duas dragoas fofas tomando sorvete na praça :3",
        "Two cuties dragons eating ice cream in the park :3",
        "19/09/2024",
        "umarapowsitaai.bsky.social",
        SM.bsky
    ),
    new Gift(
        "All arts/ErinaSona.png",
        "Apresentando uma nova cadelinha da Co3kie! A Erina!",
        "Preseting one new Co3kie's doggo! Erina!",
        "11/09/2024",
        "co3kiefox.bsky.social",
        SM.bsky,
        ["All arts/ErinaSonaALT1.png", "All arts/ErinaSonaALT2.png"]
    ),
    new Gift(
        "All arts/DariusSwimgsuit.png",
        "Darius com uma sunguinha ✨",
        "Darius with a swimgsuit ✨",
        "30/08/2024",
        "WolfxDarius",
        SM.tt
    ),
    new Gift(
        "All arts/giveaway/disc/060624/milyminako.png",
        "Segunda recompensa do Sorteio do Discord! (06/06/2024)",
        "Second reward from Discord's Giveaway! (06/06/2024)",
        "23/06/2024",
        "milyminako",
        SM.dc
    ),
    new Gift(
        "All arts/giveaway/disc/060624/farface5.png",
        "primeira recompensa do Sorteio do Discord! (06/06/2024)",
        "First reward from Discord's Giveaway! (06/06/2024)",
        "15/06/2024",
        "farface5",
        SM.dc
    ),
    new Gift(
        "All arts/Co3kiefoxBirthday.png",
        "Um presentinho pra esta gatinha fofa!",
        "A lil gift for that cutie kitty!",
        "13/05/2024",
        "co3kiefox",
        SM.tt
    ),
    
    new Divisor(2023),
    
    new Gift(
        "All arts/DraxPrideFace(old).png",
        "Uma antiga versão do YCH pride face", 
        "A old pride face YCH version",
        "17/08/2023",
        "Drax",
        SM.tl
    ),
    new Gift(
        "All arts/AngelBirthday.png", 
        "Niver de 18 anos do Angel!!", 
        "18 years bday of Angel!!", 
        "11/08/2023", 
        "scrityling", 
        SM.tt
    ),
    new Gift(
        "All arts/AngelSona.png", 
        "Primeira versão da sona do Angel!", 
        "First version of Angel's sona!", "07/07/2023", 
        "scrityling", 
        SM.tt
    ),
    new Gift(
        "All arts/KiramaPosing.png", 
        "Kirama posando", 
        "Kirama posing", 
        "29/06/2023", 
        "KiramaFox", 
        SM.tt
    ),
    new Gift(
        "All arts/BrusukySkate.png", 
        "'Zóia! uma cabra skatista!", 
        "Look! A skateboarding goat!", 
        "28/06/2023",
        "brusuky2024", 
        SM.tt
    ),
    new Gift(
        "All arts/cookieForAGoodra.png", 
        "Um grande Cookie para um grande Goodra ^w^", 
        "A big cookie for a big Goodra ^w^", 
        "14/06/2024", 
        "Leafy_Disaster", 
        SM.tt
    ),
    new Gift(
        "All arts/cookieForARat.png", 
        "Dando um cookie para um ratinho fofo!", 
        "Giving a cookie for a cute rat!", 
        "14/06/2023", 
        "FranklinSQQ", 
        SM.tt
    ),
    new Gift(
        "All arts/KutsuneCityView.png", 
        "O Kutsune está aproveitando a vista", 
        "Kutsune is enjoying the view", 
        "11/06/2023", 
        "kutsune2024", 
        SM.tt
    ),
    new Gift(
        "All arts/AsterGift18y.png", 
        "Um (ex) gatinho femboy fez 18 anos!", 
        "A (ex) femboy kitty made 18 years!", 
        "12/05/2023", 
        "aster_kumar", 
        SM.tt
    ),
    new Gift(
        "All arts/taticalFox(mamalurew).png", 
        "Raposa tática!", 
        "Tatical fox!", 
        "11/05/2023", 
        "mamalurew", 
        SM.tt
    )
]



export {gifts, cmms}