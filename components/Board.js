import { useLayoutEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";
import BingoTile from "../components/BingoTile";

export default function Board() {
  let name = "default";

  const shuffleSeed = require("shuffle-seed");
  let words = require("../wordlist.json");

  words = shuffleSeed.shuffle(words, `${new Date().getDate()}`);

  const firebaseConfig = {
    apiKey: "AIzaSyAs3XPCoDVTNpya0gekWQqWpJKLg2ECZrU",
    authDomain: "swakke-bullshit-bingo.firebaseapp.com",
    databaseURL:
      "https://swakke-bullshit-bingo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swakke-bullshit-bingo",
    storageBucket: "swakke-bullshit-bingo.appspot.com",
    messagingSenderId: "174507017889",
    appId: "1:174507017889:web:c3d35a4f3903c2e1a652e0",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [state, setState] = useState({});

  get(ref(database, "pd")).then((snapshot) => {
    if (snapshot.val()) {
      console.log(snapshot.val());
      if (snapshot.val() !== new Date().getDate()) {
        set(ref(database, "pd"), new Date().getDate());
        setState([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]);
        set(ref(database, name), state);
      }
    } else {
      set(ref(database, "pd"), new Date().getDate());
    }
  });

  useLayoutEffect(function () {
    if (window.localStorage.getItem("playerName") !== null) {
      name = window.localStorage.getItem("playerName");
    }
    onValue(ref(database, name), (snapshot) => {
      if (snapshot.val()) {
        setState(snapshot.val());
      } else {
        setState([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]);
      }
    });
  }, []);

  function handleClick(id) {
    name = window.localStorage.getItem("playerName");
    if (state[id] === 0) {
      state[id] = 1;
    } else {
      state[id] = 0;
    }

    if (
      (state[0] === 1 &&
        state[1] === 1 &&
        state[2] === 1 &&
        state[3] === 1 &&
        state[4] === 1) ||
      (state[5] === 1 &&
        state[6] === 1 &&
        state[7] === 1 &&
        state[8] === 1 &&
        state[9] === 1) ||
      (state[10] === 1 &&
        state[11] === 1 &&
        state[12] === 1 &&
        state[13] === 1 &&
        state[14] === 1) ||
      (state[15] === 1 &&
        state[16] === 1 &&
        state[17] === 1 &&
        state[18] === 1 &&
        state[19] === 1) ||
      (state[20] === 1 &&
        state[21] === 1 &&
        state[22] === 1 &&
        state[23] === 1 &&
        state[24] === 1)
    ) {
    }

    set(ref(database, name), state);
  }

  return (
    <>
      <div className="mr-4 grid grid-cols-5 grid-rows-5 gap-1 overflow-hidden text-center text-xs font-black children:hover:cursor-pointer sm:mr-0 sm:gap-4 sm:overflow-auto sm:text-4xl">
        <div onClick={() => handleClick(0)} className="h-[7rem]">
          {state[0] === 1 ? (
            <BingoTile word={words[0]} found={true} />
          ) : (
            <BingoTile word={words[0]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(1)} className="h-[7rem]">
          {state[1] === 1 ? (
            <BingoTile word={words[1]} found={true} />
          ) : (
            <BingoTile word={words[1]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(2)} className="h-[7rem]">
          {state[2] === 1 ? (
            <BingoTile word={words[2]} found={true} />
          ) : (
            <BingoTile word={words[2]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(3)} className="h-[7rem]">
          {state[3] === 1 ? (
            <BingoTile word={words[3]} found={true} />
          ) : (
            <BingoTile word={words[3]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(4)} className="h-[7rem]">
          {state[4] === 1 ? (
            <BingoTile word={words[4]} found={true} />
          ) : (
            <BingoTile word={words[4]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(5)} className="h-[7rem]">
          {state[5] === 1 ? (
            <BingoTile word={words[5]} found={true} />
          ) : (
            <BingoTile word={words[5]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(6)} className="h-[7rem]">
          {state[6] === 1 ? (
            <BingoTile word={words[6]} found={true} />
          ) : (
            <BingoTile word={words[6]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(7)} className="h-[7rem]">
          {state[7] === 1 ? (
            <BingoTile word={words[7]} found={true} />
          ) : (
            <BingoTile word={words[7]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(8)} className="h-[7rem]">
          {state[8] === 1 ? (
            <BingoTile word={words[8]} found={true} />
          ) : (
            <BingoTile word={words[8]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(9)} className="h-[7rem]">
          {state[9] === 1 ? (
            <BingoTile word={words[9]} found={true} />
          ) : (
            <BingoTile word={words[9]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(10)} className="h-[7rem]">
          {state[10] === 1 ? (
            <BingoTile word={words[10]} found={true} />
          ) : (
            <BingoTile word={words[10]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(11)} className="h-[7rem]">
          {state[11] === 1 ? (
            <BingoTile word={words[11]} found={true} />
          ) : (
            <BingoTile word={words[11]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(12)} className="h-[7rem]">
          {state[12] === 1 ? (
            <BingoTile word={words[12]} found={true} />
          ) : (
            <BingoTile word={words[12]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(13)} className="h-[7rem]">
          {state[13] === 1 ? (
            <BingoTile word={words[13]} found={true} />
          ) : (
            <BingoTile word={words[13]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(14)} className="h-[7rem]">
          {state[14] === 1 ? (
            <BingoTile word={words[14]} found={true} />
          ) : (
            <BingoTile word={words[14]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(15)} className="h-[7rem]">
          {state[15] === 1 ? (
            <BingoTile word={words[15]} found={true} />
          ) : (
            <BingoTile word={words[15]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(16)} className="h-[7rem]">
          {state[16] === 1 ? (
            <BingoTile word={words[16]} found={true} />
          ) : (
            <BingoTile word={words[16]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(17)} className="h-[7rem]">
          {state[17] === 1 ? (
            <BingoTile word={words[17]} found={true} />
          ) : (
            <BingoTile word={words[17]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(18)} className="h-[7rem]">
          {state[18] === 1 ? (
            <BingoTile word={words[18]} found={true} />
          ) : (
            <BingoTile word={words[18]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(19)} className="h-[7rem]">
          {state[19] === 1 ? (
            <BingoTile word={words[19]} found={true} />
          ) : (
            <BingoTile word={words[19]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(20)} className="h-[7rem]">
          {state[20] === 1 ? (
            <BingoTile word={words[20]} found={true} />
          ) : (
            <BingoTile word={words[20]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(21)} className="h-[7rem]">
          {state[21] === 1 ? (
            <BingoTile word={words[21]} found={true} />
          ) : (
            <BingoTile word={words[21]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(22)} className="h-[7rem]">
          {state[22] === 1 ? (
            <BingoTile word={words[22]} found={true} />
          ) : (
            <BingoTile word={words[22]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(23)} className="h-[7rem]">
          {state[23] === 1 ? (
            <BingoTile word={words[23]} found={true} />
          ) : (
            <BingoTile word={words[23]} found={false} />
          )}
        </div>
        <div onClick={() => handleClick(24)} className="h-[7rem]">
          {state[24] === 1 ? (
            <BingoTile word={words[24]} found={true} />
          ) : (
            <BingoTile word={words[24]} found={false} />
          )}
        </div>
      </div>
    </>
  );
}
