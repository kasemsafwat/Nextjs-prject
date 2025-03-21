"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-primary">${product.price}</h4>
          <p>{product.description}</p>
          <button
            className="btn btn-success w-100 mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
