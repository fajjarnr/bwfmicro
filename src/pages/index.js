import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";

function Home() {
  return (
    <>
      <Head>
        <title>BuildWith Fajar</title>
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header />
            <Hero />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
