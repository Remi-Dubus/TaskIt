import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const createUser = async(uid: string, email: string, isAdmin: boolean) => {
    await setDoc(doc(db, "user", uid), {
        email,
        isAdmin
    });
}