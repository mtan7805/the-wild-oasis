import { useState } from "react";
import { useAuth } from "../context/authContext";
import { LoginGoogle } from "../services/auth.api";
import { decodeJwt } from "../utils/helper";

export const useGoogleLoginFlow = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { loginSuccess } = useAuth();

  // Hàm xử lý khi đăng nhập Google thành công
  const handleGoogleSuccess = async (credentialResponse: any) => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const idToken = credentialResponse.credential;
      if (!idToken) throw new Error("Không nhận được mã xác thực từ Google.");

      const decoded = decodeJwt(idToken);
      const { email, name } = decoded;

      const authState = await LoginGoogle(idToken, email, name);

      if (authState && authState.user) {
        loginSuccess(authState.user);
      } else {
        throw new Error("Không nhận được dữ liệu phản hồi từ Server.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Đăng nhập không thành công. Vui lòng thử lại.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return {
    handleGoogleSuccess,
    isLoggingIn,
    error,
    setError,
  };
};
