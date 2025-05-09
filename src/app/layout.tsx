import { Fira_Code } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import background from "../assets/waterfall.gif";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const firaCode = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <title>Portfólio Rafael Matesco</title>
        <link rel="icon" type="image/x-icon" href="../"></link>
      </head>
      <body className={`${firaCode.variable} user-select-none`}>
        <img className="background_image" src={background.src} alt="" />
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
