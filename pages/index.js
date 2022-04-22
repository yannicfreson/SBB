import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bullshit Bingo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
