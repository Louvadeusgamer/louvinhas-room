class imgSheet {
    constructor(img, Dpt, Den, date) {
        this.img = img
        this.Dpt = Dpt
        this.Den = Den
        this.data = date
    }
}

const tags = {
    custom: "custom",
    abraca: "YCH abraçadinhos",
    goods: "YCH show your goods",
    pride: "YCH pride face",
    halloween2024: "YCH halloween 2024"
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
    constructor(img, date, user, social, tag, alt) {
        super(img, date)
        this.user = user
        this.social = social
        this.tag = tag
        this.alt = alt
    }
}

class Art extends imgSheet {
    constructor(img, Dpt, Den, date, alt) {
        super(img, Dpt, Den, date)
        this.alt = alt
    }
}

class Gift extends Art {
    constructor(img, Dpt, Den, date, user, social, alt) {
        super(img, Dpt, Den, date)
        this.user = user
        this.social = social
        this.alt = alt
    }
}



const cmms = [
    new Divisor(2024),

    new Cmm(
        "cmm/custom/jjelson.png",
        "11/12/2024",
        "jjelson",
        SM.dc,
        tags.custom,
        []
    ),

    new Cmm(
        "cmm/halloween2024/draglu_17.png",
        "01/10/2024",
        "draglu_17",
        SM.dc,
        tags.halloween2024,
        []
    ),
    new Cmm(
        "cmm/halloween2024/co3kyfox.png",
        "01/10/2024",
        "co3kyfox",
        SM.dc,
        tags.halloween2024,
        []
    ),
    new Cmm(
        "cmm/halloween2024/chromy.exe.png",
        "01/10/2024",
        "chromy.exe",
        SM.dc,
        tags.halloween2024,
        []
    ),
    new Cmm(
        "cmm/custom/yelleow_01.png",
        "27/06/2024",
        "yellewo_01",
        SM.dc,
        tags.custom,
        []
    ),
    new Cmm(
        "cmm/pride/co3kyfox.png",
        "19/06/2024",
        "co3kyfox",
        SM.dc,
        tags.pride,
        []
    ),
    new Cmm(
        "cmm/pride/melvinkitty.png",
        "01/06/2024",
        "melvinkitty",
        SM.dc,
        tags.pride,
        []
    ),
    new Cmm(
        "cmm/pride/jesse13_.png",
        "30/05/2024",
        "jesse13_",
        SM.dc,
        tags.pride,
        []
    ),
    new Cmm(
        "cmm/pride/meiruucuteness.png",
        "30/05/2024",
        "meiruucuteness",
        SM.tt,
        tags.pride,
        []
    ),
    new Cmm(
        "cmm/pride/kodytk.png",
        "30/05/2024",
        "kodytk",
        SM.dc,
        tags.pride,
        []
    ),
    new Cmm(
        "cmm/goods/FARFACE5.png",
        "25/4/2024",
        "FARFACE5",
        SM.tt,
        tags.goods,
        []
    ),
    new Cmm(
        "cmm/goods/raposinha_ai343VER1.png",
        "24/04/2024",
        "Raposinha_ai343",
        SM.tt,
        tags.goods,
        ["cmm/goods/raposinha_ai343VER2.png"]
    ),
    new Cmm(
        "cmm/goods/co3kiefox.png",
        "23/4/2024",
        "co3kiefox",
        SM.tt,
        tags.goods,
        []
    ),
    new Cmm(
        "cmm/custom/melvinho_kitty.png",
        "10/03/2024",
        "melvinho_kitty",
        SM.tt,
        tags.custom,
        []
    ),

    new Divisor(2023),

    new Cmm(
        "cmm/custom/DavyLuizz.png",
        "28/11/2023",
        "DavyLuizz",
        SM.tt,
        tags.custom,
        []
    ),
    new Cmm(
        "cmm/custom/S2LuhBR.png",
        "23/11/2023",
        "S2LuhBR",
        SM.tt,
        tags.custom,
        []
    ),
    new Cmm(
        "cmm/abraca/loboartsNSFW.png",
        "12/11/2023",
        "loboartsNSFW",
        SM.tt,
        tags.abraca,
        []
    ),
    new Cmm(
        "cmm/abraca/FARFACE5.png",
        "12/11/2023",
        "FARFACE5",
        SM.tt,
        tags.abraca,
        []
    ),
    new Cmm(
        "cmm/abraca/TheRealShelly.png",
        "02/11/2023",
        "TheRealShelly",
        SM.tt,
        tags.abraca,
        []
    )
]

const artsCommon = [
    new Divisor(2024),

    new Art(
        "All arts/LouvaHalloween.png",
        "Louva vestida de Joker ✨",
        "Louva dressed like Joker",
        "26/09/2024",
        []
    ),
    new Art(
        "All arts/SleepingKittiers.png",
        "Dormindo com minhas gatinhas <3",
        "Sleeping with my kitties",
        "28/06/2024",
        []
    ),
    new Art(
        "All arts/FormalKitty.png",
        "Parece que a gatinha tá formal hoje~",
        "Looks lije kitty got formal today~",
        "03/05/2024",
        []
    ),
    new Art(
        "All arts/MooSuit.png",
        "Awwn~, ela tá muito fofa com essa roupinha de vaquinha~ >w<",
        "Owwn~, She's looks so cute in that moo suit~ >w<",
        "02/05/2024",
        []
    ),
    new Art(
        "All arts/PetingPeting.png",
        "T-tanta mão~, tanto carinho~",
        "S-so many hands~, many pet pet~",
        "30/04/2024",
        []
    ),
    new Art(
        "All arts/ShowYourGoodsLouva.png",
        "Olhe meus feijõeszinhos rosinhas~<br><a href='https://louvadeusgamer.github.io/louvinhas-room/pt-br/arts.html'>Este YCH está disponível!</a>",
        "Look at my pink beans~<br><a href='https://louvadeusgamer.github.io/louvinhas-room/pt-br/arts.html'>This YCH is avalaible!</a>",
        "23/04/2024",
        []
    ),
    new Art(
        "All arts/BunnyDay2024.png",
        "Ela se tranformou em uma coelha para a páscoa! Você aceita um ovo de chocolate?",
        "She's transformed herself for that bunny's day! Do you accept that chocolate egg?",
        "31/03/2024",
        []
    ),
    new Art(
        "All arts/Moon.png",
        "Aqui está Moon, minha nova OC dragoa ~w~",
        "There's Moon, my new dragon OC ~w~",
        "21/03/2024",
        []
    ),
    new Art(
        "All arts/JennyNewStyle.png",
        "Redesign da Jenny! Ela é mãe adotiva da Louva :3",
        "Jenny's redesign! She's Louva's adoptive mother :3",
        "21/03/2024",
        []
    ),
    new Art(
        "All arts/Amogus.png",
        "LOUVA SUSSY AMOGUS 😲😲😲",
        "LOUVA SUSSY AMOGUS 😲😲😲",
        "17/03/2024",
        []
    ),
    new Art(
        "All arts/KissingKutsune.png",
        "Louva beijando essa poposa fofa chamada Kutsune~",
        "louva kissing this cutie fox called Kutsune~",
        "13/03/2024",
        []
    ),
    new Art(
        "All arts/BeautyView.png",
        "A vista da cidade é tão linda~",
        "The view of the city is so beautiful~",
        "01/01/2024",
        []
    ),

    new Divisor(2023),

    new Art(
        "All arts/Thinking.png",
        "Pensando...",
        "Thinking...",
        "19/11/2023",
        []
    ),
    new Art(
        "All arts/LouvaNervous.png",
        "Louva está te cumprimentando, ela parece um pouco nervosa >///<",
        "Louva saying hi to you, she's looks nervous >///<",
        "09/11/2023",
        []
    ),
    new Art(
        "All arts/Louva&Katim2Months.png",
        "Louva dormindo com Katim (2 meses de namoro...)<br><a href='https://louvadeusgamer.github.io/louvinhas-room/pt-br/arts.html'>Este YCH está disponível!</a>",
        "Louva sleeping with Kati, (2 months dating...)<br><a href='https://louvadeusgamer.github.io/louvinhas-room/pt-br/arts.html'>This YCH is avalaible!</a>",
        "24/10/2023",
        []
    ),
    new Art(
        "All arts/Louva&KatimMinecraft.png",
        "Eu e o Katim dentro da nossa casa do Minecraft",
        "Me and Katim inside of our Minecraft house",
        "17/10/2023",
        []
    ),
    new Art(
        "All arts/IDontKnowANameForThis.png",
        "Uma (falha) tentativa de criar uma nova OC ;w;",
        "A (failed) try of creating a new OC ;w;",
        "09/10/2023",
        []
    ),
    new Art(
        "All arts/LunaRefsheet.png",
        "Eis a irmã da Louva: Luna!",
        "There is Louva's sister: Luna!",
        "13/09/2023",
        []
    ),
    new Art(
        "All arts/ChipSack.png",
        "Quando alguém abre um Doritos X3",
        "When someone open a Doritos X3",
        "07/08/2023",
        []
    ),
    new Art(
        "All arts/LouvaMaid.png",
        "Eu de maid..",
        "Me as a maid..",
        "17/07/2023",
        ["All arts/LouvaMaidALT.png"]
    ),
    new Art(
        "All arts/DiscordIcon2023.png",
        "A primeira versão do Icon do meu server do Discord!",
        "The first version of my Discord server!",
        "01/07/2023",
        []
    ),
    new Art(
        "All arts/TwitterBanner.png",
        "Meu primeiro banner do Twitter!",
        "My first banner on Twitter!",
        "01/06/2023",
        []
    ),
    new Art(
        "All arts/FirstPrideFace.png",
        "Primeira verção do YCH Pride Face!",
        "First version of Pride Face YCH!",
        "30/05/2023",
        []
    ),
    new Art(
        "All arts/MamalurewLead.png",
        "@mamalurew colocou uma guia em mim~",
        "@mamalurew put me a lead~",
        "25/05/2023",
        []
    ),
    new Art(
        "All arts/InteractionAttemp.png",
        "Tentativa falha de interação ;w;",
        "A failed interaction attemp ;w;",
        "24/05/2023",
        []
    ),
    new Art(
        "All arts/Femboy.png",
        "Louva femboy, apenas..",
        "Louva femboy, just it..",
        "18/05/2023",
        []
    ),
    new Art(
        "All arts/TaticalKitty.png",
        "Gatinha tática",
        "Tatical kitty",
        "11/05/2023",
        []
    ),
    new Art(
        "All arts/BunnyDay2023.png",
        "Arte para a páscoa de 2023!",
        "Art for 2023 bunny day!",
        "09/04/2023",
        ["All arts/BunnyDay2023ALT.png"]
    ),
    new Art(
        "All arts/LarryProjectHSona.png",
        "Arte para o #projectHSona no Twitter!",
        "Art for #ProjectHSona on Twitter!",
        "24/02/2023",
        []
    ),
    new Art(
        "All arts/DrawMyMutualsOCs.png",
        "Eu fiz os OCs dos meus mutuals!",
        "I make my mutual's OCs!",
        "04/02/2023",
        []
    )
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

export {gifts, cmms, artsCommon}