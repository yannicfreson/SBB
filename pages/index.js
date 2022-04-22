import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Footer from "../components/Footer";
import BingoTile from "../components/BingoTile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bullshit Bingo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div className="mb-8">
          <Title />
        </div>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <BingoTile
            colStart={1}
            colEnd={2}
            rowStart={1}
            rowEnd={2}
            height="10vh"
            color="sky-800"
          />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
