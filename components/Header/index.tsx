import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import clsx from "clsx";

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
    <header className="flex items-center justify-between px-16 py-10 space-x-3">
      <div className="flex items-center">
        <Image
          width={50}
          height={40}
          alt="cartalyst logo"
          src="/cartalyst-logo.png"
        />
        <h2>Cartalyst</h2>
      </div>

      <div>
        {/* <button>menu</button> */}

        <nav>
          <ul className="flex flex-col sm:flex-row gap-16 sm:gap-14">
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
