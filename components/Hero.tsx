// Framer Motion
import { motion } from "framer-motion"

// React components (SVG as RC)
import HeroImage from "../public/images/nature.svg"

const Hero = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-12 px-5 py-20 mx-auto mb-10 justify-items-center md:grid-cols-2 xl:gap-18 max-w-7xl">
      <motion.div
        className="text-center md:text-left"
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.9,
          bounce: 0.2,
        }}
      >
        <h2 className="mb-8 text-6xl font-semibold">Explore the world!</h2>
        <p className="mb-8 text-xl">
          Love travel? Discover, plan and book your perfect trip with our travel
          guides and expert advice. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed hendrerit metus eget lectus hendrerit mattis.
          Nullam libero est, ornare a vestibulum quis, porta vitae eros.
        </p>
        <button className="px-4 py-3 text-xl font-semibold text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600">
          Book your trip
        </button>
      </motion.div>
      <motion.div
        className="w-full max-w-md md:max-w-full"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 2.5,
          bounce: 0.2,
        }}
      >
        <HeroImage />
      </motion.div>
    </div>
  )
}

export default Hero
