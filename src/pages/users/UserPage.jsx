import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const UserPage = () => {

const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/admin/users", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZTM5MzJiNzZlMGJmMjMwZGEzZTdmOCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3Njk0Mjk0MiwiZXhwIjoxNzc3MDI5MzQyfQ.NwrKxEIaWQ8aix00yE-EtOzlWnMd-rvf3PiiOcitI0I"
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err));
    }, []);

const [search, setSearch] = useState("");
const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
);

    return (
        <AdminLayout>
        <div className="space-y-6">

            {/* Info + Search */}
            <div className="flex justify-between items-center">
            <p className="text-md text-gray-500">
                {users.length} pengguna terdaftar
            </p>

            <input
                type="text"
                placeholder="🔍︎ Cari pengguna"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-md focus:outline-none"
            />
            </div>

            {/* Table Pengguna */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full text-sm">

                <thead className="text-gray-500 text-left">
                <tr>
                    <th className="p-4">PENGGUNA</th>
                    <th className="p-4">EMAIL</th>
                    <th className="p-4">TOTAL PESANAN</th>
                    <th className="p-4">TOTAL BELANJA</th>
                    <th className="p-4">BERGABUNG</th>
                    <th className="p-4">STATUS</th>
                    <th className="p-4">AKSI</th>
                </tr>
                </thead>

                <tbody>
                    {filteredUsers.map((user) => (
                    <tr key={user._id}>
                        <td className="p-4">{user.name}</td>
                        <td className="p-4">{user.email}</td>
                        <td className="p-4">-</td>
                        <td className="p-4">-</td>
                        <td className="p-4">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                            {user.role}
                        </td>
                        <td className="p-4">
                            <button className="text-2xl text-red-500">🗑</button>
                        </td>
                    </tr>
                    ))}
                </tbody>

            </table>

            </div>

        </div>
        </AdminLayout>
    );
};

export default UserPage;
