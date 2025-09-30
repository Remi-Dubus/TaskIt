import { taskType } from "@/types/definition";

export default function converDoneTasksList(tasksList: taskType[]) {
    const now = new Date();
    let yesterdayDoneTasks: taskType[] = [];

    const begginYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0);
    const endYesterdayDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59);

    for(const task of tasksList) {
        if(new Date(task.date) > begginYesterday && new Date(task.date) <= endYesterdayDays) {
            yesterdayDoneTasks.push(task);
        }
    }

    return {
        "yesterdayDoneTasks" : yesterdayDoneTasks
    }
};
