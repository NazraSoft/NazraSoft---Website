import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

// import { NhostNextProvider, NhostClient } from '@nhost/nextjs';

// const nhost = new NhostClient({
//   subdomain: "ndtnhstryijibhjhvsct",
//   region: "ap-south-1"
// });

function MyApp({ Component, pageProps: {  ...pageProps } }: AppProps) {
  
  return  <SessionProvider>
  <ThemeProvider enableSystem={true} attribute="class">
  
    <Component {...pageProps} />

  </ThemeProvider>
  </SessionProvider>
}

export default MyApp
