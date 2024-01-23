const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.etsystatic.com/28740631/r/il/9cfae1/3203669083/il_1588xN.3203669083_knn4.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmkn1LngkKyVa8saYgAhp06D4zq_NpS4_BgtzaLzQDBcZBzgpHeFoN44CTOInikl7Ey4&usqp=CAU"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.thoughtco.com/thmb/4MVLnTFRrmF0yPloB96FDmpNQZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dinomeme5-56a256bb3df78cf772748c40.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.boredpanda.com/blog/wp-content/uploads/2023/04/644a230e3f5d4_l7ink8py2vta1__700.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://hips.hearstapps.com/vidthumb/1a78ffd6-0291-4d2f-8f8f-7c80907177bc/thumb_640x640_00002_1643977764_92390.jpg?crop=1xw:1xh;center,top"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://preview.redd.it/how-did-you-come-up-with-your-cats-name-7-months-later-and-v0-2xr1bhsguwnb1.jpg?width=640&crop=smart&auto=webp&s=2eb915ba014ae6b7ef38ca140b8061f143d9cafe"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://cdn1.vectorstock.com/i/1000x1000/21/90/dinosaur-playing-guitar-vector-19162190.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/d0/0a/89/d00a893f1ef30c0c9bafd537084f4b4b.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://us.feliway.com/cdn/shop/articles/10_fascinating_facts_about_black_cats-3.jpg?v=1667409596"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.freepik.com/premium-photo/dinosaur-playing-video-game-with-controller-foreground_561855-6677.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://people.com/thmb/JzHiLg5RR9WC1pL1L9lhvTunTU8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(602x0:604x2)/xherdan-cat-2-1a0a928c0605461f851e49fb5b5f29af.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvx4m2i9wrI-py3ZvRyHjfExHSct29eXS7g&usqp=CAU"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/01/rich-cats1.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://media.tenor.com/Dlb7NqumGLMAAAAi/dino-dinosaur.gif"
    }
  ];

  const cardsOnDom = (array) => {

  let domString = "";
  for (const member of array) {

   domString += `<div class="card" style="width: 18rem;">
  <img src=${member.imageUrl} class="card-img-top" alt=${member.name}>
  <div class="card-body">
    <h5 class="card-title">${member.name}</h5>
    <p class="color">${member.color}</p>
    <p class="specialskill">${member.specialSkill}</p>
    <p class="type">${member.type}</p>
    <button class="btn btn-primary" id="delete--${member.id}">Delete</button>
  </div>
  </div>`;
  };

renderToDom("#cards", domString);
};
           
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML =htmlToRender;
};

const filter = (cards, typeString) => {
  const typeArray = [];
  for (const pet of cards) {
    if (pet.type === typeString) {
      typeArray.push(pet);                                 
    }
  }
  return typeArray;

};

window.addEventListener("load", () =>  {
  cardsOnDom(pets)
});

const showDogsButton = document.querySelector("#dogs");
const showCatsButton = document.querySelector("#cats");
const showDinosButton = document.querySelector("#dinos");
const showAllButton = document.querySelector("#all-pets");

showDogsButton.addEventListener("click", () => {
  const dogs = filter(pets, "dog");
  cardsOnDom(dogs);
});
showCatsButton.addEventListener("click", () => {
  const cats = filter(pets, "cat");
  cardsOnDom(cats);
});
showDinosButton.addEventListener("click", () => {
  const dinos = filter(pets, "dino");
  cardsOnDom(dinos);
});
showAllButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();

  const newPets = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    }

    pets.push(newPets);
    cardsOnDom(pets);
    form.reset();
}

form.addEventListener("submit", createPet);

const cards = document.querySelector("#cards");

cards.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const[, id] = e.target.id.split("--");
    const index = pets.findIndex((e) => e.id === Number(id));

    pets.splice(index, 1);
    cardsOnDom(pets);
  }
});
const startApp = () => {
  cardsOnDom(pets);
};
