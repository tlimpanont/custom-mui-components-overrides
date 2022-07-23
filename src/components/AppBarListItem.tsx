import { ListItem, ListItemButton, ListItemProps, styled } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

export const AppBarListItem = styled(
  (props) => {
    return (
      <ListItemButton disableGutters>
        <ListItem
          disableGutters
          disablePadding
          secondaryAction={<ChevronRight />}
          {...props}
        />
      </ListItemButton>
    );
  },
  {
    name: "AppBarListItem",
    slot: "Root",
    overridesResolver: (props, styles) => [styles.root],
  }
)<ListItemProps>({});
