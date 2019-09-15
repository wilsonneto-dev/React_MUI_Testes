import React, { Component } from "react";
import clsx from "clsx";
import {
  Dashboard,
  Subject,
  Class,
  TrackChanges,
  AccountCircle
} from "@material-ui/icons";

import {
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  List,
  IconButton
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import GlobalMUIStyles from "../../assets/global-mui-styles";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }
  handleDrawerClose() {}

  render() {
    const { classes } = this.props;
    const open = true;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={true}
      >
        <div>
          <div className={classes.appBarSpacer} />
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Subject />
              </ListItemIcon>
              <ListItemText primary="Transações" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Class />
              </ListItemIcon>
              <ListItemText primary="Categorias" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TrackChanges />
              </ListItemIcon>
              <ListItemText primary="Orçamentos" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Usuário" />
            </ListItem>

            <Divider />
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Menu);

/*
--> Icone com fechar lá em cima
<div className={classes.toolbarIcon}>
  <IconButton onClick={this.handleDrawerClose}>
    <ChevronLeftIcon />
  </IconButton>
</div>
*/
