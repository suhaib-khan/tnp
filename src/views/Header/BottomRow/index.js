import React, { Component } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Notifications } from "@material-ui/icons";

const styles = theme => ({
  root: {
    display: "flex"
  },
  typo: {
    float: "right"
  },
  notificationIcon: {
    float: "left",
    fontSize: "33px"
  },
  grid: {
    padding: theme.spacing(1),
    textAlign: "left"
  },
  gridNotification: {
    padding: theme.spacing(2)
  },
  gridContainer: {
    backgroundColor: "#F2F2F2"
  },
  gridFilters: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(5),
    display: "flex",
    justifyContent: "flex-start"
  },
  paper: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1, 4.5)
  }
});

class BottomRow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.grid} sm={2}>
            <Typography variant="h4" className={classes.typo}>
              My Dashboard
            </Typography>
          </Grid>
          <Grid item className={classes.gridFilters} sm={6}>
            <Paper className={classes.paper}>
              <Typography>Candidates</Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography>Candidate Reports</Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography>Recruiters</Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography>Recruiter Reports</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.gridNotification} sm={3}>
            <Notifications className={classes.notificationIcon} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(BottomRow);
