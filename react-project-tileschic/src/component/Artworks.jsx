// import React, { useEffect, useState } from "react";

// const Artworks = () => {
//   const [artworks, setArtworks] = useState([]);
//   // "https://api.artic.edu/api/v1/artworks/search?query=abstract"
//   useEffect(() => {
//     fetch(
//       "https://api.artic.edu/api/v1/artworks/search?q=abstract-painting-geometry%20&%20query[term][is_public_domain]=true"
//     )
//       .then((response) => response.json())
//       .then((data) => setArtworks(data.data))
//       .catch((error) => console.error("Error fetching artworks:", error));
//   }, []);

//   return (
//     <div>
//       {artworks.map((artwork) => (
//         <div key={artwork.id}>
//           <h2>{artwork.title}</h2>
//           <img
//             src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
//             alt={artwork.title}
//           />
//           <p>Artist: {artwork.artist_title || "Unknown"}</p>
//           <p>Place of Origin: {artwork.place_of_origin}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Artworks;
