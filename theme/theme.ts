import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Tokens } from "./tokens";
import { semanticTokens } from "./semantic-tokens";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, ...Tokens, semanticTokens });
