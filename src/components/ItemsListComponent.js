import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import RootComponent from "./RootComponent";

class ItemsListComponent extends Component {
  state = {
    open: false
  };
  componentDidMount() {
    const { loadItems } = this.props;
    loadItems();
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { classes, itemsList, addItemToBasket } = this.props;
    return (
      <div>
        <RootComponent />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Added to Basket</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <GridList cellHeight={400} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }} />
          {itemsList &&
            itemsList.map(tile => (
              <GridListTile key={tile.id}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Price: {tile.price}</span>}
                  actionIcon={
                    <IconButton
                      onClick={() => {
                        addItemToBasket(tile);
                        this.handleClick();
                      }}
                      className={classes.icon}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default withStyles(styles)(ItemsListComponent);
