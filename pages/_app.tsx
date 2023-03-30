import { Chakra } from "@/src/chakra";
import "@/styles/globals.css";
import { theme } from "@/theme/theme";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let localtoken = localStorage.getItem("chakra-ui-color-mode");
    localStorage.setItem(
      "chakra-ui-color-mode",
      localtoken ? localtoken : theme.config.initialColorMode
    );
    
  }, []);
  return (
    <Chakra cookies={pageProps.cookies}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Chakra>
  );
}

export { getServerSideProps } from "../src/chakra";
