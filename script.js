const FRONT = "card_frot";
const BACK = "card_back";


let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascrit',
    'jquery',
    "mongodb",
    'node',
    'react'
]

let cards = null;
startGame();

function startGame(){
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);

    
    initializeCards(cards);
}

function initializeCards(){
    let gameBoard
}

function shuffleCards(cards){

    let currentIndex = cards.length;
    let randomIndex = 0;


    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; //isso ta aqui pois o lengt não conta 0 como primeiro elemento logo ta diminuindo pra contar todos o elementos 

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]//Ao fazer isso o js inverte a ordem das cartas,  basicamente a lógica desse embaralhar das cartas que o Igor fez é, ele pega a uma carta aleatória com o math random  e pega a última carta, ai ele inverte, deixando primeiro a última carta e depois a carta aleatória, depois ele faz novamente, pega uma carta aleatória e a penúltima carta, ai inverte, nisso as duas últimas cartas já são aleatórias, e ele vai fazendo isso até que ele passe por todas.
    }
}

createCardsFromTechs(techs)
function createCardsFromTechs(techs){

    let cards = []

    for(let tech of techs){
        cards.push(createPairFrontTech(tech))
    }
    return cards.flatMap(pair => pair);
}

function createPairFrontTech(tech){
    return[{
        id: createIdTech(tech),
        icon: tech,
        fliped: false,
    }, {
        id: createIdTech(tech),
        icon: tech,
        fliped: false,
    }]
}

function createIdTech(tech){
   return  tech + parseInt(Math.random() * 1000);
}