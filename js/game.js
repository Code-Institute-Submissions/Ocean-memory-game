document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'clown-fish',
            img: 'images/clown-fish.png'
        },
        {
            name: 'clown-fish',
            img: 'images/clown-fish.png'
        },
        {
            name: 'coral',
            img: 'images/coral.png'
        },
        {
            name: 'coral',
            img: 'images/coral.png'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.png'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.png'
        },
        {
            name: 'shark',
            img: 'images/shark.png'
        },
        {
            name: 'shark',
            img: 'images/shark.png'
        },
        {
            name: 'stingrays',
            img: 'images/stingrays.png'
        },
        {
            name: 'stingrays',
            img: 'images/stingrays.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        },
        {
            name: 'lionfish',
            img: 'images/lionfish.png'
        },
        {
            name: 'lionfish',
            img: 'images/lionfish.png'
        },
        {
            name: 'seal',
            img: 'images/seal.png'
        },
        {
            name: 'seal',
            img: 'images/seal.png'
        },
        {
            name: 'starfish',
            img: 'images/starfish.png'
        },
        {
            name: 'starfish',
            img: 'images/starfish.png'
        },
        {
            name: 'jellyfish',
            img: 'images/jellyfish.png'
        },
        {
            name: 'jellyfish',
            img: 'images/jellyfish.png'
        },
        {
            name: 'urchin',
            img: 'images/urchin.png'
        },
        {
            name: 'urchin',
            img: 'images/urchin.png'
        },
        {
            name: 'seahorse',
            img: 'images/seahorse.png'
        },
        {
            name: 'seahorse',
            img: 'images/seahorse.png'
        },
        {
            name: 'eel',
            img: 'images/eel.png'
        },
        {
            name: 'eel',
            img: 'images/eel.png'
        },
        {
            name: 'octopus',
            img: 'images/octopus.png'
        },
        {
            name: 'octopus',
            img: 'images/octopus.png'
        },
        {
            name: 'manatee',
            img: 'images/manatee.png'
        },
        {
            name: 'manatee',
            img: 'images/manatee.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})