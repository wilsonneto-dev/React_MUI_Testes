import React, { Component } from "react";
import { Sort, Archive, Code } from "@material-ui/icons";
import {
  Hidden,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  List
} from "@material-ui/core";

import GlobalMUIStyles from "../../assets/global-mui-styles";

class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !true && classes.drawerPaperClose)
        }}
        open={true}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <Divider />

          <ListItem button>
            <ListItemIcon>
              <Sort />
            </ListItemIcon>
            <ListItemText primary="Fluxo" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Archive />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Menu);
