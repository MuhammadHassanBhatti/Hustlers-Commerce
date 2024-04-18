//use client
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Hustlers",
  description: "Hustlers E-commerce Site",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
        className={inter.className}
      >
        <Header />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
