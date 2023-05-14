import type { AppProps } from "next/app";
import Image from "next/image";

import { globalStyles } from "../styles/global";
import { AppContainer, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Image src={logoImg} alt="Logo header" />
      </Header>

      <Component {...pageProps} />
    </AppContainer>
  );
}
