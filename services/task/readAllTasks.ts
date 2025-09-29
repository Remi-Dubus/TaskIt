import { auth, db } from "@/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

import { taskType } from "@/types/definition";
import error from "../../assets/data/error.json";

export default async function readAllTasks() {
    // Return if user doesn't exist
    const user = auth.currentUser;
    if(!user) return;

    try {
        // Get collection of all tasks
        const tasksCollection = query(
            collection(db, "user", user.uid, "task"),
        );

        // Get documents from firebase
        const readTask = await getDocs(tasksCollection);

        // Convert firebase documents to array of object 
        const tasksList = readTask.docs
            .map(doc => {
                const data = doc.data() as taskType
                return {
                    id: doc.id,
                    ...data,
                    date: doc.data().date?.toDate().toISOString()
                }
            })
            .sort((a, b) => (b.priority ?? 1) - (a.priority ?? 1));

        return {
            success: true,
            result: tasksList as taskType[]
        }
    } catch {
        return {
            success: false,
            message: error.default
        }
    }
}
