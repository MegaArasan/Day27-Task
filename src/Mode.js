/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";
import Rating from "@mui/material/Rating";
// import context from "./App.js";

export function Mode({ img, badge, title, rating, price, action }) {
  // const {add,setadd} = useContext(context);
  return (
    // card content of the data
    <Card sx={{ width: 240 }}>
      {badge === "sale" ? (
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "black",
            },
          }}
          overlap="circular"
          badgeContent={"sale"}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <CardMedia component="img" height="140" image={img} alt="450 x 300" />
        </Badge>
      ) : (
        <CardMedia component="img" height="140" image={img} alt="450 x 300" />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {rating > 0 ? <Rating name="read-only" value={rating} readOnly /> : ""}
        <br />
        <Typography variant="p">{price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="inherit"
          // onClick={() =>setadd(add + 1)}
        >
          {action}
        </Button>
      </CardActions>
    </Card>
  );
}
