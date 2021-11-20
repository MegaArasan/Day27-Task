import "./App.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Bodycontent } from "./Bodycontent";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function App() {
  const [page, setpage] = useState(null);
  const [add, setadd] = useState(5);
  const open = Boolean(page);
  const handleClick = (event) => {
    setpage(event.currentTarget);
  };
  const handleClose = () => {
    setpage(null);
  };
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            Start Bootstrap
          </Typography>
          <Button variant="text" color="inherit">
            Home
          </Button>
          <Button variant="text" color="inherit">
            About
          </Button>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            shop
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={page}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>All Products</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose}>Popular Items</MenuItem>
            <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
          </Menu>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            style={{ marginLeft: "auto" }}
            color="inherit"
          >
            cart
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
              badgeContent={add}
              style={{ padding: "2px" }}
            ></Badge>
          </Button>
          <IconButton color="primary" aria-label="menuicon">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <header className="bodyheader">
        <Typography variant="h2" component="h2">
          Shop in Style
        </Typography>
        <Typography variant="p" component="p">
          With this shop hompeage template
        </Typography>
      </header>
      <Bodycontent />
      <footer className="bodyfooter">
        <Typography variant="p" component="p">
          Copyright © Your Website 2021
        </Typography>
      </footer>
    </div>
  );
}
