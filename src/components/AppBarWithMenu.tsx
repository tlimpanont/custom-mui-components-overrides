import {
  Box,
  ButtonBase,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  Close as CloseIcon,
  Image as ImageIcon,
  Menu as MenuIcon,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { AppBarMenuList } from "./AppBarMenuList";
import { AppBarListItem } from "./AppBarListItem";
import { AppBar } from "./AppBar";
import { useState } from "react";
import { AppBarMenu } from "./AppBarMenu";
import { AppBarSubMenu } from "./AppBarSubMenu";

function AppBarWithMenu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <AppBar menuOpen={menuOpen} subMenuOpen={subMenuOpen}>
        {/*
          Compose your regular MUI toolbar like: https://mui.com/material-ui/react-app-bar/#basic-app-bar
        */}
        {/*=========================*/}
        <Toolbar>
          <IconButton>
            <SupervisedUserCircle fontSize={"large"} />
          </IconButton>
          <Box flex={1} />
          <Typography sx={{ flexGrow: 1 }} variant={"h5"} color={"primary"}>
            Title
          </Typography>
          {menuOpen ? (
            <IconButton
              onClick={() => {
                setMenuOpen(false);
                setSubMenuOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setMenuOpen(true);
                setSubMenuOpen(false);
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
        {/*=========================*/}

        {/*
          Compose a AppBar SubMenu content with AppBarMenuList and AppBarListItem components
        */}
        {/*=========================*/}
        <AppBarSubMenu>
          <AppBarMenuList>
            <ButtonBase sx={{ mt: 1 }} onClick={() => setSubMenuOpen(false)}>
              <ArrowBack />
              <Typography variant={"h5"}>Back</Typography>
            </ButtonBase>
            <AppBarListItem>
              <ImageIcon sx={{ mr: 1 }} />
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
          </AppBarMenuList>
        </AppBarSubMenu>
        {/*=========================*/}

        {/*
          Compose a main AppBar Main Menu content with AppBarMenuList and AppBarListItem components
        */}
        {/*=========================*/}
        <AppBarMenu>
          {/*=========================*/}
          <AppBarMenuList>
            <AppBarListItem>
              <ImageIcon sx={{ mr: 1 }} />
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
          </AppBarMenuList>
          {/*=========================*/}

          {/*========================= SPACER BETWEEN TWO LIST ITEMS*/}
          <Box mb={4} />
          {/*=========================*/}

          {/*=========================*/}
          <AppBarMenuList
            sx={{ flexGrow: 1 }}
            subheader={<Typography variant={"h5"}>Account</Typography>}
          >
            <AppBarListItem>
              <ImageIcon sx={{ mr: 1 }} />
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
          </AppBarMenuList>
          <AppBarMenuList sx={{ bgcolor: "action.focus", mt: 2 }}>
            <AppBarListItem
              onClick={() => {
                setSubMenuOpen(true);
              }}
            >
              <ImageIcon sx={{ mr: 1 }} />
              <ListItemText primary={"item1"} />
            </AppBarListItem>
          </AppBarMenuList>
          {/*=========================*/}
        </AppBarMenu>
        {/*=========================*/}
      </AppBar>
      {/*=========================*/}
    </>
  );
}

export default AppBarWithMenu;
