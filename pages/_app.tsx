import "../styles/globals.css";
import type { AppProps } from "next/app";

function Cartalyst({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default Cartalyst;
