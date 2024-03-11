import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext"
import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "Marketplace Risidio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
