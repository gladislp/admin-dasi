import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Produk from "../pages/products/ProductList";
import AddProduct from "../pages/products/AddProduct";
import Kategori from "../pages/categories/Category";
import Pesanan from "../pages/orders/OrderPage";
import Pembayaran from "../pages/payments/PaymentPage";
import Pengguna from "../pages/users/UserPage";
import Ulasan from "../pages/reviews/ReviewPage";
import Profile from "../pages/profile/ProfilePage";
// import EditProduk from "../pages/products/EditProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Produk />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/categories" element={<Kategori />} />
      <Route path="/orders" element={<Pesanan />} />
      <Route path="/payments" element={<Pembayaran />} />
      <Route path="/users" element={<Pengguna />} />
      <Route path="/reviews" element={<Ulasan />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/EditProduct" element={<EditProduct />} /> */}
    </Routes>
  );
}
export default AppRoutes;
