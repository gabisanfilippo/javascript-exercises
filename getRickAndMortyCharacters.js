async function fetchCharacters(name) {
  const { default: fetch } = await import("node-fetch");
  let { results } = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return results
}

function buildObject(data) {
  let object = {
    name: data[0].name,
    gender: data[0].gender,
    avatar: data[0].image,
    specie: data[0].species,
  };
  return object
}

async function getRickAndMortyCharacters() {
  let characters = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  let promises = characters.map(async (character) => {
    let data = await fetchCharacters(character);
    let object = buildObject(data);
    return object;
  });

  let result = await Promise.all(promises);
  return result;
}

module.exports = getRickAndMortyCharacters;

// (async () => {
//   console.log(await getRickAndMortyCharacters());
//   module.exports = getRickAndMortyCharacters;
// })();