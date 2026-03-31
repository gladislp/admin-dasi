import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { NavLink } from "react-router-dom";

const Produk = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/admin/products");
        const data = await res.json();

        setProducts(data.products);
        setTotalProducts(data.total);

      } catch (error) {
        console.log("Backend belum tersedia");
      }
    };

    fetchProducts();
  }, []);


  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">

          <div>
            <p className="text-md text-gray-500">
              Total {totalProducts} produk aktif
            </p>
          </div>
          
          <NavLink to="/products/add">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              + Tambah Produk
            </button>
          </NavLink>

        </div>


        {/* FILTER */}
        <div className="bg-white p-4 rounded-xl shadow flex gap-4">

          <input
            type="text"
            placeholder="🔍︎ Cari produk"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 flex-1 focus:outline-none"
          />

          <select className="border rounded-lg px-3 py-2">
            <option>Semua Kategori</option>
          </select>

          <select className="border rounded-lg px-3 py-2">
            <option>Harga Terendah</option>
            <option>Harga Tertinggi</option>
          </select>

        </div>


        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-sm">

            <thead className="text-gray-500 border-b">
              <tr className="text-left">
                <th className="p-4">Produk</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>

              {products.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-400">
                    Belum ada produk
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="border-b">

                    <td className="p-4 flex items-center gap-3">

                      <img
                        src={product.image}
                        alt=""
                        className="w-10 h-10 rounded object-cover"
                      />

                      <div>
                        <p className="font-medium">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {product.description}
                        </p>
                      </div>

                    </td>

                    <td>
                      <span className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded">
                        {product.category}
                      </span>
                    </td>

                    <td>
                      Rp {product.price?.toLocaleString()}
                    </td>

                    <td>
                      ★ {product.rating}
                    </td>

                    <td>
                      {product.active ? "Aktif" : "Nonaktif"}
                    </td>

                    <td className="space-x-2">
                      <NavLink to={`/EditProduct/${product.id}`}>
                        <button className="text-blue-500">
                          Edit
                        </button>
                      </NavLink>
                      <button className="text-red-500">
                        Hapus
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

export default Produk;
