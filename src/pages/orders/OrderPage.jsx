import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const Orders = () => {
    return (
        <AdminLayout>
        <div className="space-y-6">

        {/* Filter Status */}
        <div className="flex gap-3 mb-6 bg-white p-3 rounded-xl shadow-sm w-fit">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-500">Semua</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-500">Diproses</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-500">Dikirim</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-500">Selesai</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-500">Dibatalkan</button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full text-sm">

            <thead className="text-gray-500 text-left">
                <tr>
                <th className="p-4">NO. PESANAN</th>
                <th className="p-4">PELANGGAN</th>
                <th className="p-4">PRODUK</th>
                <th className="p-4">TOTAL</th>
                <th className="p-4">TANGGAL</th>
                <th className="p-4">STATUS</th>
                <th className="p-4">AKSI</th>
                </tr>
            </thead>

            <tbody>

                {/* Data nanti dari backend */}

            </tbody>

            </table>

        </div>

        </div>
        </AdminLayout>
    );
};

export default Orders;
