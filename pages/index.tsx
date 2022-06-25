// Next.js
import type { NextPage } from "next"
import Head from "next/head"

// React components
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Travel Landing Page</title>
        <meta name="description" content="Example travel landing page" />
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
