import { auth, db } from "@/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

import { updateDoneValidation } from "@/utils/validation";
import error from "../../assets/data/error.json";

export default async function updateDoneTasks({ id, isDone }: { id: string, isDone: boolean }) {
    // Return if user doesn't exist
    const user = auth.currentUser;
    if(!user) return;

    // Verify data with zod
    const validation = updateDoneValidation.safeParse({
        id: id,
        done: isDone
    })

    if (!validation.success) {
		return {
			success: false,
			errors: validation.error.flatten().fieldErrors,
			message: error.default
		};
	}
    const newIsDone = !isDone;

    try {
        // Try to change the done property
        await updateDoc(doc(db, "user", user.uid, "task", id), {
            done: newIsDone
        })

        return {
            success: true
        }
    } catch {
        return {
            success: false
        }
    }
}
