import Head from "next/head";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Board from "../components/Board";

export default function Home() {
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
        <div className="mb-8 w-full">
          <Board />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
