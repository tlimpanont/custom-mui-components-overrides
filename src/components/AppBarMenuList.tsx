import { MenuList, MenuListProps, styled } from "@mui/material";

export const AppBarMenuList = styled(
  (props) => <MenuList disablePadding {...props} />,
  {
    name: "AppBarMenuList",
    slot: "Root",
    overridesResolver: (props, styles) => [styles.root],
    // shouldForwardProp: (prop) =>  true
  }
)<MenuListProps>({});
