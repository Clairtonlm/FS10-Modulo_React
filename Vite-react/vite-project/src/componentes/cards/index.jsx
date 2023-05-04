const Card = (props ) => {
    return (
        <>
        <div>
            
            <h3>{props.titulo1}</h3>
            <p>{props.descricao1}</p>
            <a href={props.link1} target="_blank">Link</a>
        </div>

        </>
    )
}
export default Card;