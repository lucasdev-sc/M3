import { useState } from "react";
import "./styles.css";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { Feedback } from "../Feedback";

export const FeaturedMovie = () => {

  const slides = [
    {
      url: 'img/card-img-1.jpg',
      title: 'Godzilla vs. Kong',
      description: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.'
    },
    {
      url: 'img/card-img-2.jpg',
      title: 'Wonder Woman 1984',
      description: 'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.'
    },
    {
      url: 'img/card-img-3.jpg',
      title: "Zack Snyder's Justice League",
      description: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirtsSlide = currentIndex === 0;
    const newIndex = isFirtsSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <>
      <div className='img w-full relative group'>
        <div style={{ backgroundImage: `linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%), url(${slides[currentIndex].url})` }} className="w-screen h-full bg-cover bg-no-repeat bg-center duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={prevSlide} size={30} />
        </div>
        
        <div className="w-[632px] absolute top-0 -translate-x-[-50%] -translate-y-[-15em] left-5">

          <div className="bg-[rgba(29,29,29,0.5)] py-1 px-2 rounded-tr-lg rounded-bl-lg w-max">
            <p className="text-[#0FEFFD]">Science Fiction</p>
          </div>
          <Feedback />
          <div className="mt-[-20px]">
            <p className="text-white text-[56px]">{slides[currentIndex].title}</p>
            <p className="text-white text-base">{slides[currentIndex].description}</p>
          </div>
          <button className="mt-4 p-4 border border-[linear-gradient(135.87deg, #0FEFFD 1.25%, #FF00F5 51.73%, rgba(15, 239, 253, 0.22) 77.22%)] text-white rounded-full">Watch now</button>
        </div>
      </div>
    </>
  );
};
