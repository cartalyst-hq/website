import "../styles/globals.css";
import type { AppProps } from "next/app";
import SeoLayout from "../components/SeoLayout";

function Cartalyst({ Component, pageProps }: AppProps) {
  return (
    <SeoLayout>
      <Component {...pageProps} />
    </SeoLayout>
  );
}
export default Cartalyst;
