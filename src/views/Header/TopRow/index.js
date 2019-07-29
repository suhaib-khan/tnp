import React, { Component } from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { Dehaze } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    display: "flex",
  },
  typo: {
    float: "right"
  },
  grid: {
    padding: theme.spacing(1),
    textAlign: "left"
  },
  [theme.breakpoints.between("xs", "md")]: {
    grid: {
      //backgroundColor: "yellow"
    }
  },
  [theme.breakpoints.up("md")]: {
    grid: {
      //backgroundColor: "pink"
    }
  },
  [theme.breakpoints.down("md")]: {
    grid: {
      //backgroundColor: "green",
      padding: theme.spacing(1)
    },
    parent:{
      display:'flex',
      justifyContent:'center'
    },
    icon: {
      float: "right"
    }
  }
});

class TopRow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.parent}>
          <Grid className={classes.grid} sm={2} xs={2}>
            <Typography className={classes.typo}>edWisor</Typography>
          </Grid>
          <Hidden mdDown><Grid item sm={7}/></Hidden>
          <Hidden smDown>
            <Grid className={classes.grid} sm={1}>
              <Typography>Suhaib</Typography>
            </Grid>
          </Hidden>
          <Grid className={classes.grid} sm={1} xs={8}>
            <Dehaze className={classes.icon} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(TopRow);
