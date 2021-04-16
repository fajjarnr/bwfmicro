import Head from "next/head";
import Link from "next/link";

function Random({ data }) {
  return (
    <div className="container mt-5 mx-auto ">
      <Head>
        <title>Built With Fajar | Random</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl text-blue-700">Random Page</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id} className="border border-indigo-700 py-3">
              {item.title}
              <Link href="/courses/[id]" as={`/courses/${item.id}`}>
                <a className="text-red-700"> launch</a>
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Random.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

export default Random;
