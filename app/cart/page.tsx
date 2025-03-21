"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {item.title} - ${item.price.toFixed(2)}
              </span>
              <div>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => addToCart(item)}
                >
                  Add More
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Link href="/checkout" className="btn btn-primary mt-4 w-100">
          Proceed to Checkout 💳
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
