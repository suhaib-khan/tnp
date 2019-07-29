import React, { Component } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import { Hidden } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div>
        <TopRow />
        <Hidden mdDown>
          <BottomRow />
        </Hidden>
      </div>
    );
  }
}
export default Header;
