import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

import person1 from "../public/person-1.png";
import person2 from "../public/person-2.png";
import clsx from "clsx";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={clsx([styles.image, "h-full"])}>
      <Head>
        <title>Cartalyst | Home</title>
        <meta name="description" content="Cartalyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className="section justify-center p-5">
          <div className="sm:max-w-lg space-y-4">
            <h2 style={{ fontSize: "var(--h3)" }}>
              Empowering you to be relevant in the future of work
            </h2>

            <p className="text-2xl text-primary">
              Cartalyst Integrates Work and Education in collaboration with
              industry experts to create world-class learning and career
              programs.
            </p>

            <button className="button expandable">start now</button>
          </div>

          <div
            className={styles.section__image}
            style={{ backgroundImage: 'url("/person-1.png")' }}
          ></div>
        </section>

        <section className="section justify-around px-5 py-64">
          <div
            style={{ backgroundImage: 'url("person-2.png")' }}
            className={clsx([styles.section__image, "sm:!w-96"])}
          ></div>

          <div className="sm:max-w-lg space-y-4">
            <h2 style={{ fontSize: "var(--heading)" }}>
              Cartalyst accelerates talents
            </h2>

            <p className="text-gray-400" style={{ fontSize: "var(--body)" }}>
              By incorporating leading technologies and industry certifications
              to meet the highest areas of talents and employer demand.
            </p>

            <button className="button button--secondary expandable">
              learn more
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
