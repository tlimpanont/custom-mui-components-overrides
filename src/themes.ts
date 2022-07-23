import {
  createTheme,
  experimental_sx as sx,
  Theme,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Components } from "@mui/material/styles/components";

export const defaultTheme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "absolute",
      },
      styleOverrides: {
        root: sx({
          boxShadow: "none",
          borderBottom: `1px solid ${grey["300"]}`,
          px: 0,
        }),
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: sx({
          background: "white",
          px: 1,
          height: (theme: Theme) => `${theme.spacing(7)} !important`,
          minHeight: (theme: Theme) => `${theme.spacing(7)} !important`,
        }),
      },
    },
  },
});

export const customStyledComponentsTheme = {
  components: {
    AppBarMenuList: {
      styleOverrides: {
        root: sx({
          p: 0,
          "& .MuiListItemButton-root": sx({
            "&:hover": { background: "transparent" },
            p: 0,
          }),
          px: 2,
        }),
      },
    } as Components["MuiList"],
    AppBarListItem: {
      styleOverrides: {
        root: sx({
          py: 2,
          "&:hover": {
            background: "none",
          },
          borderBottom: `1px solid ${grey[300]}`,
        }),
      },
    } as Components["MuiListItem"],
    AppBarMenu: {
      styleOverrides: {
        root: sx({
          display: "flex",
          flexDirection: "column",
          paddingTop: (theme: Theme) => `${theme.mixins.toolbar.minHeight}px`,
          overflowY: "scroll",
          height: "100vh",
          width: "100%",
        }),
      },
    },
    AppBarSubMenu: {
      styleOverrides: {
        root: sx({
          zIndex: 1,
          backgroundColor: "white",
          paddingTop: (theme: Theme) => `${theme.mixins.toolbar.minHeight}px`,
          overflowY: "scroll",
          width: "100%",
          height: "100vh",
        }),
      },
    },
  },
};
