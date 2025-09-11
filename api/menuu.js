// export default async function handler(req, res) {
//   try {
//     const { restaurantId } = req.query;

//     if (!restaurantId) {
//       return res.status(400).json({ error: "restaurantId is required" });
//     }

//     const response = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.86530&lng=75.35200&restaurantId=${restaurantId}`,
//       {
//         headers: {
//           "User-Agent": "Mozilla/5.0",
//           "Accept": "application/json",
//         },
//       }
//     );

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch restaurant menu" });
//   }
// }
