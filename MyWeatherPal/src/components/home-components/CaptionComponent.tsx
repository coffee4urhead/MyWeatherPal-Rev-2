import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import "../../compiled-css-code/home-comp-styles/caption-comp-styles/caption-comp-style.css"

type LayoutType = 'side' | 'top';
type ImagePosition = 'left' | 'right';

interface CaptionComponentProps {
    caption: string,
    captionContent: string,
    captionImage: string,
    layout: LayoutType,
    imagePosition?: ImagePosition,
}

export default function CaptionComponent({ caption, captionContent, captionImage, layout = 'top', imagePosition = 'left' }: CaptionComponentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 0"],
    });

    const direction = imagePosition === 'left' ? -1 : 1;

    const x = useTransform(scrollYProgress, [0, 1], [direction * 100, 0]);

    const reverseX = useTransform(scrollYProgress, [0, 1], [0, direction * 100]);

    const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
    const smoothReverseX = useSpring(reverseX, { stiffness: 100, damping: 20 });

    return (
        <article className={`caption-container layout-${layout}`} style={{ overflow: 'visible' }} ref={ref}>
            <motion.div
                style={{
                    x: scrollYProgress.get() < 0.5 ? smoothX : smoothReverseX,
                }}
            >
                {layout === 'top' ? (
                    <>
                        <h1 className="caption">{caption}</h1>
                        <div className={`content-row ${imagePosition === 'right' ? 'reversed' : ''}`}>
                            <img className="caption-image" src={captionImage} alt="hero section" />
                            <p className="content-text">{captionContent}</p>
                        </div>
                    </>
                ) : (
                    <div className={`side-layout ${imagePosition === 'right' ? 'reversed' : ''}`}>
                        <div className="image-wrapper">
                            <img className="caption-image" src={captionImage} alt="hero section" />
                        </div>
                        <div className="text-content">
                            <h1 className="caption">{caption}</h1>
                            <p className="content-text">{captionContent}</p>
                        </div>
                    </div>
                )}
            </motion.div>
        </article>
    )
}