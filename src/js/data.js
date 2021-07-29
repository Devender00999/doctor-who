let companionLocation = "../src/images/companions/";
let seasonLocation = "../src/images/seasons/";
let incarnationLocation = "../src/images/incarnations/";
let enemyLocation = "../src/images/enemies/";
const companions = [
  {
    name: "Billie Piper",
    alias: "Rose Tyler",
    image: companionLocation + "Rose tyler.jpg",
    social: {
      instagram: "https://www.instagram.com/billiepiper/",
      facebook: "https://www.facebook.com/BilliePiper/",
      twitter: "https://twitter.com/billiepiper",
    },
  },
  {
    name: "Freema Agyeman",
    alias: "Martha Jones",
    image: companionLocation + "Martha Jones.jpeg",
    social: {
      instagram: "https://www.instagram.com/freemaofficial",
      facebook: "https://twitter.com/FreemaOfficial",
    },
  },
  {
    name: "Catherine Tate",
    alias: "Donna Noble",
    image: companionLocation + "Donna Noble.jpg",
    social: {},
  },
  {
    name: "Karen Gillan",
    alias: "Amy Pond",
    image: companionLocation + "Amy Pond.jpg",
    social: {
      instagram: "https://www.instagram.com/karengillan",
      facebook: "https://www.facebook.com/thekarengillan",
      twitter: "https://twitter.com/karengillan",
    },
  },
  {
    name: "Arthur Darvill",
    alias: "Rory Williams",
    image: companionLocation + "Rory Williams.jpg",
    social: {
      instagram: "https://www.instagram.com/rattyburvil",
      facebook: "https://twitter.com/rattyburvil",
    },
  },
  {
    name: "Alex Kingston",
    alias: "River Song",
    image: companionLocation + "River Song.webp",
    social: {
      instagram: "https://www.instagram.com/alexkingstonofficial",
    },
  },
  {
    name: "Jenna Coleman",
    alias: "Clara Oswald",
    image: companionLocation + "Clara Oswald.webp",
    social: {
      instagram: "https://www.instagram.com/jenna_coleman_/",
      twitter: "https://twitter.com/rattyburvil",
    },
  },
  {
    name: "Matt Lucas",
    alias: "Nardole",
    image: companionLocation + "nardole.jpg",
    social: {
      instagram: "https://www.instagram.com/realmattlucas/",
      twitter: "https://twitter.com/realmattlucas",
    },
  },
  {
    name: "Pearl Mackie",
    alias: "Bill Pots",
    image: companionLocation + "billPots.jpeg",
    social: {
      instagram: "https://www.instagram.com/therealpearlmackie",
      twitter: "https://twitter.com/pearlie_mack",
    },
  },
  {
    name: "Yasmin Khan",
    alias: "Mandip Gill",
    image: companionLocation + "yasminKhan.jpeg",
    social: {
      instagram: "https://www.instagram.com/mandipgill",
      twitter: "https://twitter.com/pearlie_mack",
    },
  },
  {
    name: "",
    alias: "Graham O'Brian",
    image: companionLocation + "graham.jpg",
    social: {
      instagram: "https://www.instagram.com/therealpearlmackie",
      twitter: "https://twitter.com/pearlie_mack",
    },
  },
  {
    name: "",
    alias: "Ryan Sinclair",
    image: companionLocation + "ryan.jpeg",
    social: {
      instagram: "https://www.instagram.com/therealpearlmackie",
      twitter: "https://twitter.com/pearlie_mack",
    },
  },
  {
    name: "John Barrowman",
    alias: "Captain Jack Harkness",
    image: companionLocation + "jackHarkness.jpeg",
    social: {
      instagram: "https://www.instagram.com/johnscotbarrowman/",
      twitter: "https://twitter.com/johnbarrowman",
      facebook: "https://www.facebook.com/JohnBarrowmanMBE",
    },
  },
];

const incarnations = [
  {
    name: "William Hartnell",
    alias: "First Doctor",
    image: incarnationLocation + "firstDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/first-doctor",
    social: {},
  },
  {
    name: "Patrick Troughton",
    alias: "Second Doctor",
    image: incarnationLocation + "secondDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/second-doctor",
    social: {},
  },
  {
    name: "Jon Pertwee",
    alias: "Third Doctor",
    image: incarnationLocation + "thirdDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/third-doctor",
    social: {},
  },
  {
    name: "Tom Baker",
    alias: "Fourth Doctor",
    image: incarnationLocation + "fourthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/fourth-doctor",
    social: {},
  },
  {
    name: "Peter Davison",
    alias: "Fifth Doctor",
    image: incarnationLocation + "fifthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/fifth-doctor",

    social: {},
  },
  {
    name: "Colin Baker",
    alias: "Sixth Doctor",
    image: incarnationLocation + "sixthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/sixth-doctor",

    social: {
      twitter: "https://twitter.com/SawbonesHex",
    },
  },
  {
    name: "Sylvester McCoy",
    alias: "Seventh Doctor",
    image: incarnationLocation + "seventhDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/seventh-doctor",

    social: {},
  },
  {
    name: "Paul McGann",
    alias: "Eighth Doctor",
    image: incarnationLocation + "eighthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/eighth-doctor",

    social: {},
  },
  {
    name: "Christopher Ecc.",
    alias: "Nine Doctor",
    image: incarnationLocation + "ninthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/ninth-doctor",

    social: {
      instagram: "https://www.instagram.com/christophereccleston",
    },
  },
  {
    name: "David Tenennt",
    alias: "Tenth Doctor",
    image: incarnationLocation + "tenthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/tenth-doctor",

    social: {},
  },
  {
    name: "Matt Smith",
    alias: "Eleventh Doctor",
    image: incarnationLocation + "eleventhDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/eleventh-doctor",

    social: {},
  },
  {
    name: "Peter Capaldi",
    alias: "twelfth Doctor",
    image: incarnationLocation + "twelfthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/twelfth-doctor",

    social: {},
  },
  {
    name: "Jodie Whittaker",
    alias: "Thirteenth Doctor",
    image: incarnationLocation + "thirteenthDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/thirteenth-doctor",

    social: {},
  },
  {
    name: "John Hurt",
    alias: "The War Doctor",
    image: incarnationLocation + "theWarDoctor.jpeg",
    site: "https://www.doctorwho.tv/explore/the-war-doctor",

    social: {
      instagram: "https://www.instagram.com/msjomartin/",
    },
  },
  {
    name: "Jo Martin",
    alias: "The Fugitive Doctor",
    image: incarnationLocation + "theFugitiveDoctor.jpeg",
    site: "https://en.wikipedia.org/wiki/Fugitive_Doctor",

    social: {},
  },
];

const enemies = [
  {
    name: "Daleks",
    image: enemyLocation + "daleks.jpeg",
    site: "https://www.doctorwho.tv/explore/daleks",
  },
  {
    name: "Cybermen",
    image: enemyLocation + "cybermen.jpeg",
    site: "https://www.doctorwho.tv/explore/cybermen",
  },
  {
    name: "Ice Warriors",
    image: enemyLocation + "icewarriors.jpeg",
    site: "https://www.doctorwho.tv/explore/ice-warriors",
  },
  {
    name: "Ood",
    image: enemyLocation + "ood.jpeg",
    site: "https://www.doctorwho.tv/explore/ood",
  },
  {
    name: "Weeping Angels",
    image: enemyLocation + "weepingAngels.jpeg",
    site: "https://www.doctorwho.tv/explore/weeping-angels",
  },
  {
    name: "Peg Dolls",
    image: enemyLocation + "pegDolls.jpeg",
    site: "https://www.doctorwho.tv/explore/peg-dolls",
  },
  {
    name: "Pting",
    image: enemyLocation + "pting.jpeg",
    site: "https://www.doctorwho.tv/explore/pting",
  },
  {
    name: "The Beast",
    image: enemyLocation + "theBeast.jpeg",
    site: "https://www.doctorwho.tv/explore/the-beast",
  },
  {
    name: "Empty Child",
    image: enemyLocation + "emptyChild.jpeg",
    site: "https://www.doctorwho.tv/explore/empty-child",
  },
];

const series = [
  {
    name: "Season 1",
    poster: seasonLocation + "season1/" + "season1.jpg",
    photos: {
      img1: seasonLocation + "season1/" + "season1-img1.jpg",
      img2: seasonLocation + "season1/" + "season1-img2.jpg",
      img3: seasonLocation + "season1/" + "season1-img3.jpeg",
      img4: seasonLocation + "season1/" + "season1-img4.jpg",
    },
  },
  {
    name: "Season 2",
    poster: seasonLocation + "season2/" + "season2.jpg",
    photos: {
      img1: seasonLocation + "season2/" + "season2-img1.jpg",
      img2: seasonLocation + "season2/" + "season2-img2.jpg",
      img3: seasonLocation + "season2/" + "season2-img3.jpg",
      img4: seasonLocation + "season2/" + "season2-img4.jpg",
    },
  },
  {
    name: "Season 3",
    poster: seasonLocation + "season3/" + "season3.jpg",
    photos: {
      img1: seasonLocation + "season3/" + "season3-img1.jpg",
      img2: seasonLocation + "season3/" + "season3-img2.jpg",
      img3: seasonLocation + "season3/" + "season3-img3.jpg",
      img4: seasonLocation + "season3/" + "season3-img4.jpg",
    },
  },
  {
    name: "Season 4",
    poster: seasonLocation + "season4/" + "season4.jpg",
    photos: {
      img1: seasonLocation + "season4/" + "season4-img1.jpg",
      img2: seasonLocation + "season4/" + "season4-img2.jpg",
      img3: seasonLocation + "season4/" + "season4-img3.webp",
      img4: seasonLocation + "season4/" + "season4-img4.jpg",
    },
  },
  {
    name: "Season 5",
    poster: seasonLocation + "season5/" + "season5.jpg",
    photos: {
      img1: seasonLocation + "season5/" + "season5-img1.jpg",
      img2: seasonLocation + "season5/" + "season5-img2.jpg",
      img3: seasonLocation + "season5/" + "season5-img3.jpg",
      img4: seasonLocation + "season5/" + "season5-img4.webp",
    },
  },
  {
    name: "Season 6",
    poster: seasonLocation + "season6/" + "season6.jpg",
    photos: {
      img1: seasonLocation + "season6/" + "season6-img1.jpg",
      img2: seasonLocation + "season6/" + "season6-img2.jpg",
      img3: seasonLocation + "season6/" + "season6-img3.jpg",
      img4: seasonLocation + "season6/" + "season6-img4.jpg",
    },
  },
  {
    name: "Season 7",
    poster: seasonLocation + "season7/" + "season7.jpg",
    photos: {
      img1: seasonLocation + "season7/" + "season7-img1.jpg",
      img2: seasonLocation + "season7/" + "season7-img2.jpg",
      img3: seasonLocation + "season7/" + "season7-img3.jpg",
      img4: seasonLocation + "season7/" + "season7-img4.webp",
    },
  },
  {
    name: "Season 8",
    poster: seasonLocation + "season8/" + "season8.jpg",
    photos: {
      img1: seasonLocation + "season8/" + "season8-img1.jpg",
      img2: seasonLocation + "season8/" + "season8-img2.jpg",
      img3: seasonLocation + "season8/" + "season8-img3.jpg",
      img4: seasonLocation + "season8/" + "season8-img4.webp",
    },
  },
  {
    name: "Season 9",
    poster: seasonLocation + "season9/" + "season9.jpg",
    photos: {
      img1: seasonLocation + "season9/" + "season9-img1.jpg",
      img2: seasonLocation + "season9/" + "season9-img2.jpg",
      img3: seasonLocation + "season9/" + "season9-img3.jpg",
      img4: seasonLocation + "season9/" + "season9-img4.jpg",
    },
  },
  {
    name: "Season 10",
    poster: seasonLocation + "season10/" + "season10.jpg",
    photos: {
      img1: seasonLocation + "season10/" + "season10-img1.jpg",
      img2: seasonLocation + "season10/" + "season10-img2.jpg",
      img3: seasonLocation + "season10/" + "season10-img3.jpg",
      img4: seasonLocation + "season10/" + "season10-img4.jpg",
    },
  },
  {
    name: "Season 11",
    poster: seasonLocation + "season11/" + "season11.jpg",
    photos: {
      img1: seasonLocation + "season11/" + "season11-img1.jpg",
      img2: seasonLocation + "season11/" + "season11-img2.jpg",
      img3: seasonLocation + "season11/" + "season11-img3.jpg",
      img4: seasonLocation + "season11/" + "season11-img4.jpg",
    },
  },
  {
    name: "Season 5",
    poster: seasonLocation + "season12/" + "season12.jpg",
    photos: {
      img1: seasonLocation + "season12/" + "season12-img1.jpg",
      img2: seasonLocation + "season12/" + "season12-img2.jpg",
      img3: seasonLocation + "season12/" + "season12-img3.jpg",
      img4: seasonLocation + "season12/" + "season12-img4.jpg",
    },
  },
];
