import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  console.log("Google Client ID hiện tại là:", googleClientId);

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
