import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={clsx([styles.image, "h-full", "overflow-x-hidden"])}>
      <Head>
        <title>Cartalyst | About</title>
        {/* <meta name="description" content="Cartalyst" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header active="about" />

      <main className="main">
        <section className="section justify-center text-primary p-5">
          <div className="text-center sm:max-w-lg space-y-4">
            <h2 style={{ fontSize: "var(--h1)" }}>About Us</h2>

            <p className="text-2xl">
              We believe Education should not be limited to classrooms in a
              world where technology offers limitless opportunities. As
              technology develops, reskilling is mandatory.
            </p>
          </div>
        </section>

        <section className="section justify-center p-5 !mt-30">
          <ul className={styles.chips}>
            <li className={styles.chip}>
              <div
                className={clsx([styles.chip__decor, styles["chip--yellow"]])}
                style={{ backgroundImage: "url(/pink-blob-chip-squoosh.webp)" }}
              />

              <div>
                <h2 style={{ fontSize: "var(--h3)" }}>Our goal</h2>

                <p className="sm:max-w-[80%] mx-auto text-lg">
                  Our goal is to close the global digital skill gap and
                  accelerate the employability of African talents in the fourth
                  industrial revolution and beyond.
                </p>
              </div>
            </li>

            <li className={clsx([styles.chip, "sm:!mt-96"])}>
              <div
                className={clsx([styles.chip__decor, styles["chip--yellow"]])}
                style={{
                  backgroundImage: "url(/yellow-blob-chip-squoosh.webp)",
                }}
              />

              <div>
                <h2 style={{ fontSize: "var(--h3)" }}>Our mission</h2>

                <p className="sm:max-w-[80%] mx-auto text-lg">
                  We&apos;re on a mission to close the digital skills divide
                  between industry leaders and academia.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="section p-5">
          <div className="sm:max-w-sm space-y-6">
            <h2 className={clsx([styles.title, "text-primary"])}>Think!</h2>

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
            "py-24",
            "sm:!mb-40",
            "space-y-12",
            "sm:space-y-0",
          ])}
        >
          <div className={styles.method_title}>
            <h1 className={clsx([styles.title, "text-primary"])}>
              How are we doing this?
            </h1>
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

        <section
          className={clsx([
            "section",
            styles.contact,
            "px-5",
            "sm:pt-40",
            "pb-40",
          ])}
        >
          <div className={clsx([styles.title, styles.contact_title])}>
            <div className="sm:ml-[20%] sm:max-w-[10rem]">
              <h2>Get in touch</h2>
            </div>
          </div>

          <form action="/contact" method="post" className={styles.form}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={styles.input_field}
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className={styles.input_field}
              />
            </div>

            <textarea
              cols={30}
              rows={10}
              name="message"
              className={styles.input_field}
              placeholder="Enter your message"
            ></textarea>

            <button className="button sm:w-min">submit</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
