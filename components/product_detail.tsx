import React from "react";
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: Props) => {
  return <div>ProductDetail</div>;
};

export default ProductDetail;
