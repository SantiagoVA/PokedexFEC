import { createCard } from './structure.js';

function generateCard(amount) {
  const Cards = [];
  for (let index = 0; index < amount; index++) {
    const card = document.createElement('section');
    card.classList.add('hidden');
    Cards.push(card);
  }
  return Cards;
}

async function getCard(pokemon, card) {
  await createCard(pokemon)
    .then((components) => {
      components.forEach((componet) => {
        card.appendChild(componet);
        card.classList.remove('hidden');
        card.classList.add('card');
      });
      return card;
    })
    .catch((error) => {
      return error;
    });
}

async function getAllCard(allPokemon, cards, types) {
  if (types) {
    for (let index = 0; index < allPokemon.length; index++) {
      cards[index].innerHTML = '';
      cards[index].classList.remove('card');
      cards[index].classList.add('hidden');
    }
  }
  for (let index = 0; index < allPokemon.length; index++) {
    await getCard(allPokemon[index], cards[index], false);
  }
}

function resetCard(cards, limit) {
  for (let index = 0; index < limit; index++) {
    cards[index].innerHTML = '';
    cards[index].classList.remove('card');
    cards[index].classList.add('hidden');
  }
}
export { getAllCard, generateCard, resetCard };
