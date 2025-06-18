import React from "react";
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

const ProductCard = ({ product }: Props) => {
  return <div>ProductCard</div>;
};

export default ProductCard;
