import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FisherYates, pokemonCardsData } from "./service";

export interface Pokemon {
  id: number;
  image: string;
  isOpen: boolean;
}

export interface PokemonCard {
  pokemon: Pokemon;
  complete: boolean;
}

export interface GameAppType {
  pokemonCards: Array<PokemonCard>;
  openPokemonCards: Array<{
    id: number;
    index: number;
  }>;
  isFinish: boolean;
  score: number;
}

const initialState: GameAppType = {
  pokemonCards: [],
  openPokemonCards: [],
  isFinish: false,
  score: 0,
};

export const GameAppSlice = createSlice({
  name: "NoteApp",
  initialState,
  reducers: {
    selectCard: (
      state,
      action: PayloadAction<{ id: number; index: number }>
    ) => {
      const { id, index } = action.payload;
      const card = state.pokemonCards.find((_, i) => i == index);
      if (card) {
        card.pokemon.isOpen = true;
      }

      state.openPokemonCards = [...state.openPokemonCards, { id, index }];
    },
    checkCards: (state) => {
      if (
        state.openPokemonCards[0].id == state.openPokemonCards[1].id &&
        state.openPokemonCards[0].index != state.openPokemonCards[1].index
      ) {
        state.pokemonCards[state.openPokemonCards[0].index].complete = true;
        state.pokemonCards[state.openPokemonCards[1].index].complete = true;
        state.score += 50;
        const isFinish = state.pokemonCards.filter((s) => s.complete == false);
        state.isFinish = isFinish.length < 2;
      } else {
        state.pokemonCards[state.openPokemonCards[0].index].pokemon.isOpen =
          false;
        state.pokemonCards[state.openPokemonCards[1].index].pokemon.isOpen =
          false;
        state.score -= 10;
      }
      state.openPokemonCards = [];
    },
    resetGame: (state) => {
      state.score = 0;
      state.openPokemonCards = [];
      state.isFinish = false;
      state.pokemonCards = [
        ...FisherYates([...pokemonCardsData, ...pokemonCardsData]),
      ];
    },
  },
});

export const { selectCard, checkCards, resetGame } = GameAppSlice.actions;
export default GameAppSlice.reducer;
