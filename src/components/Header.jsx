import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1976D2",
  },
  twitterIcon: {
    marginLeft: "8px",
    marginRight: "8px",
  },
  title: {
    flexGrow: 1,
    fontSize: "20px",
  },
  link: {
    fontSize: "20px",
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Twitter Love Search
          </Typography>
          <TwitterIcon className={classes.twitterIcon} />
          <Typography className={classes.link}>
            <a>Github</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
