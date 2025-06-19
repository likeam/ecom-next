import ProductDetail from "@/components/product_detail";
import { stripe } from "@/lib/strip";
import React from "react";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
};

export default Product;
