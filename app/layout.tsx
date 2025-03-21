import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Providers from "./context/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Providers>
          <Navbar />
          <main className="container flex-grow-1 mt-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
