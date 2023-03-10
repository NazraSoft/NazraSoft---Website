import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { UserProvider } from '@auth0/nextjs-auth0';
import { GetButton } from '../components/GetButton'
import { RecoilRoot } from "recoil";

// import { NhostNextProvider, NhostClient } from '@nhost/nextjs';

// const nhost = new NhostClient({
//   subdomain: "ndtnhstryijibhjhvsct",
//   region: "ap-south-1"
// });



function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {

  return    <RecoilRoot><SessionProvider>
    <UserProvider>
      <ThemeProvider enableSystem={true} attribute="class">
      
        <Component {...pageProps} />
        <GetButton />
  
      </ThemeProvider>
    </UserProvider>
      
  </SessionProvider>
  </RecoilRoot>
}

export default MyApp
