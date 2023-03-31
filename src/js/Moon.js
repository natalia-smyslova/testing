// let cardNumber = 4539645121825065;


export default function Moon(value) {
  value = value.replace(/\D/g, '');

  var nCheck = 0;
  var bEven = false;

  for (var n = value.length - 1; n >= 0; n--) {
      var nDigit = parseInt(value.charAt(n), 10);

      if (bEven && (nDigit *= 2) > 9) {
          nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}


// export default function Moon(card_number) {

//   let arr = [];
//   card_number = card_number.toString();
//   for (var i = 0; i < card_number.length; i++) {
//     if (i % 2 === 0) {
//       let m = parseInt(card_number[i]) * 2;
//       if (m > 9) {
//         arr.push(m - 9);
//       } else {
//         arr.push(m);
//       }
//     } else {
//       let n = parseInt(card_number[i]);
//       arr.push(n)
//     }
//   }
//   // console.log(arr);
//   let summ = arr.reduce(function (a, b) { return a + b; });
//   console.log(Boolean(!(summ % 10)));
//   return Boolean(!(summ % 10));

// }

// console.log(Moon(cardNumber));