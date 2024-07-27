"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  useEffect(() =>{
    Aos.init();
  })
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></Script>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      </body>
    </html>
  );
}
