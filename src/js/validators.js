export default function validateCardType(cardNumber) {
  let cards = document.querySelectorAll('.Card');
  cards = Array.from(cards);

  const firstS = Number(cardNumber[0] + cardNumber[1]);
  const firstThreeS = Number(cardNumber.slice(0, 3));
  const firstFourS = Number(cardNumber.slice(0, 4));
  const firstSixS = Number(cardNumber.slice(0, 6));
  const length = Number(cardNumber.length);
  // console.log(typeof length);

  // console.log(firstSixSymbols);
  // console.log(firstFourSymbols);
  // console.log(firstSymbols);
  // console.log(cardNumber.length);

  if (cardNumber[0] === '2' && (length < 20 && length > 15)) {
    cards.forEach((card) => {
      if (card.classList.contains('MIR') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('MIR') === true) {
        card.classList.remove('inactive');
      }
    });

    // console.log("MIR");
    return true;
  }

  if (cardNumber[0] === '4' && (length === 13 || length === 16 || length === 19)) {
    cards.forEach((card) => {
      if (card.classList.contains('Visa') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('Visa') === true) {
        card.classList.remove('inactive');
      }
    });
    // console.log("Visa");
    return true;
  }
  if ((
    firstS === 36
        || firstS === 54
        || (firstThreeS > 299 && firstThreeS < 306))
        && (length === 14 || length === 16)) {
    cards.forEach((card) => {
      if (card.classList.contains('DinersClub') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('DinersClub') === true) {
        card.classList.remove('inactive');
      }
    });

    // console.log("DinersClub");

    return true;
  }
  if ((firstS === 34 || firstS === 37) && length === 15) {
    cards.forEach((card) => {
      if (card.classList.contains('AmericanExpress') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('AmericanExpress') === true) {
        card.classList.remove('inactive');
      }
    });

    // console.log("American Express");
    return true;
  }
  if (
    ((firstS === 65)
        || (firstThreeS > 643 && firstThreeS < 650)
        || (firstFourS === 6011)
        || (firstSixS > 622125 && firstSixS < 622926))
        && length === 16) {
    cards.forEach((card) => {
      if (card.classList.contains('Discover') !== true) {
        card.classList.add('inactive');
      }

      // Найти нужную карточку и выключить у нее класс
      if (card.classList.contains('Discover') === true) {
        card.classList.remove('inactive');
      }
    });

    // console.log("Discover");
    return true;
  }
  if ((firstFourS > 3527 && firstFourS < 3590) && (length > 15 && length < 20)) {
    cards.forEach((card) => {
      if (card.classList.contains('JCB') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('JCB') === true) {
        card.classList.remove('inactive');
      }
    });
    // console.log("JCB");
    return true;
  }
  if (((firstS > 50 && firstS < 59) || (firstSixS > 222099 && firstS < 272100)) && length === 16) {
    cards.forEach((card) => {
      if (card.classList.contains('MasterCard') !== true) {
        card.classList.add('inactive');
      }
      if (card.classList.contains('MasterCard') === true) {
        card.classList.remove('inactive');
      }
    });

    // console.log("MasterCard");
    return true;
  }

  cards.forEach((card) => {
    card.classList.remove('inactive');
  });

  throw new Error('Неизвестная платежная система');
}

// let card = 376851808100095;
// console.log(validateCardType(card));
