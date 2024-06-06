import React from "react";
import { PokemonCard, checkCards, selectCard } from "../context/Game/GameSlice";
import "./FlipCard.css"; // CSS dosyasını içe aktarın
import { useAppDispatch, useAppSelector } from "../context/hooks";
interface GameCardProps {
  pokemonCard: PokemonCard;
  index: number;
}
const GameCard: React.FC<GameCardProps> = ({ pokemonCard, index }) => {
  const dispatch = useAppDispatch();

  const openCard = useAppSelector((s) => s.app.openPokemonCards);
  const selectCardApp = () => {
    if (openCard.length == 2) {
      dispatch(checkCards());
    }

    dispatch(
      selectCard({
        id: pokemonCard.pokemon.id,
        index,
      })
    );
    if (openCard.length == 1) {
      setTimeout(() => {
        //   check();
        dispatch(checkCards());
      }, 750);
    }
  };

  return (
    <div
      className={`${
        pokemonCard.complete ? " pointer-events-none" : " cursor-pointer"
      }  visible relative min-h-32 min-w-32 flip-card  rounded-lg`}
      onClick={() => selectCardApp()}
    >
      <div
        className={`flip-card-inner ${
          pokemonCard.pokemon.isOpen ? "is-flipped" : ""
        }`}
      >
        <div className="flip-card-front">
          <img
            className="w-full h-full "
            src="https://thecoopidea.com/cdn/shop/products/PokeBall1_180x.png?v=1666201073"
          ></img>
        </div>
        <div className="flip-card-back">
          <img src={pokemonCard.pokemon.image}></img>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
