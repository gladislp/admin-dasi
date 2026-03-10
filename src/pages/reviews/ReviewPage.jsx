import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const ReviewPage = () => {
    return (
        <AdminLayout>
        <div className="space-y-6">

            {/* Info + Filter */}
            <div className="flex justify-between items-center">
            <p className="text-md text-gray-500">
                {/* nanti dari backend */} ... ulasan menunggu moderasi
            </p>

            <select className="border rounded-lg px-3 py-2">
                <option>Semua Produk</option>
                <option>Produk A</option>
            </select>
            </div>

            {/* List Review */}
            <div className="space-y-4">

            {/* Review Card Template */}
            <div className="bg-white p-5 rounded-xl shadow-sm">

                <div className="flex justify-between">

                <div className="flex gap-3">

                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-semibold">
                    {/* huruf nama */}
                    </div>

                    <div>
                    <p className="font-semibold">
                        {/* nama pengguna */}
                    </p>

                    <p className="text-sm text-gray-500">
                        {/* rating + nama produk */}
                    </p>
                    </div>

                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-400">
                    {/* tanggal */}
                    </p>

                    <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                    {/* status */}
                    </span>
                </div>

                </div>

                <p className="text-sm text-gray-600 mt-3">
                {/* isi ulasan */}
                </p>

                <div className="flex gap-3 mt-4">
                <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg">
                    ✓ Setujui
                </button>

                <button className="border border-red-400 text-red-500 text-sm px-4 py-2 rounded-lg">
                    ✖ Tolak
                </button>
                </div>

            </div>

            </div>

        </div>
        </AdminLayout>
    );
};

export default ReviewPage;
