import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import api from "../../lib/api";

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await api.get("/transactions");

        setPayments(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log(
          "Gagal ambil payments",
          error.response?.data || error.message
        );
        setPayments([]);
      }
    };

    fetchPayments();
  }, []);

  // helper hitung total per metode pembayaran
  const getTotalByMethod = (method) => {
    return payments
      .filter((p) => p?.paymentMethod === method)
      .reduce((acc, curr) => acc + (curr?.total || 0), 0);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* STATISTIK PEMBAYARAN */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className="text-blue-500 text-2xl">💳</div>
            <div>
              <p className="font-semibold text-lg">
                Rp {(getTotalByMethod("transfer") || 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">Transfer Bank</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className="text-green-500 text-2xl">📱</div>
            <div>
              <p className="font-semibold text-lg">
                Rp {(getTotalByMethod("ewallet") || 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">E-Wallet</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className="text-orange-500 text-2xl">📦</div>
            <div>
              <p className="font-semibold text-lg">
                Rp {(getTotalByMethod("cod") || 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">Bayar di Tempat (COD)</p>
            </div>
          </div>

        </div>

        {/* RIWAYAT TRANSAKSI */}
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

              {payments.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-400">
                    Belum ada transaksi
                  </td>
                </tr>
              ) : (
                payments.map((payment) => (
                  <tr key={payment?._id} className="border-t">

                    <td className="p-4">
                      #{payment?._id?.slice(-6) || "-"}
                    </td>

                    <td className="p-4">
                      {payment?.customer?.name || "-"}
                    </td>

                    <td className="p-4">
                      {payment?.paymentMethod || "-"}
                    </td>

                    <td className="p-4">
                      Rp {(payment?.total || 0).toLocaleString()}
                    </td>

                    <td className="p-4">
                      {payment?.createdAt
                        ? new Date(payment.createdAt).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-1 text-xs rounded bg-gray-100">
                        {payment?.status || "-"}
                      </span>
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
};

export default PaymentPage;