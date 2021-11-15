import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchText }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data))
  })

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) =>
          {if (listing.description.includes(searchText) || searchText === "") {
            return (
              <ListingCard 
                id={listing.id}
                image={listing.image}
                description={listing.description}
                location={listing.location}
              />
            )
          } else {return null}
          }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
