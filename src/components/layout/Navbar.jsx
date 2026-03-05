import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-6">

      <h2 className="font-semibold text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Cari"
          className="border rounded-lg px-6 py-2"
        />

        <div className="w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faCircleUser} className="text-3xl text-blue-500" />
        </div>

      </div>

    </header>
  );
};

export default Navbar;