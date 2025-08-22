import { auth, db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

import { addTaskValidation } from "@/utils/validation";

import type { taskType } from "@/types/definition";
import error from "../../assets/data/error.json";

export async function createTask(task: taskType) {
    // return if user doesn't exist
    const user = auth.currentUser;
    if(!user) return;

    // Verify data with zod
    const { title, description, priority, date } = task;

    const validation = addTaskValidation.safeParse({
        title: title,
        description: description,
        priority: priority,
        date: date
    });

    if (!validation.success) {
		return {
			success: false,
			errors: validation.error.flatten().fieldErrors,
			message: error.default
		};
	}

    try {
        // Try to add new task on database
        await addDoc(collection(db, "user", user.uid, "task"), {
            title: title,
            description: description ? description : "",
            priority: priority,
            date: date,
            done: false
        });

        return {
            success: true,
            message: "La tâche a bien été crée.",
            task: task
        }
    } catch {
        return {
            success: false,
            message: error.default
        }
    }
}