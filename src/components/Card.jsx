
function Card({name, email, id}){
    
    return(
        <div className="card">
            <img className="card-img" alt="robots" src={`https://robohash.org/${id}`}/>
            <h2 className="card-name">{name}</h2>
            <p className="card-email">{email}</p>
        </div>
    )
}

export default Card;