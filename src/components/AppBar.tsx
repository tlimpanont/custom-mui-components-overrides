import { FC } from "react";
import {
  AppBar as MuiAppBar,
  AppBarProps,
  Box,
  Slide,
  Toolbar,
} from "@mui/material";
import { AppBarMenu } from "./AppBarMenu";
import { AppBarSubMenu } from "./AppBarSubMenu";

export const AppBar: FC<
  AppBarProps & {
    children: JSX.Element[];
    menuOpen: boolean;
    subMenuOpen: boolean;
  }
> = ({ children, menuOpen, subMenuOpen, ...rest }) => {
  const toolbarComponent = children.find((item) => item.type === Toolbar);
  const menuComponent = children.find((item) => item.type === AppBarMenu);
  const subMenuComponent = children.find((item) => item.type === AppBarSubMenu);

  return (
    <Box>
      <MuiAppBar {...rest}>{toolbarComponent}</MuiAppBar>
      <Box hidden={!subMenuOpen && !menuOpen}>
        <Slide
          timeout={350}
          in={subMenuOpen}
          direction={"left"}
          unmountOnExit
          mountOnEnter
        >
          <Box>{subMenuComponent}</Box>
        </Slide>
        <Slide
          timeout={350}
          in={menuOpen}
          direction={"down"}
          unmountOnExit
          mountOnEnter
        >
          <Box hidden={subMenuOpen}>{menuComponent}</Box>
        </Slide>
      </Box>
    </Box>
  );
};
