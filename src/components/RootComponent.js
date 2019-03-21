import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

class RootComponent extends Component {
  render() {
    const { classes } = this.props;
    const rootLink = props => <Link to="/" {...props} />;
    const basketLink = props => <Link to="/basket/" {...props} />;
    const angularLink = props => <Link to="/detail/12/" {...props} />;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              POC
            </Typography>
            <Button component={rootLink} color="inherit">
              Home
            </Button>
            <Button component={basketLink} color="inherit">
              Basket
            </Button>

            <Button component={angularLink} color="inherit">
              Angular Test
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default withStyles(styles)(RootComponent);
