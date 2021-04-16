import Head from "next/head";
import Link from "next/link";

// import axios from 'configs/'

function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Built With Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl">Hello</h1>
        <Link href="/random">
          <a>random page</a>
        </Link>
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

export default Home;
