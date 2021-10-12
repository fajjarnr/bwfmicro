import Head from "next/head";

export default function Title({ name }) {
  return (
    <Head>
      <title>Built With Fun | {name}</title>
      <link rel="icon" href="/images/logo.svg" />
    </Head>
  );
}
