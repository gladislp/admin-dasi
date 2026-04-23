import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import api from "../../lib/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/transactions");

        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log(
          "Gagal ambil orders",
          error.response?.data || error.message
        );
        setOrders([]);
      }
    };

    fetchOrders();
  }, []);

  // 🔥 SAFETY FILTER
  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order?.status === filter);

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* FILTER STATUS */}
        <div className="flex gap-3 mb-6 bg-white p-3 rounded-xl shadow-sm w-fit">

          <button onClick={() => setFilter("all")} className="px-4 py-2 rounded-lg hover:bg-blue-500">
            Semua
          </button>

          <button onClick={() => setFilter("diproses")} className="px-4 py-2 rounded-lg hover:bg-blue-500">
            Diproses
          </button>

          <button onClick={() => setFilter("dikirim")} className="px-4 py-2 rounded-lg hover:bg-blue-500">
            Dikirim
          </button>

          <button onClick={() => setFilter("selesai")} className="px-4 py-2 rounded-lg hover:bg-blue-500">
            Selesai
          </button>

          <button onClick={() => setFilter("dibatalkan")} className="px-4 py-2 rounded-lg hover:bg-blue-500">
            Dibatalkan
          </button>

        </div>

        {/* TABLE */}
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

              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-400">
                    Belum ada pesanan
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order?._id} className="border-t">

                    {/* ID */}
                    <td className="p-4 font-medium">
                      #{order?._id?.slice(-6) || "-"}
                    </td>

                    {/* CUSTOMER */}
                    <td className="p-4">
                      {order?.customer?.name || "-"}
                    </td>

                    {/* PRODUCTS */}
                    <td className="p-4">
                      {Array.isArray(order?.items)
                        ? order.items.map((item, i) => (
                            <span key={i}>
                              {item?.name}
                              {i < order.items.length - 1 ? ", " : ""}
                            </span>
                          ))
                        : "-"}
                    </td>

                    {/* TOTAL */}
                    <td className="p-4">
                      Rp {(order?.total || 0).toLocaleString()}
                    </td>

                    {/* DATE */}
                    <td className="p-4">
                      {order?.createdAt
                        ? new Date(order.createdAt).toLocaleDateString()
                        : "-"}
                    </td>

                    {/* STATUS */}
                    <td className="p-4">
                      <span className="px-2 py-1 rounded text-xs bg-gray-100">
                        {order?.status || "-"}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="p-4">
                      <button className="text-blue-500">
                        Detail
                      </button>
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

export default Orders;