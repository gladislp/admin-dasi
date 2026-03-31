import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
    stock: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data produk:", form);

    // nanti ganti ke fetch POST backend
    // await fetch("/api/admin/products", { method: "POST", body: JSON.stringify(form) })

    alert("Produk berhasil ditambahkan!");
    navigate("/products");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <p className="text-sm text-gray-500">
            Tambahkan produk baru ke dalam sistem
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-6"
        >

          <div className="grid grid-cols-2 gap-4">

            {/* Nama */}
            <div>
              <label className="text-sm text-gray-500">
                Nama Produk
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="text-sm text-gray-500">
                Kategori
              </label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

            {/* Harga */}
            <div>
              <label className="text-sm text-gray-500">
                Harga
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

            {/* Stok */}
            <div>
              <label className="text-sm text-gray-500">
                Stok
              </label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-sm text-gray-500">
              Deskripsi Produk
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-gray-500">
              URL Gambar
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <label className="text-sm text-gray-600">
              Produk Aktif
            </label>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="px-4 py-2 text-gray-500"
            >
              Batal
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
            >
              Simpan Produk
            </button>

          </div>

        </form>

      </div>
    </AdminLayout>
  );
};

export default AddProduct;
