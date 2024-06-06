import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer, { PokemonCard } from "./Game/GameSlice";
import { FisherYates, pokemonCardsData } from "./Game/service";

interface ReduxProviderProps {
  children: React.ReactElement<any>;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [pokemonCard, setPokemonCard] = useState<PokemonCard[]>([]);

  useEffect(() => {
    setPokemonCard(FisherYates([...pokemonCardsData, ...pokemonCardsData]));
  }, []);

  const reducer = {
    app: appReducer,
  };

  const store = configureStore({
    reducer,
    preloadedState: {
      app: {
        pokemonCards: pokemonCard,
        score: 0,
        isFinish: false,

        openPokemonCards: [],
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
