import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);

  const inputClass = `w-full mt-1 px-3 py-2 rounded-lg text-sm transition ${
    editing
      ? "border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-800"
      : "border border-gray-100 bg-gray-50 text-gray-400 cursor-default"
  }`;

  return (
    <AdminLayout>
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">

          {/* Avatar */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-3xl font-bold">
            B
          </div>

          <h2 className="mt-4 font-semibold text-lg text-gray-800">
            Budi Santoso
          </h2>

          <p className="text-blue-500 text-sm">
            Manager Operasional
          </p>

          <p className="text-gray-500 text-sm mt-1">
            budi.santoso@dasi.com
          </p>

          <span className="inline-block mt-3 px-3 py-1 text-xs bg-red-100 text-red-500 rounded-full">
            Admin
          </span>
        </div>

        {/* RIGHT */}
        <div className="col-span-2 bg-white rounded-xl shadow-sm p-6">

          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Data Admin
              </h2>
              <p className="text-sm text-gray-500">
                Informasi akun dan akses administratif
              </p>
            </div>

            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-sm hover:bg-blue-100"
              >
                Edit
              </button>
            )}
          </div>

          {/* Form */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">
                Nama Admin
              </label>
              <input
                type="text"
                defaultValue="Budi Santoso"
                readOnly={!editing}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Jabatan
              </label>
              <input
                type="text"
                defaultValue="Manager Operasional"
                readOnly={!editing}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Email Resmi
              </label>
              <input
                type="text"
                defaultValue="budi.santoso@dasi.com"
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-100 bg-gray-50 rounded-lg text-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Departemen
              </label>
              <input
                type="text"
                defaultValue="Operasional"
                readOnly={!editing}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Role Akses
              </label>
              <input
                type="text"
                value="Admin Penuh"
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-100 bg-red-50 text-red-500 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Status
              </label>
              <input
                type="text"
                value="Aktif"
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-100 bg-green-50 text-green-600 rounded-lg"
              />
            </div>

          </div>

          {/* BUTTON */}
          {editing && (
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Batal
              </button>

              <button
                onClick={() => setEditing(false)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Simpan Perubahan
              </button>
            </div>
          )}

        </div>

      </div>
    </AdminLayout>
  );
};

export default ProfilePage;