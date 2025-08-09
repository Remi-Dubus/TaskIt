import { createUser } from "@/services/user/userService";
import { createUserWithEmailAndPassword } from "firebase/auth";
import error from "../../assets/data/error.json";
import { auth } from "../../firebaseConfig";
import { accountValidationSchema } from "../../utils/validation";

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