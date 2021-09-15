import clsx from "clsx";
import Link from "next/link";

import Facebook from "../../public/facebook.svg";
import Twitter from "../../public/twitter.svg";
import Instagram from "../../public/instagram.svg";
import LinkedIn from "../../public/linkedin.svg";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className="p-4 space-y-6">
      <ul className={styles.wrapper}>
        <li className="space-y-4">
          <h4 className={styles.item__title}>Company</h4>

          <ul
            className={clsx([
              "flex",
              "sm:flex-col",
              "justify-center",
              "space-x-4",
              "sm:space-y-2",
              "sm:space-x-0",
            ])}
          >
            <li className="text-center">
              <Link href="/">
                <a className="text-primary">Home</a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="/about">
                <a className="text-primary">About</a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="/programs">
                <a className="text-primary">Programs</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="space-y-4">
          <h4 className={styles.item__title}>Contact</h4>

          <ul className="space-y-2">
            <li className="text-center">
              <Link href="mailto:info@cartalyst.io">
                <a className="text-primary">info@cartalyst.io</a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="tel:+234 80 620 645 82">
                <a className="text-primary">+234 80 620 645 82</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="space-y-4">
          <h4 className={styles.item__title}>Follow us</h4>

          <ul className="flex items-center space-x-8">
            <li>
              <Link href="https://facebook.com/cartalyst">
                <a className="text-primary">
                  <Facebook />
                </a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="https://twitter.com/cartalyst">
                <a className="text-primary">
                  <Twitter />
                </a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="https://instagram.com/cartalyst">
                <a className="text-primary">
                  <Instagram />
                </a>
              </Link>
            </li>
            <li className="text-center">
              <Link href="https://linkedin.com/cartalyst">
                <a className="text-primary">
                  <LinkedIn />
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <h5 className="mx-auto text-lg text-center text-primary font-medium">
        Copy rights &copy; 2021 Cartalyst. All rights reserved
      </h5>
    </footer>
  );
};

export default Footer;
