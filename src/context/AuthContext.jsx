import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { buscarUsuario } from "../services/firestore";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);   // dados do Firestore
  const [firebaseUser, setFirebaseUser] = useState(null); // objeto do Auth
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Escuta mudanças de autenticação em tempo real
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        // Busca dados completos do Firestore (xp, level, grupos...)
        const dados = await buscarUsuario(user.uid);
        setUsuario(dados);
      } else {
        setFirebaseUser(null);
        setUsuario(null);
      }
      setCarregando(false);
    });

    return () => unsubscribe(); // cleanup ao desmontar
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