import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const UserPage = () => {
    return (
        <AdminLayout>
        <div className="space-y-6">

            {/* Info + Search */}
            <div className="flex justify-between items-center">
            <p className="text-md text-gray-500">
                1.247 pengguna terdaftar
            </p>

            <input
                type="text"
                placeholder="🔍︎ Cari pengguna"
                className="border border-gray-300 rounded-lg px-3 py-2 text-md focus:outline-none"
            />
            </div>

            {/* Table Pengguna */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full text-sm">

                <thead className="text-gray-500 text-left">
                <tr>
                    <th className="p-4">PENGGUNA</th>
                    <th className="p-4">EMAIL</th>
                    <th className="p-4">TOTAL PESANAN</th>
                    <th className="p-4">TOTAL BELANJA</th>
                    <th className="p-4">BERGABUNG</th>
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

export default UserPage;
