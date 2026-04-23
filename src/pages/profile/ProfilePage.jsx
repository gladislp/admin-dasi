import { useState, useEffect } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import api from "../../lib/api";

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = localStorage.getItem("admin_token");

        const res = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data?.data || res.data);
      } catch (err) {
        console.log("Gagal ambil profile", err?.response?.data || err.message);
        setUser(null);
      }
    };

    fetchMe();
  }, []);

  const inputClass = `w-full mt-1 px-3 py-2 rounded-lg text-sm transition ${
    editing
      ? "border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-800"
      : "border border-gray-100 bg-gray-50 text-gray-400 cursor-default"
  }`;

  if (!user) {
    return (
      <AdminLayout>
        <p className="text-gray-500">Loading profile...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-3xl font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>

          <h2 className="mt-4 font-semibold text-lg text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {user.email}
          </p>

          <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
            user.role === "admin"
              ? "bg-red-100 text-red-500"
              : user.role === "seller"
              ? "bg-blue-100 text-blue-500"
              : "bg-green-100 text-green-500"
          }`}>
            {user.role}
          </span>
        </div>

        {/* RIGHT */}
        <div className="col-span-2 bg-white rounded-xl shadow-sm p-6">

          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Data User
              </h2>
              <p className="text-sm text-gray-500">
                Informasi akun
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

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">Nama</label>
              <input
                value={user.name || ""}
                readOnly={!editing}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                value={user.email || ""}
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-100 bg-gray-50 rounded-lg text-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Role</label>
              <input
                value={user.role || ""}
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-100 bg-gray-50 rounded-lg text-gray-500"
              />
            </div>

          </div>

          {editing && (
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 text-gray-500"
              >
                Batal
              </button>

              <button
                onClick={() => setEditing(false)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Simpan
              </button>
            </div>
          )}

        </div>

      </div>
    </AdminLayout>
  );
};

export default ProfilePage;