import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import Footer from "../components/Footer"

import { NhostNextProvider, NhostClient } from '@nhost/nextjs';

const nhost = new NhostClient({
  subdomain: "ndtnhstryijibhjhvsct",
  region: "ap-south-1"
});

function MyApp({ Component, pageProps }: AppProps) {
  return <NhostNextProvider nhost={nhost}>
  <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
<Footer/>
  </ThemeProvider>
  </NhostNextProvider>
}

export default MyApp
