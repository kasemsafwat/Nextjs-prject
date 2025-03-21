"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="container mt-5">
      <h1>Checkout 💳</h1>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : orderPlaced ? (
        <div className="alert alert-success mt-4">
          ✅ Order placed successfully! Thank you for shopping with us.
          <Link href="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((product, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-4">Total Price: ${totalPrice}</h3>
          <button className="btn btn-success w-100 mt-3" onClick={handleOrder}>
            Confirm Order ✅
          </button>
        </>
      )}
    </div>
  );
}
