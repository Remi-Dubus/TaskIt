import * as SecureStore from "expo-secure-store";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createUser } from "@/services/user/userService";
import { auth } from "../../firebaseConfig";
import { accountValidationSchema } from "../../utils/validation";

import error from "../../assets/data/error.json";

export const register = async(email: string, password: string) => {
    // Verify data with zod
    const validation = accountValidationSchema.safeParse({
        email: email,
        password: password
    })

    if (!validation.success) {
		return {
			success: false,
			errors: validation.error.flatten().fieldErrors,
			message: error.missingField
		};
	}
    
    try {
        // Create user on firebase 
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        await createUser(credential.user.uid, email, false); 
        
        return {
            success: true,
			message: "Votre compte a bien été créé.",
        };
    } catch {
        return {
            success: false,
            message: error.default
        }
    }   
}

export const login = async(email: string, password: string) => {
     // Verify data with zod
    const validation = accountValidationSchema.safeParse({
        email: email,
        password: password
    })

    if (!validation.success) {
		return {
			success: false,
			errors: validation.error.flatten().fieldErrors,
			message: error.default
		};
	}

    try {
        // Try to loggin
        const credential = await signInWithEmailAndPassword(auth, email, password);

        // Get the firebase token
        const token = await credential.user.getIdToken();

        // Store the token on SecureStore
        await SecureStore.setItemAsync("userToken", token);

        return {
            success: true,
            message: "Connexion réussie.",
            user: credential.user
        };
    } catch {
        return {
            success: false,
            message: "Le couple email/mot de passe est invalide."
        };
    }
}

export const logout = async() => {
    try {
        await signOut(auth);

        return {
            success: true,
            message: "Déconnection reussi."
        }
    } catch {
        return {
            success: false,
            message: error.default
        }
    }
}