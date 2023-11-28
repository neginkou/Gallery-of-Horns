

function HornedBeast(props){
    return(
        <>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt={props.keyword}/>
            <p>{props.description}</p>
        </>

    )
}

export default HornedBeast;