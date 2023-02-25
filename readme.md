# JavaScript Exercises

This repository contains 4 JavaScript exercises.

## Exercise 1 - Maskify

Generally, when you buy something, you're asked if your credit card number, phone number, or answer to
your secret question is still correct. However, as someone could look over your shoulder, you don't want
that to be on your screen. Instead, we mask it. Your task is to write a function `maskify`, which changes
all but the last four characters to "#".

Examples:

- maskify("4556364607935616") --> "############5616"
- maskify("64607935616") --> "######5616"
- maskify("1") --> "1"
- maskify("") --> ""
- maskify("Skippy") --> "##ippy"
- maskify("Nanananananananananana Batman!") --> "##########################man!"


## Exercise 2 - updateData

Write a function that takes an object as the first parameter and, as the second parameter, an object
with data that will update the first object.
Note: if the second object has data that the first object doesn't have, the value should not persist
in the return object of the function. Only the data that the first object possesses is updated.

Examples:

- updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }) --> { name: 'Marcos', country: 'Japão', age: 33 }
- updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description: "camiseta 100% algodão" }) --> { name: "Marcos", country: "Brasil", age: 22 }
- updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30 }) --> { name: "Rafael", country: "Chile", age: 42 }


## Exercise 3 - getRickAndMortyCharacters

Make a call to the "Rick and Morty" API and retrieve information for the following characters: Rick
Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Adjust the data so that it matches the
example output below.

Documentation: https://rickandmortyapi.com/documentation/#rest

Example Output:

```
[
  {
    nome: 'Rick Sanchez',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Morty Smith',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Summer Smith',
    genero: 'Mulher',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Beth Smith',
    genero: 'Mulher',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    especie: 'Humano'
  },
  {
    nome: 'Jerry Smith',
    genero: 'Homem',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    especie: 'Humano'
  }
]
```

## Exercise 4 - checkIfTheFirstLetterIsUppercase

Write a function that checks if the first letter of a string is uppercase, returning true or false.

Examples:

- checkIfTheFirstLetterIsUppercase("Brasil") --> true
- checkIfTheFirstLetterIsUppercase("mobiauto") --> false
- checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
- checkIfTheFirstLetterIsUppercase("xDD") --> false
- checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true