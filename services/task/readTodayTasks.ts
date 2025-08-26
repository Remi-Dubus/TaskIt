import { auth, db } from "@/firebaseConfig";
import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";

import { taskType } from "@/types/definition";
import error from "../../assets/data/error.json";

export default async function readTodayTasks () {
    // Return if user doesn't exist
    const user = auth.currentUser;
    if(!user) return;

    // Calculate the current day
    const now = new Date();
    const beginOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const endOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)

    try {
        // Get collection of today tasks
        const tasksCollection = query(
            collection(db, "user", user.uid, "task"),
            where("date", ">=", Timestamp.fromDate(beginOfTheDay)),
            where("date", "<=", Timestamp.fromDate(endOfTheDay))
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
                    date: doc.data().date?.toDate().toLocaleString()
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