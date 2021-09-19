import type { NextPage } from "next";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

import Percent from "../public/percent.svg";
import Timeline from "../public/trending_up.svg";
import Search from "../public/search.svg";
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

      <main className="main">
        <section className="section justify-center p-5">
          <div className="sm:max-w-lg space-y-4">
            <h2 className="text-primary" style={{ fontSize: "var(--h3)" }}>
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
          />
        </section>

        <section className="section justify-around p-5">
          <div
            style={{ backgroundImage: 'url("person-2.png")' }}
            className={clsx([styles.section__image, "sm:!w-96"])}
          />

          <div className="sm:max-w-lg space-y-4">
            <h2 className="text-primary" style={{ fontSize: "var(--heading)" }}>
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

        <section
          className={clsx([
            styles.pitch__decor,
            "section justify-around relative p-5",
          ])}
        >
          <div className="space-y-4">
            <h2 className="text-primary" style={{ fontSize: "var(--heading)" }}>
              Aligning study path with required digital skills
            </h2>

            <ul className="w-min flex mx-auto space-x-4">
              <li className="mt-16 space-y-4">
                <div
                  className={styles.tile}
                  style={{ backgroundImage: "url(/tile-2.jpeg)" }}
                />

                <div
                  className={styles.tile}
                  style={{ backgroundImage: "url(/tile-4.jpeg)" }}
                />
              </li>
              <li className="space-y-4">
                <div
                  className={styles.tile}
                  style={{ backgroundImage: "url(/tile-3.jpeg)" }}
                />

                <div
                  className={styles.tile}
                  style={{ backgroundImage: "url(/tile-1.jpeg)" }}
                />
              </li>
            </ul>
          </div>

          <div className="sm:max-w-md space-y-12">
            <h4 className="text-4xl text-gray-400">
              The digital technology sector has the biggest and still-growing
              employer demand
            </h4>

            <ul className="space-y-12 text-primary">
              <li className={styles.pitch__item}>
                <div className={clsx([styles.marker, "bg-[#FECFD0]"])}>
                  <Percent className={styles.marker__image} />
                </div>

                <p className={styles.pitch__item__text}>
                  Digital job capacity is expected to grow by 149m in 2020-2025
                </p>
              </li>

              <li className={styles.pitch__item}>
                <div className={clsx([styles.marker, "bg-[#D9F4FF]"])}>
                  <Timeline className={styles.marker__image} />
                </div>

                <p className={styles.pitch__item__text}>
                  By 2030, digitization is expected to provide 20-50 million
                  jobs globally.
                </p>
              </li>

              <li className={styles.pitch__item}>
                <div className={clsx([styles.marker, "bg-[#FEDFB1]"])}>
                  <Search className={styles.marker__image} />
                </div>

                <p className={styles.pitch__item__text}>
                  67% of global large companies are unable to fill available
                  positions due to a lack of talent.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* <section className="section !flex-col justify-center px-5 py-24 space-y-12">
          <h2 className="font-bold" style={{ fontSize: "var(--h1)" }}>
            Industry Partners
          </h2>

          <ul className="w-full h-8 bg-gray-400"></ul>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
