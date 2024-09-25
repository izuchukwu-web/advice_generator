// getting all parameters needed

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

btn.onclick = function () {
  let quoteBank = [
    "Believe in yourself and all that you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Act as if what you do makes a difference. It does.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "You are never too old to set another goal or to dream a new dream.",
    "To see what is right and not do it is a lack of courage.",
    "With the new day comes new strength and new thoughts.",
    "Believe you can and you're halfway there.",
    "It always seems impossible until it’s done.",
    "Your time is limited, don't waste it living someone else's life.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "Do what you can, with what you have, where you are.",
    "The best way to predict the future is to invent it.",
  ];

  // console.log(Math.trunc(Math.random()*4))

  let randomquote = Math.trunc(Math.random() * quoteBank.length);
  // console.log(quoteBank[randomquote]);
  quote.textContent = quoteBank[randomquote];
};
