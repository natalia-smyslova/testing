
export default function validateCardType(cardNumber) {

    let cards = document.querySelectorAll(".Card");
    cards = Array.from(cards);


    let firstSymbols = Number(cardNumber[0] + cardNumber[1]);
    let firstThreeSymbols = Number(cardNumber.slice(0, 3));
    let firstFourSymbols = Number(cardNumber.slice(0, 4));
    let firstSixSymbols = Number(cardNumber.slice(0, 6));

    // console.log(firstSixSymbols);
    // console.log(firstFourSymbols);
    // console.log(firstSymbols);
    // console.log(cardNumber.length);


    if (cardNumber[0] === "2" & (cardNumber.length < 20 & cardNumber.length > 15)) {

        cards.forEach(function (card) {
            if (card.classList.contains("MIR") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("MIR") === true) {
                card.classList.remove('inactive');
            }
        });

        // console.log("MIR");
        return true
    }

    if (cardNumber[0] === "4" & (cardNumber.length === 13 | cardNumber.length === 16 | cardNumber.length === 19)) {

        cards.forEach(function (card) {
            if (card.classList.contains("Visa") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("Visa") === true) {
                card.classList.remove('inactive');
            }
        });
        // console.log("Visa");
        return true
    }
    if ((firstSymbols === 36 | firstSymbols === 54 | (firstThreeSymbols > 299 & firstThreeSymbols < 306)) & (cardNumber.length === 14 | cardNumber.length === 16)) {

        cards.forEach(function (card) {
            if (card.classList.contains("DinersClub") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("DinersClub") === true) {
                card.classList.remove('inactive');
            }
        });

        // console.log("DinersClub");

        return true
    }
    if ((firstSymbols === 34 | firstSymbols === 37) & cardNumber.length === 15) {

        cards.forEach(function (card) {
            if (card.classList.contains("AmericanExpress") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("AmericanExpress") === true) {
                card.classList.remove('inactive');
            }
        });

        // console.log("American Express");
        return true
    }
    if ((firstSymbols === 65 | (firstThreeSymbols > 643 & firstThreeSymbols < 650) | firstFourSymbols === 6011 | (firstSixSymbols > 622125 & firstSixSymbols < 622926)) & cardNumber.length === 16) {

        cards.forEach(function (card) {
            if (card.classList.contains("Discover") !== true) {
                card.classList.add('inactive');
            }

            // Найти нужную карточку и выключить у нее класс
            if (card.classList.contains("Discover") === true) {
                card.classList.remove('inactive');
            }
        });

        // console.log("Discover");
        return true
    }
    if ((firstFourSymbols > 3527 & firstFourSymbols < 3590) & (cardNumber.length > 15 & cardNumber.length < 20)) {

        cards.forEach(function (card) {
            if (card.classList.contains("JCB") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("JCB") === true) {
                card.classList.remove('inactive');
            }
        });
        // console.log("JCB");
        return true
    }
    if (((firstSymbols > 50 & firstSymbols < 59) | (firstSixSymbols > 222099 & firstSixSymbols < 272100)) & cardNumber.length === 16) {

        cards.forEach(function (card) {
            if (card.classList.contains("MasterCard") !== true) {
                card.classList.add('inactive');
            }
            if (card.classList.contains("MasterCard") === true) {
                card.classList.remove('inactive');
            }
        });

        // console.log("MasterCard");
        return true
    }
    else {
        cards.forEach(function (card) {
            card.classList.remove('inactive');
        });

        throw new Error("Неизвестная платежная система");
    }
}

// let card = 376851808100095;
// console.log(validateCardType(card));