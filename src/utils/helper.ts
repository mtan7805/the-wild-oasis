// Hàm giải mã ID Token an toàn
export const decodeJwt = (token: string) => {
  if (!token || typeof token !== "string") {
    throw new Error("Token không hợp lệ");
  }
  const parts = token.split(".");
  if (parts.length < 2) {
    throw new Error("Định dạng JWT không đúng.");
  }
  try {
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    throw new Error("Giải mã JWT thất bại: dữ liệu Base64 hoặc JSON không hợp lệ.");
  }
};

