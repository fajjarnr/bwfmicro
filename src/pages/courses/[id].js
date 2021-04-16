import Head from "next/head";
import Link from "next/link";

function Random({ data }) {
  return (
    <div className="container mt-5 mx-auto ">
      <Head>
        <title>Built With Fajar | {data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">{data.title}</h1>
      <p>please complete your task</p>
      <Link href="/courses">
        <a className="text-red-700">go back</a>
      </Link>
    </div>
  );
}

Random.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

export default Random;
