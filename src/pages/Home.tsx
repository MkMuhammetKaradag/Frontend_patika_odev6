import GameCard from "../components/GameCard";
import { resetGame } from "../context/Game/GameSlice";
import { useAppDispatch, useAppSelector } from "../context/hooks";

const Home = () => {
  const pokemonCards = useAppSelector((s) => s.app.pokemonCards);
  const totalScore = useAppSelector((s) => s.app.score);
  const isFinish = useAppSelector((s) => s.app.isFinish);
  const dispatch = useAppDispatch();
  const localArrScore = JSON.parse(
    localStorage.getItem("score") || "0"
  ) as number;
  const resetGameApp = () => {
    if (isFinish && localArrScore < totalScore) {
      localStorage.setItem("score", JSON.stringify(totalScore));
    }
    dispatch(resetGame());
  };

  return (
    <div className=" flex flex-col">
      <>
        {isFinish && (
          <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
              <div>
                {/* Diyalog içeriği burada */}
                {localArrScore < totalScore ? (
                  <span>new Score : {totalScore}</span>
                ) : (
                  <span className="font-bold">
                    unfortunately you couldn't beat the score max score ={" "}
                    {localArrScore}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  onClick={resetGameApp}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}
      </>
      <span style={{ fontSize: 24 }}>Puan: {totalScore}</span>
      <div className="grid grid-cols-4 gap-4">
        {pokemonCards.map((pokemonCard, index) => (
          <GameCard pokemonCard={pokemonCard} index={index}></GameCard>
        ))}
      </div>
      <button
        onClick={() => resetGameApp()}
        className="bg-blue-600 p-3  rounded-xl text-white hover:bg-blue-800"
      >
        RESTART
      </button>
    </div>
  );
};

export default Home;
