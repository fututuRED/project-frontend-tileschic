// import React from "react";

// async function fetchPaintingDetails(id) {
//   const url = `https://api.artic.edu/api/v1/artworks/${id}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.log("HTTP error! status:", response.status);
//     }
//     const data = await response.json();
//     return data.data; // Return the detailed data for the painting
//   } catch (error) {
//     console.error(`Error fetching painting details for ID ${id}:`, error);
//     return null; // Return null on error
//   }

//   return <div></div>;
// }

// export default FetchingPaintingId;

// async function fetchAbstractPaintings() {
//   const url =
//     "https://api.artic.edu/api/v1/artworks/search?q=abstract-painting-geometry%20&%20query[term][is_public_domain]=true";

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.log("HTTP error! status:", response.status);
//     }
//     const data = await response.json();

//     return data.data.map((artwork) => artwork.id);
//   } catch (error) {
//     console.error("Error fetching abstract paintings:", error);
//     return [];
//   }
// }

// async function fetchPaintingDetails(id) {
//   const url = `https://api.artic.edu/api/v1/artworks/${id}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.log("HTTP error! status:", response.status);
//     }
//     const data = await response.json();
//     return data.data; // Return the detailed data for the painting
//   } catch (error) {
//     console.error(`Error fetching painting details for ID ${id}:`, error);
//     return null; // Return null on error
//   }
// }

//   Step 1: Fetch and set artwork IDs
//     const ids = await fetchAbstractPaintings();
//     setArtworkIds(ids);

//     // Step 2: Fetch detailed information for each artwork ID
//     const artworksDetails = await Promise.all(
//       ids.map((id) => fetchPaintingDetails(id))
//     );

//     // Step 3: Filter out null responses and update the state
//     setArtworks(artworksDetails.filter((artwork) => artwork !== null));
