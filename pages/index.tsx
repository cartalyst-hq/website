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
        <section className={"section"}>
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

          <Image alt="" width={540} height={555} src="/person-1.png" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
