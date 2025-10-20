import { auth, db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { taskType } from "@/types/definition";
import error from "../../assets/data/error.json";

// Calculate the current day
const now = new Date();
const beginOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0).toISOString();

export async function readAllTasks() {
    const user = auth.currentUser;

    // Return if user doesn't exist
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
};

export async function readAllDoneTasks() {
    const user = auth.currentUser;

    // Return if user doesn't exist
    if(!user) return;

    try {
        // Get collection of all done tasks
        const tasksCollection = query(
            collection(db, "user", user.uid, "task"),
            where("done", "==", true),
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
            .filter(element => element.date < beginOfTheDay)
            .sort((a, b) => (b.date ?? 1) - (a.date ?? 1));
            
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
};
