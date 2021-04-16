import Head from "next/head";
import Circle from "public/images/circle-accent-1.svg";
import axios from "src/configs/axios";
import Clients from "src/parts/Clients";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import ListCourses from "src/parts/ListCourses";

function Home({ data }) {
  console.log(data);

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
        <section className="container mx-auto pt-24">
          <Clients />
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data} />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
