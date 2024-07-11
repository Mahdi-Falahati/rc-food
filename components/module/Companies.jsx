import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

function Companies() {
  return (
    <div className="sm:flex justify-around items-center mb-5 flex-row hidden mt-10 px-5">
      <Tesla />
      <Binance />
      <SpaceX />
      <Apple />
    </div>
  );
}

export default Companies;
