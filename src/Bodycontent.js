import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";
import Rating from "@mui/material/Rating";

export function Bodycontent() {
  const product = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: null,
      title: "Fancy Product",
      rating: null,
      price: "$40.00-$80.00",
      action: "View Options",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: "sale",
      title: "Special Item",
      rating: 5,
      price: "$18.00",
      action: "Add to cart",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: "sale",
      title: "Sale Item",
      rating: null,
      price: "$25.00",
      action: "Add to cart",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: null,
      title: "Popular Item",
      rating: 5,
      price: "$40.00",
      action: "Add to cart",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: "sale",
      title: "Sale Item",
      rating: null,
      price: "$25.00",
      action: "Add to cart",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: null,
      title: "Fancy Product",
      rating: null,
      price: "$120.00-$280.00",
      action: "View Options",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: "sale",
      title: "Special Item",
      rating: 5,
      price: "$18.00",
      action: "Add to cart",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      badge: null,
      title: "Popular Item",
      rating: 5,
      price: "$40.00",
      action: "Add to cart",
    },
  ];

  return (
    <div className="body-content">
      {/* <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 /> */}
      {product.map(({ img, badge, title, rating, price, action }, index) => (
        <Mode
          key={index}
          img={img}
          badge={badge}
          title={title}
          rating={rating}
          price={price}
          action={action}
        />
      ))}
    </div>
  );
}

// function Content() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//         alt="450 x 300"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Fancy Product
//         </Typography>

//         <Typography variant="p">$40.00 - $80.00</Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit" >
//           View options
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content2() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <Badge
//         sx={{
//           "& .MuiBadge-badge": {
//             color: "white",
//             backgroundColor: "black",
//           },
//         }}
//         overlap="circular"
//         badgeContent={"sale"}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//           alt="450 x 300"
//         />
//       </Badge>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Special Item
//         </Typography>
//         <Rating name="read-only" value={5} readOnly />
//         <br />
//         <Typography variant="p">
//           <span style={{ textDecorationLine: "line-through" }}>$20.00</span>
//           $18.00
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content3() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <Badge
//         sx={{
//           "& .MuiBadge-badge": {
//             color: "white",
//             backgroundColor: "black",
//           },
//         }}
//         overlap="circular"
//         badgeContent={"sale"}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//           alt="450 x 300"
//         />
//       </Badge>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Sale Item
//         </Typography>
//         <Typography variant="p">
//           <span style={{ textDecorationLine: "line-through" }}>$50.00</span>
//           $25.00
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content4() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//         alt="450 x 300"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Popular Item
//         </Typography>
//         <Rating name="read-only" value={5} readOnly />
//         <br />
//         <Typography variant="p">$40.00</Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content5() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <Badge
//         sx={{
//           "& .MuiBadge-badge": {
//             color: "white",
//             backgroundColor: "black",
//           },
//         }}
//         overlap="circular"
//         badgeContent={"sale"}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//           alt="450 x 300"
//         />
//       </Badge>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Sale Item
//         </Typography>
//         <Typography variant="p">
//           <span style={{ textDecorationLine: "line-through" }}>$50.00</span>
//           $25.00
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content6() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//         alt="450 x 300"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Fancy Product
//         </Typography>
//         <Typography variant="p">$120.00 - $280.00</Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit" >
//           View options
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content7() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <Badge
//         sx={{
//           "& .MuiBadge-badge": {
//             color: "white",
//             backgroundColor: "black",
//           },
//         }}
//         overlap="circular"
//         badgeContent={"sale"}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//           alt="450 x 300"
//         />
//       </Badge>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Special Item
//         </Typography>
//         <Rating name="read-only" value={5} readOnly />
//         <br />
//         <Typography variant="p">
//           <span style={{ textDecorationLine: "line-through" }}>$20.00</span>
//           $18.00
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function Content8() {
//   return (
//     <Card sx={{ maxWidth: 245 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//         alt="450 x 300"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Popular Item
//         </Typography>
//         <Rating name="read-only" value={5} readOnly />
//         <br />
//         <Typography variant="p">$40.00</Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" variant="outlined" color="inherit">
//           Add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

function Mode({ img, badge, title, rating, price, action }) {
  return (
    <Card sx={{ maxWidth: 245 }}>
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
        <Button size="small" variant="outlined" color="inherit">
          {action}
        </Button>
      </CardActions>
    </Card>
  );
}
