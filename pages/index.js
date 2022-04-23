import Head from "next/head";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Board from "../components/Board";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  let playerName = "default";
  const [state, setState] = useState({});

  useLayoutEffect(function () {
    document
      .getElementById("playerName")
      .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          playerName = document
            .getElementById("playerName")
            .value.toLowerCase();
          if (playerName === window.localStorage.getItem("playerName")) {
            window.localStorage.setItem("playerName", playerName);
            document.getElementById("nameDiv").classList.add("hidden");
            document.getElementById("board").classList.remove("hidden");
          } else {
            window.localStorage.setItem("playerName", playerName);
            location.reload();
          }
        }
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Bullshit Bingo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto">
        <div className="mb-8">
          <Title />
        </div>
        <div id="nameDiv" className="mt-80 h-max w-full text-center">
          <p className="mb-8 text-6xl font-black">What's your name?</p>
          <input
            id="playerName"
            className="inset-4 h-[2rem] w-1/5 border-b-4 border-dotted border-white bg-[#16161e] p-6 text-center font-chewy text-4xl font-black uppercase text-white"
          ></input>
        </div>
        <div id="board" className="mb-8 hidden w-full">
          <Board />
        </div>
      </main>

      <footer className="absolute bottom-0 mb-4 w-full">
        <Footer />
      </footer>
    </div>
  );
}
