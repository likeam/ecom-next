"use client";
import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./product-card";
import { Key } from "lucide-react";

interface Props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<String>("");
  return (
    <div>
      <div className="">
        <input type="text" placeholder="Search products...." />
      </div>
      <ul className="">
       {products.map(product, Key) => {
        return <li key={Key}>
            <ProductCard product={product} />
        </li>
       }}
      </ul>
    </div>
  );
};

export default ProductList;
