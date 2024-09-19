"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { NavBar } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Toaster } from "react-hot-toast";
import Preloader from './components/preloader/preloader';


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <html lang="pt">
      <head>
        <link rel="shortcut icon" href="/favico.png" type="image/png" />
        <meta name="google-adsense-account" content="ca-pub-1921695646246423" />
      </head>
      <body>
        <AnimatePresence>
          {loading && (
            <motion.div
              className="preloader"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Preloader />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!loading && (
            <motion.div
              className="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="block mt-[45vh] hidden text-center p-4 bg-red-100 text-red-800">
                O website ainda não está preparado para estes tamanhos de tela. Use um computador para ver.
              </div>

              <Toaster />
              <div className="hiddmen md:block">
                <NavBar />
                {children}
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1921695646246423"
        ></script>

      </body>
    </html>
  );
}
