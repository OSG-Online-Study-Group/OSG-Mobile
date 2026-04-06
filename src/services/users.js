import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

// 🔥 BUSCAR USUÁRIO POR UID
export async function buscarUsuario(uid) {
  try {
    const snap = await getDoc(doc(db, "users", uid));

    if (snap.exists()) {
      return snap.data();
    }

    return null;
  } catch (error) {
    console.log("Erro ao buscar usuário:", error);
    return null;
  }
}