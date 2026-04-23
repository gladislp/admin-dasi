import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // INIT USER DARI LOCALSTORAGE
  useEffect(() => {
    const savedUser = localStorage.getItem("admin_user");
    const token = localStorage.getItem("admin_token");

    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/signin", {
        email,
        password,
      });

      const data = res.data;

      // fleksibel tergantung backend kamu
      const user = data.user || data;
      const token = data.token;

      if (!token) {
        return {
          success: false,
          message: "Token tidak ditemukan dari server",
        };
      }

      // hanya admin boleh masuk
      if (user.role !== "admin") {
        return {
          success: false,
          message: "Access denied. Admin only.",
        };
      }

      // simpan ke localStorage
      localStorage.setItem("admin_token", token);
      localStorage.setItem("admin_user", JSON.stringify(user));

      setUser(user);

      return {
        success: true,
        user,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          "Login gagal",
      };
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);