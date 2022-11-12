import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { UserProvider } from '@auth0/nextjs-auth0';


// import { NhostNextProvider, NhostClient } from '@nhost/nextjs';

// const nhost = new NhostClient({
//   subdomain: "ndtnhstryijibhjhvsct",
//   region: "ap-south-1"
// });

function MyApp({ Component, pageProps: {  ...pageProps } }: AppProps) {
  
  return  <SessionProvider>
     <UserProvider>

  <ThemeProvider enableSystem={true} attribute="class">
  
    <Component {...pageProps} />

  </ThemeProvider>
     </UserProvider>
  </SessionProvider>
}

export default MyApp
