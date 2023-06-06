const wordList = [
  "bee",
  "boat",
  "coin",
  "hippo",
  "box",
  "star",
  "branch",
  "swing",
  "tree",
  "glasses",
  "bunny",
  "baby",
  "seashell",
  "whale",
  "hand",
  "bow",
  "snowman",
  "shoe",
  "ball",
  "helicopter",
  "dinosaur",
  "fly",
  "pizza",
  "rain",
  "bracelet",
  "feet",
  "light",
  "nail",
  "comb",
  "chicken",
  "grass",
  "jellyfish",
  "cherry",
  "alive",
  "lamp",
  "circle",
  "carrot",
  "banana",
  "coat",
  "kitten",
  "worm",
  "hamburger",
  "rabbit",
  "oval",
  "beach",
  "diamond",
  "socks",
  "hat",
  "doll",
  "ant",
  "cupcake",
  "lion",
  "zoo",
  "pencil",
  "button",
  "love",
  "house",
  "mouse",
  "backpack",
  "snowflake",
  "train",
  "tail",
  "cloud",
  "pie",
  "hair",
  "bed",
  "rocket",
  "bat",
  "basketball",
  "candy",
  "football",
  "cat",
  "airplane",
  "pants",
  "starfish",
  "eyes",
  "snake",
  "zebra",
  "bridge",
  "earth",
  "sun",
  "bone",
  "candle",
  "pig",
  "head",
  "ship",
  "moon",
  "water",
  "monster",
  "connect",
  "school",
  "toast",
  "doctor",
  "leak",
  "pipe",
  "spring",
  "airport",
  "stamp",
  "rug",
  "sleeve",
  "detective",
  "list",
  "weight",
  "picture frame",
  "silverware",
  "gumball",
  "restaurant",
  "face",
  "popcorn",
  "bug spray",
  "torch",
  "eye patch",
  "kiss",
  "violin",
  "garage",
  "spoon",
  "attic",
  "mud",
  "headband",
  "run",
  "dog leash",
  "cabin",
  "pine tree",
  "tongs",
  "marry",
  "donkey",
  "tractor",
  "needle",
  "drink",
  "horn",
  "scar",
  "chip",
  "lemon",
  "palace",
  "unicorn",
  "giraffe",
  "koala",
  "wasp",
  "scorpion",
  "salamander",
  "dolphin",
  "frog",
  "panda",
  "platypus",
  "T-rex",
  "meerkat",
  "eagle",
  "mailman",
  "Superman",
  "cowboy",
  "Robin Hood",
  "vampire",
  "pirate",
  "Pikachu",
  "Spongebob",
  "Baby Yoda",
  "Cinderella",
  "baker",
  "Abe Lincoln",
  "thief",
  "Harry Potter",
  "Shrek",
  "Yoshi",
  "Queen Elizabeth",
];

export function getRandomWords(amount) {
  let randomWords = [];
  for (let i = 0; i < amount; i++) {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    randomWords = [...randomWords, wordList[randomIndex]];
  }
  return randomWords;
}
