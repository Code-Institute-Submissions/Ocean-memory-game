document.addEventListener("DOMContentLoaded", () => {
    //card options
    const easycards = [{
            name: "clown-fish",
            img: "images/clown-fish.png",
        },
        {
            name: "clown-fish",
            img: "images/clown-fish.png",
        },
        {
            name: "coral",
            img: "images/coral.png",
        },
        {
            name: "coral",
            img: "images/coral.png",
        },
        {
            name: "dolphin",
            img: "images/dolphin.png",
        },
        {
            name: "dolphin",
            img: "images/dolphin.png",
        },
        {
            name: "shark",
            img: "images/shark.png",
        },
        {
            name: "shark",
            img: "images/shark.png",
        },
        {
            name: "stingrays",
            img: "images/stingrays.png",
        },
        {
            name: "stingrays",
            img: "images/stingrays.png",
        },
        {
            name: "turtle",
            img: "images/turtle.png",
        },
        {
            name: "turtle",
            img: "images/turtle.png",
        },
        {
            name: "lionfish",
            img: "images/lionfish.png",
        },
        {
            name: "lionfish",
            img: "images/lionfish.png",
        },
        {
            name: "seal",
            img: "images/seal.png",
        },
        {
            name: "seal",
            img: "images/seal.png",
        },
        {
            name: "starfish",
            img: "images/starfish.png",
        },
        {
            name: "starfish",
            img: "images/starfish.png",
        },
    ];

  /*  const mediumcards = [{
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
    ];

    const hardcards = [{
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
        },
    ];*/

    const gameDifficulty = {
        easy: easycards,
       /* medium: mediumcards,
        hard: hardcards,*/
    };

    function setDifficulty(e) {
        difficultyLevel = e.target.id;
        createBoard();
    }

    let difficultyLevel = "easy";
    let cardArray = gameDifficulty[difficultyLevel];
    const easyButton = document.querySelector("#easy");
    easyButton.addEventListener("click", setDifficulty);

    /*let difficultyLevel = "medium";
    let cardArray = gameDifficulty[difficultyLevel];
    const mediumButton = document.querySelector("#medium");
    mediumButton.addEventListener("click", setDifficulty);

    let difficultyLevel = "hard";
    let cardArray = gameDifficulty[difficultyLevel];
    const hardButton = document.querySelector("#hard");
    hardButton.addEventListener("click", setDifficulty);*/

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    var cardsChosen = [];
    var cardsChosenId = [];
    const cardsWon = [];

    //create your board
    function createBoard() {
        grid.innerHTML = "";
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = " Congratulations! You found them all!";
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});