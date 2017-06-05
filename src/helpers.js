/* eslint-disable */
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
  const adjectives=['Clean', 'Fancy', 'Mysterious'];
  const nouns = ['Cards', 'Trick', 'Flash'];

  return `${rando(adjectives)}-${rando(nouns)}`;
}

export const gameName=getFunName();

export function getRandomNumber() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return `${rando(nums)}`;
}

export const gameNumber = getRandomNumber();

export function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

