import { PokemonCard } from "./GameSlice";

export const pokemonCardsData: PokemonCard[] = [
  {
    pokemon: {
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      isOpen: false,
    },
    complete: false,
  },
  {
    pokemon: {
      id: 25,
      isOpen: false,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    complete: false,
  },
  {
    pokemon: {
      id: 40,
      isOpen: false,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    },
    complete: false,
  },
  {
    pokemon: {
      id: 30,
      isOpen: false,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    },
    complete: false,
  },
  {
    pokemon: {
      id: 10,
      isOpen: false,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
    complete: false,
  },
  {
    pokemon: {
      id: 20,
      isOpen: false,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    },
    complete: false,
  },
];
export function FisherYates<T>(dizi: T[]): T[] {
  let currentIndex = dizi.length,
    temporaryValue,
    randomIndex;

  // Kalan her eleman için...
  while (0 !== currentIndex) {
    // Kalan elemanlardan rastgele birini seçin
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Ve onu mevcut elemanla değiştirin
    temporaryValue = dizi[currentIndex];
    dizi[currentIndex] = dizi[randomIndex];
    dizi[randomIndex] = temporaryValue;
  }

  return dizi;
}
