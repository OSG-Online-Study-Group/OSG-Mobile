import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { buscarUsuario } from "../services/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);   // dados do Firestore
  const [firebaseUser, setFirebaseUser] = useState(null); // objeto do Auth
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Escuta mudanças de autenticação em tempo real
  const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseUser(user);

      // 🔥 ESCUTA EM TEMPO REAL
      const unsubscribeFirestore = onSnapshot(
        doc(db, "users", user.uid),
        (docSnap) => {
          if (docSnap.exists()) {
            setUsuario({ uid: docSnap.id, ...docSnap.data() });
          }
          setCarregando(false);
        }
      );

      return () => unsubscribeFirestore();
    } else {
      setFirebaseUser(null);
      setUsuario(null);
      setCarregando(false);
    }
  });

  return () => unsubscribeAuth();
}, []);

  async function logout() {
    await signOut(auth);
    setUsuario(null);
    setFirebaseUser(null);
  }

  // Atualiza o estado local após salvar XP no banco
  function refreshUsuario(novosDados) {
    setUsuario((prev) => ({ ...prev, ...novosDados }));
  }

  return (
    <AuthContext.Provider value={{
      usuario,        // { name, email, xp, level, groupIds, ... }
      firebaseUser,   // objeto Firebase (uid, email, etc.)
      carregando,
      logout,
      refreshUsuario,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}