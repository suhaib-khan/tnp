import React, { Component } from "react";
import {
  Grid,
  Link,
  withStyles,
  Button,
  Checkbox,
  Hidden
} from "@material-ui/core";
import { FormatListBulleted, Close } from "@material-ui/icons";

const styles = theme => ({
  candidateLink: {
    float: "left"
  },
  iconLink: {
    float: "right"
  },
  rowStyle: {
    border: "2px solid black"
  },
  gridItems: {
    margin: theme.spacing(1.4),
    textAlign: "left"
  },

  [theme.breakpoints.down("sm")]: {
    gridContainer: {
      display: "flex",
      justifyContent: "space-between"
    },
    leftGridItems: {
      margin: "0"
    },
    rightGridItem: {
      margin: "0",
      float: "right"
    }
  }
});

class Candidate extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Hidden mdDown>
          <Grid container>
            <Grid item sm={4}>
              <Link className={classes.candidateLink}>Candidates</Link>
            </Grid>
            <Grid item sm={4}>
              <Link>Shortlisted Candidates</Link>
            </Grid>
            <Grid item sm={4}>
              <Link className={classes.iconLink}>
                <FormatListBulleted />
              </Link>
            </Grid>
          </Grid>
        </Hidden>

        {/* table for displaying candidate details */}

        <Grid container className={classes.gridContainer}>
          <Hidden mdDown>
            <Grid className={classes.gridItems} item sm={1}>
              Name
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Skill Score
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Category
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Hiring Stage
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Location
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              No. of Matches
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Time Left
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Profile
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Verification
            </Grid>
            <Grid className={classes.gridItems} item sm={1}>
              Actions
            </Grid>
          </Hidden>

          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Ginelle
            <br />
            Data Scientist
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={5}>
            998
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Student
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Interview
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={2}>
            Delhi
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            15
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            2 Days
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={6}>
            JRR <br />
            Resume
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            <Button variant="outlined">Verify </Button>
            <Close />
          </Grid>
          <Hidden mdDown>
            <Grid className={classes.gridItems} item sm={1} xs={6}>
              <Checkbox />
            </Grid>
          </Hidden>

          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Ginelle
            <br />
            Data Scientist
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={5}>
            998
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Student
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={4}>
            Interview
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={2}>
            Delhi
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            15
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            2 Days
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={6}>
            JRR <br />
            Resume
          </Grid>
          <Grid className={classes.gridItems} item sm={1} xs={3}>
            <Button variant="outlined">Verify </Button>
            <Close />
          </Grid>
          <Hidden mdDown>
            <Grid className={classes.gridItems} item sm={1} xs={6}>
              <Checkbox />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Candidate);
