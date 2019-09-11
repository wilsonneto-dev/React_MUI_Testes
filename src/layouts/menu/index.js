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
      <div>
        <nav aria-label="mailbox folders">
          <Hidden xsDown implementation="css">
            <Drawer variant="permanent" open>
              <div>
                <div className={classes.toolbar} />
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
              </div>
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Menu);
