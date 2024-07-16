import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brahmaputra TechnoPharmaceuticals",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className + " flex flex-col min-h-[100vh] bg-primaryBg overflow-x-hidden "}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
