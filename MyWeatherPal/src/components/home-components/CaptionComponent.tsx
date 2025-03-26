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

export default function CaptionComponent({caption, captionContent, captionImage, layout = 'top', imagePosition = 'left'}: CaptionComponentProps) {
    return (
        <article className={`caption-container layout-${layout}`}>
            {layout === 'top' ? (
                <>
                    <h1 className="caption">{caption}</h1>
                    <div className={`content-row ${imagePosition === 'right' ? 'reversed' : ''}`}>
                        <img className="caption-image" src={captionImage} alt="hero section"/>
                        <p className="content-text">{captionContent}</p>
                    </div>
                </>
            ) : (
                <div className={`side-layout ${imagePosition === 'right' ? 'reversed' : ''}`}>
                    <div className="image-wrapper">
                        <img className="caption-image" src={captionImage} alt="hero section"/>
                    </div>
                    <div className="text-content">
                        <h1 className="caption">{caption}</h1>
                        <p className="content-text">{captionContent}</p>
                    </div>
                </div>
            )}
        </article>
    )
}