import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-primary">Welcome to MyStore</h1>
      <p className="lead">Your one-stop shop for the best products.</p>

      <div className="mt-4">
        <Link href="/products" className="btn btn-primary btn-lg">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
