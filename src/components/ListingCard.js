import React, {useState} from "react";

function ListingCard(props) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite() {
    setIsFavorite(!isFavorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${props.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => console.log("deleted!"))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
