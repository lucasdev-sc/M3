import { Feedback } from "./Feedback";
import { motion } from 'framer-motion'

interface Props{
    img: string;
    title: string;
    type: string;
}

export const MovieCard = (props: Props) => {
       return (
        <div className={`bg-[url(${props.img})] bg-cover bg-center`}>
            <motion.div className={`min-w-[292px] w-[292px] h-[440px] p-6 select-none`}>
                <motion.div className="mt-[18em]">
                    <motion.div className="bg-[rgba(29,29,29,0.5)] py-1 px-2 rounded-tr-lg rounded-bl-lg w-max">
                        <p className="text-[#0FEFFD]">{props.type}</p>
                    </motion.div>
                    <Feedback />
                    <motion.div>
                        <p className="text-white text-2xl">{props.title}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};
