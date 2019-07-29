import React, { Component } from "react";
import Header from "../Header";
import { Grid } from "@material-ui/core";
import Sidebar from "../Sidebar";
import { withStyles, Hidden } from "@material-ui/core";
import MainContainer from "../MainContainer";

const styles = theme => ({
  sidebarContainer: {
    paddingTop: theme.spacing(5)
  },
  mainContainerComponent: {
    marginLeft: theme.spacing(5)
  },
  [theme.breakpoints.down("md")]: {
    mainContainerComponent: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }
});
class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Grid container className={classes.sidebarContainer}>
          <Hidden mdDown>
            <Grid item sm={2}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item sm={9} className={classes.mainContainerComponent}>
            <MainContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
