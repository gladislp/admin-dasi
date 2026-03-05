import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">

    {/* Logo */}
    <div className="h-20 border-b px-6 flex items-center">
    <div className="bg-blue-500 text-white p-2 rounded-lg">
        <FontAwesomeIcon icon={faBagShopping} className="text-white text-lg" />
    </div>
    <div className="ml-3">
        <h1 className="font-bold  text-lg">DASI</h1>
        <p className="text-sm text-blue-500">Admin Panel</p>
    </div>
    </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">

        <p className="text-xs text-gray-400 uppercase">Utama</p>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Dashboard 
        </div>
        <div className="border-t my-4"></div>

        <p className="text-xs text-gray-400 uppercase mt-4">Katalog</p>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Produk
        </div>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Kategori
        </div>
        <div className="border-t my-4"></div>

        <p className="text-xs text-gray-400 uppercase mt-4">Transaksi</p>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Pesanan
        </div>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Pembayaran
        </div>
        <div className="border-t my-4"></div>

        <p className="text-xs text-gray-400 uppercase mt-4">Pengguna</p>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Pengguna
        </div>
        <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded">
          Ulasan
        </div>

      </nav>

      {/* User */}
        {/* <div className="p-4 border-t flex items-center gap-3">
            <FontAwesomeIcon icon={faCircleUser} className="text-gray-500 text-xl" />
            <div className="flex flex-col">
                <div className="text-lg font-medium">Admin DASI</div>
                <div className="text-sm text-blue-500">admindasi.id</div>
            </div>
        </div> */}
    </aside>
  );
};

export default Sidebar;