import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth, loginAnonymously } from "./firebase/firebase";

function Root() {
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (!auth.currentUser) {
          const result = await loginAnonymously();
          console.log("UID:", result.user.uid);
        } else {
          console.log("UID:", auth.currentUser.uid);
        }
      } catch (error) {
        console.error("Auth error:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        initAuth();
      }
    });

    return unsubscribe;
  }, []);

  return <Home />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
