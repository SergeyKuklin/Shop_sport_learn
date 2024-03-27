

type ImageCardProps = {
    src: string,
    alt: string,
}

export const ImageCard = (props: ImageCardProps) => {
    return (
        <>
        <img src={props.src} alt={props.alt} />
        </>
    )
}