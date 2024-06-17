// import React, { useState, useEffect } from "react";
// import { URLart } from "../consts";
// import { Link } from "react-router-dom";
// const FetchAbstractPaintings = () => {
//   const [artworks, setArtworks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(URLart);
//         const data = await res.json();
//         setArtworks(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <div key={artwork.id}>
//           <h2>{artwork.title}</h2>
//           {artwork.image_id ? (
//             <img
//               src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
//               alt={artwork.title}
//               width="100"
//             />
//           ) : (
//             <label>Image not available</label>
//           )}
//           <label>Artist: {artwork.artist_title || "Unknown"}</label>
//           <label>Place of Origin: {artwork.place_of_origin || "Unknown"}</label>
//           <Link to={`/gallery/${artwork.id}`}>{artwork.title}</Link>
//         </div>
//       ))}
//     </ul>
//   );
// };

// export default FetchAbstractPaintings;
