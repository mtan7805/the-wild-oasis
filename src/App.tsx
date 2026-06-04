import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
