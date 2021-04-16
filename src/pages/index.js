import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";

function Home() {
  return (
    <>
      <Head>
        <title>Built With Fajar</title>
      </Head>

      <main>
        <section className="pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto"></div>
        </section>
      </main>
    </>
  );
}

export default Home;
