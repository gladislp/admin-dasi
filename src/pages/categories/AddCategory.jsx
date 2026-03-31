import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useNavigate } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Brownies" },
  { id: 2, name: "Donat" },
  { id: 3, name: "Teh" },
  { id: 4, name: "Kopi" },
];

const AddCategory = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    icon: "",
    description: "",
    active: true,
  });

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // tambah produk
  const handleAddProduct = (product) => {
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // hapus produk
  const handleRemoveProduct = (id) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      products: selectedProducts,
    };

    console.log("Data kategori:", payload);

    alert("Kategori berhasil ditambahkan!");
    navigate("/categories");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        <div>
          <p className="text-sm text-gray-500">
            Tambahkan kategori baru ke dalam sistem
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-6"
        >

          {/* FORM UTAMA */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">
                Nama Kategori
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Icon (emoji)
              </label>
              <input
                type="text"
                name="icon"
                value={form.icon}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

          </div>

          {/* PREVIEW ICON */}
          {form.icon && (
            <div className="text-3xl">
              {form.icon}
            </div>
          )}

          {/* STATUS */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <label className="text-sm text-gray-600">
              Kategori Aktif
            </label>
          </div>

          {/* PRODUK DALAM KATEGORI */}
          <div className="border p-4 rounded-lg space-y-3">
            <h2 className="font-semibold">Produk dalam kategori</h2>

            {selectedProducts.length === 0 && (
              <p className="text-gray-500 text-sm">
                Belum ada produk
              </p>
            )}

            {selectedProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-2 last:border-none"
              >
                <span>{product.name}</span>

                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                  className="text-red-500"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          {/* TAMBAH PRODUK */}
          <div className="border p-4 rounded-lg space-y-3">
            <h2 className="font-semibold">Tambah Produk</h2>

            <div className="flex gap-2 flex-wrap">
              {allProducts.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  onClick={() => handleAddProduct(product)}
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                >
                  + {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => navigate("/categories")}
              className="px-4 py-2 text-gray-500"
            >
              Batal
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              Simpan Kategori
            </button>

          </div>

        </form>

      </div>
    </AdminLayout>
  );
};

export default AddCategory;