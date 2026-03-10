import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const categories = [
  { id: 1, name: "Elektronik", productCount: 4, icon: "⚡" },
  { id: 2, name: "Fashion", productCount: 3, icon: "👗" },
  { id: 3, name: "Makanan", productCount: 2, icon: "🍽️" },
  { id: 4, name: "Kesehatan", productCount: 1, icon: "💊" }
];

const Categories = () => {
  return (
    <AdminLayout>
    <div className="space-y-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <p className="text-md text-gray-500">
            {categories.length} kategori tersedia
          </p>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          + Tambah Kategori
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">

        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-sm p-6 text-center"
          >
            <div className="text-4xl mb-3">
              {category.icon}
            </div>

            <h3 className="font-semibold">
              {category.name}
            </h3>

            <p className="text-sm text-gray-500">
              {category.productCount} produk
            </p>

            <div className="flex justify-center gap-3 mt-3">
              <button className="text-blue-600">✎</button>
              <button className="text-red-600">🗑</button>
            </div>

          </div>
        ))}

      </div>

    </div>
    </AdminLayout>
  );
};

export default Categories;
