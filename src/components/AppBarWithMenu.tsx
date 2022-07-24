import {
  Box,
  ButtonBase,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  Close as CloseIcon,
  Flag,
  Image as ImageIcon,
  Mail,
  Menu as MenuIcon,
  SupervisedUserCircle,
  VerifiedUserRounded,
} from "@mui/icons-material";
import { AppBarMenuList } from "./AppBarMenuList";
import { AppBarListItem } from "./AppBarListItem";
import { AppBar } from "./AppBar";
import { useState } from "react";
import { AppBarMenu } from "./AppBarMenu";
import { AppBarSubMenu } from "./AppBarSubMenu";
import { Theme } from "@mui/material/styles";

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
              <ListItemIcon>
                <VerifiedUserRounded />
              </ListItemIcon>
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
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
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
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
            <AppBarListItem>
              <ListItemText primary={"item1"} />
            </AppBarListItem>
          </AppBarMenuList>

          <ListItem
            secondaryAction={
              <ListItemText
                primary={
                  <Typography
                    color={"gray"}
                    fontSize={"small"}
                    variant={"body1"}
                  >
                    versie 23243
                  </Typography>
                }
              />
            }
          />

          <AppBarMenuList sx={{ bgcolor: "action.focus", mt: 4 }}>
            <AppBarListItem
              onClick={() => {
                setSubMenuOpen(true);
              }}
            >
              <ListItemIcon>
                <Flag />
              </ListItemIcon>
              <ListItemText primary={"Open submenu"} />
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
