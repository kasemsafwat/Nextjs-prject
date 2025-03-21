"use client"; // 👈 مهم جدًا!

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/app/context/CartContext"; // ✅ استيراد `useCart`

export default function Navbar() {
  const { data: session } = useSession();
  const { cart } = useCart(); // ✅ جلب عدد المنتجات من السلة

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" href="/">
          🛍️ MyStore
        </Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" href="/products">
            Products
          </Link>
          <Link className="nav-link position-relative" href="/cart">
            Cart 🛒
            {cart.length > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {cart.length}
              </span>
            )}
          </Link>
          {session ? (
            <>
              <Link className="nav-link" href="/profile">
                Profile 👤
              </Link>
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => signOut()}
              >
                Sign Out 🚪
              </button>
            </>
          ) : (
            <Link
              className="nav-link btn btn-outline-light ms-2"
              href="/signin"
            >
              Sign In 🔑
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
