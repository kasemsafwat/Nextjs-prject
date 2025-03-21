import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg text-center border-0"
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "white",
          borderRadius: "15px",
        }}
      >
        <h2 className="mb-3 text-primary fw-bold">👤 User Profile</h2>

        {session ? (
          <>
            {/* صورة المستخدم (مركزة في المنتصف) */}
            <div className="d-flex justify-content-center">
              <Image
                src={session.user?.image || "/default-avatar.png"}
                className="rounded-circle border border-3 border-primary shadow-sm"
                width={120}
                height={120}
                alt="Profile"
              />
            </div>

            {/* اسم المستخدم والإيميل */}
            <h4 className="fw-bold mt-3">{session.user?.name}</h4>
            <p className="text-muted">{session.user?.email}</p>

            {/* زر تسجيل الخروج */}
            <Link
              href="/api/auth/signout"
              className="btn btn-outline-danger w-100 mt-3 fw-bold"
              style={{ borderRadius: "30px" }}
            >
              🚪 Sign Out
            </Link>
          </>
        ) : (
          <div>
            <p className="text-danger fw-bold">⚠ You must sign in first</p>
            <Link
              href="/signin"
              className="btn btn-outline-light w-100 mt-3 fw-bold"
              style={{
                borderRadius: "30px",
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              🔑 Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
