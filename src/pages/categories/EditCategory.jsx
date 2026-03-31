import { useState, useEffect } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useParams, useNavigate } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Brownies" },
  { id: 2, name: "Donat" },
  { id: 3, name: "Teh" },
  { id: 4, name: "Kopi" },
];

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  // Dummy data kategori
  useEffect(() => {
    const dummyCategory = {
      1: { name: "Makanan", products: [1, 2] },
      2: { name: "Minuman", products: [3, 4] },
    };

    const data = dummyCategory[id];

    if (data) {
      setCategoryName(data.name);

      // mapping id produk ke object produk
      const selectedProducts = allProducts.filter((p) =>
        data.products.includes(p.id)
      );

      setProducts(selectedProducts);
    }
  }, [id]);

  // Hapus produk dari kategori
  const handleRemove = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  // Tambah produk ke kategori
  const handleAdd = (product) => {
    // biar gak double
    if (!products.find((p) => p.id === product.id)) {
      setProducts([...products, product]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated category:", {
      id,
      categoryName,
      products,
    });

    alert("Kategori berhasil diupdate!");
    navigate("/categories");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* LIST PRODUK */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h2 className="font-semibold">Produk dalam kategori</h2>

          {products.length === 0 && (
            <p className="text-gray-500">Belum ada produk</p>
          )}

          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{product.name}</span>

              <button
                onClick={() => handleRemove(product.id)}
                className="text-red-500"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        {/* TAMBAH PRODUK */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h2 className="font-semibold">Tambah Produk</h2>

          <div className="flex gap-2 flex-wrap">
            {allProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleAdd(product)}
                className="px-3 py-1 border rounded-lg hover:bg-gray-100"
              >
                + {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* ACTION */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate("/categories")}
            className="px-4 py-2 border rounded-lg"
          >
            Batal
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Simpan
          </button>
        </div>

      </div>
    </AdminLayout>
  );
};

export default EditCategory;