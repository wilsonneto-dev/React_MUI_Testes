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
  List
} from "@material-ui/core";

import { Link } from "react-router-dom";

import GlobalMUIStyles from "../../assets/global-mui-styles";

class Menu extends Component {
  componentDidMount() {
    console.log("did mount...", this.props.expanded);
  }

  render() {
    const { classes, expanded } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !expanded && classes.drawerPaperClose
          )
        }}
        open={expanded}
      >
        <div>
          <div className={classes.appBarSpacer} />
          <Divider />
          <List>
            <Link className={classes.link} to={"/"}>
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>

            <Link className={classes.link} to={"/transactions"}>
              <ListItem button>
                <ListItemIcon>
                  <Subject />
                </ListItemIcon>
                <ListItemText primary="Transações" />
              </ListItem>
            </Link>

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
