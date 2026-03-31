import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const PaymentPage = () => {
  return (
    <AdminLayout>
        <div className="space-y-6">

            {/* Statistik Pembayaran */}
            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="text-blue-500 text-2xl">💳</div>
                        <div>
                            <p className="font-semibold text-lg">Rp 32.450.000</p>
                            <p className="text-sm text-gray-500">Transfer Bank</p>
                        </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="text-green-500 text-2xl">📱</div>
                        <div>
                            <p className="font-semibold text-lg">Rp 17.890.000</p>
                            <p className="text-sm text-gray-500">E-Wallet</p>
                        </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="text-orange-500 text-2xl">📦</div>
                        <div>
                            <p className="font-semibold text-lg">Rp 4.442.000</p>
                            <p className="text-sm text-gray-500">Bayar di Tempat (COD)</p>
                        </div>
                </div>
            </div>


            {/* Riwayat Transaksi */}
            <div className="bg-white rounded-xl shadow-sm">

                <div className="p-5 border-b">
                    <h3 className="font-semibold">Riwayat Transaksi</h3>
                </div>

                <table className="w-full text-sm">

                    <thead className="text-gray-500 bg-gray-50">
                    <tr>
                        <th className="p-4 text-left">ID TRANSAKSI</th>
                        <th className="p-4 text-left">PELANGGAN</th>
                        <th className="p-4 text-left">METODE</th>
                        <th className="p-4 text-left">TOTAL</th>
                        <th className="p-4 text-left">TANGGAL</th>
                        <th className="p-4 text-left">STATUS</th>
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

export default PaymentPage;
