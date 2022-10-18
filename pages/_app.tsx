import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider enableSystem={true} attribute="class">

<Navbar/>
    <Component {...pageProps} />
<Footer/>
  </ThemeProvider>
}

export default MyApp
