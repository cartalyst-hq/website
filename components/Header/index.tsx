import Link from "next/link";
import Image from "next/image";

import close from "../../public/close.svg";
import hamburger from "../../public/hamburger.svg";

import styles from "./styles.module.css";
import clsx from "clsx";

const wrapper = styles["menu-wrapper"];

const nav = [
  {
    href: "/",
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    href: "/about",
    label: "About",
  },
  {
    id: "programs",
    href: "/programs",
    label: "Programs",
  },
];

const Header = ({
  active = "home",
}: {
  active?: "home" | "about" | "programs";
}) => {
  return (
    <header className="flex items-center justify-between p-4 sm:px-16 sm:py-10 space-x-3">
      <div className="flex items-center relative z-20">
        <Image
          width={50}
          height={40}
          alt="cartalyst logo"
          src="/cartalyst-logo.png"
        />

        <h2 className="text-lg font-semibold">Cartalyst</h2>
      </div>

      <div>
        <input
          id="menu"
          type="checkbox"
          className={clsx([wrapper, styles.menu, "visually-hidden"])}
        />

        <label htmlFor="menu" className={clsx([wrapper, styles["open-menu"]])}>
          <Image src="/hamburger.svg" alt="open menu" width={20} height={20} />
        </label>

        <label htmlFor="menu" className={clsx([wrapper, styles["close-menu"]])}>
          <Image src="/close.svg" alt="close menu" width={20} height={20} />
        </label>

        <nav className={styles.nav}>
          <ul className="flex flex-col sm:flex-row items-center gap-16 sm:gap-14 m-auto">
            {nav.map(({ id, label, href }) => (
              <li key={id}>
                <Link href={href}>
                  <a
                    className={clsx([
                      styles.nav__item,
                      id === active && styles["nav__item--active"],
                    ])}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
