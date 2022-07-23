import { Box, BoxProps, styled } from "@mui/material";

export const AppBarMenu = styled(Box, {
  name: "AppBarMenu",
  slot: "Root",
  overridesResolver: (props, styles) => [styles.root],
  // shouldForwardProp: (prop) =>  true
})<BoxProps>({});
