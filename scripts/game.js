let game = {

    lockmode: false,
    firstCard: null,
    secondCard: null,

    
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

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0];

        if (card.fliped || this.lockmode) {
            return false;
        }


        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.fliped = true
            return true;
        } else {
            this.secondCard = card
            this.secondCard.fliped = true
            this.lockmode = true
            return true
        }

    },


    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockmode = false;
    },

    unflipCards() {
        this.firstCard.fliped = false;
        this.secondCard.fliped = false;
        this.clearCards();
    },

    checkGameOver: function() {
        return this.cards.filter(card => !card.fliped).length == 0;



    },

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
            currentIndex--; //isso ta aqui pois o lengt n??o conta 0 como primeiro elemento logo ta diminuindo pra contar todos o elementos 

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]//Ao fazer isso o js inverte a ordem das cartas,  basicamente a l??gica desse embaralhar das cartas que o Igor fez ??, ele pega a uma carta aleat??ria com o math random  e pega a ??ltima carta, ai ele inverte, deixando primeiro a ??ltima carta e depois a carta aleat??ria, depois ele faz novamente, pega uma carta aleat??ria e a pen??ltima carta, ai inverte, nisso as duas ??ltimas cartas j?? s??o aleat??rias, e ele vai fazendo isso at?? que ele passe por todas.
        }
    }




}