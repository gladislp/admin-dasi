// import { useEffect, useState } from "react";
// import AdminLayout from "../../components/layout/AdminLayout";

// const ReviewPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch data dari backend
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/reviews");
//         const data = await res.json();
//         setReviews(data);
//       } catch (err) {
//         console.error("Error fetch reviews:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // 🔹 Approve / Reject
//   const handleAction = async (id, action) => {
//     try {
//       await fetch(`http://localhost:5000/api/reviews/${id}/${action}`, {
//         method: "PUT",
//       });

//       // update UI langsung
//       setReviews((prev) =>
//         prev.map((r) =>
//           r.id === id ? { ...r, status: action } : r
//         )
//       );
//     } catch (err) {
//       console.error("Action error:", err);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="space-y-6">

//         {/* Info + Filter */}
//         <div className="flex justify-between items-center">
//           <p className="text-md text-gray-500">
//             {reviews.length} ulasan menunggu moderasi
//           </p>

//           <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
//             <option>Semua Produk</option>
//           </select>
//         </div>

//         {/* Loading */}
//         {loading && <p className="text-gray-400">Loading...</p>}

//         {/* List Review */}
//         <div className="space-y-4">

//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-white p-5 rounded-xl shadow-sm border"
//             >
//               <div className="flex justify-between">

//                 {/* LEFT */}
//                 <div className="flex gap-3">

//                   {/* Avatar */}
//                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
//                     {review.userName?.charAt(0).toUpperCase()}
//                   </div>

//                   <div>
//                     <p className="font-semibold text-gray-800">
//                       {review.userName}
//                     </p>

//                     <p className="text-sm text-gray-500">
//                       ⭐ {review.rating} • {review.productName}
//                     </p>
//                   </div>
//                 </div>

//                 {/* RIGHT */}
//                 <div className="text-right">
//                   <p className="text-xs text-gray-400">
//                     {new Date(review.createdAt).toLocaleDateString()}
//                   </p>

//                   <span
//                     className={`text-xs px-3 py-1 rounded-full ${
//                       review.status === "approved"
//                         ? "bg-green-100 text-green-600"
//                         : review.status === "rejected"
//                         ? "bg-red-100 text-red-600"
//                         : "bg-yellow-100 text-yellow-600"
//                     }`}
//                   >
//                     {review.status || "pending"}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <p className="text-sm text-gray-600 mt-3">
//                 {review.comment}
//               </p>

//               {/* Action */}
//               {review.status === "pending" && (
//                 <div className="flex gap-3 mt-4">
//                   <button
//                     onClick={() => handleAction(review.id, "approved")}
//                     className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition"
//                   >
//                     ✓ Setujui
//                   </button>

//                   <button
//                     onClick={() => handleAction(review.id, "rejected")}
//                     className="border border-red-400 text-red-500 hover:bg-red-50 text-sm px-4 py-2 rounded-lg transition"
//                   >
//                     ✖ Tolak
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}

//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default ReviewPage;

import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const initialReviews = [
  {
    id: 1,
    userName: "Budi S.",
    rating: 5,
    productName: "iPhone 15 Pro Max",
    comment:
      "Produk luar biasa! Kamera sangat bagus dan performanya kencang banget. Sangat recommended!",
    status: "approved",
    createdAt: "2026-01-24",
  },
  {
    id: 2,
    userName: "Siti R.",
    rating: 4,
    productName: "MacBook Air M3",
    comment:
      "Ringan, cepat, baterai tahan lama. Sangat puas dengan pembelian ini.",
    status: "approved",
    createdAt: "2026-01-17",
  },
  {
    id: 3,
    userName: "Ahmad F.",
    rating: 4,
    productName: "Sepatu Sneakers Nike",
    comment:
      "Nyaman dipakai, tapi ukurannya sedikit lebih besar dari biasanya.",
    status: "pending",
    createdAt: "2026-01-10",
  },
  {
    id: 4,
    userName: "Dewi L.",
    rating: 4,
    productName: "Samsung Galaxy Watch 6",
    comment:
      "Fitur kesehatannya lengkap dan tampilan layarnya tajam.",
    status: "pending",
    createdAt: "2026-01-06",
  },
];

const ReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const handleAction = (id, action) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: action } : r
      )
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Info + Filter */}
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500">
            {reviews.filter(r => r.status === "pending").length} ulasan menunggu moderasi
          </p>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Semua Produk</option>
          </select>
        </div>

        {/* List Review */}
        <div className="space-y-4">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-5 rounded-xl shadow-sm border"
            >
              <div className="flex justify-between">

                {/* LEFT */}
                <div className="flex gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    {review.userName.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {review.userName}
                    </p>

                    <p className="text-sm text-yellow-500">
                      {"★".repeat(review.rating)}{" "}
                      <span className="text-gray-400">
                        untuk {review.productName}
                      </span>
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString("id-ID")}
                  </p>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      review.status === "approved"
                        ? "bg-green-100 text-green-600"
                        : review.status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {review.status === "approved"
                      ? "Disetujui"
                      : review.status === "rejected"
                      ? "Ditolak"
                      : "Menunggu"}
                  </span>
                </div>
              </div>

              {/* Comment */}
              <p className="text-sm text-gray-600 mt-3">
                {review.comment}
              </p>

              {/* Action */}
              {review.status === "pending" && (
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleAction(review.id, "approved")}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition"
                  >
                    ✓ Setujui
                  </button>

                  <button
                    onClick={() => handleAction(review.id, "rejected")}
                    className="border border-red-400 text-red-500 hover:bg-red-50 text-sm px-4 py-2 rounded-lg transition"
                  >
                    ✖ Tolak
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </AdminLayout>
  );
};

export default ReviewPage;
