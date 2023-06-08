import { Feedback } from "./Feedback";
import { motion } from 'framer-motion'

export const MovieCard = () => {
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

    return (
        <>
            <motion.div className='min-w-[292px] h-[440px] bg-red-700 p-6 select-none'>
                <motion.div className="mt-[18em]">
                    <motion.div className="bg-[rgba(29,29,29,0.5)] py-1 px-2 rounded-tr-lg rounded-bl-lg w-max">
                        <p className="text-[#0FEFFD]">Science Fiction</p>
                    </motion.div>
                    <Feedback />
                    <motion.div>
                        <p className="text-white text-2xl">{slides[0].title}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
