import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  sidebarGrid: {
    borderRight: "1px solid red"
  },
  typo: {
    float: "right",
    padding: theme.spacing(2, 4),
    marginBottom: theme.spacing(6),
    backgroundColor: "#F2F2F2"
  }
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.sidebarGrid}>
          <Grid item sm={12}>
            <Typography className={classes.typo}>Profile Review</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography className={classes.typo}>Grooming</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography className={classes.typo}>Interviews</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Sidebar);
