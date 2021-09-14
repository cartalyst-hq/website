import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-16 py-10 space-x-3">
      <div className="flex items-center space-x-2">
        <Image
          width={50}
          height={40}
          alt="cartalyst logo"
          src="/cartalyst-logo.png"
        />
        <h4>Cartalyst</h4>
      </div>

      <div>
        {/* <button>menu</button> */}

        <nav>
          <ul className="flex sm:flex-row gap-14 sm:gap-16">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Programs</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
