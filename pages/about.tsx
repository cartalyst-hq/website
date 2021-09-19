import type { NextPage } from "next";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/About.module.css";

import Percent from "../public/percent.svg";
import Timeline from "../public/trending_up.svg";
import Search from "../public/search.svg";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={clsx([styles.image, "h-full"])}>
      <Head>
        <title>Cartalyst | About</title>
        <meta name="description" content="Cartalyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header active="about" />

      <main className="main">
        <section className="section justify-center p-5">
          <div className="text-center sm:max-w-lg space-y-4">
            <h2 style={{ fontSize: "var(--h1)" }}>About Us</h2>

            <p className="text-2xl text-primary">
              We believe Education should not be limited to classrooms in a
              world where technology offers limitless opportunities. As
              technology develops, reskilling is mandatory.
            </p>
          </div>
        </section>

        <section className="section !mt-80">
          <ul className={styles.chips}>
            <li
              className={clsx([
                styles.chip,
                styles["chip--pink"],
                "sm:max-w-xs",
                "space-y-4",
              ])}
            >
              <h2 style={{ fontSize: "var(--h3)" }}>Our goal</h2>

              <p>
                Our goal is to close the global digital skill gap and accelerate
                the employability of African talents in the fourth industrial
                revolution and beyond.
              </p>
            </li>

            <li
              className={clsx([
                styles.chip,
                styles["chip--yellow"],
                "sm:max-w-xs",
                "self-end",
                "space-y-4",
              ])}
              style={{ backgroundImage: "url(/yellow-blob-chip.png)" }}
            >
              <h2 style={{ fontSize: "var(--h3)" }}>Our goal</h2>

              <p>
                Our goal is to close the global digital skill gap and accelerate
                the employability of African talents in the fourth industrial
                revolution and beyond.
              </p>
            </li>
          </ul>
        </section>

        <section className="section p-5">
          <div className="sm:max-w-sm space-y-6">
            <h2 style={{ fontSize: "var(--h3)" }}>Think!</h2>

            <p className="text-2xl text-gray-400">
              Future of Education meets the Future of Work to Africa’s digital
              skills gap and produce an economic and social benefit.
            </p>

            <button className="button button--secondary">see programs</button>
          </div>
        </section>

        <section
          className={clsx([
            "section",
            "!block",
            "relative",
            "px-5",
            "py-40",
            "sm:!mb-40",
            "space-y-12",
            "sm:space-y-0",
          ])}
        >
          <div className={styles.method_title}>
            <h1 style={{ fontSize: "var(--h3)" }}>How are we doing this?</h1>
          </div>

          <ul className={clsx([styles.method_list, "sm:!m-0", "space-y-12"])}>
            <li
              className={clsx([
                styles.method_list__item,
                styles["method_list__item--one"],
              ])}
            >
              <div className="marker bg-[#FECFD0]">
                <p className="marker__image text-2xl font-medium">1</p>
              </div>

              <p className="pitch__item__text">Career path advisory</p>
            </li>

            <li
              className={clsx([
                styles.method_list__item,
                styles["method_list__item--two"],
              ])}
            >
              <div className="marker bg-[#D9F4FF]">
                <p className="marker__image text-2xl font-medium">2</p>
              </div>

              <p className="pitch__item__text">
                Fourth industrial revolution driven training co-created with
                leading digital companies
              </p>
            </li>

            <li
              className={clsx([
                styles.method_list__item,
                styles["method_list__item--three"],
              ])}
            >
              <div className="marker bg-[#FEDFB1]">
                <p className="marker__image text-2xl font-medium">3</p>
              </div>

              <p className="pitch__item__text">
                Collaborative learning with mentors and peers to enhance career
                growth with project portfolios demonstrating critical technical
                and enterprise skills
              </p>
            </li>

            <li
              className={clsx([
                styles.method_list__item,
                styles["method_list__item--four"],
              ])}
            >
              <div className="marker bg-[#FECFD0]">
                <p className="marker__image text-2xl font-medium">4</p>
              </div>

              <p className="pitch__item__text">
                Career accelerator programs and continuous education
              </p>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;