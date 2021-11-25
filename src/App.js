import "./App.css";

import React, { createContext } from "react";
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

export const context = createContext();
export default function App() {
  // for making shop dropdown
  const [page, setpage] = useState(null);
  const [show, setshow] = useState("show");
  const [show1, setshow1] = useState("show1");

  const [add, setadd] = useState(2);
  const open = Boolean(page);
  const handleClick = (event) => {
    setpage(event.currentTarget);
  };
  const handleClose = () => {
    setpage(null);
  };
  return (
    <context.Provider value={add}>
      <div className="App">
        {/* navbar for thee website */}
        <AppBar position="static" color="default">
          <Toolbar variant="regular">
            <Typography
              variant="h6"
              component="div"
              style={{ marginLeft: "20px" }}
            >
              Start Bootstrap
            </Typography>
            <div className="nav">
              <Button
                variant="text"
                color="inherit"
                style={{ marginLeft: "15px" }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                style={{ marginLeft: "15px" }}
              >
                About
              </Button>
              <Button
                id="fade-button"
                color="inherit"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                shop
              </Button>
              {/* shop dropdown button */}
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
                sx={{ marginLeft: "auto" }}
                color="inherit"
              >
                Cart ""
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeContent={add}
                ></Badge>
              </Button>
            </div>
            <div className="menu-btn">
              <Button
                onClick={() => setshow(!show)}
                color="primary"
                aria-label="menuicon"
              >
                <MenuIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        {/* making responsive */}
        {show ? (
          ""
        ) : (
          <div className="dropnav">
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              About
            </Button>
            <Button
              id="fade-button"
              color="inherit"
              aria-controls="fade-menu"
              variant="text"
              onClick={() => setshow1(!show1)}
              endIcon={<KeyboardArrowDownIcon />}
            >
              shop
            </Button>
            {/* for making shop dropdown button in responsive appbar */}
            {show1 ? (
              ""
            ) : (
              <div>
                <Button color="inherit" onClick={handleClose} variant="text">
                  All Products
                </Button>
                <Divider sx={{ my: 0.5 }} />
                <Button color="inherit" onClick={handleClose} variant="text">
                  Popular Items
                </Button>
                <Divider sx={{ my: 0.5 }} />
                <Button color="inherit" onClick={handleClose} variant="text">
                  New Arrivals
                </Button>
              </div>
            )}

            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              color="inherit"
            >
              Cart""
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={add}
              ></Badge>
            </Button>
          </div>
        )}
        <header className="bodyheader">
          <Typography variant="h2" component="h2">
            Shop in Style
          </Typography>
          <Typography variant="p" component="p">
            With this shop hompeage template
          </Typography>
        </header>
        {/* to show the content in the body */}
        <Bodycontent />
        <footer className="bodyfooter">
          <Typography variant="p" component="p">
            Copyright © Your Website 2021
          </Typography>
        </footer>
      </div>
    </context.Provider>
  );
}
