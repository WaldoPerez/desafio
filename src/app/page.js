"use client";
import React, { useState } from 'react';
import { Headers } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { home } from "../app/home"; // Importar la lista de productos

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        productList={home} // Pasar la lista de productos como una prop a ProductList
      />
    </>
  );
}
