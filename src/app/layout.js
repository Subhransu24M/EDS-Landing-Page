"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Script from 'next/script';
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  })
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0CQNC2QEEK"></Script>
        {/* Analytics Script */}
        <Script id="GA-script">{`
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0CQNC2QEEK');
`}

        </Script>

        {/* Conversion Script */}

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11139363496"></Script>
        <Script id="AW-script">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11139363496');
            `}
        </Script>

        {/* Google Tag Manager  */}
        <Script id="GTM-script" strategy="afterInteractive">{`
                                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                  })(window,document,'script','dataLayer','GTM-TTHP2MZV');
                                `}
        </Script>
        {/* End Google Tag Manager  */}

      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></Script>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

        {/* Google Tag Manager (noscript)  */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTHP2MZV"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
