// 1a

const mcuShows = ["loki", "Moon Knight"];

// 1b

const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];

// 1 c

const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];

// 1d

console.log(disneyPlusShows);

// 2a

const netFlixMovies = {
    action: "Extraction",
    crime: "The Irishman" 
}

// 2b

const amazonPrimeMovies = {
    action: "The Tomorrow War ",
    drama: "One Night in Miami"
}

// 2c

const streamingMovies = { ...amazonPrimeMovies,...netFlixMovies, musical:"Hamilton"};

// 2d

console.log(streamingMovies);

// 3a

const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];

//3b

const [mickey, ...spidey] = disneyJunior;
console.log(disneyJunior);

// 3c

console.log(mickey, spidey);

// 4a

const avengers = {
    warMachine: 'James Rhodes',
    theHulk: 'Bruce Banner'
}

// 4b

const {warMachine, theHulk} = avengers;

// 4c

console.log(warMachine, theHulk);

// 4d

const moreAvengers = {

    blackWidow: 'Natasha Romanoff',
    hawkEye: 'Clint Barton',
    ironMan: 'Tony Stark'
};

// 4e

const {nat, ...others} = moreAvengers;

// 4f

console.log(nat, others);

// bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  // 5a
  const {first, second, third}= bonus
  const all = [...first, ...second, ...third];
  console.log(all);


// 5b
  const [one, two, three, four, five, six, seven, eight, nine] = all;
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
  console.log(five);
  console.log(six);
  console.log(seven);
  console.log(eight);
  console.log(nine);
  