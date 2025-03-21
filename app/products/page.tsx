"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/products/${product.id}`}
                    className="btn btn-outline-primary w-50 me-2"
                  >
                    Details 📄
                  </Link>
                  <button
                    className="btn btn-primary w-50"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
