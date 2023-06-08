import { FeaturedMovie } from "./components/FeaturedMovie"
import { BsChevronCompactRight } from 'react-icons/bs'
import { MovieCard } from "./components/MovieCard"
import { motion } from 'framer-motion'

import { useState, useRef, useEffect } from 'react'

function App() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <>
      <div className="bg-[#1D1D1D] h-full">
        <FeaturedMovie />
        <div className="flex items-center py-6 pl-[52px] text-white font-bold">
          <p>New releases</p>
          <BsChevronCompactRight size={18} />
        </div>
        <motion.div className="flex items-center py-6 pl-[52px] gap-4 cursor-grab" whileTap={{ cursor: "grabbing" }} drag="x" dragConstraints={{ right: 0, left: -width }} transition={{ duration: 0.8 }} initial={{ x: 200 }} animate={{ x: 0 }}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </motion.div>
      </div>
    </>
  )
}

export default App
