import React from "react";
import { Mode } from "./Mode";

export function Bodycontent() {
  // data for the body content
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
      {/* mapping the values to the component */}
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
