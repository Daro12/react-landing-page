import React, { Fragment, useEffect, useState } from "react";
import useStyles from "../styles/useStyles";
import SortIcon from "@material-ui/icons/Sort";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Fragment>
      <div className={classes.rootApp} id="header">
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
              My<span className={classes.colorTitle}>Island</span>
            </h1>
            <IconButton>
              <SortIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.heroContainer}>
            <h1 className={classes.heroTitle}>
              Welcome to <br />{" "}
              <span className={classes.colorTitle}>Island</span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
    </Fragment>
  );
};

export default Header;
