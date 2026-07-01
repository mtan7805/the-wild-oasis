import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginFlow } from "../../hooks/useGoogleLoginFlow";

export const GuestLogin = () => {
  // Lấy hàm handleGoogleSuccess mới từ hook
  const { handleGoogleSuccess, isLoggingIn, error, setError } =
    useGoogleLoginFlow();

  return (
    <section>
      <div className="flex flex-col gap-10 text-center my-36">
        <h1 className="text-3xl font-semibold text-primary-100 tracking-tight">
          Sign in to access your guest area
        </h1>

        {error && (
          <p className="text-red-500 font-semibold bg-red-500/10 py-2 px-4 rounded border border-red-500/20 inline-block mx-auto">
            {error}
          </p>
        )}

        <div className="flex items-center justify-center">
          {isLoggingIn ? (
            // Khi đang xử lý đăng nhập, hiển thị vòng xoay loading
            <div className="w-6 h-6 border-2 border-accent-400 border-r-transparent rounded-full animate-spin" />
          ) : (
            // Nút đăng nhập mặc định của Google để sinh ra ID Token
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Xác thực tài khoản Google thất bại.")}
              useOneTap={false}
            />
          )}
        </div>
      </div>
    </section>
  );
};
