import BingoTile from "../components/BingoTile";
let words = require("../wordlist.json");

export default function Board() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 text-center text-4xl font-black">
      <div className="h-[7rem]">
        <BingoTile word={words[0]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[1]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[2]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[3]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[4]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[5]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[6]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[7]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[8]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[9]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[10]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[11]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[12]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[13]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[14]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[15]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[16]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[17]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[18]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[19]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[20]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[21]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[22]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[23]} />
      </div>
      <div className="h-[7rem]">
        <BingoTile word={words[24]} />
      </div>
    </div>
  );
}
