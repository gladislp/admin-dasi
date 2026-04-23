import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import api from "../../lib/api";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get("/review");
        const data = res.data;

        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log("Gagal ambil reviews", error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);

  const handleAction = (id, action) => {
    setReviews((prev) =>
      prev.map((r) =>
        r._id === id ? { ...r, status: action } : r
      )
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* INFO */}
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500">
            {reviews.filter(r => r.status === "pending").length} ulasan menunggu moderasi
          </p>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Semua Produk</option>
          </select>
        </div>

        {/* LIST */}
        <div className="space-y-4">

          {reviews.length === 0 ? (
            <p className="text-gray-400 text-center">
              Belum ada review
            </p>
          ) : (
            reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white p-5 rounded-xl shadow-sm border"
              >

                <div className="flex justify-between">

                  <div className="flex gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {review?.user?.name?.charAt(0) || "U"}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        {review?.user?.name || "Unknown"}
                      </p>

                      <p className="text-sm text-yellow-500">
                        {"★".repeat(review.rating || 0)}{" "}
                        <span className="text-gray-400">
                          untuk {review?.product?.name || "-"}
                        </span>
                      </p>
                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-gray-400">
                      {review.createdAt
                        ? new Date(review.createdAt).toLocaleDateString("id-ID")
                        : "-"}
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

                <p className="text-sm text-gray-600 mt-3">
                  {review.comment}
                </p>

                {review.status === "pending" && (
                  <div className="flex gap-3 mt-4">

                    <button
                      onClick={() => handleAction(review._id, "approved")}
                      className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg"
                    >
                      ✓ Setujui
                    </button>

                    <button
                      onClick={() => handleAction(review._id, "rejected")}
                      className="border border-red-400 text-red-500 text-sm px-4 py-2 rounded-lg"
                    >
                      ✖ Tolak
                    </button>

                  </div>
                )}

              </div>
            ))
          )}

        </div>

      </div>
    </AdminLayout>
  );
};

export default ReviewPage;