let game = {

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascrit',
        'jquery',
        "mongodb",
        'node',
        'react'],

    cards: null,


    createCardsFromTechs: function () {

        this.cards = []

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFrontTech(tech))
        })
       this.cards = this.cards.flatMap(pair => pair);
       this.shuffleCards();
       return this.cards;
    },

    createPairFrontTech: function (tech) {
        return [{
            id: this.createIdTech(tech),
            icon: tech,
            fliped: false,
        }, {
            id: this.createIdTech(tech),
            icon: tech,
            fliped: false,
        }]
    },

    createIdTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards) {

        let currentIndex = this.cards.length;
        let randomIndex = 0;


        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--; //isso ta aqui pois o lengt não conta 0 como primeiro elemento logo ta diminuindo pra contar todos o elementos 

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]//Ao fazer isso o js inverte a ordem das cartas,  basicamente a lógica desse embaralhar das cartas que o Igor fez é, ele pega a uma carta aleatória com o math random  e pega a última carta, ai ele inverte, deixando primeiro a última carta e depois a carta aleatória, depois ele faz novamente, pega uma carta aleatória e a penúltima carta, ai inverte, nisso as duas últimas cartas já são aleatórias, e ele vai fazendo isso até que ele passe por todas.
        }
    }




}