import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../../compiled-css-code/home-comp-styles/card-comp-styles/card-style.css';

interface ICardProps {
    title: string,
    content: string,
    icon: string,
}

export default function Card({ title, content, icon }: ICardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 0"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <>
            <section className="card" style={{ overflow: 'visible' }} ref={ref}>
                <motion.div
                    initial={{ opacity: 0 }} 
                    style={{ opacity }}      
                    animate={{             
                        transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 20
                        }
                    }}
                >
                    <div className='main-cont'>
                        <img src={icon} alt="card icon" />
                        <h3>{title}</h3>
                    </div>
                    <p>{content}</p>
                </motion.div>
            </section>
        </>
    )
}