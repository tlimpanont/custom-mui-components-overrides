import { Box, BoxProps, styled } from "@mui/material";

export const AppBarSubMenu = styled(Box, {
  name: "AppBarSubMenu",
  slot: "Root",
  overridesResolver: (props, styles) => [styles.root],
})<BoxProps>({});
