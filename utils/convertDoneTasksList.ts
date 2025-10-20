import { taskType } from "@/types/definition";

export default function converDoneTasksList(tasksList: taskType[]) {
    const now = new Date();
    let yesterdayDoneTasks: taskType[] = [];
    let threeLastDaysTasks: taskType[] = [];

    const begginYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0);
    const endYesterdayDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59);
    const endOfThreeLastDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3, 23, 59, 59);
    
    for(const task of tasksList) {
        const taskDate = new Date(task.date)

        if(taskDate > begginYesterday && taskDate <= endYesterdayDays) {
            yesterdayDoneTasks.push(task);
        } else if (taskDate >= endOfThreeLastDays && taskDate < endYesterdayDays ) {
            threeLastDaysTasks.push(task);
        }
    }

    return {
        "yesterdayDoneTasks" : yesterdayDoneTasks,
        "threeLastDaysTasks" : threeLastDaysTasks,
    };
};
