import Head from "next/head";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Board from "../components/Board";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  /* let playerName = "default";
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
  }, []); */

  return (
    <div>
      <Head>
        <title>Bullshit Bingo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto">
        {/* <div className="mb-8">
          <Title />
        </div>
        <div id="nameDiv" className="mt-44 h-max w-full text-center sm:mt-80">
          <p className="text-3xl font-black sm:mb-8 sm:text-6xl">
            What is your name?
          </p>
          <input
            id="playerName"
            className="mt-6 h-[2rem] w-1/2 border-b-4 border-dotted border-white bg-[#16161e] p-2 text-center font-chewy text-base font-black uppercase text-white sm:mt-0 sm:w-1/5 sm:p-6 sm:text-4xl"
          ></input>
        </div>
        <div id="board" className="mx-4 mb-8 hidden w-full sm:mx-0">
          <Board />
        </div> */}
        this project is deprecated, visit the new version at
        <a
          className="ml-2"
          href="https://yannicfreson.github.io/Bullshit-Bingo/"
        >
          https://yannicfreson.github.io/Bullshit-Bingo/
        </a>
      </main>

      {/* <footer className="absolute bottom-0 mb-4 w-full">
        <Footer />
      </footer> */}
    </div>
  );
}
