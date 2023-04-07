import { ProvideAuth } from "@arcana/auth-react";
import "../styles/globals.css";

import { authArcana } from "../utils/authArcana";

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth provider={authArcana}>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}
