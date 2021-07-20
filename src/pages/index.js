import Head from "next/head";
import Circle from "public/images/circle-accent-1.svg";
import courses from "src/constants/api/courses";
import Clients from "src/parts/Clients";
import Footer from "src/parts/Footer";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import ListCategories from "src/parts/ListCategories";
import ListCourses from "src/parts/ListCourses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>BuildWith Fajar</title>
        <link rel="icon" href="/images/logo.svg" />
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
        <section className="container mx-auto pt-24">
          <ListCategories />
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
