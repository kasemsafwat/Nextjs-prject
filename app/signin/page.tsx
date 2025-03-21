"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">🔑 Sign In</h2>
        <button className="btn btn-dark mb-2" onClick={() => signIn("github")}>
          Sign in with GitHub 🐙
        </button>
        <button
          className="btn btn-primary"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
