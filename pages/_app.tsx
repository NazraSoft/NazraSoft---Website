import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import Footer from "../components/Footer"
import { SessionProvider } from "next-auth/react"
import Navbar from "../components/Navbar";

// import { NhostNextProvider, NhostClient } from '@nhost/nextjs';

// const nhost = new NhostClient({
//   subdomain: "ndtnhstryijibhjhvsct",
//   region: "ap-south-1"
// });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return  <SessionProvider session={session}>
  <ThemeProvider enableSystem={true} attribute="class">
    <Navbar/>
    <Component {...pageProps} />
<Footer/>
  </ThemeProvider>
  </SessionProvider>
}

export default MyApp
