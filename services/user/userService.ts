import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { registerType } from "@/types/definition";
import error from "../../assets/data/error.json";

export const createUser = async(uid: string, email: string, isAdmin: boolean) => {
    await setDoc(doc(db, "user", uid), {
        email,
        isAdmin
    });
};

export const getUserByEmail = async() => {
    const user = auth.currentUser;
    if(!user) return;

    const uid = user.uid;
    if(uid) {
        try {
            const getUser = await getDoc(doc(db, "user", uid));
            return {
                success: true,
                result: getUser.data() as registerType
            }
        } catch (e) {
            return {
                success: false,
                message: error.default
            }
        }
    }
};
