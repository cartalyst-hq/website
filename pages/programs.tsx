import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Programs.module.css";

const Programs: NextPage = () => {
  return (
    <div className={clsx([styles.image, "h-full", "overflow-x-hidden"])}>
      <Head>
        <title>Cartalyst | Programs</title>
        <meta name="description" content="Cartalyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header active="programs" />

      <main className="main">
        <section className="section justify-center">
          <div
            className={clsx([
              "text-center",
              "text-primary",
              "text-medium",
              "sm:max-w-lg",
              "space-y-4",
            ])}
          >
            <h2 style={{ fontSize: "var(--h1)" }}>Programs</h2>
          </div>
        </section>

        <section className={styles.section}>
          <div
            className={clsx([styles.decor, "!h-[40rem]", "left-0"])}
            style={{ backgroundImage: "url(/group-2.png)" }}
          />

          <div className={styles.section__container}>
            <h2 style={{ fontSize: "var(--h3)" }}>Career Path Advisory</h2>

            <p className="text-lg sm:max-w-lg">
              &quot;
              <cite>
                I have no idea where to start or go next in my career?
              </cite>
              &quot;
              <br />
              Our career advisory service sheds light on the current realities
              and expectations of your desired career path, make you aware of
              the options that exist in your industry and provide you with a
              competitive edge in establishing your career, whether you are in
              college or new to the job market.
            </p>

            <button className="button button--outline expandable">
              start now
            </button>
          </div>
        </section>

        <section
          className={clsx([
            styles.section,
            styles["col-reverse"],
            "justify-end",
          ])}
        >
          <div className={clsx([styles.section__container, "sm:!max-w-2xl"])}>
            <h2 style={{ fontSize: "var(--h3)" }}>
              Career path accelerator (Entry-level)
            </h2>

            <div className="space-y-3">
              <p className="text-lg">
                Are you a student or new to the job market, our 1 : 1 career
                accelerator will give you the competitive edge in launching your
                career?
              </p>

              <ul className="list-disc space-y-3 ml-6">
                <li>Experiential learning</li>
                <li>Mentorship</li>
                <li>Internship</li>
              </ul>
            </div>

            <button className="button button--outline expandable">
              start now
            </button>
          </div>

          <div
            className={clsx([styles.decor, "left-0"])}
            style={{ backgroundImage: "url(/group-3.png)" }}
          />
        </section>

        <section className={styles.section}>
          <div
            style={{ backgroundImage: "url(/group-1.png)" }}
            className={clsx([styles.decor, "!h-[40rem]", "left-0"])}
          />

          <div className={styles.section__container}>
            <h2 style={{ fontSize: "var(--h3)" }}>
              Career growth accelerator (For professionals/ industry)
            </h2>

            <div className="space-y-3">
              <div className="space-y-2 text-lg sm:max-w-lg">
                <p>
                  <i>
                    Feeling stuck in your present job or market? Or are you
                    perplexed by the recent advancements in your industry?
                  </i>
                </p>

                <p>We help you become future-proof</p>

                <p>
                  Cartalyst’s career growth accelerator strategy rekindles your
                  enthusiasm for your next step and helps you obtain industry
                  relevance in terms of the future of work.
                </p>
              </div>

              <div className="sm:flex ml-6 sm:space-x-20">
                <ul className="space-y-3 list-disc">
                  <li>
                    <i>Banking and financial services</i>
                  </li>
                  <li>
                    <i>Health care</i>
                  </li>
                  <li>
                    <i>Manufacturing</i>
                  </li>
                  <li>
                    <i>Accounting</i>
                  </li>
                </ul>

                <ul className="space-y-3 list-disc">
                  <li>
                    <i>Oil and gas</i>
                  </li>
                  <li>
                    <i>Education</i>
                  </li>
                  <li>
                    <i>Retail</i>
                  </li>
                  <li>
                    <i>FMCG</i>
                  </li>
                </ul>
              </div>
            </div>

            <button className="button button--outline expandable">
              start now
            </button>
          </div>
        </section>

        <section
          className={clsx([
            styles.section,
            styles["col-reverse"],
            "justify-end",
          ])}
        >
          <div className={clsx([styles.section__container, "sm:!max-w-2xl"])}>
            <h2 style={{ fontSize: "var(--h3)" }}>
              Break into the Digital Economy (Non-coding tech jobs)
            </h2>

            <div className="space-y-3">
              <p className="text-lg sm:max-w-lg">
                It&apos;s easy to assume that tech jobs are just for techies, no
                they are not. Our digital economy training will define your plan
                and launch you into the non-code side of tech.
              </p>

              <div className="sm:flex ml-6 sm:space-x-20">
                <ul className="list-disc space-y-3">
                  <li>Product Marketing</li>
                  <li>Business Design and Development</li>
                  <li>Customer success and support</li>
                  <li>People Operations/HR Tech</li>
                </ul>

                <ul className="list-disc space-y-3">
                  <li>Business Analytics, Data Analytics and Data Science</li>
                  <li>Digital Sales, Marketing and Customer Success</li>
                </ul>
              </div>
            </div>

            <button className="button button--outline expandable">
              start now
            </button>
          </div>

          <div
            className={clsx([styles.decor, "left-0"])}
            style={{ backgroundImage: "url(/group-4.png)" }}
          />
        </section>

        <section className="section px-5 py-20">
          <div className="mx-auto sm:max-w-lg text-center space-y-12">
            <h2 className="text-gray-600" style={{ fontSize: "var(--h3)" }}>
              Coming soon:
              <br />
              Academia/Industry leaders Joint Degrees
            </h2>

            <p className="text-gray-400">
              This enables tertiary institutions to deliver cutting-edge,
              emerging tech by incorporating leading technologies and industry
              certifications to meet the highest areas of student and employer
              demand.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
