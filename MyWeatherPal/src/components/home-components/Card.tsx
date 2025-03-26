import '../../compiled-css-code/home-comp-styles/card-comp-styles/card-style.css';

interface ICardProps {
    title: string,
    content: string,
    icon: string,
}

export default function Card({ title, content, icon }: ICardProps) {
    return (
        <>
            <section className="card">
                <div className='main-cont'>
                    <img src={icon} alt="card icon" />
                    <h3>{title}</h3>
                </div>
                <p>{content}</p>
            </section>
        </>
    )
}